<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
            <title>Register</title>
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

            if(isset($_POST['btnSignup'])) {
                $firstname = $_POST["txtFirstname"];
                $lastname = $_POST["txtLastname"];
                $email = $_POST["txtEmail"];
                $password = md5($_POST["txtPassword"]);

                $sqlRead = "SELECT first_name, last_name, user_email, user_password FROM User WHERE user_email = '$email'";
                /*
                $sqlInsert = "INSERT INTO User (first_name, last_name, user_email, user_password)
                        VALUES ('$firstname', '$lastname', '$email', '$password')";*/


                $result = mysqli_query($conn, $sqlRead);

                if (mysqli_num_rows($result) > 0) {
                    //echo 'E-mail already exists!';
        ?>
                    <p id = "fault" > E-mail already used, please try again.</p >
        <?php
                } else {
                    //$query = mysqli_query($conn, "$sqlInsert");
                    $stmt = $conn->prepare("INSERT INTO User (first_name, last_name, user_email, user_password) VALUES (?, ?, ?, ?)");
                    $stmt->bind_param("ssss", $firstname, $lastname, $email, $password);
                    $stmt->execute();
                    $stmt->close();
                    header("Location: Thelogin.php?register=success"); //?register=success --> wordt doorgegeven aan TheLogin.php
                    exit;
                }
            }
        $conn->close();
        ?>
            <form method="post" action="" id="form2">
                <div style="max-width: 400px;">
                    <h2 class="form-signin-heading"><b>Registration</b></h2>
                    <hr />
                    <label for="txtFirstname">First Name</label>
                    <input name="txtFirstname" type="text" id="txtFirstname" class="form-control" placeholder="Enter First Name" required />
                    <br />

                    <label for="txtLastname">Last Name</label>
                    <input name="txtLastname" type="text" id="txtLastname" class="form-control" placeholder="Enter Last Name" required />
                    <br />

                    <label for="txtEmail">E-mail</label>
                    <input name="txtEmail" id="txtEmail" class="form-control" placeholder="Enter E-mail" required type="email" />
                    <?php
                        if(isset($_POST['txtEmail']) && !empty($_POST['txtEmail']))
                        {
                            $email = mysql_escape_string($_POST['txtEmail']);
                            $to      = $email;
                            $subject = "Signup Verification";
                            $message =
                                '
                                    Thanks for signing up!
                                    Your account has been created, you can login after you have activated your account by pressing the url below:
                                    LINK VOLGT NOG!
                                ';
                            $headers = 'From:noreply@yourwebsite.com' . "\r\n";
                            mail($to, $subject, $message, $headers);
                        }
                    ?>
                    <br />

                    <label for="txtPassword">Password</label>
                    <input name="txtPassword" type="password" id="txtPassword" title="Password must contain: Minimum 8 characters and maximum 20 characters atleast 1 Alphabet and 1 Number"
                           class="form-control" placeholder="Enter Password" required pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$" />
                    <br />

                    <label for="txtConfirmPassword">Confirm Password</label>
                    <input name="txtConfirmPassword" type="password" id="txtConfirmPassword" class="form-control" placeholder="Confirm Password" />
                    <br />
                    <label><input type="checkbox" value="" required="required">Accept Terms Of Use</label>
                    <a href="./termsofuse.html">Read</a>
                    <hr />
                    <input type="submit" name="btnSignup" value="Sign up" id="btnSignup" class="btn btn-primary"/>
                    <a href="TheLogin.php" class="btn btn-primary"><b>Cancel</b></a>
                    <br/>
                </div>
            </form>
    </body>
</html>