import axios from 'axios';
// import{Router , Route ,browserHistory } from 'react-router';

export const FETCH_BOOKS='FETCH_BOOKS'


const fetchSuccess=(response)=>{
    console.log(response.data)
    return{
        type:FETCH_BOOKS,
        payload:response.data
    }

}
export function fetchbooks(){
    var reqheaders={
        headers:{
                 'libraryId':1 ,
                 'Content-Type': 'application/json; charset=utf-8',           
                 }
    }
    return function(dispatch){
        return axios.get('http://localhost:8761/api/library-service/book/1?search=',reqheaders).then(response=>{
            dispatch(fetchSuccess(response))
        })
    }
}
