import Header from './Header';
import { shallow } from 'enzyme';
import React from 'react';

describe('<Header />', () => {
  it('Tests that Header renders without crashing', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toBe(true);
  });
});
