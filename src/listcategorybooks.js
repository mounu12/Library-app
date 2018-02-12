import React, {Component} from 'react';
import ConfigSidebar from './sidenav';
import {connect} from 'react-redux';
import axios from 'axios';
import { Link} from 'react-router-dom';
import {fetchbooknamecategories} from './actions/bookCategoriesAction';
import ReactStars from 'react-stars';

const ratingChanged = (newRating) => {
    console.log(newRating);
    <p>{newRating}</p>
    
  }
class ListCategoryBooks extends React.Component{
    state={
        moreabout:[],
     

        
    }
 
    componentWillMount(){
        var reqheaders={
            headers:{
                'Content-Type':'application/json; charset=utf-8',
            }
        }
        axios.get('http://localhost:8761/api/library-service/category'+'/'+localStorage.getItem('category'),reqheaders)
        .then(response=>{
         console.log(response.data);
         
         this.setState({moreabout:response.data});
                   console.log(this.state.moreabout)
             })
           }
        //  createoptions(){
        //     return 
        //     this.state.moreabout.map((something)=>{
        //         <p>{something.id}</p>
        //     })
        //  }  
     
        render(){
            console.log(this.state.moreabout)
          return(
              <div>
              
                  <div className="col-lg-2 configside">
                 <ConfigSidebar />    
                 </div>  
                 {/* <h6 className="languages">English & Indian Languages:
            <a className="englishbook" href="/">English</a>|
             <a className="englishbook" href="/"> Hindi </a>|
             <a className="englishbook" href="/"> Telugu</a>
             </h6> */}
                 <div className="col-lg-8 bookdetails"> 
                   
              <div>{
                this.state.moreabout.map((something,index)=>{
                    return(
                        <div key={index}>
                   
                           <div className="row bookdetails">
                             <div className="col-sm-3 text-center">
                             <Link className="" to="/bookdescription"><img src={require('./assets/sudha.jpeg')} alt=""/></Link>
                            </div> 
                            
                            <div className="col-sm-6 col-md-9"  >
                           
                             <Link className="" to="/bookdescription"><h4 ><b className="sudhamurthy">{something.title}</b></h4></Link>
                             <span><h6 className="murthy" >{something.author}</h6></span>
                             <span><h6 className="murthy">{something.edition} Edition</h6></span>
                             <span><h6 className="murthy">Publisher:{something.publisher}</h6></span>
                             <h5><i className="fa fa-inr">{something.bookPrice}</i></h5>
                             <h6>Get it by monday,February 4</h6>
                             
                             </div>
                           
                        
                        <div className="col-sm-3 pull-right reactstars">
                        <ReactStars count={5} size={24} color={'#feaa5d'} onChange={ratingChanged}/>
                      <div>{this.ratingChanged}</div>
                      
                        </div>
                       
                        </div>
                        <hr/>
                    </div>

                    )
                    
                })
              }</div>
               </div>
               
              </div>
          )
        
        }
}

function mapStateToProps(state){
    return{
        bookcategories:state.bookcategories, 
          
    }
 
}

export default connect(mapStateToProps,{fetchbooknamecategories})(ListCategoryBooks);