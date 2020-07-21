import React, { Component } from 'react'
import { Menu } from 'antd';

class Navbar extends Component {
  render() {
    return (
      <Menu mode="horizontal">
        <Menu.Item>About</Menu.Item>
        <Menu.Item>Portfolio</Menu.Item>
        <Menu.Item>Links</Menu.Item>
        <Menu.Item>Contact</Menu.Item>
      </Menu>
    );
  }
}

export default Navbar
