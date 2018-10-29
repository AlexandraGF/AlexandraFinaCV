import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

Enzyme.configure({ adapter: new Adapter() });

import Experience from './Experience';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Experience />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders text', () => {
    const wrapper = mount(<Experience />);
    expect(wrapper.text()).toContain("Work Experience");
    });
    
    it('renders Experience Component', () => {
    const tree = renderer.create(
    <Experience />
    ).toJSON();
    
    expect(tree).toMatchSnapshot();
    })
