// PHASE 1

//Write potato x 10

function ten() {
  console.log("patata ".repeat(10));
}

ten();

// PHASE 2

//Write potato x 10

function ten(word) {
  console.log(word.repeat(10));
}

ten('Patata ');
ten('Aguacate ');
ten('Pizza ');

// PHASE 3

function writeThis(word, times) {
  console.log(word.repeat(times));
}

writeThis('Patata ', 10);
writeThis('Aguacate ', 7);
writeThis('Pizza ', 50);

// PHASE 4

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function writeThis(word, times) {
  console.log(word.repeat(times));
}

let randomNumber = getRandomNumber(10)

writeThis('Patata ', randomNumber);
writeThis('Aguacate ', randomNumber);
writeThis('Pizza ', randomNumber);

console.log(randomNumber);

// PHASE 5

const myWordList =  [
  {
    text: 'Pencil',
    total: 6
  },
  {
    text: 'Thermo',
    total: 2
  },
  {
    text: 'TV',
    total: 8
  },
  {
    text: 'Phone',
    total: 4
  }
];

function writeMyArray(word, times) {
  console.log(word.repeat(times));
}

for (let element of myWordList) {
  let word = element.text;
  let times = element.total;
  console.log(element, word, times)
  writeMyArray(word, times);
}