<?php
  require 'connectLogin.php';

  // Get the posted data.
  $postdata = file_get_contents("php://input");

  if(isset($postdata) && !empty($postdata)) {
    // Extract the data.
    $request = json_decode("$postdata");

    // Sanitize.
    $firstname = mysqli_real_escape_string($con, trim($request->data->txtFirstname));
    $firstnameCap = ucfirst(strtolower($firstname));

    $lastname = mysqli_real_escape_string($con, trim($request->data->txtLastname));

    $email = mysqli_real_escape_string($con, trim($request->data->txtEmail));

    $orgname = mysqli_real_escape_string($con, trim($request->data->txtOrgname));
    $orgnameCap = ucwords(strtolower($orgname));

    $DBname = $orgnameCap . "_Org";

    $password = mysqli_real_escape_string($con, trim($request->data->txtPassword));
    $encryptPassword = hash('sha256', $password);

    //Store
    $sql = "INSERT INTO `User`(`user_id`,`first_name`,`last_name`, `user_email` , `user_password` , `org_name`) 
  VALUES (null,'{$firstnameCap}','{$lastname}','{$email}','{$encryptPassword}','{$orgnameCap}')";

    //Read
    $sqlRead = "SELECT first_name, last_name, user_email, user_password, org_name FROM User WHERE user_email = '$email'";

    //Read if org_name already exists
    $sqlReadOrgName = "SELECT org_name FROM User WHERE org_name = '$orgnameCap'";

    //Store if org_name not exists in table DBaccess
    $sqlStoreOrgName = "INSERT INTO `DBaccess` VALUES('{$orgnameCap}','{$DBname}')";

    $resultReadOrgName = mysqli_query($con, $sqlReadOrgName);

    $result = mysqli_query($con, $sqlRead);

    if (mysqli_num_rows($result) > 0) {
      http_response_code(201);
      $register = [
        'first_name' => 'invalid',
        'last_name' => 'invalid',
        'user_email' => 'invalid',
        'user_password' => 'invalid',
        'org_name' => 'invalid',
        'user_id' => 0
      ];
      echo json_encode(['data' => $register]);
    }
    else if (mysqli_num_rows($resultReadOrgName) > 0) {
      http_response_code(201);
      $register = [
        'first_name' => 'invalidOrg',
        'last_name' => 'invalidOrg',
        'user_email' => 'invalidOrg',
        'user_password' => 'invalidOrg',
        'org_name' => 'invalidOrg',
        'user_id' => 0
      ];
      echo json_encode(['data' => $register]);
    }
    else if (mysqli_query($con, $sql)) {
      http_response_code(201);

      mysqli_query($con, $sqlStoreOrgName); //Insert org_name into table DBaccess

      $register = [
        'first_name' => $firstnameCap,
        'last_name' => $lastname,
        'user_email' => $email,
        'user_password' => $encryptPassword,
        'org_name' => $orgnameCap,
        'user_id' => mysqli_insert_id($con)
      ];

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

      echo json_encode(['data' => $register]);
    } else {
      http_response_code(422);
    }
  }
mysqli_close($con);
?>
