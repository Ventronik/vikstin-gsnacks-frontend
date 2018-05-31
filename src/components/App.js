import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { AuthenticatedRoute, request } from '../helpers'
import Reviews from './Reviews'

class App extends Component {
  constructor(props){
    super(props)
    this.state= {
      reviews: [],
      loading: false
    }
    const { REACT_APP_BACKEND } = process.env
    console.log(REACT_APP_BACKEND)
  }

  componentDidMount(){
    request('/api/reviews')
    .then((allReviews) => {
      this.setState({
        reviews: allReviews.data
      })
    })
  }

  render() {
    console.log(this.state.reviews)
    return (
      <BrowserRouter>
        <div>
          <div className="container">
          </div>
          <p>'HAMBRUGARZ'</p>
          <Switch>
            <Route path='/reviews' render={()=> <Reviews reviews={this.state.reviews} refreshData={this.getData} />} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
