/*
BOUCLES - PRÉPA 1 : Une table de multiplication
Affichez les x premières valeurs de la table de multiplication choisie par l'utilisateur.
1. Demandez à l'utilisateur de choisir la table de multiplication qu'il souhaite afficher :
	"Quelle table de multiplication souhaitez-vous afficher ? La table de multiplication par"
2. Demandez-lui combien de valeurs il souhaite voir pour cette table :
	"Combien de valeurs souhaitez-vous afficher pour cette table ?"
3. Affichez le résultat avec un titre :
	"Voici les … premières valeurs de la table de multiplication par … :"
N.B. Faites-le de deux manières différentes :
	1°) avec une boucle FOR
	2°) avec une boucle WHILE
*/

// avec FOR

// let iTable = parseInt(prompt("Quelle table de multiplication souhaitez-vous afficher ? La table de multiplication par"));
// let iValeur = parseInt(prompt("Combien de valeurs souhaitez-vous afficher pour cette table ?"));
//
// console.log(`Voici les ${iValeur} premières valeurs de la table de multiplication par ${iTable} :`);
//
// for (let i = 0; i < iValeur; i++){
//     console.log(iTable*(i+1));
// }


// avec WHILE

const iTable = parseInt(prompt("Quelle table de multiplication souhaitez-vous afficher ? La table de multiplication par"));
const iValeur = parseInt(prompt("Combien de valeurs souhaitez-vous afficher pour cette table ?"));

console.log(`Voici les ${iValeur} premières valeurs de la table de multiplication par ${iTable} :`);

let i=0;
while (i<iValeur){
    console.log(iTable*(i+1));
    i++;
}