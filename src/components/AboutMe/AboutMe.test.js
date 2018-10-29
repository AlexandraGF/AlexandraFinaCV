import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

Enzyme.configure({ adapter: new Adapter() });

import AboutMe from './AboutMe';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AboutMe />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders text', () => {
    const wrapper = mount(<AboutMe />);
    expect(wrapper.text()).toContain("Personal Statement");
});
    
it('renders AboutMe Component', () => {
const tree = renderer.create(
<AboutMe />
).toJSON();

expect(tree).toMatchSnapshot();
})
