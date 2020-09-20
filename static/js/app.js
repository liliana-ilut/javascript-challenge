// // Variables
// let button = d3.select("#filter-btn");
// let inputField1 = d3.select("#datetime");
// let inputField2 = d3.select("#city");
// let tbody = d3.select("tbody");
// let resetbtn = d3.select("#reset-btn");
// let columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

// let populate = (dataInput) => {

//   dataInput.forEach(ufo_sightings => {
//     let row = tbody.append("tr");
//     columns.forEach(column => row.append("td").text(ufo_sightings[column])
//     )
//   });
// }

// //Populate table
// populate(data);

// // Filter by attribute
// button.on("click", () => {
//   d3.event.preventDefault();
//   let inputDate = inputField1.property("value").trim();
//   let inputCity = inputField2.property("value").toLowerCase().trim();
//   // Filter by field matching input value
//   let filterDate = data.filter(data => data.datetime === inputDate);
//   console.log(filterDate)
//   let filterCity = data.filter(data => data.city === inputCity);
//   console.log(filterCity)
//   let filterData = data.filter(data => data.datetime === inputDate && data.city === inputCity);
//   console.log(filterData)

//   // Add filtered sighting to table
//   tbody.html("");

//   let response = {
//     filterData, filterCity, filterDate
//   }

//   if (response.filterData.length !== 0) {
//     populate(filterData);
//   }
//     else if (response.filterData.length === 0 && ((response.filterCity.length !== 0 || response.filterDate.length !== 0))){
//       populate(filterCity) || populate(filterDate);
  
//     }
//     else {
//       tbody.append("tr").append("td").text("No results found!"); 
//     }
// })

// resetbtn.on("click", () => {
//   tbody.html("");
//   populate(data)
//   console.log("Table reset")
// })




// Get a reference to the table body
let tbody = d3.select("tbody");

// Console.log the UFO data from data.js
console.log(data);

// // Step 1: Loop Through `data` and console.log each weather report object
data.forEach(function(dataUfo) {
  console.log(dataUfo);
});

// // Step 2:  Use d3 to append one table row `tr` for each weather report object
// // Don't worry about adding cells or text yet, just try appending the `tr` elements.
data.forEach(function(dataUfo) {
  console.log(dataUfo);
  let row = tbody.append("tr");
});

// // Step 3:  Use `Object.entries` to console.log each weather report value
data.forEach(function(dataUfo) {
  console.log(dataUfo);
  let row = tbody.append("tr");

  Object.entries(dataUfo).forEach(function([key, value]) {
    console.log(key, value);
  });
});

data.forEach(function(dataUfo) {
  console.log(dataUfo);
let row = tbody.append("tr");
  Object.entries(dataUfo).forEach(function([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value
    // in the weather report object
   let cell = row.append("td");
    cell.text(value);
  });
});
