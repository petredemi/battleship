import { Gameboard, Ship, addShip, yourHitCordinates, checkShipsOnBoard,
       indexOfDiv } from "./constructors.js";
import fire from './icons/fire.png'
import circle from './icons/circle.png';
import bullseye from './icons/bullseye.png';
import explosion from './sounds/bomb-drop-impact.wav';
import underwatersound from './sounds/underwater-explosion.mp3'

const iconfire = new Image();
const iconbullseye = new Image();
const iconcircle = new Image();

const soundboom = new Audio(explosion);
const underwaterexplosion = new Audio(underwatersound) 


iconfire.src = fire;
iconcircle.src = circle;   
iconbullseye.src = bullseye;

console.log(iconfire);
console.log(iconcircle);

//document.body.style.backgroundImage = iconfire;    
let boardH = 8;
let boardW = 8
let computerBoard =  new Gameboard(boardH, boardW);
        computerBoard.createBoard();
        let colors = [ 'green', 'dodgerblue', 'darkorange', 'silver', 'yellow', 'brown'];
        const pozition = ['vertical', 'horizontal']
const shipsNames = ['John', 'Klint', 'Peter', 'Eifel', 'Katty', 'Roses', 'Steve'];

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
createShips(2);
function createDomComputerBoard(){
        const computer_board = document.querySelector( '#computerboard');
   //     const boardcover = document.querySelector('#boardcover');
        const div0 = document.createElement('div');
        const div1 = document.createElement('div');
        div0.classList.add('computercontainer');
        div1.classList.add('board');
        div0.append(div1);
        computer_board.append(div0);
   //     computer_board.insertBefore( div0 , boardcover);
        div1.setAttribute('style', `grid-template-columns: repeat(${boardH},  50px)`);
        for(let i = 0; i < boardH ** 2; i++){
                let div = document.createElement('div');
                div.setAttribute('style', `height: 30px; width: 30px;`);
             //   div.style.backgroundImage = `url(${iconfire})`
           //     div.setAttribute('style', `background-image: ${iconfire}`);
                div.style.backgroundImage = iconfire;
                div1.append(div);
        }
}
createDomComputerBoard();
        const comp_shotsleft = document.querySelector('#comp_shotsleft');
        comp_shotsleft.textContent = checkShipsOnBoard(computerBoard.squares);

        const copm_shiphit = document.querySelector('#comp_shiphit');
        const boardtiles = document.querySelectorAll('div.computercontainer > div.board > div');
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
                        arrNodelist[0][i].setAttribute('style', 'color: red; font-size: 40px');
                }
        }
    }
updateBoard();
const clear = document.querySelector('#clear_comp_board');
const boardNodes = document.querySelectorAll(' div.computercontainer > div.board > div')
const add = document.querySelector('#comp_addboats');

const boardcoverChildren = document.querySelectorAll('#boardcover > div'); //board cover of computerBoard
boardcoverChildren.forEach((div) => { // set color of computer board cover
        div.setAttribute('style', 'background-color: aqua');
})

clear.addEventListener('click', () => { // clear computer board
                computerBoard.squares = [];
                computerBoard.createBoard()
                arrBoard = [];
                boardNodes.forEach((div, index) => {
                        div.style.backgroundColor = '';
                        div.textContent = '';
          //            div.style.border ='1px';
                })
             comp_shotsleft.textContent = ''
             comp_shotsleft.setAttribute('style', `background-image: ${iconfire}`);

             copm_shiphit.textContent = '';
             boardcoverChildren.forEach((div) => {
         div.setAttribute('style', 'background-color: aqua');

            })
        
    });
const showCompBoard = document.querySelector('#show_board'); //hide /show button on computer board
let show = true;
showCompBoard.addEventListener('click', () => { // show computer board
        if (show == true){
                boardcoverChildren.forEach((div) => {
                        div.style.display = 'none';
                        showCompBoard.textContent = 'hide';
                });
                show = false
        }else if ( show == false){
                boardcoverChildren.forEach((div) => {
                        div.style.display = 'block';
                        showCompBoard.textContent = 'show';
                });
                showCompBoard.textContent = 'show';
                boardcoverChildren.forEach((div) => {
                div.setAttribute('style', 'background-color: aqua');
           })
           show = true;
        }   
     });
add.addEventListener('click', () => { // add ships on board
                arrBoard = [];
                createShips(5);
                updateBoard();
                comp_shotsleft.textContent = checkShipsOnBoard(computerBoard.squares);


        });
//shoot on computer board
boardcoverChildren.forEach((div, index) => div.addEventListener('click', (e) => { // hit a ship
        youHit(index); //hit  of computer board
        comp_shotsleft.textContent = checkShipsOnBoard(computerBoard.squares);
        div.setAttribute('style', 'background-color: transparent');
        
}));
arrNodelist[0].forEach((div) => div.addEventListener('mouseleave', (e) => {
     //   div.style.backgroundColor = '';
}));
function youHit(index){     // you shot on computer board 
        let x = indexOfDiv(index)[0]
        let y = indexOfDiv(index)[1]
        updateBoard()
      function delay(){

              if( typeof computerBoard.squares[x][y] == 'object'){
                      soundboom.currentTime = 0;
                      soundboom.play();
                }else{
                     underwaterexplosion.currentTime = 0;
                     underwaterexplosion.play()
                }
         }
        delay();
        console.log(typeof computerBoard.squares[x][y])

        copm_shiphit.textContent = yourHitCordinates(computerBoard.squares, x, y)
        arrBoard = []; 

        setTimeout(updateBoard, 2500)
}
console.log(computerBoard.squares)
