import "./login.css"
import {Link, useNavigate} from "react-router-dom"
import axios from "axios"
import { useEffect,useState } from "react";

export default function Login(props) {
  const navigate = useNavigate()
  const [email_id, setEmail] = useState();
  const [passw, setPassw] = useState();
  const [loggedIn, setLoggedIn] = useState(false);
  const validateLogin = (event) => {
    //event.preventDefault();
    console.log(email_id)
    axios
    .get(`https://iwp-back.herokuapp.com/login/?user_id=${email_id}`)
    .then((res) => {
        const user = res.data;
        console.log(user)
        if(user.passw === passw)
            props.setLoggedIn(true);
            props.setUser(user);

            console.log(user, loggedIn);
            navigate('/')
    })
}
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={validateLogin}>
        <label>Email</label>
        <input type="text" className="loginInput" placeholder="Enter Email" name = {email_id} value = {email_id} onChange={(e)=>setEmail(e.target.value)}/>
        <label>Password</label>
        <input type="password" className="loginInput" placeholder="Enter Password" name = {passw} value = {passw} onChange={(e)=>setPassw(e.target.value)}/>
        <button className="loginButton" onClick={() => validateLogin()} type="button">Login</button>
      </form>
      <button className="loginRegisterButton">
        <Link className = "link" to="/register">Register</Link>
      </button>
    </div>
  )
}
