import React, { Component } from 'react';
import './App.css';
import Headers from './Header';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import allReducers from './reducers';
import Login from './login';
import Homepage from './Home';
import BookDescription from './bookDescription';
import ListCategoryBooks from './listcategorybooks';

const store=createStore(allReducers,applyMiddleware(thunk));


class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <BrowserRouter>
         
        <div>
        <Headers/>
    <Switch>
      
           <Route exact path="/" component={Homepage}></Route>  
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/bookdescription" component={BookDescription}></Route>
          <Route exact path="/listcategorybooks" component={ListCategoryBooks}></Route>
         
         </Switch>
         </div>
      
        </BrowserRouter>
       </Provider>
        </div>
    );
  }
}

export default App;
