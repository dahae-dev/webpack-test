import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.scss';

const title = 'React with Webpack and Babel!!';
const template = <div>{title}</div>;

ReactDOM.render(
  template,
  document.getElementById('root')
);

// module.hot.accept();