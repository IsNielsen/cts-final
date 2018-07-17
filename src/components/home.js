import React, { Component } from 'react';

import Header from './header';
import Card from './card';
import Footer from './footer';

class Home extends Component {
  render() {
    return (
      <div className="home">
        { Header() }
        <Card />
        { Footer() }
      </div>
    );
  }
}

// things we need to fix

// content labels
// generate btn space/card-height

export default Home;