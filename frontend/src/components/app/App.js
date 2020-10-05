import React from 'react';
import { Provider } from 'react-redux';
import './App.scss';
import Header from '../header/header';
import store from '../../redux/store';

const App = () => (
    <Provider store={store}>
        <Header></Header>
        <div className="app">Redux set up successfully.</div>
    </Provider>
);

export default App;
