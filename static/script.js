document.addEventListener('DOMContentLoaded', function() {
    let currentPlayer = 'X';
    const cells = document.querySelectorAll('td');
    const resetButton = document.getElementById('reset');

    cells.forEach(cell => {
        cell.addEventListener('click', function() {
            const row = cell.getAttribute('data-row');
            const col = cell.getAttribute('data-col');
            makeMove(row, col, cell);
        });
    });

    resetButton.addEventListener('click', function() {
        resetGame();
    });

    function resetGame() {
        fetch('/reset', { method: 'POST' })
            .then(response => response.json())
            .then(data => {
                if (data.status === 'reset') {
                    cells.forEach(cell => {
                        cell.textContent = '';
                        cell.classList.remove('disabled');
                    });
                    currentPlayer = 'X';
                }
            });
    }

    function makeMove(row, col, cell) {
        if (cell.textContent === '') {
            fetch('/move', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ row: row, col: col, player: currentPlayer })
            })
            .then(response => response.json())
            .then(data => {
                if (data.status === 'continue') {
                    cell.textContent = currentPlayer;
                    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                } else if (data.status === 'win') {
                    cell.textContent = currentPlayer;
                    showCustomAlert(`Player ${data.winner} wins!`, true);
                    cells.forEach(cell => cell.classList.add('disabled'));
                    setTimeout(resetGame, 3000); // Automatically reset after 3 seconds
                } else if (data.status === 'taken') {
                    showCustomAlert('Cell already taken. Try again.', false);
                }
            });
        }
    }

    function showCustomAlert(message, isWinMessage) {
        const alertBox = document.createElement('div');
        alertBox.classList.add('custom-alert');
        if (isWinMessage) {
            alertBox.classList.add('win');
        }
        alertBox.textContent = message;
        document.body.appendChild(alertBox);
        setTimeout(() => {
            alertBox.remove();
        }, 3000); // Remove the alert after 3 seconds
    }
});
