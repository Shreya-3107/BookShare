import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./assets/css/display.css"
import Card from "./Card";

function Display() {
  const [postDetails, setPostDetails] = useState([]);
  useEffect(() => {
    axios.get("/display").then((res) => {
      const resData = res.data;
      setPostDetails(resData);
    });
  });

  return (
    <div className="display-container">
    <div className="display-holder">


    <div className="display-header ">
            <h1>BookShare</h1>
        </div>

        <div className="display-content">
            <div className="display-grid">
            {postDetails.map((post) =>(
                    <Card post = {post} />))}
            </div>
            <button className="addcard-button">
        <Link to="/addBook">Add Card</Link>
      </button>
        </div>
        
    </div>
        
    </div>
  );
}

export default Display;


{/* <div className="display-container">
    <div className="display-header">
            Header
      <button >
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
    </div> */}