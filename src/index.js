//**/@type {import('jest').Config}*/export  {ship1, addShip, Ship, Gameboard, checkSpaceAvailable, boardHit};class Ship{    constructor(length, hit, sunk, name){        this.length = length,        this.hit = hit,        this.sunk = sunk,        this.name = name;    }    hit(){        if(this.hit == this.hit){        return this.hit  = 1        }    }    isSunk(){        if ( this.hit  == this.length){            return this.sunk = true;        }    }}let shipsOnBoard = [];const ship1  = new Ship(3 , 0, false, 'M');const ship2 = new Ship(2, 0, false, 'L');shipsOnBoard.push(ship1);shipsOnBoard.push(ship2);console.log(shipsOnBoard)class Gameboard{    constructor( height, width){        this.height = height,        this.width = width,        this.squares  = [];        }    createBoard(){        let x = 0;        for( let i = 0; i < this.height; i++){                let y = [];            for(let j = 0; j < this.width; j++){                y.push(x);           }                this.squares.push(y);       }    } }const yourBoard =  new Gameboard(4, 4);const computerBoard = new Gameboard(4, 4);     yourBoard.createBoard();     computerBoard.createBoard();const  bd1 = [[0,0,0,0],             [0,0,0,0],             [0,0,0,0],             [0,0,0,0]];export default bd1;function checkSpaceAvailable(x,y, board, shiplength){ //chack if it is space on the board for a new ship    let w = true;    if( x > board.length - shiplength || y > board.length - shiplength || board[x][y] != 0){        return false;    }        for(let i = 0; i < shiplength; i++){            if(board[x + i][y] == 0){                w = true;              }            else if(board[x + i][y] != 0){                w = false;                break;            }        }        return w;    }    function addShip(x, y, board, shipname, shiplength){ // add a new ship on the board        let newPoz = checkSpaceAvailable(x,y, board, shiplength);        if(newPoz == true){          for( let i = 0; i < shiplength; i++){                board[x][y] = shipname;                x = x + 1                }            }else {                 console.log('try another pozition');                return;;            }        }        function boardHit(board){            let x = Math.floor(Math.random() * board.length);            let y = Math.floor(Math.random() * board.length );            if ( board[x][y] != 0){                    console.log('ship hit');                    return board[x][y];                                     //  shipHit(ship);            }            console.log(x);                   board[x][y] = 'X';            }    addShip(1, 1, bd1, ship1.name , ship1.length);    addShip(0, 2, bd1, ship2.name, ship2.length);    boardHit(bd1);    //shipHit(bd1);    console.log(bd1)    ;
import _ from 'lodash';
import './style.css';
import paltinleafs from './paltinleafs.jpg';
import circle from './icons/circle.png';
import bullseye from './icons/bullseye.png';


const iconcircle = new Image();
const iconbullseye = new Image();
iconcircle.src = circle;   
iconbullseye.src = bullseye;
//const image = document.createElement('img');
//image.src = iconcircle
//document.body.appendChild(image);
const myIcon = new Image();
myIcon.src = paltinleafs;


function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

 // Add the image to our existing div.

 element.appendChild(myIcon);

  return element;
}

//document.body.appendChild(component());

