// let iVar = 0;

// while (iVar <5){
//   console.log(`iVar = ${iVar}`);
//   iVar = iVar +1;
// }


for (let iVar = 0; iVar <5; iVar = iVar +1){
    console.log(`iVar = ${iVar}`);
}


let sVar;
while (true){
    sVar = prompt("Entrez un nombre");
    if (parseInt(sVar) === 42) {
        break;
    }
    // console.log("Bouh !");
}