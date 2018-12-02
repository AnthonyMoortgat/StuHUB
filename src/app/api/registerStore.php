<?php
  require 'connect.php';

  // Get the posted data.
  $postdata = file_get_contents("php://input");

  if(isset($postdata) && !empty($postdata))
  {
    // Extract the data.
    $request = json_decode("$postdata");

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
      http_response_code(201);
      $register = [
        'first_name' => 'invalid', //attribute name html => variabele
        'last_name' => 'invalid',
        'user_email' => 'invalid',
        'user_password' => 'invalid',
        'user_id' => 0
      ];
      echo json_encode(['data'=>$register]);
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
        //header("Location: /login");

        /*
        if(isset($email) && !empty($email))
        {
          //$email = mysqli_escape_string($email);
          $to      = "michael.de.gauquier@gmail.com";
          $subject = "Signup Verification";
          $message = "Thanks for signing up!
            Your account has been created, you can login after you have activated your account by pressing the url below:
            LINK VOLGT NOG!";
          // $headers = 'From:noreply@stuhub.com' . "\r\n";
          mail($to, $subject, $message);
          echo 'E-mail send to you!';
        }*/

        echo json_encode(['data'=>$register]);
      }
      else
      {
        http_response_code(422);
      }
    }
  }
mysqli_close($con);
?>
