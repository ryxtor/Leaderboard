import './style.css';
import { setScores } from './modules/leaderboardAPI.js';
import displayScores from './modules/display.js';

const submit = document.getElementById('submit-btn');
const refresh = document.getElementById('refresh-btn');
const name = document.getElementById('name-input');
const score = document.getElementById('score-input');

displayScores();

refresh.addEventListener('click', () => {
  displayScores();
});

submit.addEventListener('click', () => {
  setScores(name.value, score.value);
  name.value = '';
  score.value = '';
});