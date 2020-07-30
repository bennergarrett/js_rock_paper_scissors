function computerPlay(){
    // choices in array to easily use
    //
    let choices =  ['rock', 'paper', 'scissors'];
    // create random number
    //
    randNumber = Math.floor(Math.random()*choices.length);
    // show random number to ensure between range
    //
    // console.log(`random number is ${randNumber}`);
    //choose computer choice and return
    //
    randChoice = choices[randNumber];
    return randChoice;

}

function playerPlay(){
    let answer = false;
    while (!answer){
        let choices =  ['rock', 'paper', 'scissors'];
        let playerChoice = prompt('Please choose Rock, Paper, or Scissors');

        if (playerChoice != null) {
            playerChoice = playerChoice.toLowerCase();
            for(let i=0;i<3; i++){
                if (playerChoice == choices[i]){
                    return choices[i];
                    answer=true;
                }
            }
        }
    }
}

function playRound(computerSelection, playerSelection, score){
    if (playerSelection === null || playerSelection === "" ) {
        playerSelection = playerPlay()

    }

    if (computerSelection === playerSelection){
        return 'It\'s a tie!';
    }
    else if(computerSelection === 'paper' && playerSelection === 'rock'){
        score[0] = score[0] + 1;
        return 'You lose! Paper beats Rock';
    }
    else if(computerSelection === 'paper' && playerSelection === 'scissors'){
        score[1] = score[1] + 1;
        return 'You Win! Scissors beats paper';
    }
    else if(computerSelection === 'rock' && playerSelection === 'scissors'){
        score[0] = score[0] + 1;
        return 'You lose! Rock beats Scissors';
    }
    else if(computerSelection === 'rock' && playerSelection === 'paper'){
        score[1] = score[1] + 1;
        return 'You Win! Paper beats Rock';
    }
    else if(computerSelection === 'scissors' && playerSelection === 'paper'){
        score[0] = score[0] + 1;
        return 'You lose! Scissors beats Paper';
    }
    else if(computerSelection === 'scissors' && playerSelection === 'rock'){
        score[1] = score[1] + 1;
        return 'You Win! Rock beats Scissors';
    }

}

function playGame(){
    //computer index 0, player index 1
    //
    let score = [0, 0];
    for(let i=0; i<5; i++){
        console.log(`Round ${i+1}!`)
        let computerChoice = computerPlay();
        let playerChoice = playerPlay();
        console.log(playRound(computerChoice, playerChoice, score));
        console.log(`Computer Score: ${score[0]} \t|\t Player Score: ${score[1]}\n\n`);
        // console.log(`Player Score: ${score[1]}\n\n`);
    }

    if (score[1] >= score[0]){
        console.log('You win!');
    }
    else if (score[1] <= score[0]){
        console.log('You lost!');
    }
    else{
        console.log('It\'s a tie!');
    }

}



console.log('hello!');
// let computerChoice = computerPlay();
// let playerChoice = playerPlay();
console.log(playGame())