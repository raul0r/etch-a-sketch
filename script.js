const container = document.querySelector('.grid-container');
const totalSquares = 16 * 16;

for (let i = 0; i < totalSquares; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.onclick = function() {
        this.classList.toggle('active');
    };
    container.appendChild(square);
}