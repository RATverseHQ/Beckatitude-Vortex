document.addEventListener('DOMContentLoaded', () => {
    const shrekButton = document.getElementById('shrek-button');
    const cubeSides = document.querySelectorAll('.cube div');

    console.log("Shrek Button:", shrekButton); // Debugging
    console.log("Cube Sides:", cubeSides); // Debugging

    shrekButton.addEventListener('click', () => {
        console.log("Shrek Mode Activated!"); // Debugging

        // Change cube sides to various shades of green
        const greens = ['#6B8E23', '#556B2F', '#8FBC8F', '#66CDAA', '#32CD32', '#00FF00'];
        cubeSides.forEach((side, index) => {
            side.style.background = greens[index % greens.length];
            side.style.backgroundImage = ''; // Reset background images
        });

        // Play "All Star"
        const audio = new Audio('https://archive.org/download/SmashMouthAllStar/SmashMouth-AllStar.mp3');
        audio.play().catch((error) => {
            console.error("Audio playback failed:", error);
        });

        // Add Shrek's face to the front side
        const frontSide = document.querySelector('.front');
        if (frontSide) {
            frontSide.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2017/01/06/19/15/shrek-1956910_1280.png')";
            frontSide.style.backgroundSize = 'cover';
            frontSide.style.backgroundRepeat = 'no-repeat';
            frontSide.style.backgroundPosition = 'center';
        } else {
            console.error("Front side not found for Shrek's face!");
        }
    });
});
