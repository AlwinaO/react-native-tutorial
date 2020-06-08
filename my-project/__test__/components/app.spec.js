import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import App from '../../App';
import { TouchableWithoutFeedback } from 'react-native';

describe('App', () => {
  it('has 1 child', () => {
    const wrapper = shallow(<App />)
    expect(tree.children.length).toBe(1);
  });
});