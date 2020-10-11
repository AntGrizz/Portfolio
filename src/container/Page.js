import React, { Component, Fragment } from 'react';
import Headshot from '../components/Headshot';
import Bio from '..//components/Bio'
import Portfolio from '..//components/Portfolio'


class Page extends Component {
  render() {
    return (
      <Fragment>
        <Headshot />
        <Bio />
        <Portfolio />
      </Fragment>
    );
  }
}

export default Page;
