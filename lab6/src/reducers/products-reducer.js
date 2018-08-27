/*
==========================================
    Universidad del Valle de Guatemala
    Sistemas y tecnologias web

    Jose Martinez
    15163

    Laboratorio #6
==========================================
*/

export const products = (state=[], action) => {
    switch (action.type) {
        case 'PRODUCT_ADDED':{
            return [...state, {...action.payload, id:state.length}]
        }

        case 'PRODUCT_QUANTITY_ADDED':{
            return state.map(product => {
                if(product.id !== action.payload){
                    return product;
                }

                return {
                    ...product,
                    totalQuantity: product.totalQuantity + 1
                }
            });
        }

        case 'PRODUCT_QUANTITY_SUBSTRACTED':{
            return state.map(product => {
                if(product.id !== action.payload){
                    return product;
                }

                return {
                    ...product,
                    totalQuantity:product.totalQuantity === 0 ? product.totalQuantity: product.totalQuantity - 1
                }
            });
        }

        case 'PRODUCT_SELLED':{
            return state.map(product => {
                if(product.id !== action.payload){
                    return product;
                }

                return {
                    ...product,
                    sellQuantity:product.sellQuantity === product.totalQuantity ? product.sellQuantity : product.sellQuantity + 1
                }
            });
        }

        case 'PRODUCT_UNSELLED':{
            return state.map(product =>{
                if(product.id !== action.payload){
                    return product;
                }

                return {
                    ...product,
                    sellQuantity: product.sellQuantity === 0 ? product.sellQuantity : product.sellQuantity - 1
                }
            });
        }
    
        default:
            return state;
    }
}