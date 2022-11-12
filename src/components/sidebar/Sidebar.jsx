import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">About Me</span><br />
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANIAAAB6CAMAAAD9CP3zAAAAxlBMVEWI29H////sHCMAsJ8Aq5l71cpGvK7u+/oOjH4ck4UAiXumz8nf7uw8mo0Ds6Jz0sYYnY9qxbn2+/t9zsOR4ddBqJyD4dftFx/yAADrAADhP0HoJCrvAxOwoZuRz8anrqhWwrSevLXOZ2XmNjqrqqSawrq6koy2l5HCg4DmLjHHe3fydHf3tbbwaGv96Oj71NX73d71kpTxUVTSYmD4xMXbT07+9PTyX2LLcW+jtq++iYV86d696eTU7uqt4duDvLTI39xdqZ61tE9CAAADNUlEQVR4nO3Za1PiMBQG4Jbeq7ZUSq+hVgVZVmVRFy+sIP7/P7Up3ujSJaTMbJLueT444wwfzjvnJE0bSQIAAAAAAAAAAAAAAPzvgpWv/z7+iOv0LDlPzvrZKkUwuEjSME36rKvaQzBsIRTHEUouit58G0UhhtB3YfsU9KIQpZdX1yhESa+XoLD1JpqJmilLw/hyLMs/4lYrjKKPQBg6FTNTMERhKsuTm9u1MO+RHlkXV9Mdin/KV3G8kagVJhnr4mrJpuh8fP+ANgLhSOmAdXW1ZNP44X6SbvZI3EjSWXw7Hm8uJIEHD28P8US+qRo8YbeHbIRuJ9eVa+lJzE1cCmb4WVQ1d/GdoImwaVWL8OYg5koqBINR5ebQF7dJUvAUbWaKhgInwpn6fz6XwnD2i3VV+wlOWqX1FKIh65L2FgyStUwoPRF66t4E2ePngoqmgwYkKlygVaPC6FFqSCLcqLviBX0q6ItfpUDqJaNZ1qBEUhGqMTMHOKe5JKwrpJTrjkKi+6yrpKCR82COQJFcnEh1cm8rXRdp8ooeZcbxVs8a6ypp5KrizOXtDIGGTiqapC4IiWSDdZFU8ErSj0mR5kLNnauoHVIiWaylhCNlTYvUvMHDz1mVtOHJhlCR/BwfDA5JkcTaxItHrb4gzN4z6yLpFAciRfc62+ADkVCz5+5ybFXFOLb677TcIcIvFwJk8rpf2kT4Rx3WFROZ9heTDP+qq3HeqfVIOzHtNuebhObl2QGFF9ypNuuiCXyJ+FpRssTz6bEumkQjnoVKDmyT9zZJ2jNVJOPItDlfTRLl5Mkvts39ZxWfOhL3i4m+S7xHolxLx6/8ryXKHW9pmRbrkkl84jt6uUm2rbMuebtOZ3FIYflqmxbfc9e1rCMaFj7keXyfW3c5fpdZfCfytbZFqesG2grr2qu5urPTtVLpiukTj0cIlzZO+UNEzt8Arq7J9sjEYZd0RcnnRk0+j2tJUxSd7tywhs9Pr3glkW9g/mbOuvpKEEmESMVaMupG4vTiFu/hHapD+LoFl5+SPfxs0WtzuLzGyBt3esCZHEWtj8PTQ0HbA+vaAQAAAAAAAAAAAAAA/9BvCJNcF3EClXoAAAAASUVORK5CYII=" alt="" />
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab delectus pariatur id iure voluptatibus dignissimos, veritatis modi aperiam optio architecto!</p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Categories</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Cinema</li>
          <li className="sidebarListItem">Tech</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Follow Us</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  )
}
