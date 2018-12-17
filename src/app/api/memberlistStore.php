<?php
/**
 * Created by IntelliJ IDEA.
 * User: drilo
 * Date: 11/21/2018
 * Time: 12:52 AM
 */
require 'connect.php';

// Get the posted data
$postdata = file_get_contents("php://input");

if (isset($postdata) && !empty($postdata)){
  //Extract the data.
  $postdata = json_decode($postdata);

  //Sanitize.
  $firstName = mysqli_real_escape_string($con, trim($request->data->firstName));
  $lastName = mysqli_real_escape_string($con, trim($request->data->lastName));
  $rol = mysqli_real_escape_string($con, trim($request->data->rol));
  $email = mysqli_real_escape_string($con, trim($request->data->email));
  $birthdate = mysqli_real_escape_string($con, trim($request->data->birthdate));

  //Storing data into the database.
  $sql ="INSERT INTO 'MEMBERLIST'('id','firstName','lastName','rol','email','birthdate')
  VALUES (null,'{$firstNameName}','{$lastName}','{$rol}','{$email}','{$birthdate}')";

  if(mysqli_query($con,$sql)){
    http_response_code(201);
    $member = [
      'firstName' => $firstName,
      'lastName' =>  $lastName,
      'rol' => $rol,
      'email' => $email,
      'birthdate' => $birthdate,
      'id'    => mysqli_insert_id($con)
    ];
    echo json_encode(['data'=>$member]);
  }
  else{
    http_response_code(422);
  }

}

