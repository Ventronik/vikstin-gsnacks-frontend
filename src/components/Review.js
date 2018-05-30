import React from 'react'
// import ReactMarkdown from 'react-markdown'
import { Link } from 'react-router-dom'
import { request, withAuthentication } from '../helpers'

import moment from 'moment'

const Review = ({ review, authState, refreshData }) => {
  const { id, users_id, title, created_at, username, body } = review;

  const remove = (id) => {
    request(`/api/reviews/${id}`, 'delete')
    .then(response => {
      refreshData()
    })
  }

  return (
    <div className="review">
      <div>
        <h1 style={{display:'inline'}} className="review-title">{title}</h1>
        {
          authState && authState.id === users_id ?
          <span className="float-right" >
            <span className="btn btn-md btn-secondary" style={{marginRight:'5px'}}>Edit</span>
            <span
              onClick={() => remove(id)}
              className="btn btn-md btn-danger">
              Delete
            </span>
          </span> : null
        }
      </div>
      <p className="review-meta">{moment(created_at).format('MMMM DD, YYYY')} by <Link to={`/api/users/${id}`}>{username}</Link>
       </p>
    </div>
  )
}


export default withAuthentication(Review)
