import React from 'react' 
import { Link } from 'react-router'
import CSSTransitionGroup from 'react-addons-css-transition-group' 

const Photo = (props) => {
  return (
    <figure className='grid-figure'>
      <div className='grid-photo-wrap'>
        <Link to={`/view/${props.post.code}`}>
          <img src={props.post.display_src} alt={props.post.caption} className='grid-photo' />
        </Link>

        <CSSTransitionGroup
          transitionName='like'
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          <span 
            key={props.post.likes}
            className='likes-heart'
          >
            {props.post.likes}
          </span>
        </CSSTransitionGroup>

        <figcaption>
          <p>{props.post.caption}</p>
          <div className='control-buttons'>
            <button 
              className='likes' 
              onClick={props.increment.bind(null, props.i)}
            >
              &hearts;
              {props.post.likes}
            </button>
            <Link to={`/view/${props.post.code}`} className='button'>
              <span className='speech-bubble'></span>
              {props.comments[props.post.code] ? props.comments[props.post.code].length : 0 }
            </Link>
          </div>
        </figcaption>
      </div>
    </figure>
  )
}

export default Photo