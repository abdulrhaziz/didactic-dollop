// Select color input
// Select size input
let rows;
let col;
let color;

// When size is submitted by the user, call makeGrid()
$("#sizePicker").submit(function (event) {
    event.preventDefault();
    rows = $("#inputHeight").val();
    col = $("#inputWidth").val();
    makeGrid(rows, col);
   // console.log("Columns: " + width + "Rows : " + height);
})
function makeGrid(rows, col) {
    $("tr").remove();

  for (let i = 1; i <= rows; i++){
    $("#pixelCanvas").append("<tr id=table" + i + "></tr>");
      for(let j = 1; j <= col; j++){
        $("#table" + i).append("<td></td>");
        $("td").attr("class", "cell")
        
      }
  }
 
  //color to cell
  $("td").click(function (event) {
       let color = $ ("#colorPicker").val();
       $(event.target).css("background-color", color);
       


  })
}
