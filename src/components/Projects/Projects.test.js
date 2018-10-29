import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

Enzyme.configure({ adapter: new Adapter() });

import Projects from './Projects';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Projects />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders text', () => {
    const wrapper = mount(<Projects />);
    expect(wrapper.text()).toContain("Personal Projects");
    });
    
    it('renders Projects Component', () => {
    const tree = renderer.create(
    <Projects />
    ).toJSON();
    
    expect(tree).toMatchSnapshot();
    })
