<?php
/**
 * Created by IntelliJ IDEA.
 * User: antho
 * Date: 07-Nov-18
 * Time: 20:46
 */

require 'connect.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);

  // Validate.
  /*
  if(trim($request->data->model) === '' || (int)$request->data->price < 1)
  {
    return http_response_code(400);
  }
  */

  // Sanitize.
  $firstname = mysqli_real_escape_string($con, trim($request->data->txtFirstname));
  $firstnameCap = ucfirst(strtolower($firstname));

  $lastname = mysqli_real_escape_string($con, trim($request->data->txtLastname));

  $email = mysqli_real_escape_string($con, trim($request->data->txtEmail));

  $password = mysqli_real_escape_string($con, trim($request->data->txtPassword));
  $encryptPassword = md5($password);

  //Store
  $sql = "INSERT INTO `User`(`user_id`,`first_name`,`last_name`, `user_email` , `user_password`) 
VALUES (null,'{$firstnameCap}','{$lastname}','{$email}','{$encryptPassword}')";

  //Read
  $sqlRead = "SELECT first_name, last_name, user_email, user_password FROM User WHERE user_email = '$email'";

  $result = mysqli_query($con, $sqlRead);

  if (mysqli_num_rows($result) > 0) {
    header("Location: /register?reg=false");
  }
  else {
    if(mysqli_query($con,$sql))
    {
      http_response_code(201);
      $register = [
        'first_name' => $firstnameCap, //attribute name html => variabele
        'last_name' => $lastname,
        'user_email' => $email,
        'user_password' => $encryptPassword,
        'user_id' => mysqli_insert_id($con)
      ];
      //$http.post('/login');
      header("Location: /login");

      echo 'Gelukt';
      echo json_encode(['data'=>$register]);

    }
    else
    {
      echo 'Gefaald';
      http_response_code(422);
    }
  }


}
