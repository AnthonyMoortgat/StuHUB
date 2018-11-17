$(function()
{
$(document.getElementById('button1')).click(function()
  {
    $(document.getElementById('1')).toggle();
    $.get('index.php', function(data)
    {
      document.write("Server Returned: " + data);
      var jsondata = data;
    });
  });
  $(document.getElementById('button2')).click(function()
  {
    $(document.getElementById('1')).append(jsonnaartabel());
  });
  function jsonnaartabel(){
    $.get('index.php', function(data) {
      //document.write("Server Returned: " + data);
      var jsondata = data;

      var col = [];
      for (var i = 0; i < jsondata.length; i++)
      {
        for (var id in jsondata[i])
        {
          if (col.indexOf(id) === -1)
          {
            col.push(id);
          }
        }
      }
      var table = document.createElement("table");
      var tr = table.insertRow(-1);
      for (var i = 0; i < col.length; i++)
      {
        var th = document.createElement("th");
        th.innerHTML = col[i];
        tr.appendChild(th);
      }

      for (var i = 0; i < jsondata.length; i++)
      {
        tr = table.insertRow(-1);
        for (var j = 0; j < col.length; j++)
        {
          var tabCell = tr.insertCell(-1);
          tabCell.innerHTML = jsondata[i][col[j]];
        }
      }

        var divContainer = document.getElementById("showData");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
    });
  }
});



/*$(document).ready(function()
{
  //-------------------------------------------------------
  //-------------------------------------------------------
  $(document.getElementById('button1')).click(function()
  {
    $(document.getElementById('button1')).click(function(){
      $(document.getElementById('1')).toggle();
    });
    $(document.getElementById('1')).html(
      '<button type="button" class="btn btn-primary">Primary</button>' +
      '<button type="button" class="btn btn-primary">Primary</button>' +
      '<button type="button" class="btn btn-primary">Primary</button>' +
      '<button type="button" class="btn btn-primary">Primary</button>' +
      '<button type="button" class="btn btn-primary">Primary</button>'
    );
  });
  //-------------------------------------------------------s
  //-------------------------------------------------------
  $(document.getElementById('button2')).click(function()
  {
    $(document.getElementById('button2')).click(function(){
      $(document.getElementById('2')).toggle();
    });
    $(document.getElementById('2')).html(
      '<button type="button" class="btn btn-secondary">Secondary</button>' +
      '<button type="button" class="btn btn-secondary">Secondary</button>' +
      '<button type="button" class="btn btn-secondary">Secondary</button>' +
      '<button type="button" class="btn btn-secondary">Secondary</button>' +
      '<button type="button" class="btn btn-secondary">Secondary</button>'
    );
  });
  //-------------------------------------------------------
  //-------------------------------------------------------
  $(document.getElementById('button3')).click(function()
  {
    $(document.getElementById('button3')).click(function(){
      $(document.getElementById('3')).toggle();
    });
    $(document.getElementById('3')).html(
      '<button type="button" class="btn btn-success">Success</button>' +
      '<button type="button" class="btn btn-success">Success</button>' +
      '<button type="button" class="btn btn-success">Success</button>' +
      '<button type="button" class="btn btn-success">Success</button>' +
      '<button type="button" class="btn btn-success">Success</button>'
    );
  });
  //-------------------------------------------------------
  //-------------------------------------------------------
  $(document.getElementById('button4')).click(function()
  {
    $(document.getElementById('button4')).click(function(){
      $(document.getElementById('4')).toggle();
    });
    $(document.getElementById('4')).html(
      '<button type="button" class="btn btn-danger">Danger</button>' +
      '<button type="button" class="btn btn-danger">Danger</button>' +
      '<button type="button" class="btn btn-danger">Danger</button>' +
      '<button type="button" class="btn btn-danger">Danger</button>' +
      '<button type="button" class="btn btn-danger">Danger</button>'
    );
  });
  //-------------------------------------------------------
  //-------------------------------------------------------
  $(document.getElementById('button5')).click(function()
  {
    $(document.getElementById('button5')).click(function(){
      $(document.getElementById('5')).toggle();
    });
    $(document.getElementById('5')).html(
      '<button type="button" class="btn btn-warning">Warning</button>' +
      '<button type="button" class="btn btn-warning">Warning</button>' +
      '<button type="button" class="btn btn-warning">Warning</button>' +
      '<button type="button" class="btn btn-warning">Warning</button>' +
      '<button type="button" class="btn btn-warning">Warning</button>'
    );
  });
  //-------------------------------------------------------
  //-------------------------------------------------------
  $(document.getElementById('button6')).click(function()
  {
    $(document.getElementById('button6')).click(function(){
      $(document.getElementById('6')).toggle();
    });
    $(document.getElementById('6')).html(
      '<button type="button" class="btn btn-info">Info</button>' +
      '<button type="button" class="btn btn-info">Info</button>' +
      '<button type="button" class="btn btn-info">Info</button>' +
      '<button type="button" class="btn btn-info">Info</button>' +
      '<button type="button" class="btn btn-info">Info</button>'
    );
  });
  //-------------------------------------------------------
  //-------------------------------------------------------
  $(document.getElementById('button7')).click(function()
  {
      $(document.getElementById('button7')).click(function(){
        $(document.getElementById('1')).toggle();
      });
      $(document.getElementById('button7')).click(function(){
        $(document.getElementById('2')).toggle();
      });
      $(document.getElementById('button7')).click(function(){
        $(document.getElementById('3')).toggle();
      });
      $(document.getElementById('button7')).click(function(){
        $(document.getElementById('4')).toggle();
      });
      $(document.getElementById('button7')).click(function(){
        $(document.getElementById('5')).toggle();
      });
      $(document.getElementById('button7')).click(function(){
        $(document.getElementById('6')).toggle();
      });
  });
});



*/


