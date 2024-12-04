// Array of surprises to be displayed
const surprises = [
    "🎂 A special cake is on its way to your heart! 🎂",
    "🌟 You light up every room you walk into. Keep shining! 🌟",
    "🎁 Your gift: All the happiness in the universe wrapped with love! 🎁",
    "🎶 A little tune for you: *Happy Birthday to You!* 🎶",
    "💌 Final surprise: The world is better because of *you*. 💌"
];

// Array of image paths
const pictures = [
    "sam3.jpg",
    "sam4.jpg",
    "sam2.jpg",
    "sam1.jpg"

];

let surpriseIndex = 0;

// Function to reveal the surprises one by one
function revealNextSurprise() {
    const container = document.getElementById('surprise-container');
    container.classList.remove('hidden'); // Show the surprise container

    if (surpriseIndex < surprises.length) {
        const surpriseMessage = document.createElement('p');
        surpriseMessage.textContent = surprises[surpriseIndex];
        container.appendChild(surpriseMessage);
        surpriseIndex++;

        // Once all surprises are revealed, show pictures
        if (surpriseIndex === surprises.length) {
            revealPictures();
        }
    } else {
        alert("All surprises revealed! Hope you loved them, MANU...! 🎉");
    }
}

// Function to display the pictures dynamically
function revealPictures() {
    const gallery = document.getElementById('picture-gallery');
    gallery.classList.remove('hidden'); // Show the picture gallery

    pictures.forEach((pic) => {
        const img = document.createElement('img');
        img.src = pic; // Set image source
        img.alt = "Memorable Moment"; // Alt text
        img.classList.add('gallery-image'); // Add class for styling
        gallery.appendChild(img); // Add image to the gallery
    });
}

// Function to play the background music
function playMusic() {
    const tune = document.getElementById('birthday-tune');
    tune.play();
}

// Function to pause the background music
function pauseMusic() {
    const tune = document.getElementById('birthday-tune');
    tune.pause();
}
