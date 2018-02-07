import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {loginNewUser} from './actions/loginAction';
import { Link} from 'react-router-dom';
require('./css/login.css');

class Login extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state={
            
    //         username:'',
    //           password:''
         
            
             
    //     }
    //      this.loginUser = this.loginUser.bind(this);
        
    // }

//     loginUser(event){
//         event.preventDefault();
//         var self = this;
//         var user={
//             "username":this.state.username,
//             "password":this.state.password
//         }
//         onClick={(event)=>this.loginUser(event)}
      
//         console.log(user)
       
       
//         this.props.loginNewUser(user);
  
    
 
// }
         
     
    render(){
        return(
            <div>
        <div className="container loginmaincontainer">
         <div id="loginbox">
            <div  className="col-md-4 col-md-offset-4 mainbox">
                <div className="loginpanel">
                <div className="panel" >
            <div className="panel-heading">
                <div className="panel-title">Login</div>
                <hr className="login-headhr"/>
            </div>
            <div className="panel-body panelbody" >
                <form>
                <div className="form-group">
                    <input type="email"  className="form-control" placeholder="User Name" onChange={(event) => this.setState({username:event.target.value})}/>
                </div>
                <div className="form-group">
                    <input type="password"  className="form-control" placeholder="Password" onChange={(event) => this.setState({password:event.target.value})} />
                </div>
                <div className="checkbox">
                    <label>
                    <input type="checkbox"/> Remember Me
                    </label>
                </div>
                <div className="submitButton">
               < Link to="/listofbooks">  <button type="submit"  className="btn btn-default" >Submit</button>
               </ Link> </div>
                </form>
            </div>
        </div>
    </div>
    </div>
</div>
</div>

            </div>

        )
    }
}
function mapStateToProps(state){
    return{
        loginuser:state.loginuser
    }
    }
    function matchDispatchToProps(dispatch){
        return bindActionCreators({loginNewUser: loginNewUser}, dispatch);
    }
    
export default connect(mapStateToProps,matchDispatchToProps)(Login);