import React, { Component, Fragment } from 'react';
import Navbar from './navbar'
import headshot from '../../headshot.JPG'


class Header extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <div>
          <img src={headshot} alt={1} />
        </div>
      </Fragment>
    );
  }
}

export default Header