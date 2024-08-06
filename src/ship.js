import { add } from 'lodash';

/**@type {import('jest').Config}*/
export  {calculator, analyseArray, capitalize, print, eu};
export { ship1, addShip, Ship, Gameboard}

class Ship{
    constructor(length, hit, sunk, name){
        this.length = length,
        this.hit = hit,
        this.sunk = sunk,
        this.name = name
    }
    hit(){
        this.hit = this.hit + 1;
        return this.hit;

    }
    isSunk(){
        if ( this.hit  == this.length){
            return this.sunk = true;
        }
    }
}
const ship1  = new Ship(3 , 0, false, 'M');
const ship2  = new Ship(3, 0, false, 'O')
console.log(ship1);

class Gameboard{
    constructor( height, width){
        this.height = height,
        this.width = width,
        this.squares  = [];
        }
    createBoard(){
        let x = 0;
        for( let i = 0; i < this.height; i++){
                let y = [];
            for(let j = 0; j < this.width; j++){
                y.push(x);
           }
                this.squares.push(y);
       }
    } 
}
const yourBoard =  new Gameboard(4, 4);
const computerBoard = new Gameboard(4, 4);
     yourBoard.createBoard();
     computerBoard.createBoard();
const  bd1 = [[0,0,0,0],
             [0,0,0,0],
             [0,0,0,0],
             [0,0,0,0]];
console.log(yourBoard)

let sip1 = ship1.length;
//let w;
function checkSpaceAvaileble(x,y, board){
    let w = true;
    if( x > board.length - sip1 || y > board.length - sip1){
        return false;
    }
        for(let i = 0; i < sip1; i++){
            if(board[x + i][y] == 0){
                w = true;  
            }
            else if(board[x + i][y] != 0){
                w = false;
                break;
            }
        }
        return w;
    }
console.log(checkSpaceAvaileble(1, 1, bd1));

function addShip(x, y, board, name){
    let newPoz = checkSpaceAvaileble(x,y, board);
    if(newPoz == true){
      for( let i = 0; i < sip1; i++){
            board[x][y] = name;
            x = x + 1
            }
        }else { 
            console.log('try another pozition');
            return;;
        }
    }
addShip(1, 1, bd1, ship1.name);
addShip(0, 0, bd1, ship2.name);
addShip(0, 2, bd1, ship2.name);

    console.log((bd1));

const calculator = {
    sum: function(x, y){
        return x + y;
    },
    substract: function(x, y){
    return x - y;
    },
    divide: function(x, y){
        return x / y;
    },
    multiply: function(x, y){
        return x * y;
    }    
}

const arr = [1, 4, 9, 6];
function average(x){
    let sum = 0;
    for (let i = 0; i < x.length; i++){
        sum += x[i];
    }
        return sum / x.length;
}

function analyseArray(x){
    return {  min: Math.min.apply(null, x),
              max: Math.max.apply(null, x),
              length: x.length,
              average: average(x)
    };
}
let x = 'ssss';
function capitalize(){
    let slicedString = x.slice(1);
    let firstLeter = x.slice(0, 1);
    let capitalLeter = firstLeter.toUpperCase();
    let  y = capitalLeter + slicedString;
     return y;
}
function print(){
    console.log('I get called from ship.js!');
  };
function eu(){
    console.log('eu');
}

