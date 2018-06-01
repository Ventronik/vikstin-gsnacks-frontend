import React from 'react';

import { Collapse, Button, CardBody, Card } from 'reactstrap';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getReviews, deleteReview, editReview } from '../actions/reviews';

import ReactStars from 'react-stars';

import Review from './Review';
import SubmitReview from './SubmitReview';
import EditReview from './EditReview';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  componentDidMount () {
    this.props.getReviews();
  };

  toggle () {
    this.setState({ collapse: !this.state.collapse });
  };

  render () {
    const reviews = this.props.reviews.filter(review => review.snack_id === this.props.snackId);
    const average = reviews.map(review => review.rating).reduce((total, rate) => total + parseInt(rate, 10), 0) / reviews.length;
    return (
      <div>
        <hr style={{margin: '2rem -2rem'}} />
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
              snackId={this.props.snackId}
            />
          )
        }
        <hr style={{margin: '2rem -2rem'}} />
        <div className="text-center">
          <Button onClick={this.toggle} style={{marginBottom:'2rem'}} size="lg">Add Review</Button>
          <Collapse isOpen={this.state.collapse}>
            <Card style={{marginBottom:'2rem'}}>
              <CardBody>
                <SubmitReview snackId={this.props.snackId} />
              </CardBody>
            </Card>
          </Collapse>
        </div>
        {/* <EditReview /> */}
      </div>
    );
  };
};

const mapStateToProps = state => ({reviews: state.reviews.reviews});

const mapDispatchToProps = dispatch => bindActionCreators({ getReviews, deleteReview, editReview }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
