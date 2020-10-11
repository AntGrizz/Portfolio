import React from 'react'
import { Row, Col } from 'antd';

const Bio = () => (
  <>
    <Row>
      <h1 id="header">Hi, I'm Anthony Gregg. Full Stack Developer.</h1>
    </Row>
    <Row>
      <Col span={6}>
        <div class="section-header">About Me</div>
      </Col>
      <Col span={18}>
        <Row>
          <span class="bio-row">Full Stack Developer</span>
        </Row>
        <Row>
          <span class="bio-row">Location: Silver Spring, MD</span>
        </Row>
        <Row>
          <span class="bio-row">Under Graduate Education: Economics, University of Maryland, College Park</span>
        </Row>
        <Row >
          <span class="bio-row">Bootcamp: Fullstack Web Development, Flatiron School</span>
        </Row>
      </Col>
    </Row>
  </>
);

export default Bio