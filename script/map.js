let mymap = L.map("mapContainer").setView([59.960989, 10.58433], 12);

L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/streets-v9",
    tileSize: 512,
    zoomOffset: -1,
    accessToken: "pk.eyJ1IjoibWFydGluc2thdHZlZHQiLCJhIjoiY2tnN3V4NWw4MGFsODJyb2NxdXZlNDgzZyJ9.tm9Jitc64_WHgqs452GKLw",
  }
).addTo(mymap);

let marker = L.marker([59.960989, 10.58433]).addTo(mymap);
marker.bindPopup("Bærum pistolklubb.").openPopup();