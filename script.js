const container = document.querySelector('.grid-container');
const totalSquares = 16 * 16;

for (let i = 0; i < totalSquares; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    
    // Add mouseover event listener to toggle colored class
    square.addEventListener('mouseover', function() {
        this.classList.toggle('colored');
    });

    container.appendChild(square);
}