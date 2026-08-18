// API & Database Settings Management
document.addEventListener('DOMContentLoaded', function() {
    const apiForm = document.getElementById('apiSettingsForm');
    const dbForm = document.getElementById('dbSettingsForm');
    const currentUrlDisplay = document.getElementById('currentUrl');
    const currentDbDisplay = document.getElementById('currentDb');
    const apiSuccessMessage = document.getElementById('successMessage');
    const dbSuccessMessage = document.getElementById('dbSuccessMessage');

    // Display current API URL
    currentUrlDisplay.textContent = window.CONFIG.BACKEND_API_URL;

    // Set the selected API radio button
    const currentUrl = window.CONFIG.BACKEND_API_URL;
    const apiRadioButton = document.querySelector(`input[name="apiUrl"][value="${currentUrl}"]`);
    if (apiRadioButton) {
        apiRadioButton.checked = true;
    }

    // Display current database (only DB2 is currently active)
    let currentDb = localStorage.getItem('SELECTED_DATABASE') || 'DB2';
    if (currentDb !== 'DB2') {
        currentDb = 'DB2';
        localStorage.setItem('SELECTED_DATABASE', currentDb);
    }
    currentDbDisplay.textContent = currentDb;
    const dbRadioButton = document.querySelector(`input[name="database"][value="${currentDb}"]`);
    if (dbRadioButton) {
        dbRadioButton.checked = true;
    }

    // Handle API form submission
    apiForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const selectedUrl = document.querySelector('input[name="apiUrl"]:checked').value;
        localStorage.setItem('CUSTOM_BACKEND_API_URL', selectedUrl);
        window.CONFIG.BACKEND_API_URL = selectedUrl;
        currentUrlDisplay.textContent = selectedUrl;

        apiSuccessMessage.style.display = 'block';
        setTimeout(function() {
            apiSuccessMessage.style.display = 'none';
        }, 3000);
    });

    // Handle Database form submission
    dbForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const selectedDb = document.querySelector('input[name="database"]:checked').value;
        localStorage.setItem('SELECTED_DATABASE', selectedDb);
        currentDbDisplay.textContent = selectedDb;

        dbSuccessMessage.style.display = 'block';
        setTimeout(function() {
            dbSuccessMessage.style.display = 'none';
        }, 3000);
    });
});
