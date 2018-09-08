/*
==========================================
    Universidad del Valle de Guatemala
    Sistemas y tecnologias web

    Jose Martinez
    15163

    Laboratorio #6
==========================================
*/

import React from 'react';
import { connect } from 'react-redux';

import ProductItem from "../product-item"
import { productQuantityAdd, productQuantitySubstract, productSell, productUnsell } from "../../action-creators/products-action-creators";

class productsList extends React.Component{
    onAddClick = (id) => {
        if(this.props.adminView){
            this.props.onButtonAddClick(id);
        } else {
            this.props.onButtonSellClick(id);
        }
    }

    onSubstractClick = (id) => {
        if(this.props.adminView){
            this.props.onButtonSubstractClick(id);
        } else {
            this.props.onButtonUnsellClick(id);
        }
    }

    render(){
        const { products, adminView } = this.props;
        return(
            <div>
                {products.map(product => {
                    return <ProductItem key={product.id} name={product.name} price={product.price} quantity={adminView ? product.totalQuantity: product.totalQuantity-product.sellQuantity} id={product.id} onAddClick={this.onAddClick} onSubstractClick={this.onSubstractClick}/>
                })}
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        products: state.products,
        adminView: state.adminView
    };
};

const mapDispatchToProps = (dispatch) => {
    return{
        onButtonAddClick: (id) => {
            dispatch(productQuantityAdd(id));
        },
        onButtonSubstractClick: (id) => {
            dispatch(productQuantitySubstract(id));
        },
        onButtonSellClick: (id) => {
            dispatch(productSell(id));
        },
        onButtonUnsellClick: (id) => {
            dispatch(productUnsell(id));
        }
    };
};

export const ProductsList = connect(
    mapStateToProps,
    mapDispatchToProps,
)(productsList);