
const colorSequenceContainer = document.querySelector("#color-display-container");

const colors = {"red":"#EF065B",
                "orange":"#F8763A",
                "yellow":"#FAD038",
                "green":"#92D784",
                "blue":"#3993DD",
                "ballsColor": "#999999"};


const pinkBtn = document.querySelector("#selection-color-container div :nth-child(1)");
const orangeBtn = document.querySelector("#selection-color-container div :nth-child(2)");
const yellowBtn = document.querySelector("#selection-color-container div :nth-child(3)");
const greenBtn = document.querySelector("#selection-color-container div :nth-child(4)");
const blueBtn = document.querySelector("#selection-color-container div :nth-child(5)");

const submitBtn = document.querySelector("#submit-btn");

pinkBtn.style.backgroundColor = colors["red"];
orangeBtn.style.backgroundColor = colors["orange"];
yellowBtn.style.backgroundColor = colors["yellow"];
greenBtn.style.backgroundColor = colors["green"];
blueBtn.style.backgroundColor = colors["blue"];


let colorSequenceBoard = [];

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
        clueBallRowA.style.display = "flex";
        clueBallRowA.style.justifyContent = "space-around";

        let clueBallRowB = document.createElement("div");
        clueBallRowB.style.marginTop = "3px";
        clueBallRowB.style.display = "flex";
        clueBallRowB.style.justifyContent = "space-around";

        for(let i = 0; i < 4; i++)
        {
            
            let clueBall = document.createElement("div");
            clueBall.style.width = "10px";
            clueBall.style.height = "10px";
            clueBall.style.borderRadius = "100%";
            clueBall.style.backgroundColor = "white";

            if (i < 2) 
            {
                clueBallRowA.appendChild(clueBall);
            }
            else
            {
                clueBallRowB.appendChild(clueBall);
            }
        }
        
        clueBallsDiv.appendChild(clueBallRowA);
        clueBallsDiv.appendChild(clueBallRowB);

        rowSequenceContainer.appendChild(clueBallsDiv);


        colorSequenceContainer.appendChild(rowSequenceContainer);
        rowNumber++;
    }

    




}

initColorBoard();

console.log(colorSequenceBoard);
