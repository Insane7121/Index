// Function to validate the form
function validateForm() {
    // Get the form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;
    const universityId = document.getElementById("universityId").value;
    const course = document.getElementById("course").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const feedback = document.getElementById("feedback").value;

    // Check for valid inputs
    if (name === "" || email === "" || age === "" || universityId === "" || course === "" || feedback === "" || !gender) {
        alert("Please fill in all required fields.");
        return false;
    }

    // Check if the email is valid
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Check if the age is between 16 and 60
    if (age < 16 || age > 60) {
        alert("Please enter a valid age between 16 and 60.");
        return false;
    }

    // Success message
    alert("Form submitted successfully!");
    return true;
}
