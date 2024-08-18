/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/constructors.js":
/*!*****************************!*\
  !*** ./src/constructors.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gameboard: () => (/* binding */ Gameboard),
/* harmony export */   Ship: () => (/* binding */ Ship),
/* harmony export */   addShip: () => (/* binding */ addShip),
/* harmony export */   checkShipsOnBoard: () => (/* binding */ checkShipsOnBoard),
/* harmony export */   computerHitCordinates: () => (/* binding */ computerHitCordinates),
/* harmony export */   indexOfDiv: () => (/* binding */ indexOfDiv),
/* harmony export */   yourHitCordinates: () => (/* binding */ yourHitCordinates)
/* harmony export */ });
//import { add, indexOf } from 'lodash';
/**@type {import('jest').Config}*/
//class Ship{
    
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
        }
    }
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
                        poz = 'horizontal'
                        return;
                     }
                }
            }
            for(let i = 0; i < ship.length; i++){
                if( poz == 'horizontal'){
                    if(board[x][y] == 0){
                        board[x][y] = ship;
                            y = y + 1;
                            poz = 'horizontal'
                    }
                    else if( board[x][y] != 0){
                     //   poz = 'horizontal'
                        return;
                    }
                }
            }
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
                board[x][y] = 'xxx'; 
                return computer_hit;          
            }else{
                board[x][y] = 'X';
            }
        }

function yourHitCordinates(board, x, y){
        if ( board[x][y].name != undefined){
            let your_hit = board[x][y].name;
            board[x][y].length = board[x][y].length - 1;
            board[x][y].hit = board[x][y].hit + 1;
            board[x][y].isSunk();
            board[x][y] = 'xxx';
            return your_hit;
        }
           board[x][y] = 'x';
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


/***/ }),

/***/ "./src/icons/fire.png":
/*!****************************!*\
  !*** ./src/icons/fire.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cdfe697633ee5d297b8d.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*************************!*\
  !*** ./src/computer.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constructors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructors.js */ "./src/constructors.js");
/* harmony import */ var _icons_fire_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons/fire.png */ "./src/icons/fire.png");


       
 
const iconfire = new Image();
iconfire.src = _icons_fire_png__WEBPACK_IMPORTED_MODULE_1__   
document.body.style.backgroundImage = iconfire;    
console.log(iconfire)
let boardH = 8;
let boardW = 8
let computerBoard =  new _constructors_js__WEBPACK_IMPORTED_MODULE_0__.Gameboard(boardH, boardW);
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
            let ship = new _constructors_js__WEBPACK_IMPORTED_MODULE_0__.Ship (x, 0, false, shipsNames[sN]);
            Object.defineProperty(ship, "color", {value: colors[x]});
            console.log(x, v, w);
            console.log(poz);
            (0,_constructors_js__WEBPACK_IMPORTED_MODULE_0__.addShip)(v, w, computerBoard.squares, ship, pozition[poz]);
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
              comp_shotsleft.textContent = (0,_constructors_js__WEBPACK_IMPORTED_MODULE_0__.checkShipsOnBoard)(computerBoard.squares);
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
        comp_shotsleft.textContent = (0,_constructors_js__WEBPACK_IMPORTED_MODULE_0__.checkShipsOnBoard)(computerBoard.squares);
        div.setAttribute('style', `background-color: red`)
}));
arrNodelist[0].forEach((div) => div.addEventListener('mouseleave', (e) => {
     //   div.style.backgroundColor = '';
}));


function youHit(index){     // you shot on computer board 
        let x = (0,_constructors_js__WEBPACK_IMPORTED_MODULE_0__.indexOfDiv)(index)[0]
        let y = (0,_constructors_js__WEBPACK_IMPORTED_MODULE_0__.indexOfDiv)(index)[1]
        copm_shiphit.textContent = (0,_constructors_js__WEBPACK_IMPORTED_MODULE_0__.yourHitCordinates)(computerBoard.squares, x, y)
        arrBoard = [];
        updateBoard();
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixRQUFRO0FBQ2hDO0FBQ0E7QUFDQSwwRkFBMEYsb0JBQW9CLGtCQUFrQjtBQUNoSSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBLFNBQVM7QUFDVCxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsOEVBQThFO0FBQzlFO0FBQ0E7QUFDQSxxQ0FBcUMsbUVBQWlCO0FBQ3REO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRCw0QkFBNEI7QUFDNUIsZ0JBQWdCLDREQUFVO0FBQzFCLGdCQUFnQiw0REFBVTtBQUMxQixtQ0FBbUMsbUVBQWlCO0FBQ3BEO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29uc3RydWN0b3JzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXB1dGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vaW1wb3J0IHsgYWRkLCBpbmRleE9mIH0gZnJvbSAnbG9kYXNoJztcbi8qKkB0eXBlIHtpbXBvcnQoJ2plc3QnKS5Db25maWd9Ki9cbmV4cG9ydCAgeyBTaGlwLCBHYW1lYm9hcmQsICB5b3VySGl0Q29yZGluYXRlcywgY29tcHV0ZXJIaXRDb3JkaW5hdGVzLCBhZGRTaGlwLCBcbiAgICBpbmRleE9mRGl2LCBjaGVja1NoaXBzT25Cb2FyZCB9Oy8vY2xhc3MgU2hpcHtcbiAgICBcbmNsYXNzIFNoaXB7XG4gICAgY29uc3RydWN0b3IobGVuZ3RoLCBoaXQsIHN1bmssIG5hbWUpe1xuICAgICAgICAgICAgdGhpcy5sZW5ndGggPSBsZW5ndGgsXG4gICAgICAgICAgICB0aGlzLmhpdCA9IGhpdCxcbiAgICAgICAgICAgIHRoaXMuc3VuayA9IHN1bmssXG4gICAgICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB9XG4gICAgICAgIGhpdCgpe1xuICAgICAgICAgICAgaWYodGhpcy5oaXQgPT0gdGhpcy5sZW5ndGggKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5oaXQgID0gdGhpcy5oaXQgKyAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlzU3Vuaygpe1xuICAgICAgICAgICAgaWYgKCB0aGlzLmxlbmd0aCA9PSAwKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zdW5rID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBjbGFzcyBHYW1lYm9hcmR7XG4gICAgY29uc3RydWN0b3IoIGhlaWdodCwgd2lkdGgpe1xuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodCxcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoLFxuICAgICAgICB0aGlzLnNxdWFyZXMgID0gW107XG4gICAgICAgIH1cbiAgICBjcmVhdGVCb2FyZCgpe1xuICAgICAgICBsZXQgeCA9IDA7XG4gICAgICAgIGZvciggbGV0IGkgPSAwOyBpIDwgdGhpcy5oZWlnaHQ7IGkrKyl7XG4gICAgICAgICAgICAgICAgbGV0IHkgPSBbXTtcbiAgICAgICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCB0aGlzLndpZHRoOyBqKyspe1xuICAgICAgICAgICAgICAgIHkucHVzaCh4KTtcbiAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc3F1YXJlcy5wdXNoKHkpO1xuICAgICAgIH1cbiAgICB9IFxufVxuZnVuY3Rpb24gY2hlY2tTaGlwc09uQm9hcmQoYm9hcmQpeyAgICBcbiAgICBsZXQgbnVtYmVyT2ZTaGlwcyA9IDA7ICAgICAgICAgXG4gICAgZm9yKCBsZXQgaSA9IDA7IGkgPCBib2FyZFswXS5sZW5ndGggOyBpKyspe1xuICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgYm9hcmRbMF0ubGVuZ3RoOyBqKyspe1xuICAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkW2ldW2pdID09ICdvYmplY3QnKXtcbiAgICAgICAgICAgICAgICAgICAgbnVtYmVyT2ZTaGlwcyA9IG51bWJlck9mU2hpcHMgKyAxO1xuICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuICAgICAgICBpZiggbnVtYmVyT2ZTaGlwcyA9PSAwKXtcbiAgICAgICAgICAgIHJldHVybiAnbm8gc2hpcHMnO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgcmV0dXJuJyAgJyArIG51bWJlck9mU2hpcHM7XG4gICAgICAgIH0gICAgICAgICAgXG59XG4gIFxuZnVuY3Rpb24gYWRkU2hpcCh4LCB5LCBib2FyZCwgc2hpcCwgcG96KXsgLy9jaGVjayBpZiBpdCBpcyBzcGFjZSBvbiB0aGUgYm9hcmQgZm9yIHNoaXAgYW5kIGFkZFxuICAgIGlmKCB4ID4gYm9hcmQubGVuZ3RoIC0gc2hpcC5sZW5ndGggfHwgeSA+IGJvYXJkLmxlbmd0aCAtIHNoaXAubGVuZ3RoIHx8IGJvYXJkW3hdW3ldICE9IDAgKXtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1lbHNlIHtcbiAgICAvLyAgICAgcG96ID0gJ3ZlcnRpY2FsJztcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICBpZiAoIHBveiA9PSAndmVydGljYWwnKXtcbiAgICAgICAgICAgICAgICAgICAgIGlmKGJvYXJkW3hdW3ldID09IDApe1xuICAgICAgICAgICAgICAgICAgICAgICAgIGJvYXJkW3hdW3ldID0gc2hpcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeCA9IHggKyAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBveiA9ICd2ZXJ0aWNhbCdcbiAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYoIGJvYXJkW3hdW3ldICE9IDApe1xuICAgICAgICAgICAgICAgICAgICAgICAgcG96ID0gJ2hvcml6b250YWwnXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIGlmKCBwb3ogPT0gJ2hvcml6b250YWwnKXtcbiAgICAgICAgICAgICAgICAgICAgaWYoYm9hcmRbeF1beV0gPT0gMCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBib2FyZFt4XVt5XSA9IHNoaXA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeSA9IHkgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBveiA9ICdob3Jpem9udGFsJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYoIGJvYXJkW3hdW3ldICE9IDApe1xuICAgICAgICAgICAgICAgICAgICAgLy8gICBwb3ogPSAnaG9yaXpvbnRhbCdcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbmZ1bmN0aW9uIGNvbXB1dGVySGl0Q29yZGluYXRlcyhib2FyZCl7IC8vIGNvbXB1dGVyIGhpdCBvbiB0aGUgYm9hcmQgcmFuZG9tXG4gICAgICAgIGxldCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYm9hcmQubGVuZ3RoKTtcbiAgICAgICAgbGV0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBib2FyZC5sZW5ndGgpO1xuICAgICAgICBpZiAoIGJvYXJkW3hdW3ldLm5hbWUgIT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgICAgICBsZXQgY29tcHV0ZXJfaGl0ID0gYm9hcmRbeF1beV0ubmFtZTtcbiAgICAgICAgICAgICAgICBib2FyZFt4XVt5XS5sZW5ndGggPSBib2FyZFt4XVt5XS5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgIGJvYXJkW3hdW3ldLmhpdCA9IGJvYXJkW3hdW3ldLmhpdCArIDE7XG4gICAgICAgICAgICAgICAgYm9hcmRbeF1beV0uaXNTdW5rKCk7XG4gICAgICAgICAgICAgICAgYm9hcmRbeF1beV0gPSAneHh4JzsgXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbXB1dGVyX2hpdDsgICAgICAgICAgXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBib2FyZFt4XVt5XSA9ICdYJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5mdW5jdGlvbiB5b3VySGl0Q29yZGluYXRlcyhib2FyZCwgeCwgeSl7XG4gICAgICAgIGlmICggYm9hcmRbeF1beV0ubmFtZSAhPSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgbGV0IHlvdXJfaGl0ID0gYm9hcmRbeF1beV0ubmFtZTtcbiAgICAgICAgICAgIGJvYXJkW3hdW3ldLmxlbmd0aCA9IGJvYXJkW3hdW3ldLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICBib2FyZFt4XVt5XS5oaXQgPSBib2FyZFt4XVt5XS5oaXQgKyAxO1xuICAgICAgICAgICAgYm9hcmRbeF1beV0uaXNTdW5rKCk7XG4gICAgICAgICAgICBib2FyZFt4XVt5XSA9ICd4eHgnO1xuICAgICAgICAgICAgcmV0dXJuIHlvdXJfaGl0O1xuICAgICAgICB9XG4gICAgICAgICAgIGJvYXJkW3hdW3ldID0gJ3gnO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpbmRleE9mRGl2KG4peyAvLyBmaW5kIGRpdiBpbmRleCBvZiB0aWxlIG9uIHRoZSBib3JkLCBcbiAgICAgICAgbGV0IHggPSAwOyAgICAgICAgICAgLy8gdG5lIG51bWJlciBmcm9tIDAgdG8gNjMgdHJhbnNmb3JtZWQgaW4gY29yZGluYXRlcyAwLCAxXG4gICAgICAgIGxldCB5ID0gMDtcbiAgICAgICAgZm9yKCBsZXQgaSA9IDA7IGkgPD0gbjsgaSsrKXsgICBcbiAgICAgICAgICAgICAgICBpZiAoIGkgPD0gNyApe1xuICAgICAgICAgICAgICAgICAgICAgICAgeCA9IDBcbiAgICAgICAgICAgICAgICAgICAgICAgIHkgPSBpOyBcbiAgICAgICAgICAgICAgICB9ZWxzZSBpZiAoIGkgPiA3KXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHkgPSBuICUgODtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCBpICUgOCA9PSAwKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeCA9IHggKyAxXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbeCwgeV07IC8vcmV0dXJuIGNvcmRpbmF0ZSBvZiB0aGUgbmV3IHNoaXBcbiAgICB9XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJcbmltcG9ydCB7IEdhbWVib2FyZCwgU2hpcCwgYWRkU2hpcCwgeW91ckhpdENvcmRpbmF0ZXMsIGNoZWNrU2hpcHNPbkJvYXJkLFxuICAgICAgIGluZGV4T2ZEaXYgfSBmcm9tIFwiLi9jb25zdHJ1Y3RvcnMuanNcIjtcbiAgICAgICBpbXBvcnQgZmlyZSBmcm9tICcuL2ljb25zL2ZpcmUucG5nJ1xuIFxuY29uc3QgaWNvbmZpcmUgPSBuZXcgSW1hZ2UoKTtcbmljb25maXJlLnNyYyA9IGZpcmUgICBcbmRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gaWNvbmZpcmU7ICAgIFxuY29uc29sZS5sb2coaWNvbmZpcmUpXG5sZXQgYm9hcmRIID0gODtcbmxldCBib2FyZFcgPSA4XG5sZXQgY29tcHV0ZXJCb2FyZCA9ICBuZXcgR2FtZWJvYXJkKGJvYXJkSCwgYm9hcmRXKTtcbiAgICAgICAgY29tcHV0ZXJCb2FyZC5jcmVhdGVCb2FyZCgpO1xuICAgICAgICBsZXQgY29sb3JzID0gWyAnZ3JlZW4nLCAnYmx1ZScsICdkYXJrb3JhbmdlJywgJ3NpbHZlcicsICd5ZWxsb3cnLCAnYnJvd24nXTtcbiAgICAgICAgY29uc3QgcG96aXRpb24gPSBbJ3ZlcnRpY2FsJywgJ2hvcml6b250YWwnXVxuY29uc3Qgc2hpcHNOYW1lcyA9IFsnbWlyJywgJ294aScsICdkYXInLCAnZW1hJywgJ2xpZCcsICdkaWEnLCAncGV0J107XG4vL3lvdXJIaXRDb3JkaW5hdGVzKGNvbXB1dGVyQm9hcmQuc3F1YXJlcywgMCwgMSk7XG5cbmZ1bmN0aW9uIGNyZWF0ZVNoaXBzKG4pe1xuICAgICAgICBsZXQgcG96ID0gMDtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IG47IGkrKyl7XG4gICAgICAgICAgICBsZXQgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQpICsgMTtcbiAgICAgICAgICAgIGxldCB2ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGJvYXJkSCAtIDEpKTtcbiAgICAgICAgICAgIGxldCB3ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGJvYXJkVyAtIDEpKTtcbiAgICAgICAgICAgIGxldCBzTiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHNoaXBzTmFtZXMubGVuZ3RoKTtcbiAgICAgICAgICAgIHBveiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xuICAgICAgICAgICAgbGV0IHNoaXAgPSBuZXcgU2hpcCAoeCwgMCwgZmFsc2UsIHNoaXBzTmFtZXNbc05dKTtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaGlwLCBcImNvbG9yXCIsIHt2YWx1ZTogY29sb3JzW3hdfSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh4LCB2LCB3KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHBveik7XG4gICAgICAgICAgICBhZGRTaGlwKHYsIHcsIGNvbXB1dGVyQm9hcmQuc3F1YXJlcywgc2hpcCwgcG96aXRpb25bcG96XSk7XG4gICAgICAgIH1cbiAgICB9XG5jcmVhdGVTaGlwcyg1KTtcbi8vY2hlY2tTaGlwc09uQm9hcmQoY29tcHV0ZXJCb2FyZC5zcXVhcmVzKTtcbmZ1bmN0aW9uIGNyZWF0ZURvbUNvbXB1dGVyQm9hcmQoKXtcbiAgICAgICAgY29uc3QgY29tcHV0ZXJfYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnI2NvbXB1dGVyYm9hcmQnKTtcbiAgICAgICAgY29uc3QgZGl2MCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBkaXYxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRpdjAuY2xhc3NMaXN0LmFkZCgnY29tcHV0ZXJjb250YWluZXInKTtcbiAgICAgICAgY29tcHV0ZXJfYm9hcmQuYXBwZW5kKGRpdjApO1xuICAgICAgICBkaXYxLmNsYXNzTGlzdC5hZGQoJ2JvYXJkJyk7XG4gICAgICAgIGRpdjAuYXBwZW5kKGRpdjEpO1xuICAgICAgICBkaXYxLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoJHtib2FyZEh9LCAgNTBweClgKTtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGJvYXJkSCAqKiAyOyBpKyspe1xuICAgICAgICAgICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBkaXYuc2V0QXR0cmlidXRlKCdzdHlsZScsIGBoZWlnaHQ6IDMwcHg7IHdpZHRoOiAzMHB4YClcbiAgICAgICAgICAgICAgICBkaXYxLmFwcGVuZChkaXYpO1xuICAgICAgICB9XG59XG5jcmVhdGVEb21Db21wdXRlckJvYXJkKCk7XG5cbiAgICAgICAgY29uc3QgY29tcF9zaG90c2xlZnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29tcF9zaG90c2xlZnQnKTtcbiAgICAgICAgICAgICAgY29tcF9zaG90c2xlZnQudGV4dENvbnRlbnQgPSBjaGVja1NoaXBzT25Cb2FyZChjb21wdXRlckJvYXJkLnNxdWFyZXMpO1xuICAgICAgICBjb25zdCBjb3BtX3NoaXBoaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29tcF9zaGlwaGl0Jyk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBib2FyZHRpbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZGl2LmNvbXB1dGVyY29udGFpbmVyID4gZGl2LmJvYXJkIGRpdicpO1xuICAgICAgICBjb25zdCBhcnJOb2RlbGlzdCA9IG5ldyBBcnJheShib2FyZHRpbGVzKTtcbiAgICAgICAgbGV0IGFyckJvYXJkID0gW107IC8vIGNvbnZlcnQgbWF0cml4IHRvIGEgaW4gbGluZSBhcnJheVxuZnVuY3Rpb24gdXBkYXRlQm9hcmQoKXtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspe1xuICAgICAgICAgICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCA4OyBqKyspe1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyQm9hcmQucHVzaChjb21wdXRlckJvYXJkLnNxdWFyZXNbaV1bal0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IobGV0IGkgPSAwIDsgaSA8IDY0OyBpKyspe1xuICAgICAgICAgICAgICAgIGlmKHR5cGVvZiBhcnJCb2FyZFtpXSA9PSAnb2JqZWN0Jyl7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJOb2RlbGlzdFswXVtpXS50ZXh0Q29udGVudCA9IGFyckJvYXJkW2ldLm5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJOb2RlbGlzdFswXVtpXS5zZXRBdHRyaWJ1dGUoYHN0eWxlYCwgYGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyBiYWNrZ3JvdW5kLWNvbG9yOiAke2FyckJvYXJkW2ldLmNvbG9yfWApO1xuICAgICAgICAgICAgICAgIH1lbHNlIGlmKHR5cGVvZiBhcnJCb2FyZFtpXSA9PSAnc3RyaW5nJyl7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJOb2RlbGlzdFswXVtpXS50ZXh0Q29udGVudCA9IGFyckJvYXJkW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyTm9kZWxpc3RbMF1baV0uc2V0QXR0cmlidXRlKCdzdHlsZScsICdiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHBpbmsnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG51cGRhdGVCb2FyZCgpO1xuY29uc3QgY2xlYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xlYXJfY29tcF9ib2FyZCcpO1xuY29uc3QgYm9hcmROb2RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyBkaXYuY29tcHV0ZXJjb250YWluZXIgPiBkaXYuYm9hcmQgPiBkaXYnKVxuY29uc3QgY29tcF9hZGRib2F0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb21wX2FkZGJvYXRzJyk7XG5cbmNsZWFyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbXB1dGVyQm9hcmQuc3F1YXJlcyA9IFtdO1xuICAgICAgICAgICAgICAgIGNvbXB1dGVyQm9hcmQuY3JlYXRlQm9hcmQoKVxuICAgICAgICAgICAgICAgIGFyckJvYXJkID0gW107XG4gICAgICAgICAgICAgICAgYm9hcmROb2Rlcy5mb3JFYWNoKChkaXYsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXYudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgICAvLyAgICAgICAgICAgICAgZGl2LnN0eWxlLmJvcmRlciA9JzFweCc7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICBjb21wX3Nob3RzbGVmdC50ZXh0Q29udGVudCA9ICcnXG4gICAgICAgICAgICAgY29wbV9zaGlwaGl0LnRleHRDb250ZW50ID0gJydcbiAgICAgICAgfSk7XG5jb25zdCBzaG93Q29tcEJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Nob3dfYm9hcmQnKTtcbnNob3dDb21wQm9hcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IC8vIHNob3cgY29tcHV0ZXIgYm9hcmRcbiAgICAgICAgICAgICAgICBib2FyZE5vZGVzLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgIH0pO1xuY29tcF9hZGRib2F0cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgLy8gYWRkIHNoaXBzIG9uIGJvYXJkXG4gICAgICAgIGxldCB4ID0gOFxuICAgICAgICAgICAgICAgIGNyZWF0ZVNoaXBzKHgpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZUJvYXJkKCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY29tcHV0ZXJCb2FyZCk7XG4gICAgICAgIH0pO1xuYXJyTm9kZWxpc3RbMF0uZm9yRWFjaCgoZGl2LCBpbmRleCkgPT4gZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHsgLy8gaGl0IGEgc2hpcFxuICAgICAgLy8gIGRpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JlZW4nO1xuICAgICAgICB5b3VIaXQoaW5kZXgpO1xuICAgICAgICBjb21wX3Nob3RzbGVmdC50ZXh0Q29udGVudCA9IGNoZWNrU2hpcHNPbkJvYXJkKGNvbXB1dGVyQm9hcmQuc3F1YXJlcyk7XG4gICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgYGJhY2tncm91bmQtY29sb3I6IHJlZGApXG59KSk7XG5hcnJOb2RlbGlzdFswXS5mb3JFYWNoKChkaXYpID0+IGRpdi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKGUpID0+IHtcbiAgICAgLy8gICBkaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyc7XG59KSk7XG5cblxuZnVuY3Rpb24geW91SGl0KGluZGV4KXsgICAgIC8vIHlvdSBzaG90IG9uIGNvbXB1dGVyIGJvYXJkIFxuICAgICAgICBsZXQgeCA9IGluZGV4T2ZEaXYoaW5kZXgpWzBdXG4gICAgICAgIGxldCB5ID0gaW5kZXhPZkRpdihpbmRleClbMV1cbiAgICAgICAgY29wbV9zaGlwaGl0LnRleHRDb250ZW50ID0geW91ckhpdENvcmRpbmF0ZXMoY29tcHV0ZXJCb2FyZC5zcXVhcmVzLCB4LCB5KVxuICAgICAgICBhcnJCb2FyZCA9IFtdO1xuICAgICAgICB1cGRhdGVCb2FyZCgpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9