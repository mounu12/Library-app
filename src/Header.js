import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link} from 'react-router-dom';
import FaIconPack from 'react-icons/lib/fa/shopping-cart';
import Icon from 'react-icons-kit';
import { location2 } from 'react-icons-kit/icomoon/location2';  



 require('./css/header.css');
export default () => {
  return(
   <div>
        <div className="navbar navbar-default ">
         <div className="container">
           <div className="navbar-header pull-right">
            <div id="custom-search-input" className="col-md-8 col-xs-8 col-sm-8 ">
    <div className="input-group searchbar">
        <input type="text" className="search-query form-control" placeholder="Search" />
            <span className="input-group-btn">
               <button className="btn search-btn" type="button">
                   <span className=" glyphicon glyphicon-search"></span>
               </button>
           </span>
    </div>
   
        </div>
        <div className="col-md-4">
        <img src={require('./assets/offerr.jpg')} />
        </div>
           </div>
         </div>
{             
       
         <div className="container">
         <div className="navbar-header pull-left leftsidenames">
         <ul className="nav navbar-nav navbar-left">
         
        <li className="categoriesmap"> <NavLink activeClassName='active' to="/" activeStyle={{ color:'#fff' }}><Icon icon={location2} style={{color:'#fff'}}/>
        <span className="">Delivery to</span> <br/> Secundrabad</NavLink></li> 
         <li className="categories"><NavLink  activeClassName='active' to="/" activeStyle={{ color:'#fff' }}>Your Library.in<br/>
            </NavLink ></li>
           <li className="categories"><NavLink  activeClassName='active' to="/" activeStyle={{ color:'#fff' }}>Today's Deals<br/>
            </NavLink ></li>
            <li className="categories"><NavLink  activeClassName='active' to="/" activeStyle={{ color:'#fff' }}>Sell<br/>
            </NavLink ></li>
            <li  className="categories"><NavLink  activeClassName='active' to="/" activeStyle={{ color:'#fff' }}>Customer Service<br/>
            </NavLink ></li>
           </ul>
           </div>
           <div className="navbar-header pull-right rightsidenames">
           <ul className="nav navbar-nav navbar-right">
            <li className="categories">
            <NavLink className="dropdown-toggle" data-toggle="dropdown" activeClassName='active' to="/" activeStyle={{ color:'#fff' }}>Hello. SignIn<br/>
            <b>Your Orders</b><b className="caret"></b><span className="nav-icon nav-arrow"></span>
            </NavLink >
            <ul className="dropdown-menu">
            <Link className=" btn btn-warning signinbtn" to="/login"><span className="txtclr">SignIn</span></Link>
                    <div><li className="newcustomer">New Customer?<a href="" className="starthere">Start Here</a></li></div>
                    <li className="categories"><a href="">Your accout</a></li>
                    <li className="categories"><a href="">Your Orders</a></li>
                    <li className="categories"><a href="">Your WishList</a></li>
                    <li><a href="">Dropdown Link 3</a></li>
                    </ul>
            </li>
            < FaIconPack size={40} color={'white'} style={{marginRight:10}}/>
            </ul>
          </div>
         </div> }
         </div>
         { <div className="lastnavbar">
         <div className="container">
        <ul className="pull-left">
           
        <a href="" ><b className="navbooks">Books</b></a>
        <a href="" >Advanced Search</a>
        <a href="" >NewReleases &Pre-orders</a>
        <a href="" >Best Sellers</a>
        <a href="" >Childerns & Young Adult</a>
        <a href="" >Text Books</a>
        <a href="" >Exam Central</a>
        <a href="" >Books in Indian Languages</a>
</ul>
 </div>
 </div> }
   
    
               
              
</div> 
  )
}
