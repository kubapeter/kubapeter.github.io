// Backend API Configuration
// Detect environment based on hostname
const isProduction = window.location.hostname !== 'localhost' && 
                     window.location.hostname !== '127.0.0.1' &&
                     !window.location.hostname.startsWith('192.168.') &&
                     !window.location.hostname.startsWith('10.');

window.CONFIG = {
    BACKEND_API_URL: isProduction 
        ? 'https://kubapeter-backend.29uwppkvhe3f.eu-de.codeengine.appdomain.cloud' //'https://kubapetergithubio-backend-production.up.railway.app'
        : 'http://localhost:8080'
};
