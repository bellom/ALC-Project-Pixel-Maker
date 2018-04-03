// select colorPicker
const $colorPicker = document.getElementById("colorPicker");

// call createGrid function once the submit button is clicked
$("document").ready(function() {
  createGrid();
  
  $("button").click(function(event) {
    event.preventDefault()
    createGrid();
  });

// function that builds a grid in the "container"
    function createGrid() {
        
        //getting value from both of the input boxes
        var x = $("#set_width").val()
        var y = $("#set_height").val()
        
        // select container
        var grid = $("#container");
        
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

            };
        };
        
        //set td background color to the value of colorPicker
        $('td').click(function() {
            this.style.background = $colorPicker.value;
        });
    };
});