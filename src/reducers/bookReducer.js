import {FETCH_BOOKS,} from '../actions/bookAction'
export default function (state=[],action){
    switch(action.type){
       
        case FETCH_BOOKS:
        console.log(action.payload)
        return action.payload
       


    default:

      return state;

     }
  
  
}