import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

Enzyme.configure({ adapter: new Adapter() });

import Title from './Title';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Title />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders text', () => {
    const wrapper = mount(<Title />);
    expect(wrapper.text()).toContain("Alexandra");
    });
    
    it('renders Title Component', () => {
    const tree = renderer.create(
    <Title />
    ).toJSON();
    
    expect(tree).toMatchSnapshot();
    })
