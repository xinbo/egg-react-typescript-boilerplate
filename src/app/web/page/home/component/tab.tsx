import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import Header from '../../../component/header/header';
import './tab.css';

const tabItemClick = (key) => {
  console.log('tab click', key);
};
// https://github.com/gaearon/react-hot-loader/issues/525
// must export, not export default
export class MyTab extends Component {
  render() {
    return <div>
      <Header></Header>
      <div className="tab">
        <h1>{this.props.message.text}</h1>
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
  <Tab eventKey="home" title="Home">
  Content of Tab Pane 1
  </Tab>
  <Tab eventKey="profile" title="Profile">
  Content of Tab Pane 2
  </Tab>
  <Tab eventKey="contact" title="Contact" disabled>
  Content of Tab Pane 3
  </Tab>
</Tabs>
      </div>
    </div>;
  }
}

