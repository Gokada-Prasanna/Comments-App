// Write your code here
import './index.css'

const CommentItem = props => {
  const {arrayList, deleteComment, likeComment} = props
  const {id, firstNames, names, comments, dates, newClass, isLiked} = arrayList
  const imgUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const addClass = isLiked ? 'sky-blue' : ''

  const onClickDeleteIcon = () => {
    deleteComment(id)
  }

  const onClickLikeIcon = () => {
    likeComment(id)
    console.log(addClass)
  }

  return (
    <li className="commentItem" key={id}>
      <div className="contentContainer">
        <p className={`user-icon ${newClass}`}>{firstNames}</p>
        <div className="nameCommentContainer">
          <div className="nameContainer">
            <h1 className="name">{names}</h1>
            <p className="timeNow">{dates}</p>
          </div>
          <p className="comment">{comments}</p>
        </div>
      </div>
      <div className="iconContainer">
        <div className="likeContainer">
          <button
            className="likeButton"
            type="button"
            onClick={onClickLikeIcon}
          >
            <img src={imgUrl} alt="like" className="likeImage" />

            <p className={`iconName ${addClass}`}>Like</p>
          </button>
        </div>
        <button
          type="button"
          className="deleteButton"
          onClick={onClickDeleteIcon}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="deleteImage"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
