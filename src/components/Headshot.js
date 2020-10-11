import React, { Component, Fragment } from 'react';
import headshot from '../headshot.JPG';

class Headshot extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <img src={headshot} alt={1} id="head-shot" />
        </div>
      </Fragment>
    );
  }
}

export default Headshot;
