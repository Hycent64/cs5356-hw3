// API endpoint for a random useless fact
const factApiUrl = "https://uselessfacts.jsph.pl/api/v2/facts/random?language=en";

// Function to fetch data and update the DOM
async function fetchUselessFact() {
  try {
    // Fetch data from the API
    const response = await fetch(factApiUrl, {
      headers: {
        Accept: "application/json", // Request JSON response
      },
    });
    const data = await response.json();

    // Get the container for the fact
    const factContainer = document.getElementById("fact");

    // Display the fact
    factContainer.innerText = data.text;

    // Alternate the background color
    alternateBackgroundColor();
  } catch (error) {
    console.error("Error fetching useless fact:", error);
  }
}

// Function to alternate the background color
function alternateBackgroundColor() {
  const currentColor = document.body.style.backgroundColor;
  const newColor = currentColor === 'rgb(212, 231, 252)' ? '#f8f1f8' : '#d4e7fc';
  document.body.style.backgroundColor = newColor;
}

// Add event listener to the button
document.getElementById("getFact").addEventListener("click", fetchUselessFact);

// Add event listener for mousemove on the image
const image = document.querySelector('.rounded-photo');
image.addEventListener('mousemove', () => {
  image.style.filter = 'grayscale(100%)';
});

// Add event listener for mouseout to reset the filter
image.addEventListener('mouseout', () => {
  image.style.filter = 'none';
});