const container = document.querySelector('.grid-container');
const resetBtn = document.querySelector('#reset-btn');
const totalSquares = 16 * 16;

// Create grid
function createGrid() {
    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        
        // Add mouseover event listener to toggle colored class
        square.addEventListener('mouseover', function() {
            this.classList.toggle('colored');
        });

        container.appendChild(square);
    }
}

// Reset function
function resetGrid() {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.classList.remove('colored');
    });
}

// Add reset button event listener
resetBtn.addEventListener('click', resetGrid);

// Initial grid creation
createGrid();