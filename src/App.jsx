import { BrowserRouter, Routes, Route } from "react-router";
import { NavLink, Link } from "react-router";
import { Movies } from "./Movies";
import { Likedislike } from "./Likedislike";
import { Moviesdata } from "./Moviesdata";


function App() {


  return (
    <>
    <Moviesdata/>
    {/* <nav>
        <Link to="/movies">Movies</Link>
    </nav>
      <Routes>
      <Route path="movies" element={<Movies/>} />
    </Routes> */}
    </>
  )
}


export default App
