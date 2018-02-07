import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchbooks} from './actions/bookAction';
import ReactStars from 'react-stars';
import { Link} from 'react-router-dom';
require('./css/bookdetails.css');

const ratingChanged = (newRating) => {
    console.log(newRating);
    <p>{newRating}</p>
    
  }

class BookDetails extends Component{
    
    componentWillMount(){
        console.log("mounted")
        this.props.fetchbooks();
       
      }
    

    render(){
        console.log(this.props.book);
        
        return(
             <div>
            <h6 className="languages">English & Indian Languages:
            <a className="englishbook" href="/">English</a>|
             <a className="englishbook" href="/"> Hindi </a>|
             <a className="englishbook" href="/"> Telugu</a>
             </h6>
             
            <div>{
                
                this.props.book.map((bookdetails,index)=>{
                    return(
                        <div key={index}>
                          
                             <div className="row bookdetails">
                             <div className="col-sm-3 text-center">
                             <Link className="" to="/bookdescription"><img src={require('./assets/sudha.jpeg')} alt=""/></Link>
                            </div> 
                            
                            <div className="col-sm-6 col-md-9"  >
                           
                             <Link className="" to="/bookdescription"><h4 ><b className="sudhamurthy">{bookdetails.title}</b></h4></Link>
                             <span><h6 className="murthy" >{bookdetails.author}</h6></span>
                             <span><h6 className="murthy">{bookdetails.edition} Edition</h6></span>
                             <span><h6 className="murthy">Publisher:{bookdetails.publisher}</h6></span>
                             <h5><i className="fa fa-inr">{bookdetails.bookPrice}</i></h5>
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
            }
                </div>
                </div>

        )
      
    }

}
    function mapStateToProps(state){
        return{
            book:state.book,
        }
    }

export default connect(mapStateToProps,{fetchbooks})(BookDetails);