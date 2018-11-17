<!DOCTYPE html>
<html>
<head>
  <title>Convert JSON Data to HTML Table</title>
  <style>
    th, td, p, input {
      font:14px Verdana;
    }
    table, th, td
    {
      border: solid 1px #DDD;
      border-collapse: collapse;
      padding: 2px 3px;
      text-align: center;
    }
    th {
      font-weight:bold;
    }
  </style>
</head>
<body>
<button type="button" class="btn btn-danger" id="button1">Primary</button>
<div id="1"></div><br />
<input type="button" onclick="CreateTableFromJSON()" value="Create Table From JSON" />
<p id="showData"></p>
</body>

<script>
  function CreateTableFromJSON() {
    $("button1").click(function()
    {
      $("1").toggle();
      $.get('index.php', function(data)
      {
        console.log("Server Returned: " + data);
      });
    });
    var jsondata =  data;
    var col = [];
    for (var i = 0; i < jsondata.length; i++) {
      for (var key in jsondata[i]) {
        if (col.indexOf(key) === -1) {
          col.push(key);
        }
      }
    }

    // CREATE DYNAMIC TABLE.
    var table = document.createElement("table");

    // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

    var tr = table.insertRow(-1);                   // TABLE ROW.

    for (var i = 0; i < col.length; i++) {
      var th = document.createElement("th");      // TABLE HEADER.
      th.innerHTML = col[i];
      tr.appendChild(th);
    }

    // ADD JSON DATA TO THE TABLE AS ROWS.
    for (var i = 0; i < jsondata.length; i++) {

      tr = table.insertRow(-1);

      for (var j = 0; j < col.length; j++) {
        var tabCell = tr.insertCell(-1);
        tabCell.innerHTML = jsondata[i][col[j]];
      }
    }

    // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
    var divContainer = document.getElementById("showData");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
  }
</script>
</html>
