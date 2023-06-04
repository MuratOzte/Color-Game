let playerChoise;
let color;
let playerScore = 0;
let maxScore = 0;


const getRandomColor = function(){
    randomValue = Math.floor(Math.random() * 9);
    if(randomValue == 0){
        return 'Red';
    }else if (randomValue === 1){
        return 'Orange';
    }else if (randomValue === 2){
        return 'Yellow';
    }else if (randomValue === 3){
        return 'Green';
    }else if (randomValue === 4){
        return 'Blue';
    }else if (randomValue === 5){
        return 'Pink';
    }else if (randomValue === 6){
        return 'Purple';
    }else if (randomValue === 7){
        return 'Brown';
    }else if (randomValue === 8){
        return 'Black';
    }
}

const mainGameFunction = function(){
    color = getRandomColor();
    colorText.textContent = color;
    scoreText.textContent = `Player Score : ${playerScore}`
}



const handlerFunction = function(anyColor){
    playerChoise = anyColor;
    if(color == playerChoise){
        playerScore += 1;
        mainGameFunction();
    }else if (color != playerChoise){
        if(playerScore >= maxScore){
            maxScore = playerScore;
            colorText.textContent = 'You lost!';
            maxScoreText.textContent = `High Score : ${maxScore}`;
            playerScore = 0;
            scoreText.textContent = `Player Score : ${playerScore}`
            // mainGameFunction();
        }else{
            colorText.textContent = 'You lost!';
            playerScore = 0;
            scoreText.textContent = `Player Score : ${playerScore}`
            // mainGameFunction();
        }
    }

}


GameStartButton.addEventListener('click',mainGameFunction);
redButton.addEventListener('click',handlerFunction.bind(this,'Red'));
orangeButton.addEventListener('click',handlerFunction.bind(this,'Orange'));
yellowButton.addEventListener('click',handlerFunction.bind(this,'Yellow'));
greenButton.addEventListener('click',handlerFunction.bind(this,'Green'));
blueButton.addEventListener('click',handlerFunction.bind(this,'Blue'));
pinkButton.addEventListener('click',handlerFunction.bind(this,'Pink'));
purpleButton.addEventListener('click',handlerFunction.bind(this,'Purple'));
brownButton.addEventListener('click',handlerFunction.bind(this,'Brown'));
blackButton.addEventListener('click',handlerFunction.bind(this,'Black'));

