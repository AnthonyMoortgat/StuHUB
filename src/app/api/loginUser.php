<?php
  require 'connectLogin.php';

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

    $sqlFirstname = "SELECT first_name FROM User WHERE user_email = '$email'";
    $sqlLastname = "SELECT last_name FROM User WHERE user_email = '$email'";
    $sqlOrgname = "SELECT org_name FROM User WHERE user_email = '$email'";

    $result = mysqli_query($con, $sqlRead);
    $resultFN = mysqli_query($con, $sqlFirstname);
    $resultLN = mysqli_query($con, $sqlLastname);
    $resultON = mysqli_query($con, $sqlOrgname);

    if (mysqli_num_rows($result) > 0) {
      http_response_code(201);

      $row = mysqli_fetch_assoc($result);
      $rowFN = mysqli_fetch_assoc($resultFN);
      $rowLN = mysqli_fetch_assoc($resultLN);
      $rowON = mysqli_fetch_assoc($resultON);

        $login = [
          'user_email' => $row['user_email'],
          'user_password' => 'valid',
          'first_name' => $rowFN['first_name'],
          'last_name' => $rowLN['last_name'],
          'org_name' => $rowON['org_name'],
          'user_id' => mysqli_insert_id($con)
        ];
      echo json_encode(['data'=>$login]);
    }
    else {
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
