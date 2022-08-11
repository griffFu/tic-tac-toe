const COMBINATIONS = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]


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

let player1 = new Player(true,"griff","X")
let player2 = new Player(false,"yeet","O")


//this function is the event listener for checking things
// 1.)
// 2.) 
const boxes = document.querySelectorAll('.box');
for (const box of boxes) {
    box.addEventListener('click',function placeMark() {
        //index value given
        let arrayVal = box.getAttribute('data-index');
        let newArrayVal = parseInt(arrayVal)
        

        if (player1.turnStatus){
            box.innerHTML = player1.piece;
            board.array.splice(newArrayVal,1,player1.piece)
            player1.turnStatus = false;
            player2.turnStatus = true;

        }
        else {
            box.innerHTML = player2.piece;
            board.array.splice(newArrayVal,1,player2.piece)
            player1.turnStatus = true;
            player2.turnStatus = false;
        }
        if (checkXWin()){
            console.log("x wins")
            box.removeEventListener('click',placeMark,true)
        }
        if (checkOWin()){
            console.log("O wins")
        }
        
        
     

    }, {once: true});

}



// function that will take the board.array and check if there is win or not, also displays message if this is the case

function checkXWin(){
    return COMBINATIONS.some(combination =>{
        return combination.every(index => {
            return board.array[index] == ["X"]
        })
    })
    //checks if any orientations of an array are matching, if this is the case then display pop up that the game is ove
}

function checkOWin(){
    return COMBINATIONS.some(combination =>{
        return combination.every(index => {
            return board.array[index] == ["O"]
        })
    })
}








