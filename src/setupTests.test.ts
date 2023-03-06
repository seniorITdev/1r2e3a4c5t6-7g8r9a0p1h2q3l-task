
import assert from 'assert';
import SagaTester from 'redux-saga-tester';
import reducer from './reducer/index';
import searchSaga from './sagas/searchSaga';
import { stateType } from './types/index';

const initialState: stateType = {
    id: '',
    status: ' ',
    urls: [],
    id_loading: true,
    data_loading: true
}

const id_request: string = 'ID_REQUEST';
const id_requested_successful: string = 'ID_REQUESTED_SUCESSFUL';
const data_requested_successful: string = 'DATA_REQUESTED_SUCCESSFUL';

test( 'show saga result', async ( ) => {
    const sagaTester = new SagaTester ( {
        initialState: initialState,
        reducers: reducer
    } );

    sagaTester.start( searchSaga );

    assert.deepEqual( sagaTester.getState(), initialState );
//    sagaTester.dispatch( { type: id_request, keyword: "keyword" } );

//    await sagaTester.waitFor(id_requested_successful);

//    assert.equal( sagaTester.numcalled( id_requested_successful ), 1 );

});


