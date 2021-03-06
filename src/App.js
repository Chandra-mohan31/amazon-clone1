import React ,{useEffect} from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from "./Checkout";
import Login from "./Login";
import {useStateValue} from "./StateProvider";
import {auth} from "./Firebase";
import Payment from "./Payment";
//import {loadStripe} from "@stripe/stripe-js";
//import {Elements} from "@stripe/react-stripe-js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [{user},dispatch]=useStateValue();
  useEffect(() => {
       const unsubscribe = auth.onAuthStateChanged((authUser)=>{
       if(authUser){
            
        dispatch({
          type:"SET_USER",
          user:authUser,
        })

       }else{
        dispatch({
          type:"SET_USER",
          user:null,
        })
       }
     });
     return () => {
       unsubscribe();
     }
    
  }, []);
  console.log("USER IS NOW",user);
  return (
    <Router>
       <div className="app">
       <Switch>
         <Route path= "/checkout">
         <Header/>
         <Checkout/>
          
         </Route>
         <Route path= "/login">
          <Header/>
           <Login />
          </Route>
            <Route path= "/payment">
           <Header/>
           
            <Payment />
           
         
           </Route>
         <Route path= "/">
           <Header/>
           <Home/>
           </Route>
       </Switch>
       </div>
    </Router>
   
  );
}

export default App;
