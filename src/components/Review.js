import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteReview } from '../actions/reviews';

import ReactStars from 'react-stars';

class Review extends React.Component {
  render () {
    return (
      <div className="review">
        <div>
          <small className="float-right">#452{this.props.review.user_id}</small>
          <ReactStars
            count={5}
            size={20}
            color2={'#dc7c32'}
            value={this.props.review.rating}
            edit={false}
          />
          <h4>{this.props.review.title}</h4>
          <p>
            {this.props.review.text}
          </p>
          <span className="review-control">
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
        </div>
      </div>
    );
  };
};


const mapDispatchToProps = dispatch => bindActionCreators({ deleteReview }, dispatch);

export default connect(null, mapDispatchToProps)(Review);
