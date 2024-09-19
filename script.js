console.log("welcome to tic toe")
let music = new Audio("stranger-things-124008.mp3")
let turn  = new Audio("snd_fragment_retrievewav-14728.mp3")
let gameover  = new Audio("neon-gaming-128925.mp3");
let gamelength  = false;
let newturn  = "X"
// function to change the turn
 const changeTurn =()=>{
    return newturn === "X"?"0":"X"

}

// function to check for win
const checkWin = ()=>{
    let boxtest = document.getElementsByClassName('boxtest')
let wins = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0 , 3,6],
    [1,4,7],
    [2,5,8],
    [0 , 4 , 8]
    ,[2,4,6]


]
wins.forEach(e=>{
    if((boxtest[e[0]].innerText === boxtest[e[1]].innerText) && (boxtest[e[2]].innerText === boxtest[e[1]].innerText) && boxtest[e[0]].innerText != ''){
        document.querySelector('.info').innerText = boxtest[e[0]].innerText + " won"
        gamelength = false;
        document.querySelector('.imgbox').getElementsByTagName("img")[0].style.width ="200px"
        gameover.play();


    }
}) 


}


// game logic
music.play()
let boxes = document.getElementsByClassName('box')
Array.from(boxes).forEach((element) => {
let boxtest  = element.querySelector('.boxtest')
element.addEventListener('click' , (e)=>{
    if(boxtest.innerText === ''){
        boxtest.innerText = newturn
        newturn =changeTurn();
        turn.play()
        checkWin()
        if(!gamelength){  
        document.getElementsByClassName("info")[0].innerText =  "turn for  " + newturn;
        }
       
    }
})

})




reset.addEventListener('click'  , ()=>{  
let boxtest = document.querySelectorAll('.boxtest');
Array.from(boxtest).forEach((element)=>{
    element.innerText = "";
});

newturn = "X"
gamelength = false;
    document.getElementsByClassName("info")[0].innerText =  "turn for  " + newturn;
    
   gameover.pause();


});







