<?php
require 'connect.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);

  // Sanitize.
  $id = mysqli_real_escape_string($con, trim($request->data->id));
  $firstName = mysqli_real_escape_string($con, trim($request->data->firstName));
  $lastName = mysqli_real_escape_string($con, trim($request->data->lastName));
  $phoneNumber = mysqli_real_escape_string($con, (int)$request->data->phoneNumber);
  $allergy = mysqli_real_escape_string($con, trim($request->data->allergy));
  $physicalLimitation = mysqli_real_escape_string($con, trim($request->data->physicalLimitation));
  $birthdate = mysqli_real_escape_string($con, $request->data->birthdate);
  $gender = mysqli_real_escape_string($con, trim($request->data->gender));
  $email = mysqli_real_escape_string($con, trim($request->data->email));

  $sql = "UPDATE `Inscription` SET `firstName`='{$firstName}',
`lastName`='{$lastName}',
`phoneNumber`='{$phoneNumber}',
`allergy`='{$allergy}',
`physicalLimitation`='{$physicalLimitation}',
`birthdate`='{$birthdate}',
`gender`='{$gender}',
`email`='{$email}' WHERE `id` = '{$id}'";

  if(mysqli_query($con, $sql))
  {
    http_response_code(204);
  }
  else
  {
    return http_response_code(422);
  }
}
