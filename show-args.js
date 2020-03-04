/*Write a NodeJS program that shows the arguments that you passed:

$ node show-args.js first second " third " 
Argument[0] = "first"
Argument[1] = "second"
Argument[2] = " third "*/

let Argument = ["First", "Second", "'Third'"];
let i = 0;
while (i < 3){

console.log(Argument[0+i]);
i++;
}
