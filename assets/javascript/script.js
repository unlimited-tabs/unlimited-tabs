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

// List of guitar tabs with their names and file locations
const guitarTabs = [
  { title: "Song 1", url: "tabs/song1.html" },
  { title: "Song 2", url: "tabs/song2.html" }
  // Add more songs here
];

// Search function
document.getElementById('search-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting normally
  const query = document.querySelector('.search-input').value.toLowerCase();

  // Find matching guitar tabs
  const matchingTabs = guitarTabs.filter(tab => tab.title.toLowerCase().includes(query));

  // Reference to the <ul> where results will be displayed
  const resultContainer = document.getElementById('search-results');
  const resultsBox = document.getElementById('search-results-box');
  
  resultContainer.innerHTML = ''; // Clear previous results
  resultsBox.classList.remove('active'); // Hide results box initially

  if (matchingTabs.length > 0) {
    // Display each matching result as a list item
    matchingTabs.forEach(tab => {
      const resultItem = document.createElement('li');
      const link = document.createElement('a');
      link.href = tab.url;
      link.textContent = tab.title;
      resultItem.appendChild(link);
      resultContainer.appendChild(resultItem);
    });

    // Show the results box
    resultsBox.classList.add('active');
  } else {
    resultContainer.innerHTML = '<li>No matching guitar tabs found.</li>';
    resultsBox.classList.add('active');
  }
});




// Sample categories data (this would typically come from an API or JSON file)
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
    { "name": "80's", "views": 200, "link": "categories/80s.html" },
    { "name": "90's", "views": 100, "link": "categories/90s.html" }
  ];

  // Function to display top 10 categories
  function displayTopCategories() {
    const sortedCategories = categories.sort((a, b) => b.views - a.views).slice(0, 10);
    const categoryScroll = document.getElementById('category-scroll');

    sortedCategories.forEach((category, index) => {
      const categoryBox = document.createElement('div');
      categoryBox.className = 'category-box'; // Apply class for styling

      // Create an anchor tag inside the box
      const categoryLink = document.createElement('a');
      categoryLink.href = category.link; // Set link
      categoryLink.innerHTML = `${category.name} (${category.views})`; // Set text
      categoryLink.style.background = getCategoryColor(index); // Set unique color

      categoryBox.appendChild(categoryLink); // Append the link to the box
      categoryScroll.appendChild(categoryBox); // Append the box to the scroll area
    });
  }

  // Function to get a color for each category based on index
  function getCategoryColor(index) {
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
    return colors[index % colors.length]; // Cycle through colors
  }

  // Call the function to display categories on page load
  document.addEventListener('DOMContentLoaded', displayTopCategories);





// Random Tabs
// List of available tabs (with links to each tab page)
const tabs = [
    { title: "Song 1", link: "tabs/song1.html" },
    { title: "Song 2", link: "tabs/song2.html" }
    // Add more songs here
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
