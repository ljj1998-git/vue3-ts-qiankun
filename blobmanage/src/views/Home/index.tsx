import React, { Component } from "react";
import { Button } from 'antd';
 
export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="container">
          <h3 className="center"> Home页面</h3>
          <p>欢迎来到首页</p>
          <Button >123</Button>
        </div>
      </div>
    );
  }
}