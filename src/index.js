import _ from 'lodash';

'use strict';
const component = () => {
    const element = document.createElement('div');
    
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'Alex'], ' ');
    
    return element;
}
    
document.body.appendChild(component());
