
flipBtn.addEventListener('click', function() {
    let randomNum = Math.floor(Math.random() * 2) + 1;
    if (randomNum === 1) {
        headsCount++;
        headsCountElement.innerHTML = `Heads: ${headsCount}`;
        moneyImg.src = './assets/img/moneyFront.jpg';
    } else if (randomNum === 2) {
        tailsCount++;
        tailsCountElement.innerHTML = `Tails: ${tailsCount}`;
        moneyImg.src = './assets/img/moneyBack.jpg';
    }

    moneyImg.style.transform = "rotateY(270deg)";
    setTimeout(() => {
        moneyImg.style.transform = "rotateY(0deg)";
    }, 2000);
});

resetBtn.addEventListener('click', function() {
    headsCount = 0;
    tailsCount = 0;
    headsCountElement.textContent = `Heads: ${headsCount}`;
    tailsCountElement.textContent = `Tails: ${tailsCount}`;
    moneyImg.src = './assets/img/moneyFront.jpg';
    moneyImg.style.transform = "rotateY(270deg)";
    setTimeout(() => {
        moneyImg.style.transform = "rotateY(0deg)";
    }, 2000);
});


