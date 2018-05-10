import _ from 'lodash';
import style from './style.css';
import icon from './icon.png';
import data from './data.xml';
import printMe from './print.js'

'use strict';
const component = () => {
    const element = document.createElement('div');
    const btn = document.createElement('button');
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'Alex'], ' ');
    element.classList.add('hello');

    btn.innerHTML = 'Click me to get result in the console!';

    let myIcon = new Image();
    myIcon.src = icon;
    element.appendChild(myIcon);

    console.log(data);

    btn.addEventListener('click', printMe);

    element.appendChild(btn)
    
    return element;
}
    
document.body.appendChild(component());
