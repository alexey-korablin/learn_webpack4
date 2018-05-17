import _ from 'lodash';
import './style.css';
import icon from './icon.png';
import data from './data.xml';

function component() {
var element = document.createElement('div');

const myIcon = new Image();
myIcon.src = icon;

// Lodash, now imported by this script
element.innerHTML = _.join(['Hello', 'webpack'], ' ');
element.classList.add('hello');
element.appendChild(myIcon);

console.log(data);

return element;
}

document.body.appendChild(component());