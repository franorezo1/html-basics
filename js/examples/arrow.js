const arrFunc = () => "Hello world";
const bigArrFunc = () => ({ a: 1, b: 2 });

const normalFunc = function() {
  return "Hello world";
};

console.log(arrFunc(), bigArrFunc(), normalFunc());

const arr = [1, 2, 3, 4];

//const incrArr = arr.map(item => item + 1);
const incrArr = arr.map(function(item) {
  return item + 1;
});

console.log(incrArr);
