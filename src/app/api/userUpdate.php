<?php
include_once 'connectAPI.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

//$orgname = $_GET['orgname'];
$orgname = 1;

if($orgname != 2) {
  if(isset($postdata) && !empty($postdata)) {
    $con = ConnectAPI::getInstance();
    $conn = $con->getConnect();

    // Extract the data.
    $request = json_decode($postdata);

    // Sanitize.
    $user_id = mysqli_real_escape_string($conn, trim($request->data->user_id));
    $first_name = mysqli_real_escape_string($conn, trim($request->data->first_name));
    $last_name = mysqli_real_escape_string($conn, trim($request->data->last_name));
    $user_email = mysqli_real_escape_string($conn, trim($request->data->user_email));
    $user_password = mysqli_real_escape_string($conn, trim($request->data->user_password));
    $org_name = mysqli_real_escape_string($conn, trim($request->data->org_name));
    $db_name = mysqli_real_escape_string($conn, trim($request->data->db_name));

    $sqlUpdateUser = "UPDATE `User` SET `first_name`='{$first_name}',
  `last_name`='{$last_name}',
  `user_email`='{$user_email}',
  `org_name`='{$org_name}'
   WHERE `org_name` = '{$org_name}'";

    $sqlUpdateDBaccess = "UPDATE `DBaccess` SET `org_name`='{$org_name}',
  `db_name`='{$db_name}'
   WHERE `org_name` = '{$org_name}'";

    if ($conn->query($sqlUpdateUser) && $conn->query($sqlUpdateDBaccess)) {
      http_response_code(204);
    } else {
      return http_response_code(422);
    }
  }
  $conn->close();
}
