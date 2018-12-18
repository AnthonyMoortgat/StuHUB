<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: multipart/form-data;charset=UTF-8;");



require 'connectOptions.php.php';

$ideaboxOptions = [];
$sql = "SELECT organisationID, subject, , idea , firstName, lastName, email FROM ideaboxOption WHERE organisationID = 'Enigma'";

if($result = mysqli_query($con,$sql))
{
  $cr = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $ideaboxOptions[$cr]['organisationID']    = $row['organisationID'];
    $ideaboxOptions[$cr]['subject'] = $row['subject'];
    $ideaboxOptions[$cr]['idea'] = $row['idea'];
    $ideaboxOptions[$cr]['firstName'] = $row['firstName'];
    $ideaboxOptions[$cr]['lastName'] = $row['lastName'];
    $ideaboxOptions[$cr]['email'] = $row['email'];
    $cr++;
  }

  echo json_encode(['data'=>$ideaboxOptions]);
}
else
{
  http_response_code(404);
}

mysqli_close($con);
?>
