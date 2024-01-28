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
       Author:{post.author}
       </div>
       <div className='post-title'>
       Title:{post.title}
       </div>
       <div className='post-review'>
       Review:{post.review}
       </div>
       <div className='post-rate'>
       Rage : &#8377; {post.rate}/month
       </div>
      </div>
    </div>
  )
}

export default Card
