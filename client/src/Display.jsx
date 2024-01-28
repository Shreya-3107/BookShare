import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Display() {
  const [postDetails, setPostDetails] = useState([]);
  useEffect(() => {
    axios.get("/display").then((res) => {
      const resData = res.data;
      setPostDetails(resData);

      postDetails.map((post) => post.title + " " + post.author + "\n");
    });
  });

  return (
    <div>
      <button>
        <Link to="/addBook">Add Card</Link>
      </button>
      <br></br>
      <div>
        {postDetails.map((post) =>(
            <div >
            {post.title}<br></br>
            {post.author}<br></br>
            {post.rate}<br></br>
            {post.review}<br></br>
     
            {post.name}     <br></br>
            {post.mobile}<br></br>
            {post.mail}<br></br>
        
            </div>
        ))}
      </div>
    </div>
  );
}

export default Display;
