// API Settings Management
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('apiSettingsForm');
    const currentUrlDisplay = document.getElementById('currentUrl');
    const successMessage = document.getElementById('successMessage');

    // Display the current API URL
    currentUrlDisplay.textContent = window.CONFIG.BACKEND_API_URL;

    // Set the selected radio button to the current URL
    const currentUrl = window.CONFIG.BACKEND_API_URL;
    const radioButton = document.querySelector(`input[name="apiUrl"][value="${currentUrl}"]`);
    if (radioButton) {
        radioButton.checked = true;
    }

    // Handle form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get the selected API URL
        const selectedUrl = document.querySelector('input[name="apiUrl"]:checked').value;

        // Save to localStorage
        localStorage.setItem('CUSTOM_BACKEND_API_URL', selectedUrl);

        // Update the global CONFIG object
        window.CONFIG.BACKEND_API_URL = selectedUrl;

        // Update the display
        currentUrlDisplay.textContent = selectedUrl;

        // Show success message
        successMessage.style.display = 'block';

        // Hide success message after 3 seconds
        setTimeout(function() {
            successMessage.style.display = 'none';
        }, 3000);
    });
});

