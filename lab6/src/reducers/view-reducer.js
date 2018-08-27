/*
==========================================
    Universidad del Valle de Guatemala
    Sistemas y tecnologias web

    Jose Martinez
    15163

    Laboratorio #6
==========================================
*/

export const adminView = (state=true, action) => {
    switch (action.type) {
        case 'VIEW_CHANGED':{
            return !state;
        }
    
        default:
            return state;
    }
}