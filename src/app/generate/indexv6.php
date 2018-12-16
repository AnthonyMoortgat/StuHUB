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

    $html = "";
    $html = "<table border='1'>";
    $html .= "<tr>";
    $html .= "<td>";
    if($organisationID = 'enigma')
    {
      $html .= 'ENIGMA' . "<br>";
    }
    else
    {
      $html .= 'NOT ENIGMA' . "<br>";
    }
    $html .= "</td>";
    $html .= "</tr>";
    $html .= "<br>";
    $html .= "<tr>";
    $html .= "<td>";
    if($firstName = 3 || $firstName = 4)
    {
      $html .= $row["firstName"] . "<br>";
    }
    else
    {
      $html .= 'Not 3 or 4!' . "<br>";
    }
    $html .= "</td>";
    $html .= "</tr>";
    $html .= "<br>";
    $html .= "<tr>";
    $html .= "<td>";
    if($lastName = 3 || $lastName = 4)
    {
      $html .= $row['lastName'] . '<br>';
    }
    else
    {
      $html .= 'Not 3 or 4!' . '<br>';
    }
    $html .= "</td>";
    $html .= "</tr>";
    $html .= "<br>";
    $html .= "<tr>";
    $html .= "<td>";
    if($phoneNumber = 3 || $phoneNumber = 4)
    {
      $html .= $row['phoneNumber'] . '<br>';
    }
    else
    {
      $html .= 'Not 3 or 4!' . '<br>';
    }
    $html .= "</td>";
    $html .= "</tr>";
    $html .= "<br>";
    $html .= "<tr>";
    $html .= "<td>";
    if($allergy = 3 || $allergy = 4)
    {
      $html .= $row['allergy'] . '<br>';
    }
    else
    {
      $html .= 'Not 3 or 4!' . '<br>';
    }
    $html .= "</td>";
    $html .= "</tr>";
    $html .= "<br>";
    $html .= "<tr>";
    $html .= "<td>";
    if($limitation = 3 || $limitation = 4)
    {
      $html .= $row['physicalLimitation'] . '<br>';
    }
    else
    {
      $html .= 'Not 3 or 4!' . '<br>';
    }
    $html .= "</td>";
    $html .= "</tr>";
    $html .= "<br>";
    $html .= "<tr>";
    $html .= "<td>";
    if($date = 3 || $date = 4)
    {
      $html .= $row['birthdate'] . '<br>';
    }
    else
    {
      $html .= 'Not 3 or 4!' . '<br>';
    }
    $html .= "</td>";
    $html .= "</tr>";
    $html .= "<br>";
    $html .= "<tr>";
    $html .= "<td>";
    if($gender = 3 || $gender = 4)
    {
      $html .= $row['gender'] . '<br>';
    }
    else
    {
      $html .= 'Not 3 or 4!' . '<br>';
    }
    $html .= "</td>";
    $html .= "</tr>";
    $html .= "<br>";
    $html .= "<tr>";
    $html .= "<td>";
    if($email = 3 || $email = 4)
    {
      $html .= $row['email'] . '<br>';
    }
    else
    {
      $html .= 'Not 3 or 4!' . '<br>';
    }
    $html .= "</td>";
    $html .= "</tr>";
    $html .= "</table>";

    echo "$html";
  }
}
else
{
  echo "0 results";
}
$conn->close();
?>
