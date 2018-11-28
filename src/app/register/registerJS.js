/*
import * as $ from "rxjs";

$(document).ready(but.addEventListener("click",function() {
  $.ajax({
    type: "GET",
    url: "http://dtsl.ehb.be/~michael.de.gauquier/SP2/api/registerStore.php",
    dataType: "json",
    success: function(data) {
      var test = document.getElementById("test");
      test.setAttribute("id", "fault");
      alert(data.var);
      console.log('Hello1');
    },
    error: function(data) {
      alert("Problem - perhaps malformed JSON?");
      console.log('Hello2');
    }
  });
  var but = document.getElementById("btnSignup");
}, false));
*/


var test = document.getElementById("test");
var button1 = document.getElementById("btnSignup");
button1.addEventListener("click", testFunction, false);

function testFunction() {
  test.setAttribute("class", "fault");
}
