function calculatebmi() {

    // Get user details
    let gender = document.querySelector(
        'input[name="gender"]:checked'
    );

    let age = Number(document.getElementById("age").value);
    let height = Number(document.getElementById("height").value);
    let weight = Number(document.getElementById("weight").value);

    // Get result elements
    let bmiValue = document.getElementById("bmivalue");
    let bmiCategory = document.getElementById("bmicategory");
    let resultMessage = document.getElementById("resultmessage");

    // Check empty fields
    if (!gender || !age || !height || !weight) {
        alert("Please fill in all the details.");
        return;
    }

    // Validate input values
    if (age < 20 || age > 120 || height <= 0 || height > 300 || weight <= 0 || weight > 500) {

        alert("Please enter valid details. This calculator uses adult BMI categories for ages 20 and above.");
        return;
    }

    // Convert height from cm to metres
    let heightInMeters = height / 100;

    // Calculate BMI
    let bmi = weight / (heightInMeters * heightInMeters);

    // Display BMI value
    bmiValue.innerText = bmi.toFixed(1);

    // Remove previous category colors
    bmiCategory.className = "";

    // Check BMI category
    if (bmi < 18.5) {

        bmiCategory.innerText = "Underweight";
        bmiCategory.classList.add("underweight");

        resultMessage.innerText =
            "Your BMI is below the healthy range.";

    }

    else if (bmi < 25) {

        bmiCategory.innerText = "Normal Weight";
        bmiCategory.classList.add("normal");

        resultMessage.innerText =
            "Great! Your BMI is within the healthy range.";

    }

    else if (bmi < 30) {

        bmiCategory.innerText = "Overweight";
        bmiCategory.classList.add("overweight");

        resultMessage.innerText =
            "Your BMI is above the healthy range.";

    }

    else {

        bmiCategory.innerText = "Obese";
        bmiCategory.classList.add("obese");

        resultMessage.innerText =
            "Your BMI is in the obesity range.";

    }

}