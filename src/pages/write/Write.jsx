import "./write.css"
import {Link} from "react-router-dom"
import axios from "axios"
import { useEffect,useState } from "react";

export default function Write() {
  const [title,setTitle] = useState();
  const [desc,setDesc] = useState();
  const [content,setContent] = useState();

  const [blogid, setBlog] = useState({});
  const submitBlog = () => {
    var blog = {
        "blog_id" : "abc",
        "user_id" : "0dc09e730f3e51dd01de9a40daaad3a2",
        "last_edited" : "09 Nov 2022",
        "title" : title,
        "desc" : desc,
        "content" : content,
    }
    console.log(typeof(user));
    axios
    .post('https://iwp-back.herokuapp.com/blog/', blog)
    .then((res) => {
        setBlog(res.data);
        console.log(blogid);
    })
}
  return (
    <div className="write">
      <form className="writeForm">
        <div className="writeFormGroup">
          <input type="text" placeholder="title" className="writeInput writeTitle" name = {title} onChange={(e)=>setTitle(e.target.value)} autoFocus={true}/>
        </div>
        <div className="writeFormGroup">
          <input type="text" className="writeInput writeDesc" placeholder="Description" name={desc} onChange={(e)=>setDesc(e.target.value)}/>
        </div>
        <div className="writeFormGroup">
          <textarea placeholder="tell your story" type="text" className="writeInput writeText" name = {content} onChange={(e)=>setContent(e.target.value)} ></textarea>
        </div>
        <center><button onClick={() => submitBlog} className="writeSubmit">Publish</button></center>
      </form>
    </div>
  )
}
