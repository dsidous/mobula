import React from 'react';
import { shallow } from 'enzyme';

import ProductCard from '.';

describe('Atoms/ProductCard', () => {
  it('should render as expected', () => {
    const wrapper = shallow(<ProductCard pid={167687} />);

    expect(wrapper).toMatchSnapshot();
  });
});
