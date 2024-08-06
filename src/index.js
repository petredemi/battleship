import _ from 'lodash';
import './style.css';
import paltinleafs from './paltinleafs.jpg';
import {print, eu} from './ship.js';


function component() {
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    const myIcon = new Image();
    myIcon.src = paltinleafs;
  
    element.appendChild(myIcon);
  

  
    return element;
  }
  print();
  eu()
  console.log('hi');
  
  document.body.appendChild(component());
  