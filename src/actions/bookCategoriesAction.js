import axios from 'axios';
// import{Router , Route ,browserHistory } from 'react-router';

export const FETCH_BOOKSCATEGORIES='FETCH_BOOKSCATEGORIES';
export const FETCH_LISTBOOKSCATEGORIES='FETCH_LISTBOOKSCATEGORIES';


const fetchSuccess=(response)=>{
    console.log(response.data);
 
    return{
        type:FETCH_BOOKSCATEGORIES,
        payload:response.data
    }

}
const fetchBooksSuccess=(response)=>{
    console.log(response.data);
 
    return{
        type:FETCH_LISTBOOKSCATEGORIES,
        payload:response.data
    }
}
export function fetchbookscategories(){
    var reqheaders={
        headers:{
                 'Content-Type': 'application/json; charset=utf-8',           
                 }
    }
    return function(dispatch){
        return axios.get('http://localhost:8761/api/library-service/category',reqheaders).then(response=>{
            dispatch(fetchSuccess(response))
        })
    }
}

export function fetchbooknamecategories(getcategorydetails){
    var reqheaders={
        headers:{
            'Content-Type':'application/json; charset=utf-8',
        }
    }
        return function(dispatch){
          
            return axios.get('http://localhost:8761/api/library-service/category'+'/'+getcategorydetails.category,reqheaders).then(response=>{
                dispatch(fetchBooksSuccess(response))
                localStorage.setItem('category',getcategorydetails.category);
                console.log(response);
            })
        }
    }
    
