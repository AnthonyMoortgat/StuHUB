<?php
/**
 * Returns the list of inscriptions.
 */
require 'connect.php';

$firstname = $_POST["txtFirstname"];
$lastname = $_POST["txtLastname"];
$email = $_POST["txtEmail"];
$password = md5($_POST["txtPassword"]);

$registers = [];

$sql = "SELECT first_name, last_name, user_email, user_password FROM User WHERE user_email = '$email'";

if($result = mysqli_query($con,$sql))
{
  $cr = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    //$registers[$cr]['user_id']    = $row['id'];
    $registers[$cr]['first_name'] = $row['txtFirstname'];
    $registers[$cr]['last_name'] = $row['txtLastname'];
    $registers[$cr]['user_email'] = $row['txtEmail'];
    $registers[$cr]['user_password'] = $row['txtPassword'];
    $cr++;
  }
  echo 'Mail already exist';
  echo json_encode(['data'=>$registers]);
  }
  else
  {
    http_response_code(404);
  }

