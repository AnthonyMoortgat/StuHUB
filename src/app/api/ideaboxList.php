<?php
/**
 * Returns the list of ideas.
 */

header("Access-Control-Allow-Origin: *");
header("Content-Type: multipart/form-data;charset=UTF-8;");

require 'connect.php';

$inscriptions = [];
$sql = "SELECT id, subject, idea, firstName, lastName, email FROM ideabox";

if($result = mysqli_query($con,$sql))
{
  $mr = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $ideabox[$mr]['id']    = $row['id'];
    $ideabox[$mr]['subject'] = $row['subject'];
    $ideabox[$mr]['idea'] = $row['idea'];
    $ideabox[$mr]['firstName'] = $row['firstName'];
    $ideabox[$mr]['lastName'] = $row['lastName'];
    $ideabox[$mr]['email'] = $row['email'];

    $mr++;
  }

  echo json_encode(['data'=>$ideabox]);
}
else
{
  http_response_code(404);
}

mysqli_close($con);
