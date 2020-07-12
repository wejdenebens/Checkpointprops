import React from 'react';
import PropTypes from 'prop-types';

      const ProductTable = ({produit}) => {

        const listProducts = produit.map((product) =>{
            return(
                <tr>
                    <td>{product.category}</td>
                    <td>{product.price}</td>
                    <td>{product.name}</td>

                </tr>
            )
        }
                
            )                          ;
            return (
                <table>
                    <tr>
                        <th>category</th>
                        <th>price</th>
                        <th>name</th>
                    </tr>
                 {listProducts}
                </table>
                    );

 }

            ProductTable.propTypes = {
                        produit:PropTypes.object
                                     }

export default ProductTable;