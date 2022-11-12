import "./header.css"

export default function Header() {
  return (
    <div className='header'>
      <div className="headerTitles">
        <span className="headerTitleSmall">IWP Project</span>
        <span className="headerTitleBig">Blog Site</span>
      </div>
      <img className = "headerImg" src="https://images.pexels.com/photos/276374/pexels-photo-276374.jpeg?cs=srgb&dl=pexels-pixabay-276374.jpg&fm=jpg" alt="" />
    </div>
  )
}
