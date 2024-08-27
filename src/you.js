/**@type {import('jest').Config}*/
import _ from 'lodash';
import './style.css';
import {Gameboard, Ship, addShip, computerHitCordinates, indexOfDiv, checkShipsOnBoard,
        buildShip } from "./constructors.js";

import sound from './sounds/explosion.mp3';
import soundwater from './sounds/underwater-explosion.mp3'

import fire from './icons/fire.png'
import circle from './icons/circle.png';
const iconfire = new Image();
const iconcircle = new Image();
iconfire.src = fire;
iconcircle.src = circle;   

const soundexplosion = new Audio(sound);
const soundunderwater = new Audio(soundwater)
const boardH = 8;
const boardW = 8;
const yourBoard =  new Gameboard(boardH, boardW);
        yourBoard.createBoard();
let xrow = document.querySelector('#xrow');
let ycolumn = document.querySelector('#ycolumn'); 
let zlength = document.querySelector('#zlength');

let calldialog = document.querySelector('#calldialog');
let Okay = document.querySelector('#Okay');
let addboat = document.querySelector('#addboat')
const names = ['Katy', 'Jeny', 'Tom', 'Elon', 'Bear', 'Bill'];
const colors = [ 'green', 'crimson', 'dodgerblue', 'darkorange','mediumturquoise', 'mediumseagreen', 'teal', 'red', 'yellow']
const poz = [ 'vertical', 'horizontal'];

addboat.addEventListener('click', () => { // call dialog box for cordinates an ship length
           calldialog.showModal();
        });
Okay.addEventListener('click', () => {
        calldialog.close();
        let z = Number(zlength.value);
        let x = Number(xrow.value);
        let y = Number(ycolumn.value);
        let v = Math.floor(Math.random() * 2); // poz vertical or horizontal
        let c = Math.floor(Math.random() * 9); // color pozition

        let ship = new Ship (z, 0, false, names[z]);
        Object.defineProperty(ship, "color", {value: colors[c]}) // add color property at ship object
        addShip(x, y, yourBoard.squares, ship, poz[v]);
        arrBoard = []
        updateBoard();
        checkShipsOnBoard(yourBoard.squares);
        xrow.value = '';      
        ycolumn.value = '';
        zlength.value = '';

    });
function createDomYourBoard(){
        const your_board = document.querySelector( '#yourboard');
        const div0 = document.createElement('div');
        const div1 = document.createElement('div');
        div0.classList.add('yourcontainer');
        div1.classList.add('board');
        your_board.append(div0);
        div0.append(div1);
        div1.setAttribute('style', `grid-template-columns: repeat(${boardW},  50px)`);
        for(let i = 0; i < boardW ** 2; i++){
                let div = document.createElement('div');
                div.setAttribute('style', `height: 30px; width: 30px`);
                div.style.backgroundImage = iconfire;  
                div1.append(div);
        }
    }  
createDomYourBoard();
const shotsleft = document.querySelector('#your_shotleft');
shotsleft.textContent = checkShipsOnBoard(yourBoard.squares);
const boardtiles = document.querySelectorAll('div.yourcontainer > div.board div');
let arrNodelist = new Array(boardtiles);
        let arrBoard = []; // convert matrix to a in line array

function updateBoard(){ // display ships on the board
        for (let i = 0; i < 8; i++){
                for(let j = 0; j < 8; j++){
                        arrBoard.push(yourBoard.squares[i][j]);
                }
           }
        for(let i = 0 ; i < 64; i++){
                if(typeof arrBoard[i] == 'object'){
                        arrNodelist[0][i].textContent = arrBoard[i].name;
                        arrNodelist[0][i].setAttribute(`style`, `border: 1px solid; background-color: ${arrBoard[i].color}`);
                }else if(typeof arrBoard[i] == 'string'){
                        arrNodelist[0][i].setAttribute('style', 'color: red; font-size: 40px');
                        arrNodelist[0][i].style.backgroundImage = iconfire;  
                        arrNodelist[0][i].textContent = arrBoard[i];
                }
           }
    }
updateBoard();

// not more used, add ships on board by click on the board randomly
function addShipRandom(){
   arrNodelist[0].forEach((div, index) => div.addEventListener('click', () => { // add ships on board
               console.log(index); // add ships on board
               indexOfDiv(index) // array from [0, 1] for indexes numbers from 0 to 63
               let z = Math.floor(Math.random() * 4)
               let x = indexOfDiv(index)[0];
               let y = indexOfDiv(index)[1];
               let v = Math.floor(Math.random() * 2); // poz vertical or horizontal
               let c = Math.floor(Math.random() * 7); // color pozition
   
               let ship = new Ship (z, 0, false, names[z]);
               Object.defineProperty(ship, "color", {value: colors[c]}) // add color property at ship object
               addShip(x, y, yourBoard.squares, ship, poz[v]);
               arrBoard = []
               updateBoard();
               shotsleft.textContent = checkShipsOnBoard(yourBoard.squares);
      }));
}
//addShipRandom(); not used now

function dragShips(){  // add ships on board , build ships by mouse
    let event = false;
    let z = 1; // ship lenght
    let c = 0 //  color index
    let n = 0; // name index in array
    let oldx;
    let oldy;   
    arrNodelist[0].forEach((div, index) => div.addEventListener('mousedown', (e) => {
               //div.style.backgroundColor = 'pink';
               //div.style.backgroundImage = iconfire;
               event = true;
               console.log(index); // add ships on board
               let x = indexOfDiv(index)[0];
               let y = indexOfDiv(index)[1];
               if ( typeof yourBoard.squares[x][y] == 'object' || z > 4){
                return;
               }
               c = Math.floor(Math.random() * 7); // color index
               n = Math.floor(Math.random() * 5);
               let ship = new Ship (z, 0, false, names[n]);
               Object.defineProperty(ship, "color", {value: colors[c]}) // add color property at ship object
               buildShip(x, y, yourBoard.squares, ship);
               div.style.backgroundColor = colors[c];
               z = z + 1;
               oldx = x;
               oldy = y;
               
       }));
       arrNodelist[0].forEach((div) => div.addEventListener('mouseup', (e) => {
            event = false;
            n = 0
            arrBoard = []
            updateBoard();
            shotsleft.textContent = checkShipsOnBoard(yourBoard.squares);  
            z = 1;
            }));
       arrNodelist[0].forEach((div, index) => div.addEventListener('mouseenter', (e) => {
        if ( event == true && z < 5){
                console.log(oldx, oldy)
            let x = indexOfDiv(index)[0];
            let y = indexOfDiv(index)[1];
            let ship = new Ship (z, 0, false, names[n]);
            z = z + 1;
            Object.defineProperty(ship, "color", {value: colors[c]}) // add color property at ship object    
            if( x == oldx){
                  div.style.backgroundColor = 'pink';
                  buildShip(x, y, yourBoard.squares, ship);
        //              z = z + 1;  
                      console.log(oldx, oldy); 
                }
                else if ( y == oldy){
                        div.style.backgroundColor = 'pink';
                        buildShip(x, y, yourBoard.squares, ship);
                }
        }
         //   oldx = x;
         //   oldy = y;  
    }));
}
dragShips();  //draw ships on board by mouse

const clear = document.querySelector('#clearboard');
let boardNodes = document.querySelectorAll(' div.yourcontainer > div.board > div')
clear.addEventListener('click', () => {
        yourBoard.squares = [];
        yourBoard.createBoard()
        arrBoard = [];
        boardNodes.forEach((div, index) => {
                div.style.backgroundColor = '';
                div.textContent = '';
                console.log(yourBoard.squares)
        })
        shotsleft.textContent = checkShipsOnBoard(yourBoard.squares);
})
const shoot = document.querySelector('#shoot'); // shoot button
const shiphit = document.querySelector('#shiphit'); // name of the hit ship
// shoot of computer to your board
shoot.addEventListener('click', () => {
        shiphit.textContent = computerHitCordinates(yourBoard.squares);
        setTimeout(delay, 1000);
        function delay(){
                if ( shiphit.textContent != ''){
                        soundexplosion.currentTime = 0;
                        soundexplosion.play();
                }else {
                        soundunderwater.currentTime = 0;
                        soundunderwater.play();
                }        
        }
        arrBoard = [];
        setTimeout(updateBoard, 2000);
        shotsleft.textContent = checkShipsOnBoard(yourBoard.squares);
})