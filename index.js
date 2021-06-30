const API_KEY = "65cf18766bf746e38ca224944213006";

// DOCS: https://www.weatherapi.com/docs/
$.ajax(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=London&aqi=no`).done((data) =>
  console.log(data)
);
