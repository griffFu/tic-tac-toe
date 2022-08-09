//player will be assigned an X or an O so we can check who wins
class Player {
    constructor(turnStatus,name,piece){
        this.turnStatus = turnStatus
        this.name = name
        this.piece = piece
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


// 1* creating the X and O attached to the class
const xMark = document.createElement('div');
xMark.textContent = 'x'



//this function is the event listener for checking things
// 1.)
// 2.) 
const boxes = document.querySelectorAll('.box');
for (const box of boxes) {
    box.addEventListener('click',function placeMark() {
        //finding the index value to add to the array of the gameboard
        let arrayVal = box.getAttribute('data-index');
        let newArrayVal = parseInt(arrayVal)
        board.array.splice(newArrayVal,1,'x')
        box.innerHTML = 'x'

    });

}



// i think i can individually set the turn status for both of the people playing the game
// 