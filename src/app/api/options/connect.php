<?php

echo "Connect php echo";

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

$con = connect();
