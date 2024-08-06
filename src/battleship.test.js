import {calculator, analyseArray, capitalize, ship1, addShip } from './ship.js';


  test('add ship on the board', () =>{
    expect(addShip(1, 1)).toEqual(1);
  })
  test.skip('create board', () => {
  expect(Board).toEqual({ height: 3, width: 3, squares:[[0, 0, 0], [0, 0, 0],
     [0, 0, 0]]});
  });

  test(' test ship object', () => {
  expect(ship1).toEqual({lenght: 3, hit: 0, sunk: false})
})
  test.skip ('testing calculator functions sum', () => { 
  expect( calculator.sum(3, 3)).toBe(6);
  });
  test.skip ('testing calculator functions substract', () => {
    expect( calculator.substract(7, 3)).toBe(4);
  });
  test.skip ('testing calculator functions divide', () => {
    expect( calculator.divide(8, 2)).toBe(4);
  });
  test.skip ('testing calculator functions multiply', () => {
    expect( calculator.multiply(3, 3)).toBe(9);
  });

//import analizeArray from'./ship.js';
let x = [2, 7, 4, 11]

test.skip ('analize an array and return an obhect', () => {
    expect(analyseArray(x)).toEqual(
    {   min: 2, 
        max: 11,
        length: 4,
        average: 6 
    });
});

test ('capitalize first leter', () => {
  expect(capitalize()).toBe('Ssss');
})