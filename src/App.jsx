import { BrowserRouter, Routes, Route } from "react-router";
import { NavLink, Link } from "react-router";
import { Movies } from "./Movies";
import { Likedislike } from "./Likedislike";
import { Moviesdata } from "./Moviesdata";
import { AddMovie } from "./Addmovie";
import { Home } from "./Home";



function App() {


  return (
    <>
    {/* <Moviesdata/> */}

  
    <div className="nav-bar">

    
      <ul>
        <li><Link to="/home">Home</Link></li>
        
        <li><Link to="/movies">Movies</Link></li>
        <li><Link to="/movies/add">AddMovie</Link></li>
      </ul>

    </div>
    
      <Routes>
      <Route path="movies" element={<Moviesdata/>} />
      <Route path="movies/add" element={<AddMovie/>} />
      <Route path="home" element={<Home/>} />
    </Routes>
    </>
  )
}

export default App
