<?php
/**
 * Created by IntelliJ IDEA.
 * User: antho
 * Date: 07-Nov-18
 * Time: 20:46
 */

require 'connect.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);


  // Validate.
  /*
  if(trim($request->data->model) === '' || (int)$request->data->price < 1)
  {
    return http_response_code(400);
  }
  */

  // Sanitize.
  $firstName = mysqli_real_escape_string($con, trim($request->data->firstName));
  $lastName = mysqli_real_escape_string($con, trim($request->data->lastName));
  $birthdate = mysqli_real_escape_string($con, $request->data->birthdate); //Zorgt voor 422 error

  // Store.
  $sql = "INSERT INTO `testPostTable`(`id`,`naam`, `lastName`,`birthdate`) 
VALUES (null,'{$firstName}', '{$lastName}', '{$birthdate}')";

  if(mysqli_query($con,$sql))
  {
    http_response_code(201);
    $inscription = [
      'firstName' => $firstName,
      'lastName' => $lastName,
      'phoneNumber' => $phoneNumber,
      'allergy' => $allergy,
      'physicalLimitations' => $physicalLimitations,
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
