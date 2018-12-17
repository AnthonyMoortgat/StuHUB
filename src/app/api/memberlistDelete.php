<?php
require 'connect.php';

/**
 * Created by IntelliJ IDEA.
 * User: drilo
 * Date: 11/21/2018
 * Time: 12:38 AM
 */
// Extract, validate and sanitize the id.
$id = ($_GET['id'] !== null && (int)$_GET['id'] > 0)? mysqli_real_escape_string($con, (int)$_GET['id']) : false;
if(!$id)
{
  return http_response_code(400);
}

//Delete.
$sql = "DELETE FROM `MEMBERLIST` WHERE `id` ='{$id}' LIMIT 1";

if(mysqli_query($con, $sql))
{
  http_response_code(204);
}
else
{
  return http_response_code(422);
}
