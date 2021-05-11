
function first(b) {
  console.log("2:", a, b);

  var a = "Third world!";

  //a = "Third world!";

  function second() {
    console.log("3:", a);
  }

  second();
}

var a = "Hello world!";

console.log("1:", a);

first("Goodbye world!");
