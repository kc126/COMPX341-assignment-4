// Name: Kyle Cree
// Id: 1505970
import React from 'react';
import PastPurchases from '../modules/pastPurchases/PastPurchases'
import bestSellers from "../images/bestSellers.png";
import yourshoppingcart from "../images/yourshoppingcart.png";
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()})
window.alert = jest.fn();

it("Past Purchases renders without crashing", () => {
  shallow(<PastPurchases />)
})

it("Past Purchase has title", () => {
  const wrapper = shallow(<PastPurchases />);
  const pastPurchaseTitle = <h3>Past purchases</h3>;
  expect(wrapper.contains(pastPurchaseTitle)).toEqual(true);
})

it("Past Purchases best sellers link", () => {
  const wrapper = shallow(<PastPurchases />)
  const bestSellersLink = <a href="/best"><img src={bestSellers} alt="Best sellers" className="checkout-img no-padding" /></a>
  expect(wrapper.contains(bestSellersLink)).toEqual(true)
})

it("Past Purchases best your shopping cart link", () => {
  const wrapper = shallow(<PastPurchases />)
  const yourShoppingCartLink = <a href="/cart"><img src={yourshoppingcart} alt="Shopping cart" className="checkout-img no-padding" /></a>
  expect(wrapper.contains(yourShoppingCartLink)).toEqual(true)
})
