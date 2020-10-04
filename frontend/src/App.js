import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import store from './redux/store';

const App = () => (
    <Provider store={store}>
        <div className="app">Redux set up successfully.</div>
    </Provider>
);

export default App;
