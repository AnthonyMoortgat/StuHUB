<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: multipart/form-data;charset=UTF-8;");

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
  $firstName = mysqli_real_escape_string($con, trim($request->data->firstName));
  $lastName = mysqli_real_escape_string($con, trim($request->data->lastName));
  $email = mysqli_real_escape_string($con, trim($request->data->email));




  $sql = "UPDATE `ideabox` SET `firstName`='{$firstName}',
         `lastName`='{$lastName}',
          `email`='{$email}',
          `subject`='{$subject}',
          `idea`='{$idea}',
          WHERE `id` = '{$id}'";

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
