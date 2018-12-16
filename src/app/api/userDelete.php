<?php
/**
 * Created by IntelliJ IDEA.
 * User: antho
 * Date: 11-Nov-18
 * Time: 12:12
 */

include_once 'connectAPI.php';

// Extract, validate and sanitize the id.
$orgname = $_GET['org'];

if($orgname != '')
{
  $con = ConnectAPI::getInstance();
  $conn = $con->getConnect();


  // Delete.
  $sqlDeleteUser = "DELETE FROM `User` WHERE `org_name` ='{$orgname}' LIMIT 1";
  $sqlDeleteDB = "DELETE FROM `DBaccess` WHERE `org_name` ='{$orgname}' LIMIT 1";

  if($conn->query($sqlDeleteUser) && $conn->query($sqlDeleteDB))
  {
    http_response_code(204);
  }
  else
  {
    return http_response_code(422);
  }
  $conn->close();
}
