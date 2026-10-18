document.addEventListener("DOMContentLoaded", function () {
    const board = document.getElementById("board");
    const squares = board.getElementsByTagName("div");

    let gameState = Array(9).fill("");
    let currentPlayer = "X";

    for (let i = 0; i < squares.length; i++) {
        squares[i].classList.add("square");

        squares[i].addEventListener("click", function () {
            gameState[i] = currentPlayer;
            squares[i].textContent = currentPlayer;
            squares[i].classList.add(currentPlayer);
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        });

        squares[i].addEventListener("mouseover", function () {
            squares[i].classList.add("hover");
        });

        squares[i].addEventListener("mouseout", function () {
            squares[i].classList.remove("hover");           
        });
    }
});