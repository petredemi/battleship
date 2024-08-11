import { Gameboard, Ship, addShip, computerHit, checkShipsOnBoard } from "./constructors.js";
//import { boardHW} from './you.js';
//
//
let boardW = 8
let yourBoard =  new Gameboard(boardW, boardW);
        yourBoard.createBoard();

let ship1 = new Ship (3, 0, false, 'C');
let ship2 = new Ship(2, 0, false, 'D');
let ship3 = new Ship (4, 0, false, 'E')
console.log(ship1);
console.log(ship2);
addShip(1, 1, yourBoard.squares, ship1, ship1.length);
addShip(0, 0, yourBoard.squares, ship2, ship2.length);
addShip(4, 3, yourBoard.squares, ship3, ship3.length);
checkShipsOnBoard(yourBoard.squares);
computerHit(yourBoard.squares);
computerHit(yourBoard.squares);
computerHit(yourBoard.squares);
computerHit(yourBoard.squares);
checkShipsOnBoard(yourBoard.squares);
console.log(yourBoard.squares);


console.log(ship1);
console.log(ship2);
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
                div.setAttribute('style', `height: 30px; width: 30px`)
                div1.append(div);
        }
}
createDomYourBoard();
const shotsleft = document.querySelector('#your_shotleft');
shotsleft.textContent = checkShipsOnBoard(yourBoard.squares);
        const boardtiles = document.querySelectorAll('div.yourcontainer > div.board div');
        const arrNodelist = new Array(boardtiles);
        const arrBoard = []; // convert matrix to a in line array
        for (let i = 0; i < 8; i++){
                for(let j = 0; j < 8; j++){
                        arrBoard.push(yourBoard.squares[i][j]);
                }
        }
console.log(arrBoard);
        for(let i = 0 ; i < 64; i++){
                if(typeof arrBoard[i] == 'object'){
                        arrNodelist[0][i].textContent = arrBoard[i].name;
                        arrNodelist[0][i].setAttribute('style', 'border: 3px solid black');
                }else if(typeof arrBoard[i] == 'string'){
                        arrNodelist[0][i].textContent = arrBoard[i];
                        arrNodelist[0][i].setAttribute('style', 'background-color: red');
                }
        }
console.log(arrNodelist)
