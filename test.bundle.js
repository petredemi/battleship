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
/************************************************************************/
var __webpack_exports__ = {};
/*!********************************!*\
  !*** ./src/battleship.test.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constructors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructors.js */ "./src/constructors.js");

//
//
//  test.skip('add ship on the board', () =>{
//    expect(addShip(1, 1)).toEqual(1);
//  })
//  test.skip('create board', () => {
//  expect(Board).toEqual({ height: 3, width: 3, squares:[[0, 0, 0], [0, 0, 0],
//     [0, 0, 0]]});
//  });
//
//  test.skip(' test ship object', () => {
//  expect(ship1).toEqual({lenght: 3, hit: 0, sunk: false})
//});


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxXQUFXLGVBQWU7QUFDMUIsVUFBVSxzQkFBc0I7QUFFSTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaUJBQWlCO0FBQ3pDO0FBQ0EsMkJBQTJCLGdCQUFnQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHNCQUFzQjtBQUMxQyx1QkFBdUIscUJBQXFCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSwyQkFBMkIsaUJBQWlCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixpQkFBaUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUIsNkJBQTZCO0FBQzdCO0FBQ0Esd0JBQXdCLFFBQVE7QUFDaEM7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2Qjs7Ozs7OztVQ2xJQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7OztBQ05rRDtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLDRCQUE0QjtBQUM1QixrQkFBa0I7QUFDbEIsS0FBSztBQUNMO0FBQ0E7QUFDQSwyQkFBMkIsK0JBQStCO0FBQzFELEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbnN0cnVjdG9ycy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9iYXR0bGVzaGlwLnRlc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnQgeyBhZGQsIGluZGV4T2YgfSBmcm9tICdsb2Rhc2gnO1xuLyoqQHR5cGUge2ltcG9ydCgnamVzdCcpLkNvbmZpZ30qL1xuZXhwb3J0ICB7IFNoaXAsIEdhbWVib2FyZCwgIHlvdXJIaXRDb3JkaW5hdGVzLCBjb21wdXRlckhpdENvcmRpbmF0ZXMsIGFkZFNoaXAsIFxuICAgIGluZGV4T2ZEaXYsIGNoZWNrU2hpcHNPbkJvYXJkIH07Ly9jbGFzcyBTaGlwe1xuICAgIFxuY2xhc3MgU2hpcHtcbiAgICBjb25zdHJ1Y3RvcihsZW5ndGgsIGhpdCwgc3VuaywgbmFtZSl7XG4gICAgICAgICAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aCxcbiAgICAgICAgICAgIHRoaXMuaGl0ID0gaGl0LFxuICAgICAgICAgICAgdGhpcy5zdW5rID0gc3VuayxcbiAgICAgICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgaGl0KCl7XG4gICAgICAgICAgICBpZih0aGlzLmhpdCA9PSB0aGlzLmxlbmd0aCApe1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmhpdCAgPSB0aGlzLmhpdCArIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaXNTdW5rKCl7XG4gICAgICAgICAgICBpZiAoIHRoaXMubGVuZ3RoID09IDApe1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnN1bmsgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGNsYXNzIEdhbWVib2FyZHtcbiAgICBjb25zdHJ1Y3RvciggaGVpZ2h0LCB3aWR0aCl7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0LFxuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGgsXG4gICAgICAgIHRoaXMuc3F1YXJlcyAgPSBbXTtcbiAgICAgICAgfVxuICAgIGNyZWF0ZUJvYXJkKCl7XG4gICAgICAgIGxldCB4ID0gMDtcbiAgICAgICAgZm9yKCBsZXQgaSA9IDA7IGkgPCB0aGlzLmhlaWdodDsgaSsrKXtcbiAgICAgICAgICAgICAgICBsZXQgeSA9IFtdO1xuICAgICAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IHRoaXMud2lkdGg7IGorKyl7XG4gICAgICAgICAgICAgICAgeS5wdXNoKHgpO1xuICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zcXVhcmVzLnB1c2goeSk7XG4gICAgICAgfVxuICAgIH0gXG59XG5mdW5jdGlvbiBjaGVja1NoaXBzT25Cb2FyZChib2FyZCl7ICAgIFxuICAgIGxldCBudW1iZXJPZlNoaXBzID0gMDsgICAgICAgICBcbiAgICBmb3IoIGxldCBpID0gMDsgaSA8IGJvYXJkWzBdLmxlbmd0aCA7IGkrKyl7XG4gICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCBib2FyZFswXS5sZW5ndGg7IGorKyl7XG4gICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmRbaV1bal0gPT0gJ29iamVjdCcpe1xuICAgICAgICAgICAgICAgICAgICBudW1iZXJPZlNoaXBzID0gbnVtYmVyT2ZTaGlwcyArIDE7XG4gICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4gICAgICAgIGlmKCBudW1iZXJPZlNoaXBzID09IDApe1xuICAgICAgICAgICAgcmV0dXJuICdubyBzaGlwcyc7XG4gICAgICAgIH1lbHNle1xuICAgICAgICByZXR1cm4nICAnICsgbnVtYmVyT2ZTaGlwcztcbiAgICAgICAgfSAgICAgICAgICBcbn1cbiAgXG5mdW5jdGlvbiBhZGRTaGlwKHgsIHksIGJvYXJkLCBzaGlwLCBwb3opeyAvL2NoZWNrIGlmIGl0IGlzIHNwYWNlIG9uIHRoZSBib2FyZCBmb3Igc2hpcCBhbmQgYWRkXG4gICAgaWYoIHggPiBib2FyZC5sZW5ndGggLSBzaGlwLmxlbmd0aCB8fCB5ID4gYm9hcmQubGVuZ3RoIC0gc2hpcC5sZW5ndGggfHwgYm9hcmRbeF1beV0gIT0gMCApe1xuICAgICAgICByZXR1cm47XG4gICAgfWVsc2Uge1xuICAgIC8vICAgICBwb3ogPSAndmVydGljYWwnO1xuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIGlmICggcG96ID09ICd2ZXJ0aWNhbCcpe1xuICAgICAgICAgICAgICAgICAgICAgaWYoYm9hcmRbeF1beV0gPT0gMCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgYm9hcmRbeF1beV0gPSBzaGlwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4ID0geCArIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG96ID0gJ3ZlcnRpY2FsJ1xuICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiggYm9hcmRbeF1beV0gIT0gMCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3ogPSAnaG9yaXpvbnRhbCdcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgaWYoIHBveiA9PSAnaG9yaXpvbnRhbCcpe1xuICAgICAgICAgICAgICAgICAgICBpZihib2FyZFt4XVt5XSA9PSAwKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvYXJkW3hdW3ldID0gc2hpcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5ID0geSArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG96ID0gJ2hvcml6b250YWwnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiggYm9hcmRbeF1beV0gIT0gMCl7XG4gICAgICAgICAgICAgICAgICAgICAvLyAgIHBveiA9ICdob3Jpem9udGFsJ1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuZnVuY3Rpb24gY29tcHV0ZXJIaXRDb3JkaW5hdGVzKGJvYXJkKXsgLy8gY29tcHV0ZXIgaGl0IG9uIHRoZSBib2FyZCByYW5kb21cbiAgICAgICAgbGV0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBib2FyZC5sZW5ndGgpO1xuICAgICAgICBsZXQgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGJvYXJkLmxlbmd0aCk7XG4gICAgICAgIGlmICggYm9hcmRbeF1beV0ubmFtZSAhPSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgICAgIGxldCBjb21wdXRlcl9oaXQgPSBib2FyZFt4XVt5XS5uYW1lO1xuICAgICAgICAgICAgICAgIGJvYXJkW3hdW3ldLmxlbmd0aCA9IGJvYXJkW3hdW3ldLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgYm9hcmRbeF1beV0uaGl0ID0gYm9hcmRbeF1beV0uaGl0ICsgMTtcbiAgICAgICAgICAgICAgICBib2FyZFt4XVt5XS5pc1N1bmsoKTtcbiAgICAgICAgICAgICAgICBib2FyZFt4XVt5XSA9ICd4eHgnOyBcbiAgICAgICAgICAgICAgICByZXR1cm4gY29tcHV0ZXJfaGl0OyAgICAgICAgICBcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGJvYXJkW3hdW3ldID0gJ1gnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbmZ1bmN0aW9uIHlvdXJIaXRDb3JkaW5hdGVzKGJvYXJkLCB4LCB5KXtcbiAgICAgICAgaWYgKCBib2FyZFt4XVt5XS5uYW1lICE9IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICBsZXQgeW91cl9oaXQgPSBib2FyZFt4XVt5XS5uYW1lO1xuICAgICAgICAgICAgYm9hcmRbeF1beV0ubGVuZ3RoID0gYm9hcmRbeF1beV0ubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIGJvYXJkW3hdW3ldLmhpdCA9IGJvYXJkW3hdW3ldLmhpdCArIDE7XG4gICAgICAgICAgICBib2FyZFt4XVt5XS5pc1N1bmsoKTtcbiAgICAgICAgICAgIGJvYXJkW3hdW3ldID0gJ3h4eCc7XG4gICAgICAgICAgICByZXR1cm4geW91cl9oaXQ7XG4gICAgICAgIH1cbiAgICAgICAgICAgYm9hcmRbeF1beV0gPSAneCc7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGluZGV4T2ZEaXYobil7IC8vIGZpbmQgZGl2IGluZGV4IG9mIHRpbGUgb24gdGhlIGJvcmQsIFxuICAgICAgICBsZXQgeCA9IDA7ICAgICAgICAgICAvLyB0bmUgbnVtYmVyIGZyb20gMCB0byA2MyB0cmFuc2Zvcm1lZCBpbiBjb3JkaW5hdGVzIDAsIDFcbiAgICAgICAgbGV0IHkgPSAwO1xuICAgICAgICBmb3IoIGxldCBpID0gMDsgaSA8PSBuOyBpKyspeyAgIFxuICAgICAgICAgICAgICAgIGlmICggaSA8PSA3ICl7XG4gICAgICAgICAgICAgICAgICAgICAgICB4ID0gMFxuICAgICAgICAgICAgICAgICAgICAgICAgeSA9IGk7IFxuICAgICAgICAgICAgICAgIH1lbHNlIGlmICggaSA+IDcpe1xuICAgICAgICAgICAgICAgICAgICAgICAgeSA9IG4gJSA4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIGkgJSA4ID09IDApe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4ID0geCArIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFt4LCB5XTsgLy9yZXR1cm4gY29yZGluYXRlIG9mIHRoZSBuZXcgc2hpcFxuICAgIH1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtzaGlwMSwgYWRkU2hpcCB9IGZyb20gJy4vY29uc3RydWN0b3JzLmpzJztcbi8vXG4vL1xuLy8gIHRlc3Quc2tpcCgnYWRkIHNoaXAgb24gdGhlIGJvYXJkJywgKCkgPT57XG4vLyAgICBleHBlY3QoYWRkU2hpcCgxLCAxKSkudG9FcXVhbCgxKTtcbi8vICB9KVxuLy8gIHRlc3Quc2tpcCgnY3JlYXRlIGJvYXJkJywgKCkgPT4ge1xuLy8gIGV4cGVjdChCb2FyZCkudG9FcXVhbCh7IGhlaWdodDogMywgd2lkdGg6IDMsIHNxdWFyZXM6W1swLCAwLCAwXSwgWzAsIDAsIDBdLFxuLy8gICAgIFswLCAwLCAwXV19KTtcbi8vICB9KTtcbi8vXG4vLyAgdGVzdC5za2lwKCcgdGVzdCBzaGlwIG9iamVjdCcsICgpID0+IHtcbi8vICBleHBlY3Qoc2hpcDEpLnRvRXF1YWwoe2xlbmdodDogMywgaGl0OiAwLCBzdW5rOiBmYWxzZX0pXG4vL30pO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=