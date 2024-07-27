import React from 'react'
import tea from "../assets/chai-kulhad.jpg"

function Card(props) {
  return (
    <div className='ml-4 lg:ml-5 mb-24'>
        <div className="card bg-neutral-200 w-96 shadow-2xl text-black dark:bg-neutral-800 dark:text-white duration-300 transition-all ease-in-out">
  <figure className="px-10 pt-10">
  <iframe width="" height="" 
  src={props.url} 
  title="YouTube video player" 
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  referrerpolicy="strict-origin-when-cross-origin" 
  allowfullscreen
  className='rounded rounded-lg'
  >
  </iframe>
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{props.title}</h2>
    
  </div>
</div>
    </div>
  )
}

export default Card