import React from 'react' 

class Comments extends React.Component{
  render(){ 
    const renderComment = (comment, index) => {
      return (
        <div className='comment' key={index}>
          <p>
            <strong>{comment.user}</strong>
            {comment.text}
            <button 
              className='remove-comment' 
              onClick={this.props.removeComment.bind(null, this.props.params.postId, index)}
            >
              &times;
              </button>
          </p>
        </div>
      )
    }
    
    const handleSubmit = (e) => {
      e.preventDefault()
      const postId = this.props.params.postId
      const author = this.refs.author.value
      const comment = this.refs.comment.value
      // console.log({ postId, author, comment })
      this.props.addComment(postId, author, comment)
      this.refs.commentForm.reset()
    }

    return (
      <div className='comments'>
        {this.props.postComments.map(renderComment)}
        <form onSubmit={handleSubmit} 
          ref='commentForm' className='comment-form'>
          <input type='text' ref='author' placeholder='author' />
          <input type='text' ref='comment' placeholder='comment' />
          <input type='submit' hidden />
        </form>
      </div>
    )
  }
}

export default Comments