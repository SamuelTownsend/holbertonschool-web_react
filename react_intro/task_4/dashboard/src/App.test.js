import App from './App';
import { shallow } from 'enzyme';

describe('<App />', () => {
	it('App renders w/o crashing', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.exists()).toBe(true);
	});

	it('App-header renders', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find('.App-header').exists()).toBe(true);
	});

	it('App-body renders', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find('.App-body').exists()).toBe(true);
	});

	it('App-footer renders', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find('.App-footer').exists()).toBe(true);
	});
})
