import React from 'react';
import {shallow} from 'enzyme';
import Merlin from './index';

test('Merlin render initialStep', () => {
  const steps = [
    <div key="1" id="i1">
      item-1
    </div>,
    <div key="2" id="i2">
      item-2
    </div>,
    <div key="3" id="i3">
      item-3
    </div>,
  ];
  const view = shallow(
    <Merlin initialStep={1}>
      {({index, setIndex}) => steps[index]}
    </Merlin>,
  );
  expect(view.find('div#i2')).toHaveLength(1);
});

test('Merlin setIndex change index', () => {
  const steps = [
    <div key="1" id="i1">
      item-1
    </div>,
    <div key="2" id="i2">
      item-2
    </div>,
  ];
  const view = shallow(
    <Merlin initialStep={0}>
      {({index, setIndex}) => (
        <span>
          {steps[index]}
          <br />
          <button onClick={() => setIndex(1)}>next</button>
        </span>
      )}
    </Merlin>,
  );
  expect(view.find('div#i1')).toHaveLength(1);
  expect(view.find('div#i2')).toHaveLength(0);
  view.find('button').simulate('click');
  expect(view.find('div#i1')).toHaveLength(0);
  expect(view.find('div#i2')).toHaveLength(1);
});
