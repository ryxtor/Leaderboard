const api = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/stsatQaQOZkEyfJMnnPo/scores';

export const getScores = async () => {
  const response = await fetch(api);
  const scores = await response.json();
  return scores;
};

export const setScores = async (username, deaths) => {
  const response = await fetch(api, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user: username, score: deaths }),
  });
  const scores = response.json();
  return scores;
};