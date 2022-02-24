// DEBUT DU JEU

const colorsArray = ["blue", "red", "green", "yellow", "pink"];

// Fonction qui sélectionne 4 couleurs aléatoire

function randomSequenceColors() {
    let colorsSelectedArray = [];

    for (let i = 0; i < 4; i++) 
    {
        let randomNumber = Math.floor(Math.random() * 5)
        colorsSelectedArray.push(colorsArray[randomNumber]);
    }

    return colorsSelectedArray;
}



// Sélectionne la séquence de couleur de l'ordi
const ordiColors = randomSequenceColors();
console.log("La séquance de l'ordi :", ordiColors);



// Fonction de vériff

function colorSequenceOrderVerif(playerColors) {
    let colorRightPosition = 0;

    for (let i = 0; i < 4; i++)
    {
        console.log(playerColors[i] + " " + ordiColors[i]);

        if(playerColors[i] == ordiColors[i])
        {
            colorRightPosition ++;
        }

    }
    return colorRightPosition;
}



function colorPlayerInSequenceVerif(playerColors){
    let sequanceVerifArray = [...ordiColors]

    for (let i = 0; i < 4; i++)
    {
        for (let j = 0; j < 4; j++)
        {
            if(playerColors[i] == sequanceVerifArray[j])
            {
                sequanceVerifArray.splice(j, 1);
                j++;
            }
        }
    }
    console.log(sequanceVerifArray);
    return sequanceVerifArray

}


const redBtn = document.querySelector("#redButton");
const blueBtn = document.querySelector("#blueButton");
const yellowBtn = document.querySelector("#yellowButton");
const greenBtn = document.querySelector("#greenButton");
const pinkBtn = document.querySelector("#pinkButton");

const redSelectBox = document.querySelector("#colorSelectedBox :nth-child(1)");
const blueSelectBox = document.querySelector("#colorSelectedBox :nth-child(2)");
const yellowSelectBox = document.querySelector("#colorSelectedBox :nth-child(3)");
const greenSelectBox = document.querySelector("#colorSelectedBox :nth-child(4)");
const pinkSelectBox = document.querySelector("#colorSelectedBox :nth-child(5)");

const resetBtn = document.querySelector("#resetButtonBox :first-child");
const submtiBtn = document.querySelector("#submitButtonBox input");

const rightOrderColor = document.querySelector('#submitButtonBox :nth-child(1)');
const rightColor = document.querySelector('#submitButtonBox :nth-child(2)');

let colorTryBox = document.querySelector('#colorsTryBox');
let clueBallsBox = document.querySelector('#clueBallsBox');

const colorsSelectBoxArray = [redSelectBox, blueSelectBox, yellowSelectBox, greenSelectBox, pinkSelectBox];

let selectedColorIndex = 0;
let colorSequence = [];


function selectColorBoxFill(color){
    if (selectedColorIndex < 4)
    {
        colorsSelectBoxArray[selectedColorIndex].style.background = color;
        colorSequence.push(color);
        console.log(colorSequence);
        selectedColorIndex++;
    }
    
}

function resetColorsSelected(){

    selectedColorIndex = 0;

    for (let i = 0; i < colorSequence.length; i++)
    {
        colorsSelectBoxArray[i].style.background = "white";
    }
    colorSequence = [];
}



function colorSelectedValidated() {

    if (selectedColorIndex == 4)
    {   
        const colorHistoryBox = document.createElement('div');
        const colorsArray = [];
        for (let i = 0; i < 4; i++)
        {
            colorsArray.push(document.createElement('div'))
            colorsArray[i].style.border = "solid 1px black";
            colorsArray[i].style.background = colorSequence[i];
            colorsArray[i].style.margin = "0px 15px";
            colorsArray[i].style.borderRadius = "100%";
            colorsArray[i].style.width = "50px";
            colorsArray[i].style.height = "50px";
            colorHistoryBox.appendChild(colorsArray[i]);
        }
        console.log(colorsArray);
        

        colorHistoryBox.style.height = "10%"
        colorHistoryBox.style.margin = "4px 0px 0px 0px"
        colorHistoryBox.style.border = "solid 1px black";
        colorHistoryBox.style.display = "flex";
        colorHistoryBox.style.justifyContent = "center";
        colorHistoryBox.style.alignItems = "center";
        colorTryBox.appendChild(colorHistoryBox);

        let colorNumberInOrder = colorSequenceOrderVerif(colorSequence);
        console.log("Il y a " + colorNumberInOrder + " couleur.s bien placé dans la séquence");

        var colorNumberNotInSequence = colorPlayerInSequenceVerif(colorSequence).length;
        if (colorNumberNotInSequence > 0)
        {
            console.log("Il y a " + colorNumberNotInSequence + " couleur.s incorrect dans la séquence");
        }

        resetColorsSelected();

        const clueBallHistoryBox = document.createElement('div');
        const clueBallArray = [];
        for(let i = 0; i < colorNumberInOrder; i++)
        {
            clueBallArray.push(document.createElement('div'))
            clueBallArray[i].style.border = "solid 1px black";
            clueBallArray[i].style.background = "red";
            clueBallArray[i].style.margin = "0px 5px";
            clueBallArray[i].style.borderRadius = "100%";
            clueBallArray[i].style.width = "10px";
            clueBallArray[i].style.height = "10px";
            clueBallHistoryBox.appendChild(clueBallArray[i]);
        }

        clueBallHistoryBox.style.height = "10%"
        clueBallHistoryBox.style.margin = "4px 0px 0px 0px"
        clueBallHistoryBox.style.border = "solid 1px black";
        clueBallHistoryBox.style.display = "flex";
        clueBallHistoryBox.style.justifyContent = "center";
        clueBallHistoryBox.style.alignItems = "center";
        clueBallsBox.appendChild(clueBallHistoryBox);
    }
    else
    {
        console.log("Can't validate")
    }


}


redBtn.onclick = function(){selectColorBoxFill("red");};
blueBtn.onclick = function(){selectColorBoxFill("blue");};
yellowBtn.onclick = function(){selectColorBoxFill("yellow");};
greenBtn.onclick = function(){selectColorBoxFill("green");};
pinkBtn.onclick = function(){selectColorBoxFill("pink");};

resetBtn.onclick = resetColorsSelected;
submtiBtn.onclick = colorSelectedValidated;