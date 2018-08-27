/*
==========================================
    Universidad del Valle de Guatemala
    Sistemas y tecnologias web

    Jose Martinez
    15163

    Laboratorio #6
==========================================
*/

import React,{Fragment} from 'react';
import { connect } from 'react-redux';

import AccountListItem from "../account-list-item"
import "./account-list.css"

class accountList extends React.Component {
    render(){
        const { products } = this.props;

        let totalPrice = 0;
        products.forEach(product => {
            totalPrice = totalPrice + (product.sellQuantity * product.price)
        });

        return(
            <div className="acc-box">
                <div className="column-names">
                    <div> Quantity </div>
                    <div className="name"> Name </div>
                    <div> Price </div>
                </div>
                <div className="account-list-box">
                    {products.map(product =>{
                        if(product.sellQuantity !==0){
                            const price = product.sellQuantity * product.price;
                            return <AccountListItem key={product.id} name={product.name} quantity={product.sellQuantity} price={price} />
                        }

                        return <Fragment key={product.id}></Fragment>
                    })}
                </div>
                <div className="total-price">
                    Total: Q.{totalPrice}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        products: state.products
    }
}

export const AccountList = connect(mapStateToProps,null)(accountList); 