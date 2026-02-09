import { BrowserRouter, Routes, Route } from "react-router";
import { NavLink, Link } from "react-router";
import { Movies } from "./Movies";
import { Likedislike } from "./Likedislike";
import { Moviesdata } from "./Moviesdata";
import { AddMovie } from "./Addmovie";
import { Home } from "./Home";
import HomeIcon from '@mui/icons-material/Home';
import MovieIcon from '@mui/icons-material/Movie';
import MovieEditIcon from '@mui/icons-material/MovieEdit';
import { BasicForm } from "./BasicForm";
import DynamicFormIcon from '@mui/icons-material/DynamicForm';



function App() {


  return (
    <>
    {/* <Moviesdata/> */}

  
    <div className="nav-bar">

    
      <ul>
        <li><Link to="/home"><HomeIcon/> Home</Link></li>
        <li><Link to="/movies"><MovieIcon/>Movies</Link></li>
        <li><Link to="/movies/add"><MovieEditIcon/>AddMovie</Link></li>
        <li><Link to="/basic-form"><DynamicFormIcon/>Basic-form</Link></li>
      </ul>

    </div>
    
      <Routes>
      <Route path="movies" element={<Moviesdata/>} />
      <Route path="movies/add" element={<AddMovie/>} />
      <Route path="home" element={<Home/>} />
      <Route path="basic-form" element={<BasicForm/>} />
    </Routes>
    </>
  )
}

export default App
