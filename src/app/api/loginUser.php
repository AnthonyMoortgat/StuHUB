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
    $email = mysqli_real_escape_string($con, trim($request->data->email));

    $password = mysqli_real_escape_string($con, trim($request->data->password));
    $encryptPassword = md5($password);

    //Read
    $sqlRead = "SELECT user_email, user_password FROM User WHERE user_email = '$email' AND user_password = '$encryptPassword'";

    $result = mysqli_query($con, $sqlRead);

    if (mysqli_num_rows($result) > 0) {
      echo '<p id="fault">Logged in!</p>';
      //location to home
    }
    else {
      echo '<p id="fault"></p>';
    }
  }
?>
