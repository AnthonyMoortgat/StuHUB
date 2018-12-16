<?php
/**
 * Returns a user.
 */
include_once 'connectAPI.php';

$orgname = $_GET['org'];

if($orgname != '') {
  //Get options
  $con = ConnectAPI::getInstance();
  $conn = $con->getConnect();

  //$conn->select_db('1819SP2_DBlogin');

  $user = [];

  $sql = "SELECT u.user_id, u.first_name, u.last_name, u.user_email, u.user_password, u.full_org_name, d.db_name 
          FROM User u JOIN DBaccess d ON(u.org_name = d.org_name) WHERE d.org_name = '$orgname'";
  $result = $conn->query($sql);

  if($result->num_rows > 0)
  {
    $row = mysqli_fetch_assoc($result);

    $user[0]['user_id'] = $row['user_id'];
    $user[0]['first_name'] = $row['first_name'];
    $user[0]['last_name'] = $row['last_name'];
    $user[0]['user_email'] = $row['user_email'];
    $user[0]['user_password'] = $row['user_password'];
    $user[0]['org_name'] = $row['full_org_name'];
    $user[0]['db_name'] = $row['db_name'];

    echo json_encode(['data'=>$user]);
  }
  else
  {
    http_response_code(404);
  }

  $conn->close();
}
