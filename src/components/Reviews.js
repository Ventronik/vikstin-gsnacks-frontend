import React from 'react'

import Review from './Review'

const Reviews = ({reviews, refreshData}) => {

  return (
    <div>
      {
        reviews.map(review => <Review key={review.id} review={review} refreshData={refreshData}/>)
      }
    </div>

  )
}

export default Reviews


// THis is the function this is called with and may come in handy later
//
//
// getData = (username) => {
//   this.setState({loading: true})
//   request(`/blog_posts?username=${username}&orderDirection=desc`)
//   .then(({data: {blog_posts}}) => {
//     this.setState({blog_posts, loading:false})
//   })
//   .catch(error => {
//     this.setState({loading:false})
//   })
// }
