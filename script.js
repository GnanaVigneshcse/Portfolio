// Form submission handling (just a simple log for now)
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent page reload on form submission
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    
    // Example of a simple form validation
    if (name && email && message) {
        console.log("Message sent!");
        alert("Thank you for your message, " + name + "!");
        // Clear the form
        document.getElementById("contact-form").reset();
    } else {
        alert("Please fill out all fields!");
    }
});
