import React, { PureComponent } from 'react';
import { Input } from 'antd';

class TextModal extends PureComponent {
  render() {
    const { article: { title, body }, handleChange } = this.props;
    const { TextArea } = Input;
    return (
      <div>
        <Input size="large" value={title} id="title" onChange={handleChange} />
        <TextArea value={body} id="body" onChange={handleChange} autosize={{ minRows: 4, maxRows: 6 }} />
      </div>
    );
  }
}

export default TextModal;
