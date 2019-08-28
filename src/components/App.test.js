import React from "react";
import { configure } from 'enzyme';
import { shallow } from "enzyme";
import App from "./App";
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('App component', () => {
it("renders correctly", () => {
    const wrapper = shallow(
      <App />
    );
    expect(wrapper).toMatchSnapshot();
  });
});