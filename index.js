document.addEventListener("DOMContentLoaded", function() {
    function rollDice() {
        var randomNumber1 = Math.floor(Math.random() * 6) + 1;
        var randomNumber2 = Math.floor(Math.random() * 6) + 1;

        var sixDiceImages = [
            "dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"
        ];

        document.querySelector(".leftImage").src = sixDiceImages[randomNumber1 - 1];
        document.querySelector(".rightImage").src = sixDiceImages[randomNumber2 - 1];

        if (randomNumber1 > randomNumber2) {
            document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
        } else if (randomNumber1 < randomNumber2) {
            document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
        } else {
            document.querySelector("h1").textContent = "Draw!!";
        }
    }

    document.querySelector("h1").textContent = "Ready to Roll?";

    document.getElementById("rollDiceBtn").addEventListener("click", rollDice);
});