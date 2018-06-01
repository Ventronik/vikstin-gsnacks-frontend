import React from 'react';

import ReactStars from 'react-stars'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { editReview } from '../actions/reviews';

class EditReview extends React.Component {
  state = {
    title: this.props.title,
    text: this.props.text,
    stars: this.props.rating
  };

  ratingChanged = (newRating) => {
    this.setState({
      stars: newRating
    });
  };

  render () {
    return (
      <div className="container">

        <form onSubmit={(event)=>this.props.editReview(event, this.state.stars)}  >
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Review Title</label>
            <input name="title" type="text" className="form-control" id="exampleFormControlInput1" />
          </div>
          <ReactStars
            count={5}
            onChange={this.ratingChanged}
            size={30}
            color2={'#dc7c32'} />
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Review</label>
          <textarea  name="text" className="form-control" id="exampleFormControlTextarea1" rows="35"></textarea>
          </div>

          <div>
            <input type='submit' value="Create Review" className="btn btn-primary"/>
            <button
              className="btn btn-danger"
              style={{marginLeft:'5px'}}
              onClick={() => this.cancel()} >
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({ editReview }, dispatch);
export default connect(null, mapDispatchToProps)(EditReview);
