<?php
/**
 * Returns the list of ideas.
 */
require 'connect.php';

$inscriptions = [];
$sql = "SELECT id, firstName, lastName, subject, idea, email FROM ideabox";

if($result = mysqli_query($con,$sql))
{
  $cr = 0;
  while($row = mysqli_fetch_assoc($result))
  {
$ideabox[$cr]['id']    = $row['id'];
$ideabox[$cr]['firstName'] = $row['firstName'];
$ideabox[$cr]['lastName'] = $row['lastName'];
$ideabox[$cr]['email'] = $row['email'];
$ideabox[$cr]['subject'] = $row['subject'];
$ideabox[$cr]['idea'] = $row['idea'];

$cr++;
}

echo json_encode(['data'=>$ideabox]);
}
else
{
  http_response_code(404);
}
