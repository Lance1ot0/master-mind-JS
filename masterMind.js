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


function playerColorChoice() {
    let choicesArray = [];
    let i = 0;

    while (i < 4)
    {
        let choice = prompt("Choissisez une couleur : (blue, red, green, yellow, pink)");
        choiceIsColor = false;

        // Vérifie si le choix du joueur est une couleur ou non
        for (let i = 0; i < 5; i++) {
            if (choice == colorsArray[i]) 
            {
                choiceIsColor = true;
            }
        }

        if (choiceIsColor)
        {
            choicesArray.push(choice);
            i++;
        }
        else
        {
            alert("C'est pas une couleur !");
        }
        
    }
    
    return choicesArray;
}


function colorPlayerInSequenceVerif(){
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


function colorSequenceOrderVerif() {
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




let roundNumber = 3;
let gameWin = false;


// Sélectionne la séquence de couleur de l'ordi
// const ordiColors = randomSequenceColors();
// console.log("La séquance de l'ordi :", ordiColors);

// alert("Le jeu commence !");

// while (roundNumber > 0 || gameWin)
// {
//     var playerColors = playerColorChoice();
//     console.log("La séquance du joueur :",playerColors);

//     var colorNumberInOrder = colorSequenceOrderVerif();
//     alert("Il y a " + colorNumberInOrder + " couleur.s bien placé");

//     if(colorNumberInOrder == 4)
//     {
//         gameWin = true;
//         break;

//     } 
//     else
//     {
//         var colorNumberNotInSequence = colorPlayerInSequenceVerif().length;
//         if (colorNumberNotInSequence > 0)
//         {
//             alert("Il y a " + colorNumberNotInSequence + " couleur.s incorrect dans la séquence");
//         }
//     }
//     roundNumber --;
//     console.log(gameWin);
//     console.log(roundNumber);

// }

// if (gameWin) 
// {
//     alert("Tu as gagné !");
// }
// else 
// {
//     alert("Tu as perdu !");
// }

















