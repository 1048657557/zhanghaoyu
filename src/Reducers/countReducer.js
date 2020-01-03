import {ONPULAR} from '../actionTypes/actionTypes'
//默认state
const defaultState = {
    data:[]
};

export const CountReducers = (state = defaultState,action )=>{
    switch (action.type) {
        case ONPULAR:
            return {
                ...state,
                data:action.payload
            }
        default:
            return state
    }
};