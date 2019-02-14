import React, { PureComponent } from 'react';
import {
  Card, Button, Row, Col,
} from 'antd';


class MyModal extends PureComponent {
  constructor(props) {
    super(props);
    const { article } = this.props;

    this.state = {
      title: article.title || '',
      body: article.body || '',
    };
  }

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h3>
          {title}
        </h3>
        <p>
          {body}
        </p>
      </div>
    );
  }
}

export default MyModal;
