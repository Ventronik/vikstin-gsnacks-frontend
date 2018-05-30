import React from 'react'

import Review from './Review'

const Reviews = ({ reviews, refreshData}) => {
  console.log(reviews.data)
  const { data } = reviews
  console.log(data)

  return (
    <div>
      {
        reviews.map(review => <Review key={review.id} review={review.text} refreshData={refreshData}/>)
      }
    </div>

  )
}

export default Reviews
