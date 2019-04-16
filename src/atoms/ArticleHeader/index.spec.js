import React from 'react';
import { shallow } from 'enzyme';

import ArticleHeader from '.';

describe('Atoms/ArticleHeader', () => {
  it('should render as expected', () => {
    const wrapper = shallow(<ArticleHeader mode="Edit" type="Text" />);

    expect(wrapper).toMatchSnapshot();
  });
});
