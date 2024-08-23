/**@type {import('jest').Config}*/
import { findIndex, indexOf } from "lodash";
import './style.css';
import {Gameboard, Ship, addShip, computerHitCordinates, indexOfDiv, checkShipsOnBoard } from "./constructors.js";

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
const names = ['dia', 'zoia', 'oxi', 'mir', 'ema', 'dar'];
const colors = [ 'green', 'crimson', 'darkblue', 'darkorange','mediumturquoise', 'mediumseagreen', 'teal']
const poz = [ 'vertical', 'horizontal'];
console.log(yourBoard.squares);


//checkShipsOnBoard(yourBoard.squares);
addboat.addEventListener('click', () => {
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
                      //  arrNodelist[0][i].setAttribute('style', 'border: 1px solid black');
                        arrNodelist[0][i].setAttribute(`style`, `border: 1px solid black; background-color: ${arrBoard[i].color}`);
                }else if(typeof arrBoard[i] == 'string'){
                        arrNodelist[0][i].setAttribute('style', 'color: red; font-size: 40px');
                        arrNodelist[0][i].textContent = arrBoard[i];
                   //     arrNodelist[0][i].setAttribute('style', 'background-color: lightpink');
                }
           }
    }
updateBoard();
//arrNodelist[0].forEach((div) => div.addEventListener('mouseleave', (e) => {
//        div.style.backgroundColor = 'green';
//}));
//arrNodelist[0].forEach((div) => div.addEventListener('mouseleave', (e) => {
//        div.style.backgroundColor = '';
//}));
//console.log(tiles);
arrNodelist[0].forEach((div, index) => div.addEventListener('click', () => { // add ships on board
        console.log(index); // add ships on board
        indexOfDiv(index)
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
const clear = document.querySelector('#clearboard');
let boardNodes = document.querySelectorAll(' div.yourcontainer > div.board > div')

clear.addEventListener('click', () => {
        yourBoard.squares = [];
        yourBoard.createBoard()
        arrBoard = [];
        boardNodes.forEach((div, index) => {
                div.style.backgroundColor = '';
                div.textContent = '';
      //          div.style.border = '1px';
                console.log(yourBoard.squares)
        })
        shotsleft.textContent = checkShipsOnBoard(yourBoard.squares);

})
const shoot = document.querySelector('#shoot');
const shiphit = document.querySelector('#shiphit');
shoot.addEventListener('click', () => {
        shiphit.textContent = computerHitCordinates(yourBoard.squares);
        arrBoard = [];
        updateBoard();
        shotsleft.textContent = checkShipsOnBoard(yourBoard.squares);

})