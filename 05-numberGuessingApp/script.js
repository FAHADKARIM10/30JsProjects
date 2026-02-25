const userInput =document.querySelector('.user-input')
const form =document.querySelector('form')
const result =document.querySelector('.result')
let randomNumber =Math.round(Math.random() * 100);
const allGuesses =document.querySelector('.allGuessesArray')
const subtmitBtn =document.querySelector('.submit-btn')
const startGameBtn =document.querySelector('.start-game')
const allGuessesArray =[]


form.addEventListener('submit',(e) =>{
    e.preventDefault()
    const userInputValue=parseInt(userInput.value)
    if(userInputValue < randomNumber){
        result.innerText ='too low'
    }else if(userInputValue >randomNumber){
        result.innerText ='too high'
    }else{
        result.innerText ='congrates'
        startGameBtn.disabled=false
        subtmitBtn.disabled=true
    }
    allGuessesArray.push(userInputValue)
    allGuesses.innerText ='your guesses ' + allGuessesArray.join(', ')
    form.reset()

    
})


startGameBtn.addEventListener('click',()=>{
    result.innerText =''
    allGuesses.innerText =''
    startGameBtn.disabled=true
    subtmitBtn.disabled=false
    randomNumber =Math.round(Math.random() * 100);
    // allGuessesArray.length = 0;
})




