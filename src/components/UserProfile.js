import React from 'react'

import {
  Container,
  Row,
  Col
} from 'reactstrap'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getSnacks } from '../actions/auth.actions'

class UserProfile extends React.Component {
  componentDidMount () {
    this.props.getSnacks();
  };

  render () {
    console.log(this.props.snacks);
    const allSnacks = this.props.snacks;
    return (
      <div>
        <Container>
          Hello
        </Container>
      </div>
    )
  }
}


const mapStateToProps = state => ({user: state.auth.user, snacks: state.auth.snacks})
const mapDispatchToProps = dispatch => ({getSnacks: bindActionCreators(getSnacks, dispatch)})

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)
