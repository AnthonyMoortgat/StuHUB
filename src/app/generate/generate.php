<html lang="en">
<head>
  <meta charset="utf-8">
  <script src="https://code.jquery.com/jquery-1.10.2.js"></script>
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
</head>
  <body>
  //lege div die een ID krijgt voor nadien op te vullen//
  <div id="generate"></div>
  <div id="organisation"></div>

    <script>
      $.ajax({
        url: "data.php",
        type: "POST",
        datatype: "html",
        data: dataString,
        success: function(data) {
          doSomething(data);
        }
      });

      var $generate = $("#generate"),
        x1 =
          "<table>\n" +
          "  <tr>\n" +
          "    <th>...</th>\n" +
          "    <th>...</th> \n" +
          "    <th>...</th>\n" +
          "  </tr>\n" +
          "</table>",
        html = $.parseHTML(x1);
      // Append the parsed HTML
      $generate.append(html);
    </script>
  </body>
</html>
