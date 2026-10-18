document.addEventListener("DOMContentLoaded", function () {
    const board = document.getElementById("board");
    const squares = board.getElementsByTagName("div");
    const status = document.getElementById("status");
    const newGameButton = document.querySelector(".btn");
    const originalMessage = status.textContent;

    const winningLines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    let gameState = Array(9).fill("");
    let currentPlayer = "X";
    let gameOver = false;

    for (let i = 0; i < squares.length; i++) {
        squares[i].classList.add("square");

        squares[i].addEventListener("click", function () {
            if (gameOver || gameState[i] !== "") {
            return;
            }
            gameState[i] = currentPlayer;
            squares[i].textContent = currentPlayer;
            squares[i].classList.add(currentPlayer);

            if (checkWinner(currentPlayer)) {
                status.textContent = "Congratulations! " + currentPlayer + " is the Winner!";
                status.classList.add("you-won");
                gameOver = true;
                return
            }
            currentPlayer = currentPlayer === "X" ? "O" : "X";
            }
        );

        squares[i].addEventListener("mouseover", function () {
            squares[i].classList.add("hover");
        });

        squares[i].addEventListener("mouseout", function () {
            squares[i].classList.remove("hover");           
        });
    }

    function checkWinner(player) {
        return winningLines.some(function(line) {
            return line.every(function(index) {
                return gameState[index] === player;
            });
        });
    }

    newGameButton.addEventListener("click", function () {
        gameState = Array(9).fill("");
        currentPlayer = "X";
        gameOver = false;
        for (let i = 0; i < squares.length; i++) {
            squares[i].textContent = "";
            squares[i].classList.remove("X", "O", "hover");
        }
        status.textContent = originalMessage;
        status.classList.remove("you-won");
    });
});