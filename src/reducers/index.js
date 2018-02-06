import {combineReducers} from 'redux';
import bookReducer from './bookReducer';
import LoginReducer from './loginReducer';
import bookcategoryReducer from './bookcategoryReducer';


const allReducers=combineReducers({
    
   book:bookReducer,
   loginuser:LoginReducer,
   bookcategories:bookcategoryReducer,
   categorybooks:bookcategoryReducer
    
    });

    export default allReducers;