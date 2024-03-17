function calculate() {
    // Get input values
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    // Check if inputs are valid numbers
    if (isNaN(num1) || isNaN(num2)) {
      document.getElementById('result').innerHTML = "Please enter valid numbers.";
      return;
    }

    let addition = num1 + num2;
    let subtraction = num1 - num2;
    let multiplication = num1 * num2;
    let division = num1 / num2;

    // Display results
    let resultHTML = "<h3>Results:</h3>";
    resultHTML += "Addition: " + addition + "<br>";
    resultHTML += "Subtraction: " + subtraction + "<br>";
    resultHTML += "Multiplication: " + multiplication + "<br>";
    resultHTML += "Division: " + division + "<br>";

    document.getElementById('result').innerHTML = resultHTML;
}