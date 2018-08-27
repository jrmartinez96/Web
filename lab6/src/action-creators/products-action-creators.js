/*
==========================================
    Universidad del Valle de Guatemala
    Sistemas y tecnologias web

    Jose Martinez
    15163

    Laboratorio #6
==========================================
*/

export const productAdd = (product) => {
    return {
        type: 'PRODUCT_ADDED',
        payload: product
    };
};

export const productQuantityAdd = (product_id) => {
    return {
        type: 'PRODUCT_QUANTITY_ADDED',
        payload: product_id
    }
}

export const productQuantitySubstract = (product_id) => {
    return {
        type: 'PRODUCT_QUANTITY_SUBSTRACTED',
        payload: product_id
    }
}

export const productSell = (product_id) => {
    return {
        type: 'PRODUCT_SELLED',
        payload: product_id
    };
};

export const productUnsell = (product_id) => {
    return {
        type: 'PRODUCT_UNSELLED',
        payload: product_id
    };
};