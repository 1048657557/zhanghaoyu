import {ONPULAR} from '../actionTypes/actionTypes'

const onpularAction = (res)=>{
    return (dispatch)=>{fetch('http://119.3.153.161:3000/personalized').then(res=>{
         return res.json()
     }).then(res=>{
        dispatch(onpular(res))
     })}
 };
 
 const onpular = res =>{
     return {
             type:'onpularAction',
             payload: res.result
     }
 };

export {
    onpularAction
}