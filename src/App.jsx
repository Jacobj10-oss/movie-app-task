import { BrowserRouter, Routes, Route } from "react-router";
import { NavLink, Link } from "react-router";
import { Movies } from "./Movies";
import { Likedislike } from "./Likedislike";
import { Moviesdata } from "./Moviesdata";
import { AddMovie } from "./Addmovie";



function App() {


  return (
    <>
    {/* <Moviesdata/> */}

  
    
    <nav>
        <Link to="/movies">Movies</Link> | <Link to="/movies/add">AddMovie</Link>

    </nav>
      <Routes>
      <Route path="movies" element={<Moviesdata/>} />
      <Route path="movies/add" element={<AddMovie/>} />
    </Routes>
    </>
  )
}

export default App
