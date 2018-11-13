<?php
/**
 * Created by IntelliJ IDEA.
 * User: antho
 * Date: 12-Nov-18
 * Time: 17:58
 */

require 'connect.php';

$getdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata)) {
  // Extract the data.
  $request = json_decode($getdata);

  // Sanitize.
  $id = mysqli_real_escape_string($con, trim($request->data->id));



  $inscriptions = [];
  $sql = "SELECT id, firstName, lastName, phoneNumber, allergy, physicalLimitations, birthdate, gender, email FROM Inscription WHERE id = 3";

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
  else
  {
    http_response_code(404);
  }
}


