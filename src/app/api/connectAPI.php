<?php
// db credentials
define('DB_HOSTA', 'dt5.ehb.be');
define('DB_USERA', '1819SP2_DB');
define('DB_PASSA', 'eixpbwz');
define('DB_NAMEA', '1819SP2_DBlogin');

// Connect with the database.
Class ConnectAPI
{
  private static $_instance;
  private $connection;

  private function __construct()
  {
    $this->connection = new mysqli(DB_HOSTA, DB_USERA, DB_PASSA, "1819SP2_DBlogin");
    if (mysqli_connect_error()) {
      echo("Failed to connect:" . mysqli_connect_error());
    }
  }

  public static function getInstance()
  {
    if (!self::$_instance) {
      self::$_instance = new self();
    }
    return self::$_instance;
  }

  public function getConnect()
  {
    return $this->connection;
  }
}
