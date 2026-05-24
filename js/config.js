// Backend API Configuration
// Check if user has manually selected a custom API URL
const customApiUrl = localStorage.getItem('CUSTOM_BACKEND_API_URL');

if (customApiUrl) {
    // Use the manually selected URL from localStorage
    window.CONFIG = {
        BACKEND_API_URL: customApiUrl
    };
} else {
    // Detect environment based on hostname (default behavior)
    const isProduction = window.location.hostname !== 'localhost' &&
                         window.location.hostname !== '127.0.0.1' &&
                         !window.location.hostname.startsWith('192.168.') &&
                         !window.location.hostname.startsWith('10.');

    window.CONFIG = {
        BACKEND_API_URL: isProduction
            ? 'https://kubapeter-backend.29uwppkvhe3f.eu-de.codeengine.appdomain.cloud'
            : 'http://localhost:8080'
    };
}
