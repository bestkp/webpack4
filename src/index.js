import _ from 'lodash'
import './style.css'

var ele = document.createElement('div');
ele.innerHTML = _.join(['hello', 'webpack'], ' ');
ele.classList.add('hello');

document.body.appendChild(ele);