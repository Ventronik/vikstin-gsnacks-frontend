import React from 'react';

import { Collapse, CardBody, Card } from 'reactstrap';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteReview, editReview } from '../actions/reviews';

import ReactStars from 'react-stars';

import EditReview from './EditReview';

class Review extends React.Component {
  constructor (props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle () {
    this.setState({ collapse: !this.state.collapse });
  };

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
          {
            this.props.user.id === this.props.review.user_id ? (
              <span className="review-control">
                <span
                  onClick={this.toggle}
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
            ) : null
          }
          <div className="text-center">
            <Collapse isOpen={this.state.collapse}>
              <Card style={{marginBottom:'2rem'}}>
                <CardBody>
                  <EditReview review={this.props.review} snackId={this.props.snackId} />
                </CardBody>
              </Card>
            </Collapse>
          </div>

        </div>
      </div>
    );
  };
};

const mapStateToProps = state => ({user: state.auth.user});

const mapDispatchToProps = dispatch => bindActionCreators({ deleteReview, editReview }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Review);
