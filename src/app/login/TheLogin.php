<html lang="en">
    <head>
        <meta charset="UTF-8">
            <title>Login</title>
                <script type="text/javascript" src='https://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.8.3.min.js'></script>
                    <script type="text/javascript" src='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.0.3/js/bootstrap.min.js'></script>
                        <link rel="stylesheet" href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.0.3/css/bootstrap.min.css' media="screen" />
                            <script type="text/javascript" src="login.js"></script>
                                <link rel="stylesheet" type="text/css" href="login.css">
    </head>
    <body>
        <?php
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
                    header("Location: homepage.php");
                }
                else
                {
                ?>
                    <p id="fault">E-mail or password incorrect!</p>
                <?php
                }
            }
$conn->close();
?>
    <form method="post" action="" id="form1">
        <div style="max-width: 400px;">

            <?php if (isset($_GET['register']) && $_GET['register'] == 'success') {
            ?>
                        <p id="regSuccess">Registration successful!</p>
            <?php
                  }
            ?>

            <h2 class="form-signin-heading"><b>Login</b></h2>
            <hr />
            <label for="email">E-mail</label>
            <input name="email" id="email" class="form-control" placeholder="Enter E-mail" required type="email" />
            <br />

            <label for="password">Password</label>
            <input name="password" type="password" id="password" class="form-control" placeholder="Enter Password"/>
            <hr />
            <input type="submit" name="btnLogin" value="Login" id="btnLogin" class="btn btn-primary"/>

            <a href="TheRegister.php" class="btn btn-primary"><b>Register</b></a>
        </div>
    </form>
</body>
</html>