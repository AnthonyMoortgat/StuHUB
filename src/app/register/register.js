window.onload = function () {
  var txtFirstname = document.getElementById("txtFirstname");
  var txtLastname = document.getElementById("txtLastname");
  var txtEmail = document.getElementById("txtEmail");

  var txtPassword = document.getElementById("txtPassword");
  var txtConfirmPassword = document.getElementById("txtConfirmPassword");

  var regButton = document.getElementById("btnSignup");

  //var phidden = document.getElementById("phidden");

  var regForm = document.getElementById("form2");

  txtPassword.onchange = ConfirmPassword;
  txtConfirmPassword.onkeyup = ConfirmPassword;
  function ConfirmPassword() {
    txtConfirmPassword.setCustomValidity("");
    if (txtPassword.value != txtConfirmPassword.value) {
      txtConfirmPassword.setCustomValidity("Passwords do not match.");
    }
  }

  regButton.onclick = function() {
    if (regForm.checkValidity() == true && txtPassword.value === txtConfirmPassword.value) {
      //window.location = 'TheLogin.php';
      var node = document.getElementById('phidden')
      node.style.visibility = 'visible';
      if (node.is(":visible")) {
        node.style.visibility = 'hidden';
      }
    }
  }
}
