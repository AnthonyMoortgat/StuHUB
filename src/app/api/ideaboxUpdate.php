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




  $sql = "UPDATE `ideabox` SET `firstname`='{$firstname}',
         `lastname`='{$lastname}',
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
?>
