import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import ProductTable from './component/ProductTable';

const products = [
  {category:'Electronics',
  price:'100',
  name:'Phone'}
  ,
  {category:'Clothes',
  price:'200',
  name:'Dress'}
]


ReactDOM.render(
  <React.StrictMode>
    <ProductTable produit={products} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
