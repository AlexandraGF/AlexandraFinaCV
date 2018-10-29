import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

Enzyme.configure({ adapter: new Adapter() });

import FullTimeStudies from './FullTimeStudies';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FullTimeStudies />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders text', () => {
    const wrapper = mount(<FullTimeStudies />);
    expect(wrapper.text()).toContain("Full Time Studies");
    });
    
    it('renders FullTimeStudies Component', () => {
    const tree = renderer.create(
    <FullTimeStudies />
    ).toJSON();
    
    expect(tree).toMatchSnapshot();
    })
