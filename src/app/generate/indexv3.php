<?php
// db credentials
define('DB_HOST', 'dt5.ehb.be');
define('DB_USER', '1819SP2_DB');
define('DB_PASS', 'eixpbwz');
define('DB_NAME', '1819SP2_Options');

// Connect with the database.
function connect()
{
  $connect = mysqli_connect(DB_HOST ,DB_USER ,DB_PASS ,DB_NAME);

  if (mysqli_connect_errno($connect)) {
    die("Failed to connect:" . mysqli_connect_error());
  }

  mysqli_set_charset($connect, "utf8");

  return $connect;
}
?>

<?php
$conn = connect();

$sql = "SELECT organisationID, firstName, lastName, phoneNumber, allergy, physicalLimitation, birthdate, gender, email  FROM INSCRIPTIONOPTIONS";
$result = $conn->query($sql);
?>

<?php
if ($result->num_rows > 0)
{
  // output data of each row
  while($row = $result->fetch_assoc())
  {
    echo
      "ID: " . $row["organisationID"]. "<br>".
      "First Name: " . $row["firstName"]. "<br>".
      "Last Name: " . $row["lastName"]. "<br>".
      "Phone Number: " . $row["phoneNumber"]. "<br>".
      "Allergy " . $row["allergy"]. "<br>".
      "Physical Limitation: " . $row["physicalLimitation"]. "<br>".
      "Birth Date: " . $row["birthdate"]. "<br>".
      "Gender" . $row["gender"]. "<br>".
      "Email: " . $row["email"]. "<br>";
  }
}
else
{
  echo "0 results";
}
$conn->close();
?>
