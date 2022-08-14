console.log("Plz enter your name:");
//type-2
function makeGreen(){
    document.body.style.backgroundColor='green';
}

// type-3
const makeBuleButton= document.getElementById('make-blue');
makeBuleButton.onclick=makeBule;

function makeBule(){
    document.body.style.backgroundColor='blue';
}

// type-3 another

const makePurpleButton=document.getElementById('make-purple');
       makePurpleButton.onclick = function makePurple(){
        document.body.style.backgroundColor='purple';
       }
        
