//setting general variables
    //this is for the blocks
var cellHeight = 13,
    cellWidth = 20,
    gap = .5,
    //threshold for maximum count
    threshold = 21,
    //test dataset right now
    dataset = [
                { 'user_id': 1, 'observations': [5, 8, 7, 10, 15, 0, 25]},
                { 'user_id': 2, 'observations': [5, 13, 2]}
              ],
    //colorBrewer YlOrRd
    colors = ['#ffffb2', '#fecc5c', '#fd8d3c', '#f03b20', '#bd0026'];

var colorScale = 
  d3.scaleQuantize()
  .domain([1, (threshold - 1)])
  .range(colors.slice(1, colors.length - 1));

var body = d3.select("body");

//adding an svg tag
body.append("svg")
  .attr("width", 700)
  .attr("height", 700);

var svg = body.select("svg");

//For mouseover
var div = body.append("div")   
    .attr("class", "tooltip")               
    .style("opacity", 0);

//Variables for legend
var legendRectSize = 20,
    legendSpacing = .5,
    //made labels reponsive to threshold to match scaling
    legendLabels = makeLegendLabel(colors, threshold, colorScale),
    legendPositionX = 400,
    legendPositionY = 20,
    legendTextX = 4,
    legendTextY = -4;

var heatmap = svg.selectAll('heatmap')
    .data(dataset)
  .enter().append('g')
    .attr('class', 'heatmap')
    .attr('transform', 'translate(' + 50 + ',' + 30 + ')');        
  
//Creating the mapping

  //each allows access to nested data
heatmap.each(function(d,i){
        d3.select(this).selectAll('rect')
        //important to rebind data to observations to get access to array
        .data(d.observations)
      .enter().append('rect')
          //y is a result of object index
          .attr("y", function() { return i * (cellHeight + gap); })
          .attr("height", function() { return cellHeight;} )
          .attr("width", function() { return cellWidth;} )
          //sets x based on the internal array index
          .attr("x", function(d,i) { 
            return i * (cellWidth + gap); })
          .style("fill", function(d) {
            return colorWithMax (d, colors, threshold, colorScale); })

          //adding mouse over infobox
          //think about where/how to add user_id...
          .on("mouseover", function(d,i) {      
            div.transition()        
                .duration(200)      
                .style("opacity", .9);      
            div .html("Week: " + (i + 1) + "<br/>"  + "Observation Count: " + d)  
                .style("left", (d3.event.pageX) + "px")     
                .style("top", (d3.event.pageY - 10) + "px");    
            })             
          .on("mouseout", function(d) {       
            div.transition()        
                .duration(500)      
                .style("opacity", 0);   
            })
             });

//adding the user labels
heatmap.append('text')
  .attr('class', 'userLabels')
  .attr('x', -45)
  .attr('y', function(d, i) {return (i * (cellHeight + gap)) + 10;})
  .text(function(d) {return "User " + d.user_id;});

//adding the top label
heatmap.append('text')
  .attr('class', 'topLabel')
  .attr('x', 40)
  .attr('y', -10)
  .text("Weeks Since Joining");



//Adding legend 
//use horz/vert to change location
var legend = body.select('svg').selectAll('.legend')
    .data(legendLabels)
  .enter().append('g')
    .attr('class', 'legend')
    .attr('transform', function(d, i) {                     
      var height = legendRectSize + legendSpacing;          
      var horz = legendPositionX;     
      //creates each square based on it's index                  
      var vert = i * height + legendPositionY;                       
      return 'translate(' + horz + ',' + vert + ')';        
    }); 

//creates the squares for the legend
legend.append('rect')
  .attr('width', legendRectSize)
  .attr('height', legendRectSize)
  .style('fill', function(d,i) { 
    //returns the inverse of colors to get the legend from high to low
    return colors[colors.length - (i + 1)];
  })

//adds the labels for the legend
legend.append('text')
  .attr('x', legendRectSize + legendTextX)
  .attr('y', legendRectSize + legendTextY)
  .text(function(d) {return d;})

//Function to fill based on the color scale
//Returns maximum color if larger than threshold & different color for zero
function colorWithMax(d, colors, threshold, scale) {
  //sets top color for threshold
  if (d > threshold) {
    return colors[colors.length - 1];
  }
  //sets lowest color to zero
  if (d == 0) {
    return colors[0];
  }
  //otherwise returns based on the scale
  else { 
    return scale(d);
  }
}


//Function to generate legend labels
function makeLegendLabel(colors, threshold, scale) {
  var output = []
  //sets first label to zero
  output.push("0")
  //for each color in the scale, gives the range it applies to
  //this works if not integers -- if all integers repeats a number -- still thinking how to fix...maybe with num % 1 != 0
  scale.range().forEach(function(r){ 
    var arr = scale.invertExtent(r)
    output.push("" + Math.ceil(arr[0]) + "-" + Math.floor(arr[1]) + "")
  })
  //sets last label to the threshold
  output.push("" + threshold + "+")
  //inverses for top being the highest number
  output.reverse()
  return output;
}



