import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'
import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {
    name: '',
    comment: '',
    arrayList: [],
    count: 0,
  }

  inputValue = event => {
    this.setState({name: event.target.value})
  }

  commentValue = event => {
    this.setState({comment: event.target.value})
  }

  onAddComment = event => {
    event.preventDefault()

    const {name, comment} = this.state
    const firstName = name.slice(0, 1)
    const date = formatDistanceToNow(new Date())
    const index =
      initialContainerBackgroundClassNames[Math.floor(Math.random() * 7)]

    const newCommentObject = {
      id: uuidv4(),
      firstNames: firstName,
      names: name,
      comments: comment,
      dates: date,
      newClass: index,
      isLiked: false,
    }

    this.setState(prevState => ({
      arrayList: [...prevState.arrayList, newCommentObject],
      name: '',
      comment: '',
      count: prevState.count + 1,
    }))
  }

  likeComment = id => {
    this.setState(prevState => ({
      arrayList: prevState.arrayList.map(eachComment => {
        if (eachComment.id === id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  deleteComment = id => {
    const {arrayList} = this.state

    const filteredList = arrayList.filter(eachComment => eachComment.id !== id)
    this.setState(prevState => ({
      arrayList: filteredList,
      count: prevState.count - 1,
    }))
  }

  render() {
    const {name, comment, arrayList, count} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Comments</h1>
        <div className="input-container">
          <div className="form-container">
            <p className="para">Say something about 4.0 Technologies</p>
            <form className="form" onSubmit={this.onAddComment}>
              <input
                type="text"
                className="name-field"
                placeholder="Your Name"
                onChange={this.inputValue}
                value={name}
              />
              <textarea
                className="comment-field"
                placeholder="Your Comment"
                onChange={this.commentValue}
                value={comment}
              />
              <button type="submit" className="button">
                Add Comment
              </button>
            </form>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
            className="comment-image"
          />
        </div>
        <hr />
        <p className="number-comments">
          <span className="number-count">{count}</span> Comments
        </p>
        <ul className="comments-container">
          {arrayList.map(eachCommentObject => (
            <CommentItem
              key={eachCommentObject.id}
              arrayList={eachCommentObject}
              likeComment={this.likeComment}
              deleteComment={this.deleteComment}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
