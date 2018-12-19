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
    $organisationID = $row["organisationID"];
    $firstName = $row["firstName"];
    $lastName = $row["lastName"];
    $phoneNumber = $row["phoneNumber"];
    $allergy = $row["allergy"];
    $limitation = $row["physicalLimitation"];
    $date = $row["birthdate"];
    $gender = $row["gender"];
    $email = $row["email"];





    if($phoneNumber = 3 || $phoneNumber = 4)
    {
      echo "Phone Number: " . $row["phoneNumber"]. "<br>";
    }
    else
    {
      echo "Not 3 or 4!";
    }

    if($allergy = 3 || $allergy = 4)
    {
      echo "Allergy " . $row["allergy"]. "<br>";
    }
    else
    {
      echo "Not 3 or 4!";
    }

    if($limitation = 3 || $limitation = 4)
    {
      echo "Physical Limitation: " . $row["physicalLimitation"]. "<br>";
    }
    else
    {
      echo "Not 3 or 4!";
    }

    if($date = 3 || $date = 4)
    {
      echo "Birth Date: " . $row["birthdate"]. "<br>";
    }
    else
    {
      echo "Not 3 or 4!";
    }

    if($gender = 3 || $gender = 4)
    {
      echo "Gender: " . $row["gender"]. "<br>";
    }
    else
    {
      echo "Not 3 or 4!";
    }

    if($email = 3 || $email = 4)
    {
      echo "Email: " . $row["email"]. "<br>";
    }
    else
    {
      echo "Not 3 or 4!";
    }
  }
}
else
{
  echo "0 results";
}
$conn->close();
?>

