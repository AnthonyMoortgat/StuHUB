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
    $request = json_decode("$postdata");

    // Sanitize.
    $firstname = mysqli_real_escape_string($conn, trim($request->data->txtFirstname));
    $firstnameCap = ucfirst(strtolower($firstname));

    $lastname = mysqli_real_escape_string($conn, trim($request->data->txtLastname));

    $email = mysqli_real_escape_string($conn, trim($request->data->txtEmail));

    $orgname = mysqli_real_escape_string($conn, trim($request->data->txtOrgname));
    $orgnameCap = ucwords(strtolower($orgname));
    $encryptOrgname = hash('sha256', $orgnameCap);

    $DBname = $orgnameCap . "_Org";

    $password = mysqli_real_escape_string($conn, trim($request->data->txtPassword));
    $encryptPassword = hash('sha256', $password);

    //Store
    $sql = "INSERT INTO `User`(`user_id`,`first_name`,`last_name`, `user_email` , `user_password` , `org_name`, `full_org_name`) 
  VALUES (null,'{$firstnameCap}','{$lastname}','{$email}','{$encryptPassword}','{$encryptOrgname}', '{$orgnameCap}')";

    //Read
    $sqlRead = "SELECT first_name, last_name, user_email, user_password, org_name FROM User WHERE user_email = '$email'";

    //Read if org_name already exists
    $sqlReadOrgName = "SELECT org_name FROM User WHERE org_name = '$encryptOrgname'";

    //Store if org_name not exists in table DBaccess
    $sqlStoreOrgName = "INSERT INTO `DBaccess` VALUES('{$encryptOrgname}','{$DBname}')";

    $resultReadOrgName = mysqli_query($conn, $sqlReadOrgName);

    $result = mysqli_query($conn, $sqlRead);

    if (mysqli_num_rows($result) > 0)
    {
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
    else if (mysqli_num_rows($resultReadOrgName) > 0)
    {
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
    else if (mysqli_query($conn, $sql))
    {
      http_response_code(201);

      mysqli_query($conn, $sqlStoreOrgName); //Insert org_name into table DBaccess

      $register = [
        'first_name' => $firstnameCap,
        'last_name' => $lastname,
        'user_email' => $email,
        'user_password' => $encryptPassword,
        'org_name' => $orgnameCap,
        'user_id' => mysqli_insert_id($conn)
      ];

      echo json_encode(['data' => $register]);
    }
    else
    {
      http_response_code(422);
    }
    mysqli_close($conn);
  }
?>
