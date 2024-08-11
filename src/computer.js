
 import { Gameboard, Ship, addShip, yourHit, checkShipsOnBoard } from "./constructors.js";
//
//
let boardH = 8;
let boardW = 8
let computerBoard =  new Gameboard(boardH, boardW);
        computerBoard.createBoard();
const shipsNames = ['mir', 'oxi', 'dar', 'ema', 'lid', 'dia', 'pet']
function createShips(n){
        for(let i = 0; i < n; i++){
            let x = Math.floor(Math.random() * 4) + 1;
            let v = Math.floor(Math.random() * (boardH - 1));
            let w = Math.floor(Math.random() * (boardW - 1));
            let sN = Math.floor(Math.random() * shipsNames.length);
            let ship = new Ship (x, 0, false, shipsNames[sN]);
            addShip(v, w, computerBoard.squares, ship, ship.length);
            }
        }
createShips(5);        
checkShipsOnBoard(computerBoard.squares);
function createDomComputerBoard(){
        const computer_board = document.querySelector( '#computerboard');
        const div0 = document.createElement('div');
        const div1 = document.createElement('div');
        div0.classList.add('computercontainer');
        computer_board.append(div0);
        div1.classList.add('board');
        div0.append(div1);
        div1.setAttribute('style', `grid-template-columns: repeat(${boardH},  50px)`);
        for(let i = 0; i < boardH ** 2; i++){
                let div = document.createElement('div');
                div.setAttribute('style', `height: 30px; width: 30px`)
                div1.append(div);
        }
}
createDomComputerBoard();

        const comp_shotsleft = document.querySelector('#comp_shotsleft');
        comp_shotsleft.textContent = checkShipsOnBoard(computerBoard.squares);
        const  copm_shiphit = document.querySelector('#comp_shiphit');
        copm_shiphit.textContent = yourHit(computerBoard.squares, 4, 3);

        const boardtiles = document.querySelectorAll('div.computercontainer > div.board div');
        const arrNodelist = new Array(boardtiles);
        const arrBoard = []; // convert matrix to a in line array
        for (let i = 0; i < 8; i++){
                for(let j = 0; j < 8; j++){
                        arrBoard.push(computerBoard.squares[i][j]);
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
yourHit(computerBoard.squares, 1, 1);

