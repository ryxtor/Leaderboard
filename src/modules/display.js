import { getScores } from './leaderboardAPI.js';

const ul = document.getElementById('ul');

const displayScores = () => {
  if (ul.querySelectorAll('li')) {
    Array.from(ul.querySelectorAll('li')).forEach((li) => {
      ul.removeChild(li);
    });
  }

  getScores().then((result) => {
    const orderScores = result.result.sort((a, b) => a.score - b.score);
    orderScores.forEach((score) => {
      const li = document.createElement('li');
      li.className = 'li';
      const p = document.createElement('p');
      const text = document.createTextNode(`${score.user}: ${score.score}`);
      p.appendChild(text);
      li.appendChild(p);
      ul.appendChild(li);
    });
  });
};

export default displayScores;