<?php
/**
 * Created by IntelliJ IDEA.
 * User: Lonny
 * Date: 12/12/2018
 * Time: 12:42
 */

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
  $rol = mysqli_real_escape_string($con, trim($request->data->rol));
  $email = mysqli_real_escape_string($con, trim($request->data->email));
  $birthdate = mysqli_real_escape_string($con, $request->data->birthdate);


  $sql = "UPDATE `MEMBERLIST` SET `firstName`='{$firstName}',
`lastName`='{$lastName}',
`rol`='{$rol}',
`birthdate`='{$birthdate}',
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
