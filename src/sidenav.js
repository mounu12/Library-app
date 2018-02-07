import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchbookscategories,fetchbooknamecategories} from './actions/bookCategoriesAction';


require('./css/sidenav.css');



class SideNavbar extends React.Component{

    componentWillMount(){
        console.log("mounted")
        this.props.fetchbookscategories();
       
      }
      handleClick=(getcategorydetails)=>{
          console.log("fdgf")
          this.props.fetchbooknamecategories(getcategorydetails);
      }
      
    render(){
        return(
        <div>{
            this.props.bookcategories.map((getcategorydetails,index)=>{
               
        
    return(
         <div key={index}>
            <ul className="nav nav-sidebar sidenavover">
                 <li >< Link to="/listcategorybooks" onClick={(event)=>this.handleClick(getcategorydetails)}>{getcategorydetails.category} </Link></li>
                    {/* <li>< Link to="/">{getcategorydetails.}</Link></li>
                    <li><Link to="/">Children's Literature & Fiction </Link></li>
                    <li><Link to="/">Biographies & Autobiographies</Link></li>
                    <li><Link to="/">Classic Fiction</Link></li> */}
             </ul>
        </div>

        )
    })
}
</div>
    )
    }

}


function mapStateToProps(state){
    return{
        bookcategories:state.bookcategories,
    }
}

export default connect(mapStateToProps,{fetchbookscategories,fetchbooknamecategories})(SideNavbar);