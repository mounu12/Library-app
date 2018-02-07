import axios from 'axios';
// import{Router , Route } from 'react-router';
export const loginNewUser = (user)=>{
    console.log("you clicked on user:",user.username);
     const request = axios({
    method: 'post',
    data: user,
    url: 'http://localhost:8761/login',
    'Content-Type': 'application/json; charset=utf-8',   

  }).then(function(response){
      console.log(response);
      sessionStorage.setItem('token',response.data.token);
     if(response.status===200){
        //  browserHistory.push('/dashboard')
     }

  });
    // return function(dispatch){
    //     request.then(function(response){
    //         dispatch(push('/dashboard'));
    //     })
    // }


    return{
        type:"USER_LOGIN",
        payload:request,
    }

}