// game values

let min=1,
    max=10,
    winningNum=2,
    guessesLeft=3;

// ui elemets
const game=document.querySelector('#game'),
      minNum=document.querySelector('.min-num'),
      maxNum=document.querySelector('.max-num'),
      guessBtn=document.querySelector('#guess-btn')
      guessInput=document.querySelector('#guess-input')
      message=document.querySelector('.message');

    //   assign ui min and max

    minNum.textContent=min;
    maxNum.textContent=max;

    // listen for gyess
    guessBtn.addEventListener('click',function(){
        let guess=parseInt(guessInput.value);
        
        // validate
        if(isNaN(guess) || guess < min || guess > min){
           setMessage(`please enter an number between ${min} and ${max},red`);
        }
    });

    //  set message
    function setMessage(msg,color){
        message.style.color=color;
       message.textContent=msg;
    }