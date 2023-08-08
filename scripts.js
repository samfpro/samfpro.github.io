// Get all section elements
const sections = document.querySelectorAll('.section');

// Get the synth knob element
const synthKnob = document.querySelector('.synth-knob');

// Initialize current section index
let currentSectionIndex = 0;

// Function to scroll to a specific section
function scrollToSection(index) {
    sections[index].scrollIntoView({ behavior: 'smooth' });
}

// Function to switch to the next section
function switchToNextSection() {
    currentSectionIndex = (currentSectionIndex + 1) % sections.length;
    scrollToSection(currentSectionIndex);
}

// Auto-scroll through sections when the page is idle
let autoScrollInterval = setInterval(switchToNextSection, 5000);

// Pause auto-scrolling when the synth knob is clicked
synthKnob.addEventListener('click', () => {
    clearInterval(autoScrollInterval);
});

// Resume auto-scrolling when the page is idle again
document.addEventListener('mousemove', () => {
    autoScrollInterval = setInterval(switchToNextSection, 5000);
});
