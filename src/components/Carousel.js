import React from 'react';

import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: 'http://libbyvision.com/wp-content/uploads/2017/04/Ninas_Panini_HighRes-1.jpg',
    caption: ''
  },
  {
    src: 'http://photographybypascal.com/wp-content/uploads/2016/08/FOOD-PHOTOGRAPHY-CUISINE-PORTRAIT-DURHAM-36-2.jpg',
    caption: ''
  },
  {
    src: 'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iywR0EC1DUK0/v1/-1x-1.jpg',
    caption: ''
  }
];

const Carousel = () => <UncontrolledCarousel items={items} />;

export default Carousel;
