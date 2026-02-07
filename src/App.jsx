import { BrowserRouter, Routes, Route } from "react-router";
import { NavLink, Link } from "react-router";
import { Movies } from "./Movies";
import { Likedislike } from "./Likedislike";


function App() {


  return (
    <>
    <Movies/>
    {/* <nav>
        <Link to="/about">About</Link>
    </nav> */}
      {/* <Routes>
      <Route path="/" element={<App />} />
    </Routes> */}
    </>
  )
}

export default App
