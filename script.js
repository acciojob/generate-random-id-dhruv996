document.addEventListener('DOMContentLoaded', function () {
  // Example usage
  const result1 = makeid(5);
  document.getElementById('result').innerText = `Random string of length 5: '${result1}'`;

  const result2 = makeid(10);
  document.getElementById('result').innerText += `\nRandom string of length 10: '${result2}'`;
});

function makeid(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }

  return result;
}

