//going to create the player class first
// has the property of turn status to determine if the us
class Player {
    constructor(turnStatus){
        this.turnStatus = turnStatus
    }
    playTurn = function() {
        
    }

}



class gameBoard{
    constructor(){
        this.array = Array(9).fill("");
    }
    reset(){
    this.array = (" "," "," "," "," "," "," "," "," ")
    }
}

let board = new gameBoard();

//let position = box.getAttribute('data-index');
//this is how you would select the attribute of the box, might be useful later
/*

box.addEventListener("click", playTurn);
*/
let box = document.querySelector(".box");
function playTurn() {
   
    let position = box.getAttribute('data-index');
    box.innerHTML = "test"
  }

/*
function playTurn(){
    let first = document.querySelector(".box");
    let test = first.getAttribute('data-index');
    first.innerHTML = test
}
*/




// onclick function for box class
// generates it with a "O"
