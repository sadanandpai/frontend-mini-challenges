function calculateBMI() {
    var height = parseFloat(document.getElementById("height").value);
    var weight = parseFloat(document.getElementById("weight").value);
  
    if (isNaN(height) || isNaN(weight)) {
      alert("Please enter valid height and weight.");
      return;
    }
  
    var bmi = weight / (height * height);
    var result = "Your BMI is: " + bmi.toFixed(2);
  
    document.getElementById("result").innerHTML = result;
  }
  