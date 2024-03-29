import Login from './Login';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { StyleSheetTestUtils } from 'aphrodite';

configure({adapter: new Adapter()});

describe('Login', () => {
	beforeEach(() => {
		StyleSheetTestUtils.suppressStyleInjection();
	});
	afterEach(() => {
		StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
	});
	it('Login renders w/o crashing', () => {
		const wrapper = shallow(<Login />);
		expect(wrapper.exists()).toBe(true);
	});

	it('Header renders 3 input and label', () => {
		const wrapper = shallow(<Login />);
		expect(wrapper.find('input').length).toBe(3);
		expect(wrapper.find('label').length).toBe(2);
	});
});
