import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Counter from "./Counter";

ReactDOM.render(
    <Counter/>, document.getElementById('root')
);
// В типе UserPropsType у функции deleteUser в параметрах указан тип "any".
// Какой тип было бы указать правильнее?
