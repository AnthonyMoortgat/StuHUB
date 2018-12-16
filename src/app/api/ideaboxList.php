<?php
/**
 * Returns the list of ideas.
 */
header("Access-Control-Allow-Origin: *");
header("Content-Type: multipart/form-data;charset=UTF-8;");

require 'connect.php';

$inscriptions = [];
$sql = "SELECT id, firstName, lastName, subject, idea, email FROM ideabox";

if($result = mysqli_query($con,$sql))
{
  $cr = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $ideabox[$cr]['id']    = $row['id'];
    $ideabox[$cr]['subject'] = $row['subject'];
    $ideabox[$cr]['idea'] = $row['idea'];
    $ideabox[$cr]['firstName'] = $row['firstName'];
    $ideabox[$cr]['lastName'] = $row['lastName'];
    $ideabox[$cr]['email'] = $row['email'];


$cr++;
}

echo json_encode(['data'=>$ideabox]);
}
else
{
  http_response_code(404);
}
mysqli_close($con);
