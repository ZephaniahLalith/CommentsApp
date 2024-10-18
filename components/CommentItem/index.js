// Write your code here
import './index.css'

import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {item, bgcolor, ondel, onlike, isliked} = props
  const {name, comment, id} = item
  const date = formatDistanceToNow(new Date())
  const ond = () => {
    ondel(id)
  }
  const onl = () => {
    onlike()
  }
  return (
    <li>
      <div className="CommentUpperSection">
        <p className={`ProfilePicture ${bgcolor}`}>{name[0]}</p>
        <div>
          <div className="CommentHeadtime">
            <h1>{name}</h1>
            <p>{date}</p>
          </div>
          <p>{comment}</p>
        </div>
      </div>
      <div className="CommentItem">
        <div className={isliked ? 'liked' : 'LikeAction'}>
          <img
            src={
              isliked
                ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
            }
            alt="like"
          />
          <button onClick={onl}>Like</button>
        </div>
        <button onClick={ond} testid="delete">
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
