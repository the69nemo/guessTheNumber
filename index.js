const countdownText = document.querySelector(".countdown-text");
const input = document.querySelector(".input");
const tip = document.querySelector(".tip");
const commentText = document.querySelector(".comment");
const form = document.querySelector(".form");
const button = document.querySelector(".button");
const reset = document.querySelector(".reset");
const audioWin = new Audio('./music/win.mp3');
const audioLoss = new Audio('./music/loss.mp3');
const title = document.querySelector(".title");

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
      reset.style.display  = 'block';
      audioWin.play();
      form.style.display = 'none';
      title.style.display = 'none';
    } else if ((userNumber < randomNum | userNumber > randomNum) && count !== 0){
      switch (count) {
        case 6:
        case 5:
          userNumberArr.push(userNumber);
          if (userNumber < randomNum) {
            tip.textContent = "Больше"
          } else {
            tip.textContent = "Меньше"
          }
          count--;
          countdownText.textContent = `У вас осталось ${count + 1} попыток`;
          commentText.textContent = `Вы ввели: ${userNumberArr.join(', ')}`;
          input.value = '';
          break;
        case 4:
        case 3:
        case 2:
          userNumberArr.push(userNumber);
          if (userNumber < randomNum) {
            tip.textContent = "Больше"
          } else {
            tip.textContent = "Меньше"
          }
          count--;
          countdownText.textContent = `У вас осталось ${count + 1} попытки`;
          commentText.textContent = `Вы ввели: ${userNumberArr.join(', ')}`;
          input.value = '';
          break;
        case 1:
          userNumberArr.push(userNumber);
          if (userNumber < randomNum) {
            tip.textContent = "Больше"
          } else {
            tip.textContent = "Меньше"
          }
          countdownText.textContent = `У вас осталась последняя попытка`;
          commentText.textContent = `Вы ввели: ${userNumberArr.join(', ')}`;
          input.value = '';
          count = 0
        default:
          break;
      }
    } else {
      countdownText.textContent = `У вас не осталось попыток`;
      tip.textContent = '';
      commentText.textContent = '';
      form.style.display = 'none'
      title.style.display = 'none';
      audioLoss.play();
      reset.style.display  = 'block';
    }
  });
}

function restart () {
  window.location.reload();
}

game();
