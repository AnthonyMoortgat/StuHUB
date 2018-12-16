<?php
  include_once 'connectAPI.php';

  // Get the posted data.
  $postdata = file_get_contents("php://input");

  if(isset($postdata) && !empty($postdata))
  {
    //Get options
    $con = ConnectAPI::getInstance();
    $conn = $con->getConnect();

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
    $email = mysqli_real_escape_string($conn, trim($request->data->email));

    $password = mysqli_real_escape_string($conn, trim($request->data->password));
    $encryptPassword = hash('sha256', $password);

    //Read
    $sqlRead = "SELECT user_email, user_password FROM User WHERE user_email = '$email' AND user_password = '$encryptPassword'";

    $sqlFirstname = "SELECT first_name FROM User WHERE user_email = '$email'";
    $sqlLastname = "SELECT last_name FROM User WHERE user_email = '$email'";
    $sqlOrgname = "SELECT org_name FROM User WHERE user_email = '$email'";
    $sqlDbname = "SELECT d.db_name FROM User u JOIN DBaccess d ON(u.org_name = d.org_name) WHERE u.user_email = '$email'";

    $result = mysqli_query($conn, $sqlRead);
    $resultFN = mysqli_query($conn, $sqlFirstname);
    $resultLN = mysqli_query($conn, $sqlLastname);
    $resultON = mysqli_query($conn, $sqlOrgname);
    $resultDB = mysqli_query($conn, $sqlDbname);

    if (mysqli_num_rows($result) > 0)
    {
      http_response_code(201);

      $row = mysqli_fetch_assoc($result);
      $rowFN = mysqli_fetch_assoc($resultFN);
      $rowLN = mysqli_fetch_assoc($resultLN);
      $rowON = mysqli_fetch_assoc($resultON);
      $rowDB = mysqli_fetch_assoc($resultDB);

        $login = [
          'user_email' => $row['user_email'],
          'user_password' => 'valid',
          'first_name' => $rowFN['first_name'],
          'last_name' => $rowLN['last_name'],
          'org_name' => $rowON['org_name'],
          'db_name' => $rowDB['db_name'],
          'user_id' => mysqli_insert_id($conn)
        ];
      echo json_encode(['data'=>$login]);
    }
    else
    {
      http_response_code(201);
      $login = [
        'user_email' => 'invalid',
        'user_password' => 'invalid',
        'user_id' => 0
      ];
      echo json_encode(['data'=>$login]);
    }
    mysqli_close($conn);
  }

?>
