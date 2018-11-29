<?php

//require 'connect.php';

$conn=mysqli_connect("dt5.ehb.be", "1819SP2_DB", "eixpbwz", "1819SP2_Org1");
if(!$conn)
{
  die("Connection failed: " . mysqli_connect_error());
}

if(isset($_POST['btnLogin']))
{
  $email = $_POST["email"];
  $password = md5($_POST["password"]);
  $sqlRead = "SELECT user_email, user_password FROM User WHERE user_email = '$email' AND user_password = '$password'";
  $result = mysqli_query($conn,$sqlRead);
  if (mysqli_num_rows($result) > 0)
  {
    header("Location: /"); //moet andere locatie zijn
  }
  else
  {
    echo 'E-mail or password incorrect!';
    //<p id="fault">E-mail or password incorrect!</p>
  }
}
$conn->close();
?>
