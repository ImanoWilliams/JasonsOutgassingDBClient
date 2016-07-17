$.ajax({
  url: "https://data.nasa.gov/resource/gymh-eyc2.json",
  data: {
        "$limit" : 25,
        "$$app_token" : "ScGGXYKmOWp2rG5YMgjuHy2Bi"
  },
  success: function(data) {
    $("pre").text(JSON.stringify(data, null, "\t"));
  },
  error: function(msg) {
    //todo: handle error gracefully
  }
});
