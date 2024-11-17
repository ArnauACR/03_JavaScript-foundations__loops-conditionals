/* 
   Spot the bug 🐞
   Should print: "Most places consider you an adult."... but it doesn't, why?

   Add a comment explaining what is happenning and how to fix it
*/
//The poblem is in the returns, because the first if is completly and return ""You are in elementary school, kid." this text is printed but no is true the solution is or change the order to major if comaprison to minor o delete de equals "
const age = 20;

function checkAge(){
if (age < 3) {
  console.log("You're just a baby!");
  return;
}
if (age >= 3) {
  console.log("You are in elementary school, kid.");
  return;
}
if (age >= 13) {
  console.log("Nice, you're a teenager!");
  return;
}
if (age >= 18) {
  console.log("Most places consider you an adult.");
  return;
}

console.log("What? How did this happen!?");
return  
}

checkAge()
