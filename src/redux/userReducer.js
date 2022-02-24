import * as actionTypes from './actions'

const intialState={
    loading:false,
    error:'',
    user:[]
}
const userReducer =(state=intialState,action)=>{
    switch(action.type){
        case actionTypes.FETCH_REQ:
            return {...state,loading:true}
        case actionTypes.FETCH_SUC:
            return {...state,loading:false,users:[...action.payload]}
        case actionTypes.FETCH_FAIL:
            return {...state,loading,false,error:action.payload}
        default: return state
    }
}
export default userReducer; 