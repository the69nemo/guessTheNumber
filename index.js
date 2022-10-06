const countdownText = document.querySelector(".countdown-text");
const input = document.querySelector(".input");
const tip = document.querySelector(".tip");
const commentText = document.querySelector(".comment");
const form = document.querySelector(".form");
const button = document.querySelector(".button");
const audioWin = new Audio('./music/win.mp3');
const audioLoss = new Audio('./music/loss.mp3');

function game() {
  let count = 6;
  const randomNum = Math.floor(Math.random() * 100) + 1;
  let userNumber = 0;
  let userNumberArr = [];

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    userNumber = input.value;

    if (userNumber == randomNum) {
      tip.textContent = "";
      commentText.textContent = '';
      countdownText.textContent = `Поздравляем, вы угадали число`;
      countdownText.style.color = 'red'
      button.setAttribute('disabled', 'disabled');
      button.style.backgroundColor = 'rgba(234, 240, 234, 0.582)';
      audioWin.play();
    } else if ((userNumber < randomNum | userNumber > randomNum) && count !== 0){
      switch (count) {
        case 6:
        case 5:
          if (userNumber < randomNum) {
            tip.textContent = "Больше"
          } else {
            tip.textContent = "Меньше"
          }
          count--;
          countdownText.textContent = `У вас осталось ${count + 1} попыток`;
          userNumberArr.push(userNumber);
          commentText.textContent = `Вы ввели: ${userNumberArr.join(', ')}`;
          break;
        case 4:
        case 3:
        case 2:
          if (userNumber < randomNum) {
            tip.textContent = "Больше"
          } else {
            tip.textContent = "Меньше"
          }
          count--;
          userNumberArr.push(userNumber);
          countdownText.textContent = `У вас осталось ${count + 1} попытки`;
          commentText.textContent = `Вы ввели: ${userNumberArr.join(', ')}`;
          break;
        case 1:
          if (userNumber < randomNum) {
            tip.textContent = "Больше"
          } else {
            tip.textContent = "Меньше"
          }
          userNumberArr.push(userNumber);
          countdownText.textContent = `У вас осталась последняя попытка`;
          commentText.textContent = `Вы ввели: ${userNumberArr.join(', ')}`;
          count = 0
        default:
          break;
      }
    } else {
      countdownText.textContent = `У вас не осталось попыток`;
      tip.textContent = '';
      commentText.textContent = '';
      button.setAttribute('disabled', 'disabled');
      button.style.backgroundColor = 'rgba(234, 240, 234, 0.582)'
      audioLoss.play();
    }
  });
}

game();
