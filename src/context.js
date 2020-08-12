import React, { Component } from 'react';
import {storeProducts, detailProduct} from './data';

//contextAPI
const ProductContext = React.createContext();
//Provider- provides all info for the app
//Consumer- uses the info the provider provides



 class ProductProvider extends Component {
     state = {
         products: storeProducts,
         detailProduct: detailProduct
     }
     handleDetail = ()=> {
         console.log('hello from detail');
     }

     addToCart = ()=> {
         console.log('hello fromadd to cart');
     }
    render() {
        return (
           <ProductContext.Provider value={{
                ...this.state,
                handleDetail:this.handleDetail,
                addToCart:this.addToCart
           }}>
               {this.props.children}
           </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};