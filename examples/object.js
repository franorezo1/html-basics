const constObj = {
  a: 1,
  b: 2
};

let letObj = {
  a: 1,
  b: 2
};

console.log(constObj === letObj);

constObj.a = "Hello world!";

console.log(constObj, letObj);

letObj.c = 3;

console.log(letObj, letObj.d);
