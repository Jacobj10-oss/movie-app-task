import { BrowserRouter, Routes, Route } from "react-router";
import { NavLink, Link } from "react-router";

function App() {


  return (
    <>
    <nav>
        <Link to="/about">About</Link>
    </nav>
      <Routes>
      <Route path="/" element={<App />} />
    </Routes>
    </>
  )
}

export default App
