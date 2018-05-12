import _ from 'lodash';
import style from './style.css';
import icon from './icon.png';
import data from './data.xml';
import printMe from './print.js'

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
    console.log(process.env.NODE_ENV);
} else {
    console.log(process.env.NODE_ENV);
}

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
    
let element = component();
document.body.appendChild(element);

if (module.hot) {
    console.log('Works!');
    module.hot.accept('./print.js', function() {
        console.log('Works!!!!');
        console.log('Accepting the updated printMe module!');
        document.body.removeChild(element);
        element = component();
        document.body.appendChild(element);
    })
}