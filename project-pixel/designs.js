
var rowSelect = $("#inputHeight").val();
var columnSelect = $("#inputWeight").val();
var colorSelect = $("#colorPicker").val();

/*
* Getting value when user changes the value in input box.
*/
$(document).ready(function(){
  $("#colorPicker").on("change", function(){
    colorSelect = $("#colorPicker").val();
  });
  $("#inputHeight").on("change", function(){
    rowSelect = $("#inputHeight").val();
  });
  $("#inputWeight").on("change", function(){
    columnSelect = $("#inputWeight").val();
  });
});

/*
makeGrid functioon call when draw button is clicked
it takes the value and draw table
*/
function makeGrid() {
  $("#pixelCanvas").empty();
  var table = document.getElementById("pixelCanvas");
   for(var i=0; i<rowSelect; i++) {
   var row = table.insertRow(i);
     for(var j=0; j<columnSelect; j++) {
     var cell1 = row.insertCell(j);
     }
  }

  var tableSelect = $("#pixelCanvas");
  var tablebody = tableSelect.children();
  var tablerow = tablebody.children();
  var tabledata = tablerow.children().css("background","white");
  var tabledata = tablerow.children().attr("onclick","colorme(this)");
}

/*
colorme function
when user click on the grid background color of grid changes
*/
function colorme(str) {
  str.style.background = colorSelect;
}
