// Generate Number For Guess
const GeneratedNum = Math.floor(Math.random() * 100 + 1);
console.log(GeneratedNum);

// Select Elements From DOM
const UserGuess = document.querySelector("#UserGuess");
const SubmitBtn = document.querySelector("#submit");
const ErrorDiv = document.querySelector("#error");
const PrevGuess = document.querySelector("#PrevGuess");
const RemAttems = document.querySelector("#RemAttems");
const GameEndDiv = document.querySelector("#gameEnd");
const GameWinDiv = document.querySelector("#gameWin");

// For Play Game and Total Attempts
let PlayGame = true;
let Attems = 10;
RemAttems.innerHTML = Attems;

// Start The Game On Submit
SubmitBtn.addEventListener("click", () => {
    if (PlayGame) {
        if (Attems > 0) {
            ValidateNum(UserGuess.value);
        } else {
            endGame();
        }
    }
});

// Validate User Input Guess
function ValidateNum(e) {
    if (e === "") {
        PassMessage(`Please Enter a Number`);
    } else if (e > 100) {
        PassMessage(`Please Enter a Number Less Than 100`);
    } else if (e < 1) {
        PassMessage(`Please Enter a Number More Than 1`);
    } else {
        CheckNum(e);
        PrevGuess.innerHTML += `${e}, `;
        Attems--;
        RemAttems.innerHTML = Attems;

        // Check if game should end
        if (Attems === 0) {
            endGame();
        }
    }
}

// Check Number Against Generated Number
function CheckNum(guess) {
    if (guess == GeneratedNum) {
        ErrorDiv.innerText = `You Won! You Guessed the Right Number`;
        ErrorDiv.style.color = "green";
        setTimeout(winGame, 1500);
    } else if (guess > GeneratedNum) {
        PassMessage(`The Number is Too High.`);
    } else if (guess < GeneratedNum) {
        PassMessage(`The Number is Too Low.`);
    }
}

// Pass The Message To The User
function PassMessage(message) {
    ErrorDiv.innerText = message;
    UserGuess.value = "";
}

// End The Game
function endGame() {
    PlayGame = false; // Prevent further inputs
    GameEndDiv.style.display = "flex";
    UserGuess.disabled = true; // Disable the input
}

// Win The Game
function winGame() {
    PlayGame = false; // Prevent further inputs
    GameWinDiv.style.display = "flex";
    UserGuess.disabled = true; // Disable the input
}
