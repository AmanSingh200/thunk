 import axios from 'axios'
import * as actionTypes from './action'
 const fetchReq=()=> {
     return{
         type:actionTypes.FETCH_REQ
     }
 }
 const fetchSuc =()=>{
     return{
         type:actionTypes.FETCH_SUC,
         payload:users
     }
 }
 export const fetchFail=(err)=>{
     return {
         type:actionTypes.FETCH_FAIL,
         payload:err.message
     }
 }

 export const fectchUserss=()=>{
     return async(dispatch)=>{
         dispatch(fetchReq())
         try{
             let res = await axios.get('https://jsonplaceholder.typicode.com/users');
             let data = res.data
             dispatch(fetchSuc(data))
         }
         catch(err){
             dispatch(fetchFail(err))
         }
     }
 }