import React,{Component} from 'react';
 import ConfigSidebar from './sidenav';
 import BookDetails from './booksdetails';

class Homepage extends React.Component{
    render(){
        return(
            <div>
                 <div className="col-lg-2 configside">
                <ConfigSidebar />
                </div>
                <hr/>
                <div className="col-lg-8 bookdetails">
                <BookDetails/>
                </div>
                </div>
        )
    }
}

export default Homepage;