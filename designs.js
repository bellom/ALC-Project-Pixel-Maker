// select colorPicker
const $colorPicker = document.getElementById("colorPicker");

// call createGrid function once the submit button is clicked
$("document").ready(function() {
  makeGrid();
  //trigger the submit button with a mouse
  $("button").click(function(event) {
    event.preventDefault();
    makeGrid();
  });

// function that builds a grid in the "container"
  function makeGrid() {
    //get value from of the input boxes
    var x = $("#set_height").val();
    var y = $("#set_width").val();
  
    // get table (pixel_canvas)
    var grid = $("#pixel_canvas");

    // remove grid to create new grid
    grid.children().remove();

    // create height and width
    for (var rows = 0; rows < x; rows++) {
      grid.append("<tr></tr>");
     
      for (var columns = 0; columns < y; columns++) {
        grid
          .children()
          .last()
          .append("<td></td>");
      }
    }
    $('td').click(function() {
        this.style.background = $colorPicker.value;
    });
  }
  
});
