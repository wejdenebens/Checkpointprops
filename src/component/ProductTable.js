import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const ProductTable = (props) =>{

   
ReactDOM.render(
  <React.StrictMode>
            return (
                <table>
                    <tr>
                        <td>Category:
                        {props.category}
                        </td>
                        < td >Price:
                        {props.price}
                        </td>
                        < td >Name:
                        {props.name}
                        </td>
                    </tr>
                </table>
                    );

  </React.StrictMode>,
  document.getElementById('root')
);
        
        
}



export default ProductTable;