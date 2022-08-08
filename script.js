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
