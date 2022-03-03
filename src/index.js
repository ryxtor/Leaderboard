import './style.css';
import { setScores } from './modules/leaderboardAPI.js';
import displayScores from './modules/display.js';

const submit = document.getElementById('submit-btn');
const refresh = document.getElementById('refresh-btn');
const name = document.getElementById('name-input');
const score = document.getElementById('score-input');
const youDied = document.getElementById('you-died');

displayScores();

refresh.addEventListener('click', () => {
  displayScores();
});

submit.addEventListener('click', () => {
  setScores(name.value, score.value);
  name.value = '';
  score.value = '';
});

const changeToUpperCase = (e) => {
  let start = e.target.selectionStart;
  let end = e.target.selectionEnd;
  e.target.value = e.target.value.toUpperCase();
  e.target.setSelectionRange(start, end);
}

name.addEventListener("keyup", changeToUpperCase, false);