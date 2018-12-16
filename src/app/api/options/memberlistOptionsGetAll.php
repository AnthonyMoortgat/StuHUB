<?php
/**
 * Created by IntelliJ IDEA.
 * User: Lonny
 * Date: 5/12/2018
 * Time: 7:07
 */


require 'connect.php';

$memberlistOptions = [];

$sql = "SELECT organisationId, firstName, lastName, rol, email, birthdate FROM MEMBERLISTOPTIONS WHERE organisationId = 'Enigma'";


if($result = mysqli_query($con,$sql))
{
  $cr = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $memberlistOptions[$cr]['id']    = $row['organisationId'];
    $memberlistOptions[$cr]['firstName'] = $row['firstName'];
    $memberlistOptions[$cr]['lastName'] = $row['lastName'];
    $memberlistOptions[$cr]['rol'] = $row['rol'];
    $memberlistOptions[$cr]['email'] = $row['email'];
    $memberlistOptions[$cr]['birthdate'] = $row['birthdate'];
    $cr++;
  }

  echo json_encode(['data'=>$memberlistOptions]);
}
else
{
  http_response_code(404);
}

?>


