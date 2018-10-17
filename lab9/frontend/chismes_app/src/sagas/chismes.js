/*
==========================================
    Universidad del Valle de Guatemala
    Sistemas y tecnologias web

    Jose Martinez
    15163

    Laboratorio #9
==========================================
*/

import {
    call,
    takeEvery,
    put
  } from 'redux-saga/effects';
  
  import { postNewChismeApi, getChismesApi, deleteChismeApi, getChismeFromIdApi } from '../api';
  import * as types from '../types';
  import * as actions from '../actions';


/*---------------------------------
            POST CHISME
-----------------------------------*/
function* addChismePost(action){
    const { id, title, description } = action.payload;
    const postedChisme = yield call(postNewChismeApi, title, description)
    
    const { pk, creation_datetime } = postedChisme.data;

    yield put(actions.chismeIdUpdate(id, pk, creation_datetime))

}

/*---------------------------------
          GET ALL CHISMES
-----------------------------------*/
function* getAllChismes(action){
    const allDbChismes = yield call(getChismesApi);

    yield put(actions.chismesDbAdd(allDbChismes));
}

/*---------------------------------
          GET CHISME FROM ID
-----------------------------------*/
function* getChismeFromId(action){
    const { chismeId } = action.payload;
    const chisme = yield call(getChismeFromIdApi, chismeId);

    const { pk, creation_datetime } = chisme;
    yield put(actions.chismeApiRecieve({...chisme, pk:undefined, id:pk, creation_datetime: creation_datetime.substring(0,10)}));
}

/*---------------------------------
          DELETE CHISME
-----------------------------------*/
function* deleteChisme(action){
    const { id } = action.payload;

    yield call(deleteChismeApi, id);

}

/*---------------------------------
          WATCH CHISME
-----------------------------------*/
export function* watchChisme(){
    yield takeEvery(
        types.CHISME_IS_ADDED,
        addChismePost
    )

    yield takeEvery(
        types.CHISMES_APP_INITIALIZED,
        getAllChismes
    )

    yield takeEvery(
        types.CHISME_IS_DELETED,
        deleteChisme
    )

    yield takeEvery(
        types.CHISME_API_REQUESTED,
        getChismeFromId
    )
}

