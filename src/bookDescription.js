import React from 'react';
import ReactStars from 'react-stars';
import { Link} from 'react-router-dom';
import FaIconPack from 'react-icons/lib/fa/shopping-cart';
import MdIconPack from 'react-icons/lib/md/play-arrow';
require('./css/bookdescription.css');

const ratingChanged = (newRating) => {
    console.log(newRating);
    <p>{newRating}</p>
    
  }

export default class BookDescription extends React.Component{
    
 render(){
     return(
         <div>
         
         <div className="detaildescription">
         <div className="col-sm-3 text-center">
         <img src={require('./assets/sudha.jpeg')} className="bookdetailimage" alt="" />
        </div> 
        
        <div className="col-sm-6"  >
       
        <h4 ><span className="sudhamurthydesc">LET US C</span>&nbsp;&nbsp;<span className="booksubtitle">Paperback – Abridged, Audiobook, Box set</span></h4>
         <span><h6 className="murthy" >YASHVANT P. KANETKAR (Author)</h6></span>
            <ReactStars count={5} size={24} color={'#feaa5d'} onChange={ratingChanged}/>
         <hr/>
         <span><h6 className="murthy">Edition:13th</h6></span>
         <span><h6 className="murthy">Publisher:KANETKAR PUBLICATION</h6></span>
         <h5><i className="fa fa-inr"></i>102</h5>
         <h6>Get it by monday,February 4</h6>
         <hr/>
          <img src={require('./assets/banner.png')}  alt=""/>
       
         {/* <div className="col-sm-6 aboutauthor"> */}
         <h5 className="aboutauthor"><b>About the author</b></h5>
         <p>Sudha Murty is a social activist and worker and also a prolific writer in Kannada and English.
              She is well known for her social work as the chairperson of Infosys Foundation. 
              Through her writings, she tries to highlight the social issues prevalent in the society. 
              'Dollar Sose’ authored by her in Kannada is her most renowned work and beside that.
               she has authored several other books like How I taught my grandmother to read, 
               The Accolades Galore, House of Cards etc in English and Yashashvi, Tumula,
                Paridihi Computer Lokadalli in Kannada language. 
               Sudha Murty has been decorated with several awards from prestigious institutions. 
             She is the better half of N.R. Narayana Murthy.</p>
        </div>
         <div className="col-sm-2">
            <div className="panel addcart">
            <div className="panel-heading">
            <h5><i className="fa fa-inr"></i>102</h5>
               <h5> Inclusive of all taxes</h5>
               <h6>FREE Delivery
                on orders over <i className="fa fa-inr">300</i>.<div><br/>
                <b>cash on delivery eligible.</b></div></h6>
                <div className="descbuttons">
                <Link className="btn btn-warning" to="/"> 
                 < FaIconPack size={20} color={'white'} style={{marginRight:10}}/>Add to Cart</Link>
                 
                <br/>
                 <Link className="btn btn-warning buynow" to="/login"> <MdIconPack size={20} color={'white'} style={{marginRight:10}}/>
                Buy Now</Link>
                </div>
            </div>
            </div>

         </div> 
         
       
    
   
    
    </div>
             </div>
     )

 }
 
}