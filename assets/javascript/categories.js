// Get the dark mode toggle element
const toggle = document.getElementById('dark-mode-toggle');

// Check the user's saved dark mode preference on page load
if (localStorage.getItem('dark-mode') === 'enabled') {
    document.body.classList.add('dark-mode');
    toggle.checked = true;
} else {
    document.body.classList.remove('dark-mode');
}

// Add event listener for the dark mode toggle
toggle.addEventListener('change', () => {
    if (toggle.checked) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('dark-mode', 'enabled'); // Save preference to localStorage
    } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('dark-mode', 'disabled'); // Save preference to localStorage
    }
});

// Array of colors/gradients
const colors = [
    'linear-gradient(to bottom, white, #e74c3c)', // Red
    'linear-gradient(to bottom, white, #3498db)', // Blue
    'linear-gradient(to bottom, white, #9b59b6)', // Purple
    'linear-gradient(to bottom, white, #f39c12)', // Orange
    'linear-gradient(to bottom, white, #2ecc71)', // Green
    'linear-gradient(to bottom, white, #1abc9c)', // Teal
    'linear-gradient(to bottom, white, #e67e22)', // Light Orange
    'linear-gradient(to bottom, white, #d35400)', // Dark Orange
    'linear-gradient(to bottom, white, #8e44ad)', // Dark Purple
    'linear-gradient(to bottom, white, #c0392b)', // Dark Red
    'linear-gradient(to bottom, white, #2980b9)', // Dark Blue
    'linear-gradient(to bottom, white, #7f8c8d)'  // Gray
];

// Function to get a color for each category
function getCategoryColor(index) {
    // Cycle through the colors array based on the index
    return colors[index % colors.length]; // Return a color from the array
}

// Sample categories data (this could also be fetched from a JSON file or an API)
const categories = [
    { "name": "Rock", "views": 150, "link": "categories/rock.html" },
    { "name": "Pop", "views": 120, "link": "categories/pop.html" },
    { "name": "Jazz", "views": 100, "link": "categories/jazz.html" },
    { "name": "Blues", "views": 90, "link": "categories/blues.html" },
    { "name": "Punk", "views": 80, "link": "categories/punk.html" },
    { "name": "Country", "views": 70, "link": "categories/country.html" },
    { "name": "Metal", "views": 60, "link": "categories/metal.html" },
    { "name": "Classical", "views": 50, "link": "categories/classical.html" },
    { "name": "Funk", "views": 40, "link": "categories/funk.html" },
    { "name": "Indie", "views": 30, "link": "categories/indie.html" },
    { "name": "80's", "views": 20, "link": "categories/80s.html" },
    { "name": "90's", "views": 10, "link": "categories/90s.html" }
];
// Function to display all categories
function displayAllCategories() {
    const categoryScroll = document.getElementById('category-scroll');

    categories.forEach((category, index) => {
        const categoryBox = document.createElement('div');
        categoryBox.className = 'category-box'; // Apply class for styling

        // Create an anchor tag that links to the category page
        const categoryLink = document.createElement('a');
        categoryLink.href = category.link; // Set link to the category page
        categoryLink.innerHTML = `${category.name} (${category.views || ''})`; // Set the category name and views
        categoryLink.style.background = getCategoryColor(index); // Set unique color

        categoryBox.appendChild(categoryLink); // Append the link to the box
        categoryScroll.appendChild(categoryBox); // Append the box to the scroll area
    });
}

// Call the function to display categories on page load
document.addEventListener('DOMContentLoaded', displayAllCategories);





// Random Tabs

// List of available tabs (with links to each tab page)
const tabs = [
    { name: "Rock", link: "categories/rock.html" },
    { name: "Pop", link: "categories/pop.html" },
    { name: "Jazz", link: "categories/jazz.html" },
    { name: "Blues", link: "categories/blues.html" },
    { name: "Punk", link: "categories/punk.html" },
    { name: "Country", link: "categories/country.html" },
    { name: "Metal", link: "categories/metal.html" },
    { name: "Classical", link: "categories/classical.html" },
    { name: "Funk", link: "categories/funk.html" },
    { name: "Indie", link: "categories/indie.html" },
    { name: "80's", link: "categories/80s.html" },
    { name: "90's", link: "categories/90s.html" }
];

// Function to get a random tab and redirect to it
function getRandomTab() {
    const randomIndex = Math.floor(Math.random() * tabs.length); // Get a random index
    const randomTab = tabs[randomIndex];
    window.location.href = randomTab.link; // Redirect to the selected tab page
}

// Add event listener to the "Random Tab" link
const randomTabLink = document.getElementById('random-tab-link');
randomTabLink.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    getRandomTab(); // Call the function to get a random tab
});
