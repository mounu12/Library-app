import React from 'react';
import axios from 'axios';
require('./css/addbook.css');



class AddingBooks extends React.Component{
      constructor(props){
        super(props);
        this.state={
            title:'',
            author:'',
            genres:'',
            isbnCode:'',
            edition:'',
            publishDate:'',
            bookCoverPage:'',
            bookPrice:'',
            bookRentalValue:'',
            description:'',
            noOfPages:'',
            publisher:''
        }
    }
    apply(event){
        event.preventDefault();
        var self= this;
        var applydetails={
            "title":this.state.title,
            "author":this.state.author,
            "genres":this.state.genres,
            "isbnCode":this.state.isbnCode,
            "edition":this.state.edition,
            "publishDate":this.state.publishDate,
            "bookCoverPage":this.state.bookCoverPage,
            "bookPrice":this.state.bookPrice,
            "bookRentalValue":this.state.bookRentalValue,
            "description":this.state.description,
            "noOfPages":this.state.noOfPages,
            "publisher":this.state.publisher,
          
                headers:{
                    'Content-Type':'application/json; charset=utf-8',
                }
            }
        console.log(applydetails);
      
        axios.post('http://localhost:8761/api/library-service/add-book',applydetails).then(response =>{
            console.log(response.data);
        })
    }
    render(){
        return(
            <div className="App">
            <div className="container">
            <div className="row">
   <div className="col-md-12">
      <div className="panel  addteacherpanel">
         <div className="panel-body teacherpanel">
            <form id="form" className="form-horizontal" role="form" name="studentregistrationform" >
               <div className="row">
                  <div className="col-md-6">
                     <div className="left-side-form">
                   
                        <div className="row">
                           <div className="col-md-4">
                              <label> Title</label>
                           </div>
                           <div className="col-md-8 ">
                              <input type="text" className="form-control form-input" id="" name="title"
                               placeholder="book title*" onChange={(event) => this.setState({title:event.target.value}) }  required />
                           </div>
                        </div>
                        <br/>
                        
                        <div className="row">
                           <div className="col-md-4">
                              <label>Author</label>
                           </div>
                           <div className="col-md-8 ">
                              <input type="email" className="form-control form-input" id="" name="authors" 
                              placeholder="author name*" onChange={(event) => this.setState({author:event.target.value}) } required />
                           </div>
                        </div>
                        <br />
                           <div className="row">
                              <div className="col-md-4">
                                 <label>Genres</label>
                              </div>
                              <div className="col-md-8 ">
                                 <input type="text" className="form-control form-input" id="" name="genres" 
                                    placeholder="Genres*"  onChange={(event) => this.setState({genres:event.target.value}) }
                                  required />
                              </div>
                           </div>
                           <br/>
                           <div className="row">
                              <div className="col-md-4">
                                 <label>IsbnCode</label>
                              </div>
                              <div className="col-md-8 ">
                                 <input type="text" className="form-control form-input" id="" name="isbnCode" 
                                    placeholder="Isbn code*"  onChange={(event) => this.setState({isbnCode:event.target.value}) }
                                  required />
                              </div>
                           </div>
                           <br/>
                           <div className="row">
                              <div className="col-md-4">
                                 <label>Edition</label>
                              </div>
                              <div className="col-md-8 ">
                                 <input type="text" className="form-control form-input" id="" name="edition" 
                                    placeholder="edition*"  onChange={(event) => this.setState({edition:event.target.value}) }
                                  required />
                              </div>
                           </div>
                           <br/>
                           <div className="row">
                              <div className="col-md-4">
                                 <label>PublishDate</label>
                              </div>
                              <div className="col-md-8 ">
                                 <input type="text" className="form-control form-input" id="" name="publishDate" 
                                    placeholder="publishdate*"  onChange={(event) => this.setState({publishDate:event.target.value}) }
                                  required />
                              </div>
                           </div>
                           <br/>
                           <div className="row">
                           <div className="col-md-4">
                              <label>isBuyable</label>
                           </div>
                           <div className="col-md-3">
                              <label><input type="radio" name="isBuyable" value="yes" onChange={(event) => this.setState({isBuyable:event.target.value}) } />Yes</label>&nbsp;
                              <label><input type="radio" name="isBuyable" value="no" onChange={(event) => this.setState({isBuyable:event.target.value}) } />No</label>
                           </div>
                        </div>
                     </div>
                  </div>
                       <div className="col-md-6">
                     <div className="left-side-form">
                        <div className="row">
                        
                        <div className="row">
                              <div className="col-md-4">
                                 <label>BookCoverPage</label>
                              </div>
                              <div className="col-md-8 ">
                                 <input type="text" className="form-control form-input" id="" name="bookCoverPage" 
                                    placeholder="book coverpage*"  onChange={(event) => this.setState({bookCoverPage:event.target.value}) }
                                  required />
                              </div>
                           </div>
                           <br/>
                           <div className="row">
                              <div className="col-md-4">
                                 <label>BookPrice</label>
                              </div>
                              <div className="col-md-8 ">
                                 <input type="text" className="form-control form-input" id="" name="bookPrice" 
                                    placeholder="book price*"  onChange={(event) => this.setState({bookPrice:event.target.value}) }
                                  required />
                              </div>
                           </div>
                           <br/>
                           <div className="row">
                              <div className="col-md-4">
                                 <label>BookRentalValue</label>
                              </div>
                              <div className="col-md-8 ">
                                 <input type="text" className="form-control form-input" id="" name="bookRentalValue" 
                                    placeholder="book rentalvalue*"  onChange={(event) => this.setState({bookRentalValue:event.target.value}) }
                                  required />
                              </div>
                           </div>
                           <br/>
                           <div className="row">
                              <div className="col-md-4">
                                 <label>Description</label>
                              </div>
                              <div className="col-md-8 ">
                                 <input type="text" className="form-control form-input" id="" name="description" 
                                    placeholder="book description*"  onChange={(event) => this.setState({description:event.target.value}) }
                                  required />
                              </div>
                           </div>
                           <br/>
                           <div className="row">
                              <div className="col-md-4">
                                 <label>No.Of Pages</label>
                              </div>
                              <div className="col-md-8 ">
                                 <input type="text" className="form-control form-input" id="" name="noOfPages" 
                                    placeholder="no.of pages*"  onChange={(event) => this.setState({noOfPages:event.target.value}) }
                                  required />
                              </div>
                           </div>
                           <br/>
                           <div className="row">
                              <div className="col-md-4">
                                 <label>Publisher</label>
                              </div>
                              <div className="col-md-8 ">
                                 <input type="text" className="form-control form-input" id="" name="publisher" 
                                    placeholder="publisher*"  onChange={(event) => this.setState({publisher:event.target.value}) }
                                  required />
                              </div>
                           </div>
                           <br /> 
                            
                        <div className="row">
                           <div className="col-md-4">
                              <label>isRentable</label>
                           </div>
                           <div className="col-md-3">
                              <label><input type="radio" name="isRentable" value="yes" onChange={(event) => this.setState({isRentable:event.target.value}) } />Yes</label>&nbsp;
                              <label><input type="radio" name="isRentable" value="no" onChange={(event) => this.setState({isRentable:event.target.value}) } />No</label>
                           </div>
                        </div>
                        <br />
                        </div>
                     </div>
                  </div>
                  <br />
                
               </div>
               <div >
               <div className="row applystyle">
                  <div className="col-lg-6 col-lg-offset-3 text-center">
                      <div className="col-lg-2">
                     <button id="btn-reset" type="reset" className="btn button"> Reset</button></div>
                     <div className="col-lg-2">
                     <button id="btn-Register" type="submit" name="submit" onClick={(event)=>this.apply(event)} className="btn button"  >Submit</button></div>
                  </div>
               </div>
               </div>
               

            </form>
         </div>
      </div>
   </div>
</div>
</div>
</div>
        )
    }
}
export default AddingBooks;