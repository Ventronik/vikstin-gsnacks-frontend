import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createReview } from '../actions/reviews';

class SubmitReview extends React.Component {
  // constructor(){
  //   this.stars = 0
  // }

  // handleSubmit = (event) => {
  //   event.preventDefault()
  //   request('/blog_posts','post', {
  //     title: event.target.title.value,
  //     body: event.target.body.value,
  //     labelIds: this.state.labels.filter(label => label.selected).map(label => label.id)
  //   })
  //   .then(response => {
  //     this.props.history.push('/')
  //   })
  // }

  render () {
    return (
      <div className="container">
        <form onSubmit={(event)=>this.props.createReview(event)}>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Review Title</label>
            <input name="title" type="text" className="form-control" id="exampleFormControlInput1" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Review</label>
          <textarea  name="text" className="form-control" id="exampleFormControlTextarea1" rows="35"></textarea>
          </div>

            {/* <div className="form-group"> */}
              {/* <div className="col-lg-12"> */}
                {/* <div className="star-rating"> */}
                  {/* <span className="fa fa-star-o" data-rating="1"></span> */}
                  {/* <span className="fa fa-star-o" data-rating="2"></span> */}
                  {/* <span className="fa fa-star-o" data-rating="3"></span> */}
                  {/* <span className="fa fa-star-o" data-rating="4"></span> */}
                  {/* <span className="fa fa-star-o" data-rating="5"></span> */}
                {/* <input type="hidden" name="whatever1" class="rating-value" value="2.56" > </input> */}
                {/* </div> */}
              {/* </div> */}
            {/* </div> */}

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


const mapDispatchToProps = dispatch => bindActionCreators({ createReview }, dispatch);

export default connect(null, mapDispatchToProps)(SubmitReview);
