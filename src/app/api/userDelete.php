<?php
/**
 * Created by IntelliJ IDEA.
 * User: antho
 * Date: 11-Nov-18
 * Time: 12:12
 */

include_once 'connectAPI.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

$orgname = $_GET['org'];

if($orgname != '')
{
  if(isset($postdata) && !empty($postdata)) {
    $con = ConnectAPI::getInstance();
    $conn = $con->getConnect();

    $pass = [];

    // Extract the data.
    $request = json_decode($postdata);

    $user_password = mysqli_real_escape_string($conn, trim($request->data->user_password));
    $encrypt_user_password = hash('sha256', $user_password);

    // Delete.
    $sqlDeleteUser = "DELETE FROM `User` WHERE `org_name` ='{$orgname}' LIMIT 1";
    $sqlDeleteDB = "DELETE FROM `DBaccess` WHERE `org_name` ='{$orgname}' LIMIT 1";

    //get password
    $sqlGetPass = "SELECT `user_password` FROM `User`
                   WHERE `org_name` = '$orgname' AND `user_password` = '$encrypt_user_password'";

    $resultGetPass = $conn->query($sqlGetPass);

    if ($resultGetPass->num_rows > 0) {
      http_response_code(204);
      $conn->query($sqlDeleteUser);
      $conn->query($sqlDeleteDB);

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
