function convert() {
    var tempF = document.getElementById("tempF").value;
    var tempC = document.getElementById("tempC").value;
    
    if (tempF != "") {
      var celsius = (tempF - 32) * 5 / 9;
      document.getElementById("resultF").innerHTML = tempF + "°F = " + celsius.toFixed(2) + "°C";
      document.getElementById("tempC").value = celsius.toFixed(2);
    } else if (tempC != "") {
      var fahrenheit = (tempC * 9 / 5) + 32;
      document.getElementById("resultC").innerHTML = tempC + "°C = " + fahrenheit.toFixed(2) + "°F";
      document.getElementById("tempF").value = fahrenheit.toFixed(2);
    } else {
      alert("Please enter a temperature to convert.");
    }
  }
  