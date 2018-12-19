<?php
  require 'connect.php';
$inscriptions = [];
$sql = "SELECT id, firstName, lastName, phoneNumber, allergy, physicalLimitations, birthdate, gender, email FROM InscriptionOptions";

if($result = mysqli_query($con,$sql))
{
  $cr = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $inscriptions[$cr]['id']    = $row['id'];
    $inscriptions[$cr]['firstName'] = $row['firstName'];
    $inscriptions[$cr]['lastName'] = $row['lastName'];
    $inscriptions[$cr]['phoneNumber'] = $row['phoneNumber'];
    $inscriptions[$cr]['allergy'] = $row['allergy'];
    $inscriptions[$cr]['physicalLimitations'] = $row['physicalLimitations'];
    $inscriptions[$cr]['birthdate'] = $row['birthdate'];
    $inscriptions[$cr]['gender'] = $row['gender'];
    $inscriptions[$cr]['email'] = $row['email'];
    $cr++;
  }
  echo json_encode(['data'=>$inscriptions]);
}
?>
