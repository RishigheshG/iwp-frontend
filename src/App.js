import TopBar from "./components/topbar/TopBar";
import Write from "./pages/write/Write"
import Single from "./pages/single/Single"
import Home from "./pages/home/Home";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import axios from "axios"
import { useEffect,useState } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [user,setUser] = useState();
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <TopBar loggedIn={loggedIn} user={user}/>
      <Routes>
        <Route exact path="/" element={<Home user={user}/>} />
        <Route path="/register" element={user ? <Home user={user}/> : <Register />} />
        <Route path="/login" element={loggedIn ? <Home user={user}/> : <Login setUser={setUser} setLoggedIn={setLoggedIn}/>} />
        <Route path="/settings" element={user ? <Settings /> : <Register />} />
        <Route path="/write" element={user ? <Write /> : <Login setUser={setUser} setLoggedIn={setLoggedIn}/>} />
        <Route path="/post/:postId" element={<Single />} />
      </Routes>
    </Router>
  );
}

export default App;
