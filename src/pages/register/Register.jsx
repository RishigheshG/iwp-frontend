import "./register.css"
import {Link} from "react-router-dom"
import axios from "axios"
import { useEffect,useState } from "react";

export default function Register() {
  const [fname,setfirstname] = useState();
  const [lname,setlastname] = useState();
  const [email,setemail] = useState();
  const [passw,setpassw] = useState();

  const [userId, setUser] = useState({});
  const registerUser = () => {
    var user = {
        "email_id" : email,
        "passw" : passw,
        "fname" : fname,
        "lname" : lname
    }
    console.log(typeof(user));
    axios
    .post('https://iwp-back.herokuapp.com/user/', user)
    .then((res) => {
        setUser(res.data);
        console.log(userId);
    })
}

  return (
    <div className="register">
      <span className="registerTitle">register</span>
      <form className="registerForm">
        <label>First Name</label>
        <input type="text" name = {fname} value = {fname} onChange={(e)=>setfirstname(e.target.value)} className="registerInput" placeholder="Enter First Name"/>
        <label>Last Name</label>
        <input type="text" name = {lname} value = {lname} onChange={(e)=>setlastname(e.target.value)} className="registerInput" placeholder="Enter Last Name"/>
        <label>Email</label>
        <input type="text" name = {email} value = {email} onChange={(e)=>setemail(e.target.value)} className="registerInput" placeholder="Enter Email"/>
        <label>Password</label>
        <input type="password" name = {passw} value = {passw} onChange={(e)=>setpassw(e.target.value)} className="registerInput" placeholder="Enter Password"/>
        <button type="button" className="registerButton" onClick={() =>   registerUser}>Register</button>
      </form>
      <button className="registerLoginButton">
      <Link className = "link" to="/login">Login</Link>
      </button>
    </div>

  )
}
