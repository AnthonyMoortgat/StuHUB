<?php
/**
 * Returns the list of inscriptions.
 */
require 'connect.php';

$inscriptionOptions = [];
$sql = "SELECT organisationId, firstName, lastName, phoneNumber, allergy, physicalLimitations, birthdate, gender, email FROM Inscriptionoptions WHERE organisationId = 'Enigma'";

if($result = mysqli_query($con,$sql))
{
  $cr = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $inscriptionOptions[$cr]['id']    = $row['organisationId'];
    $inscriptionOptions[$cr]['firstName'] = $row['firstName'];
    $inscriptionOptions[$cr]['lastName'] = $row['lastName'];
    $inscriptionOptions[$cr]['phoneNumber'] = $row['phoneNumber'];
    $inscriptionOptions[$cr]['allergy'] = $row['allergy'];
    $inscriptionOptions[$cr]['physicalLimitations'] = $row['physicalLimitations'];
    $inscriptionOptions[$cr]['birthdate'] = $row['birthdate'];
    $inscriptionOptions[$cr]['gender'] = $row['gender'];
    $inscriptionOptions[$cr]['email'] = $row['email'];
    $cr++;
}

echo json_encode(['data'=>$inscriptionOptions]);
}
else
{
  http_response_code(404);
}
