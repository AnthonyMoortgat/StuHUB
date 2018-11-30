<?php
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
    $email = mysqli_real_escape_string($con, trim($request->data->email));

    $password = mysqli_real_escape_string($con, trim($request->data->password));
    $encryptPassword = md5($password);

    //Read
    $sqlRead = "SELECT user_email, user_password FROM User WHERE user_email = '$email' AND user_password = '$encryptPassword'";

    $result = mysqli_query($con, $sqlRead);

    if (mysqli_num_rows($result) > 0) {
      console.log('i am here now!1');
      http_response_code(201);
      $login = [
        'user_email' => $email,
        'user_password' => $encryptPassword,
        'user_id' => mysqli_insert_id($con)
      ];
      echo json_encode(['data'=>$login]);
    }
    else {
      console.log('i am here now!2');
      http_response_code(201);
      $login = [
        'user_email' => 'invalid',
        'user_password' => 'invalid',
        'user_id' => 0
      ];
      echo json_encode(['data'=>$login]);
    }
  }
mysqli_close($con);
?>
