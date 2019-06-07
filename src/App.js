import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import Root from './containers/Root'
import {Router} from 'react-router-dom'
import history from './history'
import store from './store'
import {Provider} from 'react-redux'


const App = () => (
    <Provider store={store}>
        <Router history={history}>
            <NavBar/>
            <Root/>
        </Router>
    </Provider>

    
)


export default App;
