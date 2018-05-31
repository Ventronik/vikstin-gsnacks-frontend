import React from 'react'
// import ReactMarkdown from 'react-markdown'
import { Link } from 'react-router-dom'
import { request } from '../helpers'

// import moment from 'moment'

const Review = ({ review }) => {
  const { id, users_id, title, snack_id, rating, text } = review;
  console.log(review)
  return (
    <div className="review">
      <div>
        <h1 style={{display:'inline'}} className="review-title">{title}</h1>
        {
          <span className="float-right" >
            <span className="btn btn-md btn-secondary" style={{marginRight:'5px'}}>Edit</span>
            <span
              className="btn btn-md btn-danger">
              Delete
            </span>
          </span>
        }
      </div>
    </div>
  )
}


export default Review
