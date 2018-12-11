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
  $subject = mysqli_real_escape_string($con, trim($request->data->subject));
  $idea = mysqli_real_escape_string($con, trim($request->data->idea));
  $firstName = mysqli_real_escape_string($con, trim($request->data->firstname));
  $lastName = mysqli_real_escape_string($con, trim($request->data->lastname));
  $email = mysqli_real_escape_string($con, trim($request->data->email));



  // Store.
  $sql = "INSERT INTO `ideabox`(`id`,`subject`,`idea`, `firstname` , `allergy`, `physicalLimitation`, `birthdate`, `gender`, `email` )
VALUES (null,'{$firstName}','{$lastName}','{$phoneNumber}','{$allergy}','{$physicalLimitation}','{$birthdate}','{$gender}','{$email}')";

  if(mysqli_query($con,$sql))
  {
    http_response_code(201);
    $inscription = [
      'firstName' => $firstName,
      'lastName' => $lastName,
      'phoneNumber' => $phoneNumber,
      'allergy' => $allergy,
      'physicalLimitation' => $physicalLimitation,
      'birthdate' => $birthdate,
      'gender' => $gender,
      'email' => $email,
      'id'    => mysqli_insert_id($con)
    ];
    echo json_encode(['data'=>$inscription]);
  }
  else
  {
    http_response_code(422);
  }
}
