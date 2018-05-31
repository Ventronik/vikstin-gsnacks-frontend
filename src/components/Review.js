import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteReview } from '../actions/reviews';

class Review extends React.Component {
  render () {
    return (
      <div className="review">
        <div>
          <h1
            style={{display:'inline'}}
            className="review-title">
            {this.props.review.title}
          </h1>
          {
            <span className="float-right">
              <span
                className="btn btn-md btn-secondary"
                style={{marginRight:'5px'}}>
                Edit
              </span>
              <span
                onClick={() => this.props.deleteReview(this.props.review.id)}
                className="btn btn-md btn-danger"
                >
                Delete
              </span>
            </span>
          }
        </div>
      </div>
    );
  };
};

// const Review = ({ review, deleteReview }) => {
//   const { id, users_id, title, snack_id, rating, text } = review;
//
//   return (
//
//   )
// }

const mapDispatchToProps = dispatch => bindActionCreators({ deleteReview }, dispatch);

export default connect(null, mapDispatchToProps)(Review);
