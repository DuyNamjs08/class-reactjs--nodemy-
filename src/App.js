import Component from './components/Component';
import Homepages from './pages/Homepages';
import Post from './pages/Post';
import Profile from "./pages/Profile";
import {  Routes, Route,Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <div className="Link">
        <Link to="/">Homepages</Link>

        <Link to="/post">Post</Link>
        <Link to="/profile">Profile</Link>
      </div>

      {/* <Component /> */}
      {/* <Homepages />
      <Post />
      <Profile /> */}
      <Routes>
        <Route path="/" element={<Homepages />} />
        <Route path="/post/:postId" element={<Post />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<h1> Trang web không tồn tại </h1>} />
      </Routes>
    </div>
  );
}

export default App;
