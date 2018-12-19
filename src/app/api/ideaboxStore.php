<?php

//header("Access-Control-Allow-Origin: *");
//header("Content-Type: multipart/form-data;charset=UTF-8;");

require 'connect.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $postdata = json_decode($postdata);

  Sanitize.
  $subject = mysqli_real_escape_string($con, trim($post->data->subject));
  $idea = mysqli_real_escape_string($con, trim($post->data->idea));
  $firstName = mysqli_real_escape_string($con, trim($post->data->firstName));
  $lastName = mysqli_real_escape_string($con, trim($post->data->lastName));
  $email = mysqli_real_escape_string($con, trim($post->data->email));



  // Store.
  $sql = "INSERT INTO `ideabox`(`id`,`subject`,`idea`, `firstName` , `lastName`, `email` )
VALUES (null,'{$subject}','{$idea}','{$firstName}','{$lastName}','{$email}'";

  if(mysqli_query($con,$sql))
  {
    http_response_code(201);
    $idea = [
      'subject' => $subject,
      'idea' => $idea,
      'firstName' => $firstName,
      'lastName' => $lastName,
      'email' => $email,
      'id'    => mysqli_insert_id($con)
    ];
    echo json_encode(['data'=>$idea]);
  }
  else
  {
    http_response_code(422);
  }
}
mysqli_close($con);

?>
