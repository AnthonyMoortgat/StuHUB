<?php

/**
 * Created by IntelliJ IDEA.
 * User: drilo
 * Date: 11/21/2018
 * Time: 12:44 AM
 */

require 'connect.php';

$members = [];
$sql = "SELECT id, firstName, lastName, rol, email, birthdate FROM MEMBERLIST";

if($result = mysqli_query($con,$sql)){
  $mr = 0;
  while($row = mysqli_fetch_assoc($result)){
    $members[$mr]['id'] = $row['id'];
    $members[$mr]['firstName'] = $row['firstName'];
    $members[$mr]['lastName'] = $row['lastName'];
    $members[$mr]['rol'] = $row['rol'];
    $members[$mr]['email'] = $row['email'];
    $members[$mr]['birthdate'] = $row['birthdate'];
    $mr++;
  }
  echo json_encode(['data' =>$members]);
}
else{
  http_response_code(404);
}

