
// Exercise 1 : Age Difference

/* 1 Given the years two people were born, find the
 date when the younger one is exactly half the age of the older. */

 let ageOlder = prompt("Give your year of birth of the older like: YYYY");
 //1950
 let ageYounger = prompt("Give your year of birth of the younger like: YYYY");
//2000

let halfDate= 2 * ageYounger - ageOlder;
console.log(halfDate);





// Exercise 2 : Zip Codes
//sans regex
const codePostalSansRegex = prompt(" entrer le code postal")
return String(codePostalSansRegex).length != 5 ||  !Number(codePostalSansRegex) ?   console.log("error") : console.log("succès");

// avec regex
const codePostalAvecRegex = prompt(" entrer le code postal")
const numberRegex = /^[\d+]{5}$/;  //peut contenir que des chiffres et le nombre de caractere precis
return numberRegex.test(codePostalAvecRegex) ?   console.log("succès") :  console.log("error") ;



// Exercice3
const motEntree = prompt("Veillez entrer un mot")
const motSansVoyelle = motEntree.replace(/[aeiou]/gi, '');
console.log("le mot sans les voyelles est " +motSansVoyelle);
//bonus
const a = 1
const e = 2
const i= 3
const o = 4
const u = 5
const  motSansVoyelleA = motEntree.replace(/[a]/gi, a)
const  motSansVoyelleAE = motSansVoyelleA.replace(/[e]/gi, e)
const  motSansVoyelleAEI = motSansVoyelleAE.replace(/[i]/gi, i)
const  motSansVoyelleAEIO = motSansVoyelleAEI.replace(/[o]/gi, o)
const  motSansVoyelleAEIOU = motSansVoyelleAEIO.replace(/[u]/gi, u)
console.log("Le nouveau mot apres avoir remplacé les voyelles par des caracteres est " +motSansVoyelleAEIOU)