let randomNumbers = new Array (9);
const gameboard = (function () {
    const array = new Array (9);
    for (let i = 0; i <= 8; i++) {
        array [i] = undefined;
    }
    return { array };
  })();

function createPlayer (name, marker) {
    return {name, marker};
}

const playerOne = createPlayer("Player One", "X");
const playerTwo = createPlayer("Player Two", "O");
let counter = 0;

function makeChoice () {
    let choice;
    if (counter % 2 == 0) {
        choice = playerOne.marker;
    } else {
        choice = playerTwo.marker;
    }
    counter++;
    return choice;
}

function startGame () {
    gameboard.array[randomNumbers[counter]] = makeChoice(); // insert random index number between 0 and 8. if index undefined then store value of playTurn inside it else call random function again
    let result = checkWinner();
    if (result == 1) {
        startGame ();
    } else {
        console.log(result);
    }
}

function generateNumbers () {
    for (let a = [0, 1, 2, 3, 4, 5, 6, 7, 8], i = a.length; i--;) {
        let random = a.splice(Math.floor(Math.random() * (i + 1)), 1)[0]; // stores first element of the newly returned array in the random variable
        randomNumbers[i] = random;
    }
    console.log(randomNumbers);
}

function checkWinner () {
    let arrayOfundefinedElements = gameboard.array.filter(element => element === undefined); // filter method creates a new array with all the elements that are undefined.
    let undefinedCount = arrayOfundefinedElements.length; // the .length returns the length of that array which would be the total number of undefined elements inside it
    console.log(undefinedCount);
    if (gameboard.array[0] == playerOne.marker && gameboard.array[1] == playerOne.marker && gameboard.array[2] == playerOne.marker) {
        return "Player One Wins!";
    } else if (gameboard.array[0] == playerTwo.marker && gameboard.array[1] == playerTwo.marker && gameboard.array[2] == playerTwo.marker) {
        return "Player Two Wins!";
    } else if (gameboard.array[0] == playerOne.marker && gameboard.array[3] == playerOne.marker && gameboard.array[6] == playerOne.marker) {
        return "Player One Wins!";
    } else if (gameboard.array[0] == playerTwo.marker && gameboard.array[3] == playerTwo.marker && gameboard.array[6] == playerTwo.marker) {
        return "Player Two Wins!";
    } else if (gameboard.array[0] == playerOne.marker && gameboard.array[4] == playerOne.marker && gameboard.array[8] == playerOne.marker) {
        return "Player One Wins!";
    } else if (gameboard.array[0] == playerTwo.marker && gameboard.array[4] == playerTwo.marker && gameboard.array[8] == playerTwo.marker) {
        return "Player Two Wins!";
    } else if (gameboard.array[1] == playerOne.marker && gameboard.array[4] == playerOne.marker && gameboard.array[7] == playerOne.marker) {
        return "Player One Wins!";
    } else if (gameboard.array[1] == playerTwo.marker && gameboard.array[4] == playerTwo.marker && gameboard.array[7] == playerTwo.marker) {
        return "Player Two Wins!";
    } else if (gameboard.array[2] == playerOne.marker && gameboard.array[4] == playerOne.marker && gameboard.array[6] == playerOne.marker) {
        return "Player One Wins!";
    } else if (gameboard.array[2] == playerTwo.marker && gameboard.array[4] == playerTwo.marker && gameboard.array[6] == playerTwo.marker) {
        return "Player Two Wins!";
    } else if (gameboard.array[2] == playerOne.marker && gameboard.array[5] == playerOne.marker && gameboard.array[8] == playerOne.marker) {
        return "Player One Wins!";
    } else if (gameboard.array[2] == playerTwo.marker && gameboard.array[5] == playerTwo.marker && gameboard.array[8] == playerTwo.marker) {
        return "Player Two Wins!";
    } else if (gameboard.array[3] == playerOne.marker && gameboard.array[4] == playerOne.marker && gameboard.array[5] == playerOne.marker) {
        return "Player One Wins!";
    } else if (gameboard.array[3] == playerTwo.marker && gameboard.array[4] == playerTwo.marker && gameboard.array[5] == playerOne.marker) {
        return "Player Two Wins!";
    } else if (gameboard.array[6] == playerOne.marker && gameboard.array[7] == playerOne.marker && gameboard.array[8] == playerOne.marker) {
        return "Player One Wins!";
    } else if (gameboard.array[6] == playerTwo.marker && gameboard.array[7] == playerTwo.marker && gameboard.array[8] == playerTwo.marker) {
        return "Player Two Wins!";
    } else if (undefinedCount == 0) {
        return "Draw";
    } else {
        return 1;
    }
}

generateNumbers();
startGame();
console.log(gameboard.array);

// function createUser (name, age, gender) {
//     let reputation = 0;
//     const getReputation = () => reputation;
//     const giveReputation = () => reputation++;
//     return { name, age, gender, getReputation, giveReputation };
//   }

// const userOne = createUser("Josh", 25, "Male");
// userOne.giveReputation();
// userOne.giveReputation();
// userOne.giveReputation();
// console.log(userOne.age);
// console.log(userOne.name);
// console.log(userOne.gender);
// console.log(userOne.getReputation());
// console.log(userOne);