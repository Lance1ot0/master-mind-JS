const colorsArray = ["blue", "pink", "green", "yellow", "orange"];

const colors = {"pink":"#EF065B",
                "orange":"#F8763A",
                "yellow":"#FAD038",
                "green":"#92D784",
                "blue":"#3993DD",
                "ballsColor": "#999999",
                "clueBallColor": "#413E39"};

let numberTurnLeft = 10;


// Generates a sequence of 4 random colors
function randomSequenceColor() {
    let colorsSelectedArray = [];

    for (let i = 0; i < 4; i++) 
    {
        let randomNumber = Math.floor(Math.random() * colorsArray.length)
        colorsSelectedArray.push(colorsArray[randomNumber]);
    }

    return colorsSelectedArray;
}

// Compare player and computer sequence order
function colorSequenceOrderVerif(playerColors, computerColors) {
    let colorRightPosition = 0;

    for (let i = 0; i < 4; i++)
    {

        if(playerColors[i] == computerColors[i])
        {
            colorRightPosition ++;
        }

    }
    return colorRightPosition;
}

// Compare player and computer sequence order
function colorInComputerSequenceVerif(playerColors, computerColors){

    let computerColorsCopy = [...computerColors];

    for(let i = 0; i < 4; i++)
    {
        if(computerColorsCopy.indexOf(playerColors[i]) != -1)
        {
            console.log("La couleur : " + playerColors[i], "est dans la séquence ordi");

            computerColorsCopy.splice(computerColorsCopy.indexOf(playerColors[i]), 1);
            console.log(computerColorsCopy);
        } 
    }

    return 4 - computerColorsCopy.length;
}


const endblurDiv = document.querySelector("#endblurDisplay");
const endGametxt = document.querySelector("#endblurDisplay div span");
const colorSequenceContainer = document.querySelector("#color-display-container");

const numberTurnDiv = document.querySelector("#sub-selection-container div p");
numberTurnDiv.innerHTML = numberTurnLeft;


const pinkBtn = document.querySelector("#selection-color-container div :nth-child(1)");
const orangeBtn = document.querySelector("#selection-color-container div :nth-child(2)");
const yellowBtn = document.querySelector("#selection-color-container div :nth-child(3)");
const greenBtn = document.querySelector("#selection-color-container div :nth-child(4)");
const blueBtn = document.querySelector("#selection-color-container div :nth-child(5)");

const newGameBtn = document.querySelector("header input");
const submitBtn = document.querySelector("#submit-btn");
const resetBtn = document.querySelector("#sub-selection-container input");

pinkBtn.style.backgroundColor = colors["pink"];
orangeBtn.style.backgroundColor = colors["orange"];
yellowBtn.style.backgroundColor = colors["yellow"];
greenBtn.style.backgroundColor = colors["green"];
blueBtn.style.backgroundColor = colors["blue"];


let colorSequenceBoard = [];
let clueBallsGlobalArray = [];

function initColorBoard(){

    let rowNumber = 1;

    for(let i = 0; i < 10; i++)
    {
        
        rowSequenceContainer = document.createElement("div");
        rowSequenceContainer.style.display = "flex";
        rowSequenceContainer.style.height = "10%";


        let numberDiv = document.createElement("div");
        numberDiv.style.flex = 2;
        numberDiv.style.display = "flex";
        numberDiv.style.justifyContent = "center";
        let numberP = document.createElement("p");
        numberP.innerHTML = rowNumber;
        numberDiv.appendChild(numberP);



        rowSequenceContainer.appendChild(numberDiv);

        let colorSequenceDiv = document.createElement("div");
        colorSequenceDiv.style.flex = 22;
        colorSequenceDiv.style.display = "flex";
        colorSequenceDiv.style.justifyContent = "space-around";
        colorSequenceDiv.style.alignItems = "center";

        let colorSequenceRow = [];

        for(let i = 0; i < 4; i++) 
        {
            
            let colorBall = document.createElement("div");
            colorBall.style.width = "25px";
            colorBall.style.height = "25px";
            colorBall.style.borderRadius = "100%";
            colorBall.style.backgroundColor = colors["ballsColor"];

            colorSequenceDiv.appendChild(colorBall);
            colorSequenceRow.push(colorBall);
        }

        colorSequenceBoard.push(colorSequenceRow);
        rowSequenceContainer.appendChild(colorSequenceDiv);




        let clueBallsDiv = document.createElement("div");
        clueBallsDiv.style.flex = 2;
        clueBallsDiv.style.display = "flex";
        clueBallsDiv.style.justifyContent = "center";
        clueBallsDiv.style.flexDirection = "column";

        let clueBallRowA = document.createElement("div");
        clueBallRowA.style.marginBottom = "3px";
        clueBallRowA.style.marginRight = "3px";
        clueBallRowA.style.display = "flex";
        clueBallRowA.style.justifyContent = "center";

        let clueBallRowB = document.createElement("div");
        clueBallRowB.style.marginTop = "3px";
        clueBallRowB.style.marginRight = "3px";
        clueBallRowB.style.display = "flex";
        clueBallRowB.style.justifyContent = "center";

        let clueBallsDivArray = [];

        for(let i = 0; i < 4; i++)
        {
            
            let clueBall = document.createElement("div");
            clueBall.style.width = "10px";
            clueBall.style.height = "10px";
            clueBall.style.borderRadius = "100%";
            clueBall.style.margin = "0px 4px";
            clueBall.style.backgroundColor = colors["clueBallColor"];

            clueBallsDivArray.push(clueBall);

            if (i < 2) 
            {
                clueBallRowA.appendChild(clueBall);
            }
            else
            {
                clueBallRowB.appendChild(clueBall);
            }
        }

        clueBallsGlobalArray.push(clueBallsDivArray);
        

        clueBallsDiv.appendChild(clueBallRowA);
        clueBallsDiv.appendChild(clueBallRowB);

        rowSequenceContainer.appendChild(clueBallsDiv);


        colorSequenceContainer.appendChild(rowSequenceContainer);
        rowNumber++;
    }


}

initColorBoard();


let gameTurnRow = 0;
let gameTurnColumn = 0;
let colorSequenceRow = [];
let gameWin = false;

function fillColorSelectionRow(bgColor, colorValue){

    if(colorSequenceRow.length < 4)
    {
        colorSequenceBoard[gameTurnRow][gameTurnColumn].style.backgroundColor = bgColor;

        colorSequenceRow.push(colorValue);
        gameTurnColumn++;
    }
    
}

function resetTurnRow(){
    if(!gameWin)
    {
        for(let i = 0; i < colorSequenceRow.length; i++)
        {
            colorSequenceBoard[gameTurnRow][i].style.backgroundColor = colors["ballsColor"];
        }
        gameTurnColumn = 0;
        colorSequenceRow = [];
    }
    
}

function endGameDisplay(text){
    endblurDiv.style.display = "flex";
    endGametxt.innerHTML = text;
}

function submitRowSequence(){

    if(colorSequenceRow.length == 4 && !gameWin)
    {
        numberTurnLeft--;
        numberTurnDiv.innerHTML = numberTurnLeft;

        let numberOfColorsInPosition = colorSequenceOrderVerif(colorSequenceRow, computerSequence)
        console.log("Nombre de couleur a la bonne position " + numberOfColorsInPosition);

        let numberOfColorsInSequence = colorInComputerSequenceVerif(colorSequenceRow, computerSequence)
        console.log("Nombre de couleur correct " + numberOfColorsInSequence);

        console.log("Nombre de couleur uniquement correct " + (numberOfColorsInSequence - numberOfColorsInPosition));

        let clueBallNumber = 0;

        while(clueBallNumber < numberOfColorsInPosition + (numberOfColorsInSequence - numberOfColorsInPosition))
        {
            if(numberOfColorsInPosition > clueBallNumber)
            {
                clueBallsGlobalArray[gameTurnRow][clueBallNumber].style.backgroundColor = "#D02541";
            }
            else if(numberOfColorsInPosition < numberOfColorsInSequence)
            {
                clueBallsGlobalArray[gameTurnRow][clueBallNumber].style.backgroundColor = "white";
            }

            clueBallNumber++;
            
        }
        
        if(numberTurnLeft == 0)
        {
            endGameDisplay("You lost!");
        }

        if(numberOfColorsInPosition == 4)
        {
            endGameDisplay("You win!");
            gameWin = true;
        }
        else
        {
            gameTurnRow++;
            gameTurnColumn = 0;
            colorSequenceRow = [];
        }
    }
    
}

function restartGame(){
    computerSequence = randomSequenceColor();
    console.log("Computer sequence :" + computerSequence);

    gameTurnRow = 0;
    gameTurnColumn = 0;
    colorSequenceRow = [];
    numberTurnLeft = 10;
    gameWin = false;
    numberTurnDiv.innerHTML = numberTurnLeft;
    endblurDiv.style.display = "none";

    for(let j = 0; j < colorSequenceBoard.length; j++)
    {
        for(let i = 0; i < 4; i++)
        {
            colorSequenceBoard[j][i].style.backgroundColor = colors["ballsColor"];
            clueBallsGlobalArray[j][i].style.backgroundColor = colors["clueBallColor"];
        }
    }
    
}

pinkBtn.onclick = function(){fillColorSelectionRow(colors["pink"], "pink");};
orangeBtn.onclick = function(){fillColorSelectionRow(colors["orange"], "orange");};
yellowBtn.onclick = function(){fillColorSelectionRow(colors["yellow"], "yellow");};
greenBtn.onclick = function(){fillColorSelectionRow(colors["green"], "green");};
blueBtn.onclick = function(){fillColorSelectionRow(colors["blue"], "blue");};

newGameBtn.onclick = restartGame;
resetBtn.onclick = resetTurnRow;
submitBtn.onclick = submitRowSequence;

// Creating the computer color sequence
let computerSequence = randomSequenceColor();


// Logs for verification
console.log("Computer sequence :" + computerSequence);