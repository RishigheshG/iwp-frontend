import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3f6DB7eULKZOCZP_6hwRFH7uPjKWg2rO2og&usqp=CAU" alt="" className="singlePostImg" />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">Author: <b>Dawn</b></span>
          <span className="singlePostDate">1 Hour Ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae officiis nulla odit iure suscipit ut facilis sed! Harum magni aperiam, deleniti obcaecati molestiae, quisquam ipsa iusto, ipsam incidunt excepturi unde fugit maxime officiis asperiores illo. Dolor aliquam incidunt quod possimus.
        </p>
      </div>
    </div>
  )
}
