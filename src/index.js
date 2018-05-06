import _ from 'lodash';
import style from './style.css';

'use strict';
const component = () => {
    const element = document.createElement('div');
    
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'Alex'], ' ');
    element.classList.add('hello');
    
    return element;
}
    
document.body.appendChild(component());
