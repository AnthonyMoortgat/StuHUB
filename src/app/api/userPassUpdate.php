<?php
include_once 'connectAPI.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

$orgname = $_GET['org'];

if($orgname != '') {
  if(isset($postdata) && !empty($postdata)) {
    $con = ConnectAPI::getInstance();
    $conn = $con->getConnect();

    // Extract the data.
    $request = json_decode($postdata);

    // Sanitize.

    $user_password = mysqli_real_escape_string($conn, trim($request->data->user_password));
    $new_password = mysqli_real_escape_string($conn, trim($request->data->new_password));
    $encrypt_new_password = hash('sha256', $new_password);

    $org_name = mysqli_real_escape_string($conn, trim($request->data->org_name));


    $sqlUpdatePass = "UPDATE `User` SET `user_password`='{$encrypt_new_password}'
   WHERE `org_name` = '$orgname'";

    if ($conn->query($sqlUpdatePass)) {
      http_response_code(204);
    } else {
      return http_response_code(422);
    }
  }
  $conn->close();
}
