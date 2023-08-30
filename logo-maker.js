const fs = require('fs');
const prompt = require('prompt-sync')();

// Function to generate the SVG content
function generateSVG(text, textColor, shape, shapeColor) {
    return `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect width="100%" height="100%" fill="${shapeColor}" />
            <text x="50%" y="50%" font-size="48" fill="${textColor}" text-anchor="middle" dy=".3em">${text}</text>
        </svg>
    `;
}

// Get user inputs
const text = prompt('Enter up to three characters: ').slice(0, 3);
const textColor = prompt('Enter text color: ');
const shapeOptions = ['circle', 'triangle', 'square'];
const selectedShapeIndex = prompt('Choose a shape (' + shapeOptions.join(', ') + '): ');
const shape = shapeOptions[selectedShapeIndex];
const shapeColor = prompt('Enter shape color: ');

// Generate SVG content
const svgContent = generateSVG(text, textColor, shape, shapeColor);

// Write SVG content to logo.svg
fs.writeFileSync('logo.svg', svgContent);

console.log('Generated logo.svg');
