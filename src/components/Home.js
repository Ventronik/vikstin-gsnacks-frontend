import React from 'react';

import { Jumbotron, Container, Row, Col, Button } from 'reactstrap';

const Home = () => {
  return (
    <div>
      <Jumbotron className="home">
        <img src="./logo.svg" />
        <hr />
        <h1 className="display-3">Vikstin Federal Penitentiary</h1>
      </Jumbotron>
      <Jumbotron>
        <h2 className="text-center">Our cafeteria serves the finest bounty from the lowest bidder.</h2>
        <hr />
        <p className="lead">
          <Button href="/snacks" size="lg">View Snacks</Button>
        </p>
      </Jumbotron>
      <Jumbotron className="home-features" color="dark">
        <Container>
          <Row>
            <Col md="4">
              <img src="./feature1.svg" />
              <h4>Minimum required nutrients to survive, for the most part</h4>
            </Col>

            <Col md="4">
              <img src="./feature2.svg" />
              <h4>Reduced sawdust input, guaranteed</h4>
            </Col>
            <Col md="4">
              <img src="./feature3.svg" />
              <h4>Frozen fish unsustainably sourced from the Ganges</h4>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Home;
