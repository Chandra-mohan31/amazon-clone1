import React , {useState} from 'react';
import "./Login.css";
import {Link, useHistory} from "react-router-dom";
import { auth } from "./Firebase";

function Login() {
    const history =useHistory();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const login = (event)=>{
        event.preventDefault();
        auth 
            .signInWithEmailAndPassword(email,password)
            .then((auth) => {
                history.push('/');
            })
            .catch((e) => alert(e.message));
    };
    const register = (event)=>{
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
          .then(auth => {
            history.push('/');
          })
          .catch((e) => alert(e.message));
    };
    return (
        <div className="login">
        <Link to="/">
        <img className="login__logo" src="/amazonlogo.png" alt=""/>
        </Link>
        <div className="login__container">
            <h1>SIGN IN</h1>
            <form>
                <h5>E-MAIL</h5>
                <input value={email} onChange={event => setEmail(event.target.value)} type="email" />
                 <h5>PASSWORD</h5>
                 <input value={password} onChange={event => setPassword(event.target.value)} type="password" />
                 <button type="submit" className="login__signInButton" onClick={login}>SIGN IN</button>
                 <p> by signing in you agree to the terms and conditions of our privacy notes</p>
                 <button  onClick={register} className="login__registerButton">create your amazon account</button>
            </form>
        </div>
       
        </div>
    );
}

export default Login;
