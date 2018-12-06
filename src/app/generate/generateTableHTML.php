<?php
require 'connectOptions.php';
$inscriptions = [];
$sql = "SELECT oranisationID, firstName, lastName, phoneNumber, allergy, physicalLimitations, birthdate, gender, email FROM INSCRIPTIONOPTIONS";

echo mysqli_query($con,$sql);

if($result = mysqli_query($con,$sql))
{
  $cr = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $html = "<table border='1'>";
      $html .= "<tr>";
      $html .= "<td>";
      echo $row["oranisationID"];
      $html .= "</td>";
      $html .= "</tr>";
      $html .= "<br>";
      $html .= "<tr>";
      $html .= "<td>";
      echo $row["firstName"];
      $html .= "</td>";
      $html .= "</tr>";
      $html .= "<br>";
      $html .= "<tr>";
      $html .= "<td>";
      echo $row["lastName"];
      $html .= "</td>";
      $html .= "</tr>";
      $html .= "<br>";
      $html .= "<tr>";
      $html .= "<td>";
      echo $row["phoneNumber"];
      $html .= "</td>";
      $html .= "</tr>";
      $html .= "<br>";
      $html .= "<tr>";
      $html .= "<td>";
    echo  $row["allergy"];
      $html .= "</td>";
      $html .= "</tr>";
      $html .= "<br>";
      $html .= "<tr>";
      $html .= "<td>";
    echo  $row["physicalLimitations"];
      $html .= "</td>";
      $html .= "</tr>";
      $html .= "<br>";
      $html .= "<tr>";
      $html .= "<td>";
    echo  $row["birthdate"];
      $html .= "</td>";
      $html .= "</tr>";
      $html .= "<br>";
      $html .= "<tr>";
      $html .= "<td>";
    echo  $row["gender"];
      $html .= "</td>";
      $html .= "</tr>";
      $html .= "<br>";
      $html .= "<tr>";
      $html .= "<td>";
    echo $row["email"];
      $html .= "</td>";
      $html .= "</tr>";
      $cr++;
    $html .= "</table>";
    echo "$html";
  }
}
mysqli_close($con);
?>
