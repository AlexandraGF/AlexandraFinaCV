import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

Enzyme.configure({ adapter: new Adapter() });

import Skills from './Skills';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Skills />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders text', () => {
    const wrapper = mount(<Skills />);
    expect(wrapper.text()).toContain("Skills");
    });
    
    it('renders Skills Component', () => {
    const tree = renderer.create(
    <Skills />
    ).toJSON();
    
    expect(tree).toMatchSnapshot();
    })