/*
 BOUCLES - PRÉPA 2 : Plusieurs tables de multiplication
 Affichez les x premières valeurs des n premières tables de multiplication :
1. Demandez à l'utilisateur de choisir quelles tables de multiplication il souhaite afficher.
	Le message pourrait être : "Je peux vous afficher les n premières tables de multiplication.
	Dites-moi à laquelle vous souhaitez que je m'arrête. Par exemple, si vous entrez 4,
	je vous afficherai les tables de multiplication par 1, par 2, par 3 et par 4.
	Jusque quelle table voulez-vous que j'aille ?"
2. Demandez-lui combien de valeurs il souhaite voir pour chacune des tables.
	Le message pourrait être : "Combien de valeurs souhaitez-vous que j'affiche
	pour chacune de ces tables ?"
3. Affichez un message qui résume la demande de l'utilisateur :
	"OK, je vais vous afficher les … premières valeurs des … premières tables de multiplication."
4. Affichez ensuite le résultat avec, pour chacune des tables, un titre
	"Voici les … premières valeurs de la table de multiplication par …" 
*/

const iX = parseInt(prompt("Combien de valeurs voulez vous ?"));
const iN = parseInt(prompt("Combien de tables voulez vous ?"));

for (let i = 2; i <= iN; i++){
    for (let j = i; j){
        console.log(j);
    }
}