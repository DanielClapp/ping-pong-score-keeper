const p1Score = document.getElementById('p1Score');
const p2Score = document.getElementById('p2Score');
const playTo = document.getElementById('playTo');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const reset = document.getElementById('reset');

let p1Count = 0;
let p2Count = 0;

let playToNumber = `${playTo.value}`;

// let playToNumber = playTo.value;
// console.log(playToNumber);
playTo.addEventListener('input', function (e) {
  e = playTo.value;
  console.log(e);
  return e;
});

console.log(playToNumber);

button1.addEventListener('click', () => {
  p1Count++;
  console.log(p1Count);
  p1Score.innerText = `${p1Count}`;
});
