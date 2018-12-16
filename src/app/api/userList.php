<?php
/**
 * Returns a user.
 */
include_once 'connectAPI.php';

//$orgname = $_GET['orgname'];
$orgname = 1;

if($orgname != 2) {
  //Get options
  $con = ConnectAPI::getInstance();
  $conn = $con->getConnect();

  $user = [];

  $sql = "SELECT u.user_id, u.first_name, u.last_name, u.user_email, u.user_password, u.org_name, d.db_name 
          FROM User u JOIN DBaccess d ON(u.org_name = d.org_name) WHERE d.db_name = '1819SP2_Org1'";
  $result = $conn->query($sql);

  if($result->num_rows > 0)
  {
    $row = mysqli_fetch_assoc($result);

    $user[0]['user_id'] = $row['user_id'];
    $user[0]['first_name'] = $row['first_name'];
    $user[0]['last_name'] = $row['last_name'];
    $user[0]['user_email'] = $row['user_email'];
    $user[0]['user_password'] = $row['user_password'];
    $user[0]['org_name'] = $row['org_name'];
    $user[0]['db_name'] = $row['db_name'];

    echo json_encode(['data'=>$user]);
  }
  else
  {
    http_response_code(404);
  }

  $conn->close();
}

