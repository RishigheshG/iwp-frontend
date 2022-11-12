import "./post.css"
import {Link} from "react-router-dom"

export default function Post({post}) {
  console.log(post)
  return (
    <div className="post">
      <div className="postInfo">
        <span className="postTitle"><Link className="link" to="/single">{post.title}</Link></span>
        <hr />
        <span className="postDate">{post.last_edited}</span>
      </div>
      <p className="postDesc">
        {post.desc}
      </p>
    </div>
  )
}
