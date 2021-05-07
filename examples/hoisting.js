/* Variables */
console.log(a);
//console.log(b);
//console.log(c);

var a = "a";
let b = "b";
const c = "c";

/* Functions */
funcDeclaration();
funcExpression();

function funcDeclaration() {
  console.log("Declaration");
}

const funcExpression = function() {
  console.log("Expression");
};
