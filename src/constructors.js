//import { add, indexOf } from 'lodash';
/**@type {import('jest').Config}*/
import _ from 'lodash';
export  { Ship, Gameboard,  yourHitCordinates, computerHitCordinates, addShip, 
    indexOfDiv, checkShipsOnBoard, buildShip };//class Ship
    
class Ship{
    constructor(length, hit, sunk, name){
            this.length = length,
            this.hit = hit,
            this.sunk = sunk,
            this.name = name;
        }
        hit(){
            if(this.hit == this.length ){
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
function checkShipsOnBoard(board){    
    let numberOfShips = 0;         
    for( let i = 0; i < board[0].length ; i++){
        for(let j = 0; j < board[0].length; j++){
           if (typeof board[i][j] == 'object'){
                    numberOfShips = numberOfShips + 1;
           };
        };
    };
        if( numberOfShips == 0){
            return 'no ships';
        }else{
        return'  ' + numberOfShips;
        }          
}
  
function addShip(x, y, board, ship, poz){ //check if it is space on the board for ship and add
    if( x > board.length - ship.length || y > board.length - ship.length || board[x][y] != 0 ){
        return;
    }else {
    //     poz = 'vertical';
            for(let i = 0; i < ship.length; i++){
                if ( poz == 'vertical'){
                     if(board[x][y] == 0){
                         board[x][y] = ship;
                             x = x + 1
                             poz = 'vertical'
                     }
                     else if( board[x][y] != 0){
                        poz = 'horizontal';
                        return;
                     }
                }
            }
            for(let i = 0; i < ship.length; i++){
                if( poz == 'horizontal'){
                    if(board[x][y] == 0){
                        board[x][y] = ship;
                            y = y + 1;
                            poz = 'horizontal';
                    }
                    else if( board[x][y] != 0){
                     //   poz = 'horizontal'
                        return;
                    }
                }
            }
        }
    }
function buildShip(x, y, board, ship){ // add ship on bord by mouse
        if ( board[x][y] == 0 || x > board.length - ship.length || y > board.length - ship.length){
             board[x][y] = ship;
        }
} 
function computerHitCordinates(board){ // computer hit on the board random
        let x = Math.floor(Math.random() * board.length);
        let y = Math.floor(Math.random() * board.length);
        if ( board[x][y].name != undefined){
                let computer_hit = board[x][y].name;
                board[x][y].length = board[x][y].length - 1;
                board[x][y].hit = board[x][y].hit + 1;
                board[x][y].isSunk();
                board[x][y] = 'X'; 
                return computer_hit;          
            }else{
                board[x][y] = 'O';
            }
        }
function yourHitCordinates(board, x, y){
        if ( board[x][y].name != undefined){
            let your_hit = board[x][y].name;
            board[x][y].length = board[x][y].length - 1;
            board[x][y].hit = board[x][y].hit + 1;
            board[x][y].isSunk();
            board[x][y] = 'X';
            return your_hit;
        }else{
           board[x][y] = 'O';
        }
    }
function indexOfDiv(n){ // find div index of tile on the bord, 
        let x = 0;           // tne number from 0 to 63 transformed in cordinates 0, 1
        let y = 0;
        for( let i = 0; i <= n; i++){   
                if ( i <= 7 ){
                        x = 0
                        y = i; 
                }else if ( i > 7){
                        y = n % 8;
                        if( i % 8 == 0){
                                x = x + 1
                        }
                }
        }
        return [x, y]; //return cordinate of the new ship
    }
