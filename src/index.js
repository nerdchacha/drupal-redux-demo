import React from 'react';
import ReactDOM from 'react-dom';
import UserList from './components/UserList';
import { Provider } from 'react-redux'
import store from './store'

const App = (
    <Provider store={store}>
        <UserList />
    </Provider>
)

ReactDOM.render(App, document.getElementById('root'));
