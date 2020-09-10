// react-test-renderer
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Header from '../../components/Header';

// import ReactShallowRenderer from 'react-test-renderer/shallow';
// test('should render Header correctly', () => {
//   const renderer = new ReactShallowRenderer();
//   renderer.render(<Header />);
//   expect(renderer.getRenderOutput()).toMatchSnapshot();

//   // console.log(renderer.getRenderOutput())
// }) 

test('should render Header correctly', () => {
  const wrapper = shallow(<Header />);
  expect(toJSON(wrapper)).toMatchSnapshot();
  // expect(wrapper.find('h1').text()).toBe('Expensify'); 
  // expect(wrapper.find('h1').length).toBe(1); // if more than 1 h1 test will be fail
}) 


