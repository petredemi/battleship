import { add, indexOf } from 'lodash';
/**@type {import('jest').Config}*/
export  {addShip, Ship, Gameboard, checkSpaceAvailable, yourHit, computerHit};//class Ship{
    
class Ship{
    constructor(length, hit, sunk, name){
            this.length = length,
            this.hit = hit,
            this.sunk = sunk,
            this.name = name;
        }
        hit(){
            if(this.hit = this.length ){
                return this.hit  = this.hit + 1;
            }
        }
        isSunk(){
            if ( this.length == 0){
                return this.sunk = true;
            }
        }
    }
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

const ship1  = new Ship(3 , 0, false, 'M');
const ship2 = new Ship(2, 0, false, 'L');
const  bd1 = [[0,0,0,0],
             [0,0,0,0],
             [0,0,0,0],
             [0,0,0,0]];
export default bd1;//function checkSpaceAvailable(x,y, board, shiplength){ //chack if it is space on the board for a new ship
    
function checkSpaceAvailable(x,y, board, shiplength){ //chack if it is space on the board for a new ship
    let w = true;
    if( x > board.length - shiplength || y > board.length - shiplength || board[x][y] != 0){
        return false;
    }
        for(let i = 0; i < shiplength; i++){
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
//    function addShip(x, y, board, shipname, shiplength){ // add a new ship on the board    
function addShip(x, y, board, ship, shiplength){ // add a new ship on the board 
    let newPoz = checkSpaceAvailable(x,y, board, shiplength);
        if(newPoz == true){
          for(let i = 0; i < shiplength; i++){
                board[x][y] = ship;
                x = x + 1
                }
            }else { 
                console.log('try another pozition');
                return;;
            }
        }
function computerHit(board){ // computer hit on the board random
        let x = Math.floor(Math.random() * board.length);
        let y = Math.floor(Math.random() * board.length );
        if ( board[x][y].name != undefined){
                console.log('ship hit  ' + board[x][y].name);
                board[x][y].length = board[x][y].length - 1;
                board[x][y].hit = board[x][y].hit + 1;
                board[x][y].isSunk();
                board[x][y] = 'xx';           
            }
                board[x][y] = 'X';
        }

function yourHit(board, x, y){
        if ( board[x][y].name != undefined){
            console.log('you hit ship ' + board[x][y].name);
            board[x][y].length = board[x][y].length - 1;
            board[x][y].hit = board[x][y].hit + 1;
            board[x][y].isSunk();
            board[x][y] = 'xx';
        }
          return board[x][y] = 'x';
    }
    addShip(1, 1, bd1, ship1, ship1.length);
    addShip(0, 2, bd1, ship2, ship2.length);
    yourHit(bd1, 1, 1);
    yourHit(bd1, 2, 1);
    computerHit(bd1)
    computerHit(bd1); 
    console.log(bd1)
    console.log(ship1);
    console.log(ship2);



