import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Header from './containers/headerContainer';
//import '/index.css'

const App = () => {
  return ( 
    <div>
    <h1>Hello</h1>
    <Header />
    </div>
  )
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);