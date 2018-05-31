import React from 'react';

import { Container, Row } from 'reactstrap';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getSnacks } from '../actions/snacks';

import Snack from './Snack';

class Snacks extends React.Component {
  componentDidMount () {
    this.props.getSnacks();
  };

  render () {
    console.log(this.props);
    return (
      <div>
        <Container>
          <Row>
            {
              this.props.snacks.map(snack => {
                return (
                  <Snack
                    key={snack.id}
                    name={snack.name}
                    description={snack.description}
                    price={snack.price}
                    img={snack.img}
                    is_perishable={snack.is_perishable}
                  />
                )
              })
            }
          </Row>
        </Container>
      </div>
    );
  };
}

const mapStateToProps = state => ({
  user: state.auth.user,
  snacks: state.snacks.snacks
});

const mapDispatchToProps = dispatch => ({getSnacks: bindActionCreators(getSnacks, dispatch)});

export default connect(mapStateToProps, mapDispatchToProps)(Snacks);
