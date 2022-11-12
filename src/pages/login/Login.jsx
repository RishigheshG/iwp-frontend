import "./login.css"
import {Link} from "react-router-dom"
import axios from "axios"
import { useEffect,useState } from "react";


export default function Login() {
  const [email_id, setEmail] = useState();
  const [passw, setPassw] = useState();
  const [loggedIn, setLoggedIn] = useState(false);
  const validateLogin = () => {
    axios
    .get("https://iwp-back.herokuapp.com/login/", email_id)
    .then((res) => {
        const user = res.data;
        if(user.passw == passw)
            setLoggedIn(true);
            console.log(user, loggedIn);
    })
}
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input type="text" className="loginInput" placeholder="Enter Email" name = {email_id} value = {email_id} onChange={(e)=>setEmail(e.target.value)}/>
        <label>Password</label>
        <input type="password" className="loginInput" placeholder="Enter Password" name = {passw} value = {passw} onChange={(e)=>setPassw(e.target.value)}/>
        <button className="loginButton" onClick={() => validateLogin}>Login</button>
      </form>
      <button className="loginRegisterButton">
        <Link className = "link" to="/register">Register</Link>
      </button>
    </div>
  )
}
