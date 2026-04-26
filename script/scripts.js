// Function to load external HTML into a div
function loadComponent(file, elementId) 
{
    fetch(file)
        .then(response => 
        {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.text();
        })
        .then(data => 
        {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Error loading file:', error));
}

// Wrap your calls in this listener for 100% reliability
document.addEventListener("DOMContentLoaded", () => 
{
    loadComponent('header.html', 'header-placeholder');
    loadComponent('footer.html', 'footer-placeholder');
});