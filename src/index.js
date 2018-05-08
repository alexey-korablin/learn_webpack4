import _ from 'lodash';
import style from './style.css';
import icon from './icon.png';
import data from './data.xml';

'use strict';
const component = () => {
    const element = document.createElement('div');
    
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'Alex'], ' ');
    element.classList.add('hello');

    let myIcon = new Image();
    myIcon.src = icon;
    element.appendChild(myIcon);

    console.log(data);
    
    return element;
}
    
document.body.appendChild(component());
