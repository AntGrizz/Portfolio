import React from 'react';
import { Row, Col, Card } from 'antd';
import ReactPlayer from 'react-player/youtube';

const Portfolio = () => (
  <div id="portfolio-div">
    <Row>
      <Col span={2}>
        <div id="portfolio-header">Portfolio </div>
      </Col>
      <Col span={9}>
        <div className="video-header">Moocher</div>
        <ReactPlayer
          width="30em"
          height="50vh"
          url="https://www.youtube.com/embed/BjIjlDA6CDw"
        />
      </Col>
      <Col span={9}>
        <div className="video-header">Elemental Turn-up</div>
        <ReactPlayer
          width="30em"
          height="50vh"
          url="https://www.youtube.com/embed/nypaz_hrySU"
        />
      </Col>
    </Row>
  </div>
);

export default Portfolio;
