// Name: Kyle Cree
// Id: 1505970
import React from 'react';
import BestSeller from '../modules/bestSellers/BestSellers'
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()})
window.alert = jest.fn();

it('BestSeller correct heading', () => {
  const wrapper = shallow(<BestSeller />);
  const heading = <h3>Top 20 best sellers</h3>;
  expect(wrapper.contains(heading)).toEqual(true);
});
