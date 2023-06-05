// Example JavaScript code
function submitForm() {
    // Handle form submission
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    
    // Process the form data
    // ...
    
    // Reset the form
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
  }
  
  // Event listener for form submission
  document.getElementById('myForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission behavior
    submitForm();
  });
  