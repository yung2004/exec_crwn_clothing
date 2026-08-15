import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import { store } from './redux/store';

jest.mock('./firebase/firebase.utils', () => ({
  auth: { onAuthStateChanged: jest.fn(() => () => {}) },
  createUserProfileDocument: jest.fn()
}));

it('renders without crashing', () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </Provider>
  );
});
