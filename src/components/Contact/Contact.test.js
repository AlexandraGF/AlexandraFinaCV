import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

Enzyme.configure({ adapter: new Adapter() });

import Contact from './Contact';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Contact />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders text', () => {
    const wrapper = mount(<Contact />);
    expect(wrapper.text()).toContain("Contact Details");
    });
    
    it('renders Contact Component', () => {
    const tree = renderer.create(
    <Contact />
    ).toJSON();
    
    expect(tree).toMatchSnapshot();
    })
    