function postComment(state = [], action) {
  switch(action.type){
    case 'ADD_COMMENT':
      // return the new state with the new commenr
      return[...state, {
        user: action.author,
        text: action.comment
      }]
    case 'REMOVE_COMMENT':
      console.log('removing comment')
      // We need to return the new state without the deleted comment
      return[
        // from the start to the one we want to delete
        ...state.slice(0, action.index),
        // after the deleted one, to the end
        ...state.slice(action.index + 1)
      ]
    default:
      return state
  }
  return state
}

function comments(state = [], action){
  if(typeof action.postId !== 'undefined'){
    return{
      // take the current state
      ...state,
      // overwrite this post with a new one
      [action.postId]: postComment(state[action.postId], action)
    }
  }
  return state
}
export default comments

