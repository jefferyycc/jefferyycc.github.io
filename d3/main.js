//Step 1. set the width and height of the SVG
var w = 800;
var h = 600;
var padding = 80;
var padding_hor = 40;

// // set the dimensions and margins of the graph
var margin = {
  top: 20,
  right: 20,
  bottom: 50,
  left: 70
};
//     width = 960 - margin.left - margin.right,
//     height = 500 - margin.top - margin.bottom;

// x- and y- scale
var xScale = d3.scaleLinear()
  .range([padding, w - padding]);
var yScale = d3.scaleLinear()
  .range([h - padding_hor, padding_hor]);

var x_parameter = "risk_adjusted_rate_per_100";
var y_parameter = "medicaid_county_population";
var color_parameter = "medicaid_county_population";
var y_category = "risk_adjusted_rate_per_100";
var select_year = "2011";

function render() {
  d3.select("svg").selectAll("g").remove();
  d3.select("svg").selectAll("text").remove();
  d3.select("svg").selectAll("circle").remove();

  // import data
  d3.csv("datasource.csv")
    .then(function(data) {
      console.log(data);
      console.log("import data sucessfully!");


      var max_color_p = 0;
      // Coerce the strings to numbers.
      data.forEach(function(d) {
        if (d.tax_year == select_year) {
          d.x = +d[x_parameter];
          d.y = +d[y_parameter];
          d.color = +d[color_parameter];
          if (d.color > max_color_p) {
            max_color_p = d.color;
          };
        }
        else{
          // console.log(d.tax_year);
        }
      });

      // d.color = data[color_parameter]
      // console.log(max_color_p);
      // console.log(Math.max(d.color));

      var sequentialScale = d3.scaleSequential()
        .domain([0, max_color_p])
        .interpolator(d3.interpolatePuOr);

      //Step 3. scale function
      // Compute the scales’ domains.
      xScale.domain(d3.extent(data, function(d) {
        return d.x;
      })).nice();

      yScale.domain(d3.extent(data, function(d) {
        return d.y;
      })).nice();

      //Step 4. set up the x- and y- axis
      var xAxis = d3.axisBottom().scale(xScale).ticks(5);
      var yAxis = d3.axisLeft().scale(yScale).ticks(5);

      //Step 5. create svg element
      // var svg = d3.select("body")
      // .append("svg")
      var svg = d3.select("svg")
        .attr("width", w)
        .attr("height", h);

      //Step 6. Call the x axis in a group tag
      svg.append("g")
        .attr("class", "x_axis")
        .attr("transform", "translate(0," + (h - padding_hor) + ")")
        .call(xAxis);

      // text label for the x axis
      // svg.append("text")
      //     .attr("class", "x_axis")
      //     .attr("transform",
      //           "translate(" + (w/2) + " ," + (h + margin.top + 20) + ")")
      //     .style("text-anchor", "middle")
      //     .text(x_parameter);
      svg.append('text')
        .attr('x', w)
        .attr('y', h - 10)
        .attr('text-anchor', 'end')
        .attr('class', 'label')
        .text(x_parameter);

      //Step 7. Call the y axis in a group tag
      svg.append("g")
        .attr("class", "y_axis")
        .attr("transform", "translate(" + padding + ", 0)")
        .call(yAxis);

      // text label for the y axis
      svg.append('text')
        .attr('x', margin.left / 2)
        .attr('y', margin.top)
        // .attr("transform", "rotate(-90)")
        .attr('class', 'label')
        .text(y_parameter);

      // d3.select("#y_label")
      //   .text(y_category);

      //Step 8. appends a circle for each datapoint
      svg.selectAll("circle")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", function(d) {
          return xScale(d.x);
        })
        .attr("cy", function(d) {
          return yScale(d.y);
        })
        .attr("r", 5)
        // .attr("fill", "blue");
        .style('fill', function(d) {
          // console.log(d[color_parameter]);
          return sequentialScale(d.color);
        })
        .exit().remove();

      //Step 9. tooltips
      svg.selectAll("circle")
        .on('mouseover', function(d) {
          coordinates = d3.mouse(this);

          d3.select("#tooltip")
            .style("left", coordinates[0] + padding.x + "px")
            .style("top", coordinates[1] + padding.y + "px")
            .select("#info")
            .text(tooltipText(d));

          d3.select("#tooltip").classed("hidden", false);
        })
        .on("mouseout", function() {
          d3.select("#tooltip").classed("hidden", true);
        })


      //Step 10. select buttons
      var buttons = d3.select('body').select('div').selectAll('button')
        .data(color.domain())
        .enter().append("button")
        .attr("class", "click-button")
        .text(function(d) {
          return d;
        })
        .on("click", function(d) {
          d3.selectAll(".symbol")
            .style("opacity", 0.1)
          // .style("opacity", 1)

          if (clicked !== d) {
            d3.selectAll(".symbol")
              .filter(function(e) {
                return e.species === d;
                // return e.species !== d;
              })
              .transition().delay(function(d, i) { //animation
                return i * 10;
              })
              .style("opacity", 1)
            // .style("opacity", 0.1)
            clicked = d
          } else {
            clicked = ""
          }
        });

    })
    .catch(function(error) {
      // error handling
      console.log("...");
    });
}

// Return the color base, X and Y of the selected circle
function tooltipText(d) {
  // console.log("tooltipText", d)
  // return 'Color base: ' + Math.round(d[2] * 100) / 100 + ', Position: ' + Math.round(d[0] * 100) / 100 + ';' + Math.round(d[1] * 100) / 100;
  return '  ' + '*COUNTY*: ' + d['county'] + '; ' + '*YEAR*: ' + d['year'] + '; *' + x_parameter.toUpperCase() + '*: ' + d[x_parameter]
      + '; *' + y_parameter + '*: ' + d[y_parameter];
}

function select(y_category) {
  // render(data, y_category);
  y_parameter = y_category;
  console.log(y_parameter, y_category);
  render();
}

function selectYear(year) {
  // render(data, y_category);
  select_year = year;
  render();
}

render();
