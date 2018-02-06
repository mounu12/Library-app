import React, {Component} from 'react';
import ConfigSidebar from './sidenav';
import {connect} from 'react-redux';
import {fetchbooknamecategories} from './actions/bookCategoriesAction';

class ListCategoryBooks extends React.Component{
     
     componentWillMount(){
         console.log("mounted")
        //  this.props.fetchbooknamecategories();
       
       }
    
        render(){
            return(
                <div>
                    <div className="col-lg-2 configside">
                     <ConfigSidebar />
                    </div>

             </div>
            )
        }
}

function mapStateToProps(state){
    return{
        categorybooks:state.categorybooks,
    }
}

export default connect(mapStateToProps,{fetchbooknamecategories})(ListCategoryBooks);