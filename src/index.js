import './style.css';
import { setScores } from './modules/leaderboardAPI.js';
import displayScores from './modules/display.js';

const form = document.getElementById('form');
const refresh = document.getElementById('refresh-btn');
const name = document.getElementById('name-input');
const score = document.getElementById('score-input');
const youDied = document.getElementById('you-died');

displayScores();

refresh.addEventListener('click', () => {
  displayScores();
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  setScores(name.value, score.value);
  name.value = '';
  score.value = '';
  youDied.style.transition = 'opacity 1s linear 0s';
  youDied.style.opacity = 1;
  youDied.style.width = '100%';
  youDied.style.top = '25%';
  setTimeout(() => {
    youDied.style.opacity = 0;
  }, 3000);
  setTimeout(() => {
    youDied.style.width = '0';
    youDied.style.top = '-100%';
  }, 4200);
});

const changeToUpperCase = (e) => {
  const start = e.target.selectionStart;
  const end = e.target.selectionEnd;
  e.target.value = e.target.value.toUpperCase();
  e.target.setSelectionRange(start, end);
};

name.addEventListener('keyup', changeToUpperCase, false);