/* eslint-disable no-unused-expressions */
import React from 'react';
import Stream from './index';
import { shallow } from 'enzyme';
import { describe, it } from 'mocha';
import { expect } from 'chai';

describe('Stream', () => {

  it('should have an image to display user', () => {
    const wrapper = shallow(<Stream />);
    expect(wrapper.find('img')).to.have.length(1);
  });

  it('should have empty text placeholders', () => {
    const wrapper = shallow(<Stream />);
    expect(wrapper.find('.text')).to.have.length(1);
  });

});
