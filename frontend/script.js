document.getElementById('submitForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get form data
    var formData = new FormData(this);
    var data = {};
    formData.forEach(function(value, key) {
        data[key] = value;
    });

    // Send form data to backend
    fetch('/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        // Show success message
        document.getElementById('message').innerText = data.message;
        // Clear form fields
        document.getElementById('submitForm').reset();
    })
    .catch(error => {
        // Show error message
        document.getElementById('message').innerText = 'Error occurred while submitting the form.';
    });
});
