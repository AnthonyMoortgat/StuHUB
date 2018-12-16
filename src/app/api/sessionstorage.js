var data = {};
for(var lengte = sessionStorage.length, i = 0; i < lengte; i++)
{
  var key =  sessionStorage.key(i);
  data[key] = sessionStorage.getItem(key);
}
console.log(data);

$.ajax(
  {
    type: "POST",
    url: "login.php",
    data: {id: dbname},
    success: function (data) {
      alert('the server returned ' + data);
    }
  });
