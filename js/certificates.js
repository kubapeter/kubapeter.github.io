// Fetch Coursera certificates from API endpoint
async function loadCourseraCertificates() {
    try {
        // Use the globally defined backend API URL
        const apiUrl = `${window.BACKEND_API_URL}/api/certificates/coursera`;
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const certificates = await response.json();
        displayCourseraCertificates(certificates);
    } catch (error) {
        console.error('Error loading Coursera certificates:', error);
        const container = document.getElementById('coursera-certificates');
        container.innerHTML = '<p style="text-align: center; color: #999;">Unable to load certificates. Endpoint not yet implemented.</p>';
    }
}

// Display Coursera certificates in the DOM
function displayCourseraCertificates(certificates) {
    const container = document.getElementById('coursera-certificates');
    
    if (!certificates || certificates.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #999;">No certificates found.</p>';
        return;
    }
    
    container.innerHTML = certificates.map(cert => `
        <div class="certificate-card">
            <h3>${cert.name}</h3>
            <p><strong>Platform:</strong> Coursera</p>
            <p><strong>Issuer:</strong> ${cert.issuer}</p>
            <p><strong>Completion Date:</strong> ${cert.completionDate}</p>
            <a href="${cert.certificateUrl}" target="_blank">View Certificate</a>
        </div>
    `).join('');
}

// Load certificates when page loads
document.addEventListener('DOMContentLoaded', loadCourseraCertificates);
