// Variables
let button = d3.select("#filter-btn");
let inputField1 = d3.select("#datetime");
let tbody = d3.select("tbody");
let columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

let populate = (dataInput) => {

  dataInput.forEach(ufo_sightings => {
    let row = tbody.append("tr");
    columns.forEach(column => row.append("td").text(ufo_sightings[column])
    )
  });
}

//Populate table
populate(data);

// Filter by attribute
button.on("click", () => {
  d3.event.preventDefault();
  let inputDate = inputField1.property("value").trim();
  let filterDate = data.filter(data => data.datetime === inputDate);
  console.log(filterDate)

  // Add filtered sighting to table
  tbody.html("");

  let response = {filterDate}

  if (response.filterDate.length !== 0) {
    populate(filterDate);
  }
    else {
      tbody.append("tr").append("td").text("No results found!"); 
    }
})

