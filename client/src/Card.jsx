import React from 'react'
import "./assets/css/display.css"

function Card({post}) {
  return (
    <div className='card-holder'>
      <div className='card-img'>
      <img  src='' className='book-img'/>
      </div>
      <div className='card-info'>
       
       <div className='post-author'>
       <span>Author :  &nbsp;</span>
       {post.author}
       </div>
       <div className='post-title'>
       <span>Title : &nbsp;</span>{post.title}
       </div>
       <div className='post-review'>
       <span>Reviews :&nbsp;</span>{post.review}
       </div>
       <div className='post-rate'>
       <span>Rate :&nbsp;</span>
        &#8377; {post.rate}/month
       </div>
      </div>
    </div>
  )
}

export default Card
