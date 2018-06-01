import React from 'react';

import { Button, Form, FormGroup, Alert, Input } from 'reactstrap';

import ReactStars from 'react-stars';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createReview } from '../actions/reviews';

class SubmitReview extends React.Component {
  state = {
    invalid: false,
    title: '',
    text: '',
    stars: 0
  };

  handleCreate = event => {
    event.preventDefault();
    if (!event.target.title.value || !event.target.text.value) {
      this.setState({
        invalid: true
      });
    } else {
      this.props.createReview(this.state.title, this.state.text, this.state.stars, this.props.user.id, this.props.snackId);
      this.clear();
    }
  };

  clear = () => {
    this.setState({
      title: '',
      text: '',
      stars: 0
    })
  }

  render () {
    return (
      <div className="container">
        <Form onSubmit={this.handleCreate}>
          <div className="rating-wrap">
            <ReactStars
              count={5}
              value={this.state.stars}
              onChange={event => this.setState({ stars: event })}
              size={30}
              color2={'#dc7c32'}
            />
          </div>
          <FormGroup>
            <Input
              name="title"
              type="text"
              id="title"
              placeholder="Subject"
              value={this.state.title}
              onChange={event => this.setState({ title: event.target.value })}
            />
          </FormGroup>
          <FormGroup>
            <Input
              name="text"
              type="textarea"
              id="text"
              placeholder="What did you think of the food?"
              value={this.state.text}
              onChange={event => this.setState({ text: event.target.value })}
            />
          </FormGroup>
          {this.state.invalid ? (
            <Alert color="danger" style={{marginBottom:'1rem'}}>
              Please fill out all fields correctly.
            </Alert>
          ) : null}
          <FormGroup>
            <Button color="primary">Submit</Button>
          </FormGroup>
        </Form>
      </div>
    );
  };
};

const mapStateToProps = state => ({user: state.auth.user});

const mapDispatchToProps = dispatch => bindActionCreators({ createReview }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SubmitReview);
