import App from './App';
import { shallow } from 'enzyme';
import React from 'react';

describe('<App />', () => {
  it('Tests that App renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  it('Tests that App renders a div with class App-header', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-header').exists()).toBe(true);
  });

  it('Tests that App renders a div with class App-body', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-body').exists()).toBe(true);
  });

  it('Tests that App renders a div with class App-footer', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-footer').exists()).toBe(true);
  });
});
