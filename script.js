const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter up to three characters: ', (text) => {
    rl.question('Enter text color (color keyword or hexadecimal number): ', (textColor) => {
        rl.question('Choose a shape (circle, triangle, square): ', (shapeChoice) => {
            rl.question('Enter shape color (color keyword or hexadecimal number): ', (shapeColor) => {
                // SVG Generation
                const svgTemplate = `<svg width="300" height="200">
                    <circle cx="150" cy="100" r="50" fill="${shapeColor}" />
                    <text x="150" y="100" fill="${textColor}" font-size="16" text-anchor="middle">${text}</text>
                </svg>`;
                
                // SVG File Creation
                fs.writeFile('logo.svg', svgTemplate, (err) => {
                    if (err) throw err;
                    console.log('Generated logo.svg');
                    rl.close();
                });
            });
        });
    });
});
