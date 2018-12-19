<?php
include_once 'connectAPI.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

$orgname = $_GET['org'];

if($orgname != '') {
  if(isset($postdata) && !empty($postdata)) {
    $con = ConnectAPI::getInstance();
    $conn = $con->getConnect();

    // Extract the data.
    $request = json_decode($postdata);

    // Sanitize.
    $user_id = mysqli_real_escape_string($conn, trim($request->data->user_id));

    $first_name = mysqli_real_escape_string($conn, trim($request->data->first_name));
    $cap_first_name = ucfirst(strtolower($first_name));

    $last_name = mysqli_real_escape_string($conn, trim($request->data->last_name));

    $user_email = mysqli_real_escape_string($conn, trim($request->data->user_email));
    $lower_user_email = strtolower($user_email);

    $user_password = mysqli_real_escape_string($conn, trim($request->data->user_password));

    $full_org_name = mysqli_real_escape_string($conn, trim($request->data->org_name));
    $cap_full_org_name = ucwords(strtolower($full_org_name));

    $org_name = hash('sha256', $cap_full_org_name);

    $db_name = $cap_full_org_name ."_Org";

    $sqlGetEmails = "SELECT `user_email` FROM `User` WHERE `user_email` = '{$lower_user_email}'";

    $resultGetEmails = $conn->query($sqlGetEmails);

    $sqlGetOrgname = "SELECT `org_name` FROM `User` WHERE `org_name` = '{$org_name}'";

    $resultGetOrgname = $conn->query($sqlGetOrgname);


    if($resultGetEmails->num_rows > 0 && $resultGetOrgname->num_rows > 0) {
      http_response_code(204);

      $sqlUpdateUser = "UPDATE `User` SET `first_name`='{$cap_first_name}',
      `last_name`='{$last_name}'
      WHERE `org_name` = '$orgname'";

      $conn->query($sqlUpdateUser);

      echo 'Geen email en orgname updated';
    }
    else if ($resultGetEmails->num_rows > 0) {
      http_response_code(204);

      $sqlUpdateUser = "UPDATE `User` SET `first_name`='{$cap_first_name}',
      `last_name`='{$last_name}',
      `org_name`='{$org_name}',
      `full_org_name`='{$cap_full_org_name}'
      WHERE `org_name` = '$orgname'";

      $sqlUpdateDBaccess = "UPDATE `DBaccess` SET `org_name`='{$org_name}',
      `db_name`='{$db_name}'
      WHERE `org_name` = '$orgname'";

      $conn->query($sqlUpdateUser);
      $conn->query($sqlUpdateDBaccess);

      echo 'Geen email updated';
    }
    else if($resultGetOrgname->num_rows > 0) {
      http_response_code(204);

      $sqlUpdateUser = "UPDATE `User` SET `first_name`='{$cap_first_name}',
      `last_name`='{$last_name}',
      `user_email`='{$lower_user_email}'
      WHERE `org_name` = '$orgname'";

      $conn->query($sqlUpdateUser);

      echo 'Geen orgname updated';
    }

    if ($resultGetEmails->num_rows <= 0 && $resultGetOrgname->num_rows <= 0) {
      http_response_code(204);

      $sqlUpdateUser = "UPDATE `User` SET `first_name`='{$cap_first_name}',
      `last_name`='{$last_name}',
      `user_email`='{$lower_user_email}',
      `org_name`='{$org_name}',
      `full_org_name`='{$cap_full_org_name}'
      WHERE `org_name` = '$orgname'";

      $sqlUpdateDBaccess = "UPDATE `DBaccess` SET `org_name`='{$org_name}',
      `db_name`='{$db_name}'
      WHERE `org_name` = '$orgname'";

      $conn->query($sqlUpdateUser);
      $conn->query($sqlUpdateDBaccess);

      echo 'email en orgname updated';
    }
    else if ($resultGetEmails->num_rows <= 0) {
      http_response_code(204);

      $sqlUpdateUser = "UPDATE `User` SET `first_name`='{$cap_first_name}',
      `last_name`='{$last_name}',
      `user_email`='{$lower_user_email}'
      WHERE `org_name` = '$orgname'";

      $conn->query($sqlUpdateUser);

      echo 'email updated';
    }
    else if ($resultGetOrgname->num_rows <= 0) {
      http_response_code(204);

      $sqlUpdateUser = "UPDATE `User` SET `first_name`='{$cap_first_name}',
      `last_name`='{$last_name}',
      `org_name`='{$org_name}',
      `full_org_name`='{$cap_full_org_name}'
      WHERE `org_name` = '$orgname'";

      $sqlUpdateDBaccess = "UPDATE `DBaccess` SET `org_name`='{$org_name}',
      `db_name`='{$db_name}'
      WHERE `org_name` = '$orgname'";

      $conn->query($sqlUpdateUser);
      $conn->query($sqlUpdateDBaccess);

      echo 'orgname updated';
    }
    else {
      return http_response_code(422);
    }
  }
  $conn->close();
}
