<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: multipart/form-data;charset=UTF-8;");
require 'connectOptions.php';

// Get the posted data.

$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);

  // Sanitize.
  $organisationID = mysqli_real_escape_string($con, trim($request->data->organisationID));
  $subject = mysqli_real_escape_string($con, (int)$request->data->subject);
  $idea = mysqli_real_escape_string($con, (int)$request->data->idea);
  $firstName = mysqli_real_escape_string($con, (int)$request->data->firstName);
  $lastName = mysqli_real_escape_string($con, (int)$request->data->lastName);
  $email = mysqli_real_escape_string($con, (int)$request->data->email);

  $sql = "UPDATE `ideaboxOption` SET 
    `subject`='{$subject}',
    `idea`='{$idea}',
    `firstName`='{$firstName}',
    `lastName`='{$lastName}',
    `email`='{$email}'
     WHERE `organisationID` = '{$organisationID}'";

  if(mysqli_query($con, $sql))
  {
    http_response_code(204);
  }
  else
  {
    return http_response_code(422);
  }
}

mysqli_close($con);
?>
