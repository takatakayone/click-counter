import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });


/**
 * Factory function to create
 * @function setup
 * @param {object} props -component props spe
 * @param {any} state -initial state for setup
 * @returns {ShallowWrapper}
 */

const setUp = (props={}, state=null) => {
    const wrapper = shallow(<App {...props}/>);
    if(state) wrapper.setState(state);
    return wrapper
};

const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`)
};

test('render without error', () => {
    const wrapper = setUp();
    const appComponent = findByTestAttr(wrapper, 'component-app');
    expect(appComponent.length).toBe(1);
});

test('renders increment button', () => {
    const wrapper = setUp();
    const button = findByTestAttr(wrapper, 'increment-button');
    expect(button.length).toBe(1);

});

test('renders counter display', () => {
    const wrapper = setUp();
    const counterDisplay = findByTestAttr(wrapper, 'counter-display');
    expect(counterDisplay.length).toBe(1);

});


test('counter start at 0', () => {
    const wrapper = setUp();
    const initialCounterState = wrapper.state('counter');
    expect(initialCounterState).toBe(0)
});

test('clicking button increments counter display', () => {
    const counter = 7;
    const wrapper = setUp(null, { counter });

    const button = findByTestAttr(wrapper, 'increment-button');
    button.simulate('click');

    // test
    const counterDisplay = findByTestAttr(wrapper, 'counter-display');
    expect(counterDisplay.text()).toContain(counter + 1)
});

test('clicking button decrements counter display', () => {
   const counter = 3;
   const wrapper = setUp(null, {counter});

   const decrementButton = findByTestAttr(wrapper, 'decrement-button');
   decrementButton.simulate('click');

   //test
    const counterDisplay = findByTestAttr(wrapper, 'counter-display');
    expect(counterDisplay.text()).toContain(counter - 1);
});
