import {FETCH_BOOKSCATEGORIES,FETCH_LISTBOOKSCATEGORIES} from '../actions/bookCategoriesAction'
export default function (state=[],action){
    switch(action.type){
       
        case FETCH_BOOKSCATEGORIES:
        console.log(action.payload)
        return action.payload
       
        case FETCH_LISTBOOKSCATEGORIES:
        console.log(action.payload)
        return action.payload

    default:

      return state;

     }
  
  
}