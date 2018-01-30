// Create variable to hold map element, give initial settings to map
var map = L.map('map', {
    center: [44.56576, -123.27888],
    zoom: 16
});

// Add OpenStreetMap tile layer to map element
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Create point feature for Wilkinson Hall
var myDataPoint = L.marker([44.56822, -123.28034]).addTo(map);

// Create line feature for the Route from Wilkinson Hall to Strand Ag Hall, style and add to map
var myDataLine = L.polyline([[44.5656915, -123.2775289], [44.5656992, -123.2778923], [44.5662266, -123.2778722], [44.5682559, -123.2778293], [44.5682445, -123.2800823]],
  {color: 'red', weight: 5}).addTo(map);

// Create area feature for Strand Ag Hall, style and add to map
var myArea = L.polygon([[44.5651985, -123.2769978],[44.566131, -123.2769978], [44.5661339, -123.2775027], [44.5651985, -123.2775182], [44.5651985, -123.2769978],],
  {color: 'orange', weight: 5}).addTo(map);

// Create popups
// Bind popup to Data Point object
myDataPoint.bindPopup("<h3>Wilkinson Hall</h3><p>Corvallis, Oregon<br>College of Earth, Ocean, and Atmospheric Sciences</p>");
// Bind popup to line object
myDataLine.bindPopup("The route from Wilkinson Hall to Strand Ag Hall.");
// Bind popup to area object
myArea.bindPopup("Strand Ag Hall");

// Find latitude/longitude with a mouse-click
// Create an empty popup
var popup = L.popup();
// Write function to set properties of the popup
function onMapClick(event) {
  popup
    .setLatLng(event.latlng)
    .setContent("You click the map at " + event.latlng.toString())
    .openOn(map);
}
// Listen for a click event on the map element
map.on("click", onMapClick);
