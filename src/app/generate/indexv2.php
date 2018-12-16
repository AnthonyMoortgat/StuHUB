<?php
/**
 * Created by PhpStorm.
 * User: Anthony
 * Date: 06/12/2018
 * Time: 11:10
 */

/*
 * Token van URl opvragen
 * Data gaan halen uit db
 * Html genereren en in string zetten
 * Echo string
 * */
require 'connect.php';

$sql = "SELECT oranisationID, firstName, lastName, phoneNumber, allergy, physicalLimitation, birthdate, gender, email FROM INSCRIPTIONOPTIONS";

$organisation = $row["oranisationID"];
  $html = "<table border='1'>";
    $html .= "<tr>";
      $html .= "<td>";
        $html .= $organisation;
      $html .= "</td>";
    $html .= "</tr>";

    $html .= "<br>";

    $html .= "<tr>";
      $html .= "<td>";
        $html .= $row["firstName"];
      $html .= "</td>";
    $html .= "</tr>";

    $html .= "<br>";

    $html .= "<tr>";
      $html .= "<td>";
        $html .= $row["lastName"];
      $html .= "</td>";
    $html .= "</tr>";

    $html .= "<br>";

    $html .= "<tr>";
      $html .= "<td>";
        $html .= $row["phoneNumber"];
      $html .= "</td>";
    $html .= "</tr>";

    $html .= "<br>";

    $html .= "<tr>";
      $html .= "<td>";
        $html .=  $row["allergy"];
      $html .= "</td>";
    $html .= "</tr>";

    $html .= "<br>";

    $html .= "<tr>";
      $html .= "<td>";
        $html .=  $row["physicalLimitations"];
      $html .= "</td>";
    $html .= "</tr>";

    $html .= "<br>";

    $html .= "<tr>";
      $html .= "<td>";
        $html .= $row["birthdate"];
      $html .= "</td>";
    $html .= "</tr>";

    $html .= "<br>";

    $html .= "<tr>";
      $html .= "<td>";
        $html .=  $row["gender"];
      $html .= "</td>";
    $html .= "</tr>";

    $html .= "<br>";

    $html .= "<tr>";
      $html .= "<td>";
        $html .= $row["email"];
      $html .= "</td>";
    $html .= "</tr>";
  $html .= "</table>";
  echo "$html";
?>


