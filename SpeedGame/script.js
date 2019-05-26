let buttons = [
  document.getElementById('button0'),
  document.getElementById('button1'),
  document.getElementById('button2'),
  document.getElementById('button3'),
];

//event handler for buttons
buttons[0].onclick = function() {clicked(0)};
buttons[1].onclick = function() {clicked(1)};
buttons[2].onclick = function() {clicked(2)};
buttons[3].onclick = function() {clicked(3)};


let current = 0; //current active button
let score = 0; //score
let pace = 1500; //speed

function clicked(i){
  console.log('clicked:', i );
  if (i !== current) {
    console.log('ups!');
    gameOver();
  } else {
    score++;
    pace = pace - 10;
    document.getElementById('score').innerHTML = score;
  }
}

function getRndButton (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pickNext() {
  let next = pickNew(current);

    buttons[current].style.backgroundColor = '#4e4d4d';
    buttons[next].style.backgroundColor = 'red';

  current = next;
console.log("Current", current);

  timer = setTimeout(pickNext, pace);

  function pickNew(previous) {
    let next = getRndButton(0, 3);
    if (next != previous){
      return next;
    } else {
      return pickNew(previous);
    }
  }
}

function gameOver() {
  clearTimeout(timer);
  for (let i = 0; i < 4; i++){
    buttons[i].style.backgroundColor = 'red';
    buttons[i].onclick = null;
  }
  let overlay = document.getElementById('win');
  let gameover = document.getElementById('gameover');

  overlay.style.visibility = 'visible';
  gameover.innerHTML = 'Ups, game over! <br> Your final score is ' + score;

}
