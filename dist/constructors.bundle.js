/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/*!*****************************!*\
  !*** ./src/constructors.js ***!
  \*****************************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3RydWN0b3JzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BLFdBQVcsZUFBZTtBQUMxQixVQUFVLHNCQUFzQjtBQUVJO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixpQkFBaUI7QUFDekM7QUFDQSwyQkFBMkIsZ0JBQWdCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isc0JBQXNCO0FBQzFDLHVCQUF1QixxQkFBcUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLDJCQUEyQixpQkFBaUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGlCQUFpQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1Qiw2QkFBNkI7QUFDN0I7QUFDQSx3QkFBd0IsUUFBUTtBQUNoQztBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29uc3RydWN0b3JzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy9pbXBvcnQgeyBhZGQsIGluZGV4T2YgfSBmcm9tICdsb2Rhc2gnO1xuLyoqQHR5cGUge2ltcG9ydCgnamVzdCcpLkNvbmZpZ30qL1xuZXhwb3J0ICB7IFNoaXAsIEdhbWVib2FyZCwgIHlvdXJIaXRDb3JkaW5hdGVzLCBjb21wdXRlckhpdENvcmRpbmF0ZXMsIGFkZFNoaXAsIFxuICAgIGluZGV4T2ZEaXYsIGNoZWNrU2hpcHNPbkJvYXJkIH07Ly9jbGFzcyBTaGlwe1xuICAgIFxuY2xhc3MgU2hpcHtcbiAgICBjb25zdHJ1Y3RvcihsZW5ndGgsIGhpdCwgc3VuaywgbmFtZSl7XG4gICAgICAgICAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aCxcbiAgICAgICAgICAgIHRoaXMuaGl0ID0gaGl0LFxuICAgICAgICAgICAgdGhpcy5zdW5rID0gc3VuayxcbiAgICAgICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgaGl0KCl7XG4gICAgICAgICAgICBpZih0aGlzLmhpdCA9PSB0aGlzLmxlbmd0aCApe1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmhpdCAgPSB0aGlzLmhpdCArIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaXNTdW5rKCl7XG4gICAgICAgICAgICBpZiAoIHRoaXMubGVuZ3RoID09IDApe1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnN1bmsgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGNsYXNzIEdhbWVib2FyZHtcbiAgICBjb25zdHJ1Y3RvciggaGVpZ2h0LCB3aWR0aCl7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0LFxuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGgsXG4gICAgICAgIHRoaXMuc3F1YXJlcyAgPSBbXTtcbiAgICAgICAgfVxuICAgIGNyZWF0ZUJvYXJkKCl7XG4gICAgICAgIGxldCB4ID0gMDtcbiAgICAgICAgZm9yKCBsZXQgaSA9IDA7IGkgPCB0aGlzLmhlaWdodDsgaSsrKXtcbiAgICAgICAgICAgICAgICBsZXQgeSA9IFtdO1xuICAgICAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IHRoaXMud2lkdGg7IGorKyl7XG4gICAgICAgICAgICAgICAgeS5wdXNoKHgpO1xuICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zcXVhcmVzLnB1c2goeSk7XG4gICAgICAgfVxuICAgIH0gXG59XG5mdW5jdGlvbiBjaGVja1NoaXBzT25Cb2FyZChib2FyZCl7ICAgIFxuICAgIGxldCBudW1iZXJPZlNoaXBzID0gMDsgICAgICAgICBcbiAgICBmb3IoIGxldCBpID0gMDsgaSA8IGJvYXJkWzBdLmxlbmd0aCA7IGkrKyl7XG4gICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCBib2FyZFswXS5sZW5ndGg7IGorKyl7XG4gICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmRbaV1bal0gPT0gJ29iamVjdCcpe1xuICAgICAgICAgICAgICAgICAgICBudW1iZXJPZlNoaXBzID0gbnVtYmVyT2ZTaGlwcyArIDE7XG4gICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4gICAgICAgIGlmKCBudW1iZXJPZlNoaXBzID09IDApe1xuICAgICAgICAgICAgcmV0dXJuICdubyBzaGlwcyc7XG4gICAgICAgIH1lbHNle1xuICAgICAgICByZXR1cm4nICAnICsgbnVtYmVyT2ZTaGlwcztcbiAgICAgICAgfSAgICAgICAgICBcbn1cbiAgXG5mdW5jdGlvbiBhZGRTaGlwKHgsIHksIGJvYXJkLCBzaGlwLCBwb3opeyAvL2NoZWNrIGlmIGl0IGlzIHNwYWNlIG9uIHRoZSBib2FyZCBmb3Igc2hpcCBhbmQgYWRkXG4gICAgaWYoIHggPiBib2FyZC5sZW5ndGggLSBzaGlwLmxlbmd0aCB8fCB5ID4gYm9hcmQubGVuZ3RoIC0gc2hpcC5sZW5ndGggfHwgYm9hcmRbeF1beV0gIT0gMCApe1xuICAgICAgICByZXR1cm47XG4gICAgfWVsc2Uge1xuICAgIC8vICAgICBwb3ogPSAndmVydGljYWwnO1xuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIGlmICggcG96ID09ICd2ZXJ0aWNhbCcpe1xuICAgICAgICAgICAgICAgICAgICAgaWYoYm9hcmRbeF1beV0gPT0gMCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgYm9hcmRbeF1beV0gPSBzaGlwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4ID0geCArIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG96ID0gJ3ZlcnRpY2FsJ1xuICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiggYm9hcmRbeF1beV0gIT0gMCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3ogPSAnaG9yaXpvbnRhbCdcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgaWYoIHBveiA9PSAnaG9yaXpvbnRhbCcpe1xuICAgICAgICAgICAgICAgICAgICBpZihib2FyZFt4XVt5XSA9PSAwKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvYXJkW3hdW3ldID0gc2hpcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5ID0geSArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG96ID0gJ2hvcml6b250YWwnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiggYm9hcmRbeF1beV0gIT0gMCl7XG4gICAgICAgICAgICAgICAgICAgICAvLyAgIHBveiA9ICdob3Jpem9udGFsJ1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuZnVuY3Rpb24gY29tcHV0ZXJIaXRDb3JkaW5hdGVzKGJvYXJkKXsgLy8gY29tcHV0ZXIgaGl0IG9uIHRoZSBib2FyZCByYW5kb21cbiAgICAgICAgbGV0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBib2FyZC5sZW5ndGgpO1xuICAgICAgICBsZXQgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGJvYXJkLmxlbmd0aCk7XG4gICAgICAgIGlmICggYm9hcmRbeF1beV0ubmFtZSAhPSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgICAgIGxldCBjb21wdXRlcl9oaXQgPSBib2FyZFt4XVt5XS5uYW1lO1xuICAgICAgICAgICAgICAgIGJvYXJkW3hdW3ldLmxlbmd0aCA9IGJvYXJkW3hdW3ldLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgYm9hcmRbeF1beV0uaGl0ID0gYm9hcmRbeF1beV0uaGl0ICsgMTtcbiAgICAgICAgICAgICAgICBib2FyZFt4XVt5XS5pc1N1bmsoKTtcbiAgICAgICAgICAgICAgICBib2FyZFt4XVt5XSA9ICd4eHgnOyBcbiAgICAgICAgICAgICAgICByZXR1cm4gY29tcHV0ZXJfaGl0OyAgICAgICAgICBcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGJvYXJkW3hdW3ldID0gJ1gnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbmZ1bmN0aW9uIHlvdXJIaXRDb3JkaW5hdGVzKGJvYXJkLCB4LCB5KXtcbiAgICAgICAgaWYgKCBib2FyZFt4XVt5XS5uYW1lICE9IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICBsZXQgeW91cl9oaXQgPSBib2FyZFt4XVt5XS5uYW1lO1xuICAgICAgICAgICAgYm9hcmRbeF1beV0ubGVuZ3RoID0gYm9hcmRbeF1beV0ubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIGJvYXJkW3hdW3ldLmhpdCA9IGJvYXJkW3hdW3ldLmhpdCArIDE7XG4gICAgICAgICAgICBib2FyZFt4XVt5XS5pc1N1bmsoKTtcbiAgICAgICAgICAgIGJvYXJkW3hdW3ldID0gJ3h4eCc7XG4gICAgICAgICAgICByZXR1cm4geW91cl9oaXQ7XG4gICAgICAgIH1cbiAgICAgICAgICAgYm9hcmRbeF1beV0gPSAneCc7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGluZGV4T2ZEaXYobil7IC8vIGZpbmQgZGl2IGluZGV4IG9mIHRpbGUgb24gdGhlIGJvcmQsIFxuICAgICAgICBsZXQgeCA9IDA7ICAgICAgICAgICAvLyB0bmUgbnVtYmVyIGZyb20gMCB0byA2MyB0cmFuc2Zvcm1lZCBpbiBjb3JkaW5hdGVzIDAsIDFcbiAgICAgICAgbGV0IHkgPSAwO1xuICAgICAgICBmb3IoIGxldCBpID0gMDsgaSA8PSBuOyBpKyspeyAgIFxuICAgICAgICAgICAgICAgIGlmICggaSA8PSA3ICl7XG4gICAgICAgICAgICAgICAgICAgICAgICB4ID0gMFxuICAgICAgICAgICAgICAgICAgICAgICAgeSA9IGk7IFxuICAgICAgICAgICAgICAgIH1lbHNlIGlmICggaSA+IDcpe1xuICAgICAgICAgICAgICAgICAgICAgICAgeSA9IG4gJSA4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIGkgJSA4ID09IDApe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4ID0geCArIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFt4LCB5XTsgLy9yZXR1cm4gY29yZGluYXRlIG9mIHRoZSBuZXcgc2hpcFxuICAgIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==