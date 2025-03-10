let gameseq = [];
let userseq = [];

let started = false;
let level = 0;
let btns = ["yellow", "red", "purple", "green"];

let h2 = document.querySelector("h2")

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("game is started")
        started = true

        levelUp();
    }
});


function levelUp(){
    userseq = [];
    level++;
    h2.innerText = `level ${level}`;
    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`)

    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameseq.push(randColor);
    console.log(gameseq);
    btnFlash(randBtn);
}


function btnFlash(btn) { 
btn.classList.add("flash");
setTimeout(function(){
    btn.classList.remove("flash");

}, 250);
}

function userFlash(btn) { 
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    
    }, 250);
    }




    function checkAns(idx) {
        if(userseq[idx] == gameseq[idx]) {
            if(userseq.length == gameseq.length){
                setTimeout(levelUp,1000);
            }
       } else{
        h2.innerHTML = `Game Over !! Your score is <b>${level}</b> <br> Press any key to restart`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout( function(){
            document.querySelector("body").style.backgroundColor = "black"
        }, 150);
        reset();
       }

}


function btnPress (){
    let btn = this;
    userFlash(btn);
    userColor = btn.getAttribute("id");
    userseq.push(userColor);
    checkAns(userseq.length-1);

}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress)
}

function reset() {
    started = false;
    level = 0;
    gameseq = [];
    userseq = [];
}
