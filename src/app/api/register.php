<?php
/*
function my_simple_crypt( $string, $action = 'e' ) {
  // you may change these values to your own
  $secret_key = 'my_simple_secret_key';
  $secret_iv = 'my_simple_secret_iv';

  $output = false;
  $encrypt_method = "AES-256-CBC";
  $key = hash( 'sha256', $secret_key );
  $iv = substr( hash( 'sha256', $secret_iv ), 0, 16 );

  if( $action == 'e' ) {
    $output = base64_encode( openssl_encrypt( $string, $encrypt_method, $key, 0, $iv ) );
  }
  else if( $action == 'd' ){
    $output = openssl_decrypt( base64_decode( $string ), $encrypt_method, $key, 0, $iv );
  }

  return $output;
}

$encrypted = my_simple_crypt( 'Hello World!', 'e');
$iets = "<script>console.log($encrypted);</script>";
echo "$iets";

// $decrypted = my_simple_crypt( 'RTlOMytOZStXdjdHbDZtamNDWFpGdz09', 'd' );
*/
/*
require 'login.php';
require 'connectAPI.php';

global $DBname;

$sqlDbname = "SELECT d.db_name FROM User u JOIN DBaccess d ON(u.org_name = d.org_name) WHERE u.user_email = 'admin@enigma.be'";
$resultDB = mysqli_query($con, $sqlDbname);
$rowDB = mysqli_fetch_assoc($resultDB);
setDBname($rowDB['db_name']);

echo $DBname;
*/



?>
