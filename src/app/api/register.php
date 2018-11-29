<?php

//require 'connect.php';

$conn=mysqli_connect("dt5.ehb.be", "1819SP2_DB", "eixpbwz", "1819SP2_Org1");
if(!$conn)
{
  die("Connection failed: " . mysqli_connect_error());
}

if(isset($_POST['btnSignup'])) {
  $firstname = $_POST["txtFirstname"];
  $lastname = $_POST["txtLastname"];
  $email = $_POST["txtEmail"];
  $password = md5($_POST["txtPassword"]);

  $sqlRead = "SELECT first_name, last_name, user_email, user_password FROM User WHERE user_email = '$email'";
  /*
  $sqlInsert = "INSERT INTO User (first_name, last_name, user_email, user_password)
          VALUES ('$firstname', '$lastname', '$email', '$password')";*/


  $result = mysqli_query($conn, $sqlRead);

  if (mysqli_num_rows($result) > 0) {
    echo 'E-mail already exists!';

    //<p id = "fault" > E-mail already used, please try again.</p >

  } else {
    //$query = mysqli_query($conn, "$sqlInsert");
    $stmt = $conn->prepare("INSERT INTO User (first_name, last_name, user_email, user_password) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $firstname, $lastname, $email, $password);
    $stmt->execute();
    $stmt->close();

    header("/login?register=success"); //?register=success --> wordt doorgegeven aan /login
  }
}
$conn->close();
?>
