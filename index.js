
let hiddenNumber = Math.floor(Math.random() * 100);

const btnGuess = document.querySelector("#btn-guess");
const result =  document.querySelector("#result");
const guessInputNumber = document.querySelector("#guess-input-number");

// console.log('hiddenNumber: ' + hiddenNumber);
let lives = 5;
let isGameOver = false;

function generateHeart()
{
    const heartParent = document.querySelector('#heart');
    heartParent.innerHTML = '';
    
    for(let i = 0; i < lives; i++){
        const heart = document.createElement('i');
        heart.classList.add('fa');
        heart.classList.add('fa-heart');
        heartParent.appendChild(heart);
    }
}

function reset(){
    hiddenNumber = Math.floor(Math.random() * 100);
    // console.log('hiddenNumber: ' + hiddenNumber);
    lives = 5;
    btnGuess.innerHTML = "GUESS";
    result.innerHTML = "Guess the number!";
    btnGuess.style.backgroundColor = "#ff5c00"
    guessInputNumber.value = "";
    isGameOver = false;
    generateHeart();
}

generateHeart();

btnGuess.addEventListener('click', function(e){
    
    if(isGameOver)
    {
        reset();
        return;
    }
    
    const guessNumber = parseInt(guessInputNumber.value);
    
    if(hiddenNumber == guessNumber){
        result.innerHTML = "You win! Great Job";
        btnGuess.innerHTML = "PLAY AGAIN";
        btnGuess.style.backgroundColor = "green";
        isGameOver = true;
    }
    else if(hiddenNumber < guessNumber){
        result.innerHTML = "Too High!";
        lives -= 1;

    }
    else {
        result.innerHTML = "Too Low!";
        lives -=1;
    }

    console.log("Current " + lives);
    generateHeart();
    if(lives == 0){
       result.innerHTML = "You lose! The number is <span class='lose'>" + hiddenNumber + "</span><br> Please Try Again."
       btnGuess.innerHTML = "TRY AGAIN";
       btnGuess.style.backgroundColor = "red";
       isGameOver = true;
    }
});


