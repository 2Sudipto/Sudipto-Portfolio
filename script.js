// Function to show Home Section
function showHome() {
    document.getElementById('home').style.display = 'block';
    document.getElementById('about').style.display = 'none';
    document.getElementById('projects').style.display = 'none';
}

// Function to show About Me Section
function showAbout() {
    document.getElementById('home').style.display = 'none';
    document.getElementById('about').style.display = 'block';
    document.getElementById('projects').style.display = 'none';
}

// Function to show Projects Section
function showProjects() {
    document.getElementById('home').style.display = 'none';
    document.getElementById('about').style.display = 'none';
    document.getElementById('projects').style.display = 'block';
}

// Default view is Home
window.onload = function() {
    showHome();
}
