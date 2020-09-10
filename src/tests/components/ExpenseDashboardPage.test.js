import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import toJSON from 'enzyme-to-json';
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage';

test('should render NotFoundPage correctly', () => {
  const wrapper = shallow(<ExpenseDashboardPage />);
  expect(toJSON(wrapper)).toMatchSnapshot();
}) 
