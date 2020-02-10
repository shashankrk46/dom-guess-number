let min=1;
let max=10;
let winningNum=getRandomNum(min,max);
let guessLeft=3;


// ui elememts

const game=document.querySelector('#game');
const minNum=document.querySelector('.min-num');
const maxNum=document.querySelector('.max-num');
const guessBtn=document.querySelector('#guess-btn');
const guessInput=document.querySelector('#guess-input');
const message=document.querySelector('.message');

// assign min and max

minNum.textContent=min;
maxNum.textContent=max;

// play again event listener
game.addEventListener('mousedown',function(e){
 if(e.target.className==='play-again'){
   window.location.reload();
 }
})

// listen for guess

guessBtn.addEventListener('click',function(){
  let guess=parseInt(guessInput.value);
  
  if(isNaN(guess)|| guess<min || guess>max){
    setMessage(`please enter a number between ${min} and ${max}`,'red');
  }

  // check if won 
  if(guess===winningNum){
    // game over won

    gameOver(true,`${winningNum} is correct`)
    
    
  }else{
    guessLeft-=1;

    if(guessLeft===0){
      // game over lost
     gameOver(false,`Game over,you lost. The correct number was ${winningNum}`,'red');
      
    }else{
       // game continues -answer wrong
      // change border color
       guessInput.style.borderColor='red';

      //  clear input
      guessInput.value='';
      // tell user its the wrong number
       setMessage(`${guess} is not correct,${guessLeft} guesses left`,'red')
    }
  }
});

// game over 
function gameOver(won,msg){
  let color;
  won===true?color='green':color='red';

  guessInput.disabled=true;
  // change border color
  guessInput.style.borderColor=color;
  // set text color
  message.style.color=color;
  // setmessage
  setMessage(msg);
  // play again 

  guessBtn.value='Play Again';
  guessBtn.className+='play-again';

}
// get winning number
function getRandomNum(min,max){
  return Math.floor(Math.random()*(max-min+1)+min);

}

function setMessage(msg,color){
  message.textContent=msg;
  message.style.color=color
}