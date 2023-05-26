import React from 'react';
import NotificationItem from './Notifications';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { StyleSheetTestUtils } from 'aphrodite';

configure({adapter: new Adapter()});

describe('NotificationItem', () => {
	beforeEach(() => {
		StyleSheetTestUtils.suppressStyleInjection();
	});
	afterEach(() => {
		StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
	});
	it('NotificationItem renders w/o crashing', () => {
		const wrapper = shallow(<NotificationItem />);
		expect(wrapper.exists()).toBe(true);
	});

	it('NotificationItem renders with "default" & "test" props', () => {
		const wrapper = shallow(<NotificationItem type="default" value="test" />);
		expect(wrapper.props().dataPriority === 'default');
		expect(wrapper.props().dataValue === 'test');
	});

	it('NotificationItem renders with "urgent" & "html" props', () => {
		const wrapper = shallow(
			<NotificationItem type="urgent" html="{{ __html: '<u>test</u>' }}" />);
		expect(wrapper.props().dataPriority === 'urgent');
		expect(wrapper.props().html === '<u>test</u>');
		expect(wrapper.props().value === 'test');
	})
})
