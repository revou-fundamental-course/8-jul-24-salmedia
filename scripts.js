function calculateBMI() {
    console.log("calculateBMI function called");
  
    const weight = document.getElementById("input-berat badan").value;
    console.log("Weight:", weight);
  
    const height = document.getElementById("input-tinggi badan").value;
    console.log("Height:", height);
  
    // Calculate the BMI
    const bmi = weight / (height / 100) ** 2;
    console.log("BMI:", bmi);
  
    // Determine the BMI status
    let status;
    if (bmi < 18.5) {
      status = "Kekurangan berat badan";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      status = "Normal atau ideal";
    } else if (bmi >= 25.0 && bmi <= 29.9) {
      status = "Kelebihan berat badan";
    } else {
      status = "Kegemukan atau obesitas";
    }
    console.log("Status:", status);
  
    // Display the result
    document.getElementById("result-status").innerText = status;
    document.getElementById("result-bmi").innerText = bmi.toFixed(2);
    document.getElementById("result-message").innerText = `Anda memiliki ${status}.`;
  }