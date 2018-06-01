import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getReviews, deleteReview, editReview } from '../actions/reviews';

import ReactStars from 'react-stars';

import Review from './Review';
import SubmitReview from './SubmitReview';
import EditReview from './EditReview';

class Reviews extends React.Component {
  componentDidMount () {
    this.props.getReviews();
  };

  render () {
    const reviews = this.props.reviews.filter(review => review.snack_id === this.props.snackId);
    const average = reviews.map(review => review.rating).reduce((total, rate) => total + parseInt(rate), 0) / reviews.length;
    return (
      <div>
        <h4 className="text-center" style={{color:'gray'}}>Reviews</h4>
        <div className="rating-wrap text-center">
          <ReactStars
            count={5}
            size={25}
            color2={'#dc7c32'}
            value={average}
            edit={false}
          />
        </div>
        {
          reviews.map(review =>
            <Review
              key={review.id}
              review={review}
              deleteReview={deleteReview}
              editReview={editReview}
            />
          )
        }
        <SubmitReview />
        <EditReview />
      </div>
    );
  };
};

const mapStateToProps = state => ({reviews: state.reviews.reviews});

const mapDispatchToProps = dispatch => bindActionCreators({ getReviews, deleteReview, editReview }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
