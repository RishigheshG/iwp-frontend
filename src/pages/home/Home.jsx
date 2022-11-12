import Posts from "../../components/posts/Posts"
import Header from "../../components/header/Header"
import "./home.css"
import axios from "axios"
import { useEffect,useState } from "react";

export default function Home(props) {
  
  const [posts,setPosts] = useState([]);

  useEffect(()=>{
    fetchPosts();
  },[]);

  function fetchPosts() {
    const res = axios
    .get("https://iwp-back.herokuapp.com/blog/")
    .then((res) => {
      const allPosts = res.data;
      setPosts(allPosts);
      //console.log(res.data);
    }) }
    
  return (
    <>
    <Header/>
    <div className="home">
      <Posts posts = {posts} />
    </div>
    </>
  )
}
