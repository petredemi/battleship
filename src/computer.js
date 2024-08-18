
import { Gameboard, Ship, addShip, yourHitCordinates, checkShipsOnBoard,
       indexOfDiv } from "./constructors.js";
       import fire from './icons/fire.png'
 
const iconfire = new Image();
iconfire.src = fire   
document.body.style.backgroundImage = iconfire;    
console.log(iconfire)
let boardH = 8;
let boardW = 8
let computerBoard =  new Gameboard(boardH, boardW);
        computerBoard.createBoard();
        let colors = [ 'green', 'blue', 'darkorange', 'silver', 'yellow', 'brown'];
        const pozition = ['vertical', 'horizontal']
const shipsNames = ['mir', 'oxi', 'dar', 'ema', 'lid', 'dia', 'pet'];
//yourHitCordinates(computerBoard.squares, 0, 1);

function createShips(n){
        let poz = 0;
        for(let i = 0; i < n; i++){
            let x = Math.floor(Math.random() * 4) + 1;
            let v = Math.floor(Math.random() * (boardH - 1));
            let w = Math.floor(Math.random() * (boardW - 1));
            let sN = Math.floor(Math.random() * shipsNames.length);
            poz = Math.floor(Math.random() * 2);
            let ship = new Ship (x, 0, false, shipsNames[sN]);
            Object.defineProperty(ship, "color", {value: colors[x]});
            console.log(x, v, w);
            console.log(poz);
            addShip(v, w, computerBoard.squares, ship, pozition[poz]);
        }
    }
createShips(5);
//checkShipsOnBoard(computerBoard.squares);
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
        const copm_shiphit = document.querySelector('#comp_shiphit');
        
        const boardtiles = document.querySelectorAll('div.computercontainer > div.board div');
        const arrNodelist = new Array(boardtiles);
        let arrBoard = []; // convert matrix to a in line array
function updateBoard(){
        for (let i = 0; i < 8; i++){
                for(let j = 0; j < 8; j++){
                        arrBoard.push(computerBoard.squares[i][j]);
                }
        }
        for(let i = 0 ; i < 64; i++){
                if(typeof arrBoard[i] == 'object'){
                        arrNodelist[0][i].textContent = arrBoard[i].name;
                        arrNodelist[0][i].setAttribute(`style`, `border: 1px solid black; background-color: ${arrBoard[i].color}`);
                }else if(typeof arrBoard[i] == 'string'){
                        arrNodelist[0][i].textContent = arrBoard[i];
                        arrNodelist[0][i].setAttribute('style', 'background-color: lightpink');
                }
        }
    }
updateBoard();
const clear = document.querySelector('#clear_comp_board');
const boardNodes = document.querySelectorAll(' div.computercontainer > div.board > div')
const comp_addboats = document.querySelector('#comp_addboats');

clear.addEventListener('click', () => {
                computerBoard.squares = [];
                computerBoard.createBoard()
                arrBoard = [];
                boardNodes.forEach((div, index) => {
                        div.style.backgroundColor = '';
                        div.textContent = '';
          //              div.style.border ='1px';
                })
             comp_shotsleft.textContent = ''
             copm_shiphit.textContent = ''
        });
const showCompBoard = document.querySelector('#show_board');
showCompBoard.addEventListener('click', () => { // show computer board
                boardNodes.textContent = '';
        });
comp_addboats.addEventListener('click', () => { // add ships on board
        let x = 8
                createShips(x);
                updateBoard();
                console.log(computerBoard);
        });
arrNodelist[0].forEach((div, index) => div.addEventListener('click', (e) => { // hit a ship
      //  div.style.backgroundColor = 'green';
        youHit(index);
        comp_shotsleft.textContent = checkShipsOnBoard(computerBoard.squares);
        div.setAttribute('style', `background-color: red`)
}));
arrNodelist[0].forEach((div) => div.addEventListener('mouseleave', (e) => {
     //   div.style.backgroundColor = '';
}));


function youHit(index){     // you shot on computer board 
        let x = indexOfDiv(index)[0]
        let y = indexOfDiv(index)[1]
        copm_shiphit.textContent = yourHitCordinates(computerBoard.squares, x, y)
        arrBoard = [];
        updateBoard();
}
