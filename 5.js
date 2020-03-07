/*Write a program that draws a triangle like 
the one below given the height as an argument 
(using for and then using while): */


/*function triang (num){
    a = num * "*"
    
    
    console.log (a)*/


/*const args = process.argv.slice(2);
let num = Number(args[0]);

console.log(num * "*");*/

function pyramid(numPisos) {
    for (let i = 0; i < numPisos; i++) {
      let piso = '';
      for (let j = 0; j < i + 1; j++) {
        piso = piso + '*';
      }
      
    }
  }
  console.log(piso)
