<?php
include_once 'connectAPI.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

$orgname = $_GET['org'];

if($orgname != '') {
  if(isset($postdata) && !empty($postdata)) {
    $con = ConnectAPI::getInstance();
    $conn = $con->getConnect();

    $pass = [];

    // Extract the data.
    $request = json_decode($postdata);

    // Sanitize.
    $user_password = mysqli_real_escape_string($conn, trim($request->data->user_password));
    $encrypt_user_password = hash('sha256', $user_password);

    $new_password = mysqli_real_escape_string($conn, trim($request->data->new_password));
    $encrypt_new_password = hash('sha256', $new_password);

    $org_name = mysqli_real_escape_string($conn, trim($request->data->org_name));

    $sqlGetPass = "SELECT `user_password` FROM `User`
                   WHERE `org_name` = '$orgname' AND `user_password` = '$encrypt_user_password'";

    $resultGetPass = $conn->query($sqlGetPass);

    $sqlUpdatePass = "UPDATE `User` SET `user_password`='{$encrypt_new_password}'
                      WHERE `org_name` = '$orgname'";

    if ($resultGetPass->num_rows > 0) {
      http_response_code(204);
      $conn->query($sqlUpdatePass);

      $pass[0]['user_password'] = 'valid';
      echo json_encode(['data'=>$pass]);
    }
    else if ($resultGetPass->num_rows <= 0){
      http_response_code(204);

      $pass[0]['user_password'] = 'invalid';
      echo json_encode(['data'=>$pass]);
    }
    else {
      return http_response_code(422);
    }
  }
  $conn->close();
}
