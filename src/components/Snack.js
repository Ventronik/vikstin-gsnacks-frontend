import React from 'react';

import { Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

const Snack = ({ name, img, description, is_perishable, price }) => {
  return (
    <Col className="snack-col" xs="4">
      <Card>
        <CardImg className="snack-img" top width="100%" src={img} alt={name} />
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <CardSubtitle>{price}</CardSubtitle>
          <CardText>{description.slice(0,50)}...</CardText>
        </CardBody>
      </Card>
    </Col>
  )
};

export default Snack;
