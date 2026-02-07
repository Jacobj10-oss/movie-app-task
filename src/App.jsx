import { BrowserRouter, Routes, Route } from "react-router";
import { NavLink, Link } from "react-router";
import { Movies } from "./Movies";
import { useState } from "react";
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import Badge, { badgeClasses } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';

function App() {


  return (
    <>
    {/* <Movies/> */}
    <Likedislike/>
    {/* <nav>
        <Link to="/about">About</Link>
    </nav> */}
      {/* <Routes>
      <Route path="/" element={<App />} />
    </Routes> */}
    </>
  )
}

function Likedislike(){
  const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }
`;

  const [like,setLike] = useState(0)
  const [dislike,setDislike] = useState(0)

  return(
    <>
    <div className="like-dislike-container">
      <div className="like-container">
        <button onClick={()=>setLike(like+1)}><ThumbUpOutlinedIcon/><CartBadge className="badge" badgeContent={like} color="primary" overlap="circular" /></button>
      </div>
      <div className="dislike-container">
        <button onClick={()=>setDislike(dislike+1)}><ThumbDownOffAltOutlinedIcon/><CartBadge className="badge" badgeContent={dislike} color="error" overlap="circular" /></button>
      </div>
    </div>
    <div className="review">
      {like ===0 && dislike === 0 ? "" : like-dislike >=10 ? "🎊Blockbuster🎊":"😭Flop😭"}
    </div>
    </>
    
  )
}

export default App
