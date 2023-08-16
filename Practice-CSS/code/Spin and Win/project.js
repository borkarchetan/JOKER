// 1.   deposite some money
// 2.   determine number of lines to bet on
// 3.   collect a bet amount
// 4.   spin the slot machine
// 5.   check if the user won
// 6.   give the user their winnings
// 7.   play again

const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;

const SYMBOL_COUNT = {
    A: 2,
    B: 4,
    C: 6,
    D: 8,
};

const SYMBOL_VALUES = {
    A: 5,
    B: 4,
    C: 3,
    D: 2,
};

const deposite = () => {
    while (true) {
        const depositeAmount = prompt("Enter deposite amount : ");
        const numberDepositeAmount = parseFloat(depositeAmount);

        if (isNaN(numberDepositeAmount) || numberDepositeAmount <= 0) {
            console.log("Invalid number of amount, try again");
        } else {
            return numberDepositeAmount;
        }
    }
};

const getNumberOfLines = () => {
    while (true) {
        const lines = prompt("Enter the number of lines to bet (1 - 5) : ");
        const numberOfLines = parseFloat(lines);

        if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 5) {
            console.log("Invalid number of lines, try again");
        } else {
            return numberOfLines;
        }
    }
};

const getBet = (balance, lines) => {
    while (true) {
        const bet = prompt("Enter the total bet per line : ");
        const numberBet = parseFloat(bet);

        if (isNaN(numberBet) || numberBet <= 0 || numberBet >= balance / lines) {
            console.log("Invalid bet, try again");
        } else {
            return numberBet;
        }
    }
};

const spin = () => {
    const symbols = [];
    for (const [symbol, count] of Object.entries(SYMBOL_COUNT)) {
        for (let i = 0; i < count; i++) {
            symbols.push(symbol);
        }
    }

    const reels = [];
    for (let i = 0; i < COLS; i++) {
        reels.push([]);
        const reelSymbols = [...symbols];
        for (let j = 0; j < ROWS; j++) {
            const randomIndex = Math.floor(Math.random() * reelSymbols.length);
            const selectedSymbol = reelSymbols[randomIndex];
            reels[i].push(selectedSymbol);
            reelSymbols.splice(randomIndex, 1);
        }
    }
    return reels;
};

const transpose = (reels) => {
    const rows = [];
    for (let i = 0; i < ROWS; i++) {
        rows.push([]);
        for (let j = 0; j < COLS; j++) {
            rows[i].push(reels[j][i]);
        }
    }
    return rows;
};

const printRows = (rows) => {
    for (const row of rows) {
        let rowString = "";
        for (const [i, symbol] of row.entries()) {
            rowString += symbol;
            if (i != row.length - 1) {
                rowString += " | ";
            }
        }
        console.log(rowString);
    }
};

const getWinning = (rows, bet, lines) => {
    let winnings = 0;

    for (let row = 0; row < lines; row++) {
        const symbols = rows[row];
        let allSame = true;

        for (const symbol of symbols) {
            if (symbol != symbols[0]) {
                allSame = false;
                break;
            }
        }

        if (allSame) {
            winnings += bet * SYMBOL_VALUES[symbols[0]];
        }
    }
    return winnings;
};

const game = () => {
    let balance = deposite();

    while (true) {
        console.log("Current Balance: " + balance);
        const numberOfLines = getNumberOfLines();
        const bet = getBet(balance, numberOfLines);
        balance = bet * numberOfLines;
        const reels = spin();
        const rows = transpose(reels);
        printRows(rows);
        const winnings = getWinning(rows, bet, numberOfLines);
        balance += winnings;
        console.log("You Won, RS: " + winnings.toString());

        if (balance <= 0) {
            console.log("Don't have enough Balance: " + balance);
            break;
        }

        const playAgain = prompt("Do you want to play again (y/n)? ");
        if (playAgain != "y") {
            break;
        }
    }
};
game();