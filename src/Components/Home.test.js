import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../Redux/store';
import Header from './Header';
import Home from './Home';

describe('Render components', () => {
  test('render Header', () => {
    const tree = renderer
      .create(<Router><Provider store={store}><Header /></Provider></Router>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('render Home', () => {
    const tree = renderer
      .create(<Router><Provider store={store}><Home /></Provider></Router>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
