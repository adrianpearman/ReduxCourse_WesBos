import React from 'react'
import Photo from './Photo'

const PhotoGrid = (props) => {
  return (
    
    <div className="photo-grid">
      {/* 
        -- Used to dump the information as formatted JSON data the the screen --
        <pre>
           {JSON.stringify(props.posts, null, ' ')}
        </pre>
      */}
      {props.posts.map((post, i) => {
        return <Photo key={i} {...props} post={post} i={i}/>
      })}
    </div>
  )
}

export default PhotoGrid