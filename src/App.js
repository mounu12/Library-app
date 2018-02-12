import React, { Component } from 'react';
import './App.css';
import Headers from './Header';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Router, Route,Switch} from 'react-router-dom';
import history from './history';
import allReducers from './reducers';
import Login from './login';
import Homepage from './Home';
import BookDescription from './bookDescription';
import ListCategoryBooks from './listcategorybooks';
import LisofBookDetails from './LIstofBooks';
import AddingBooks from './addbookForm';



const store=createStore(allReducers,applyMiddleware(thunk));


class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
        <Router history={history}>
          
         
        <div>
        <Headers/>
    <Switch>
      
           <Route exact path="/" component={Homepage}></Route>  
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/bookdescription" component={BookDescription}></Route>
          <Route exact path="/listcategorybooks" component={ListCategoryBooks}></Route>
          <Route exact path="/listofbooks" component={LisofBookDetails}></Route>
          <Route exact path="/addnewbook" component={AddingBooks}></Route>
         
         </Switch>
         </div>
      
       </Router>
       </Provider>
        </div>
    );
  }
}

export default App;
