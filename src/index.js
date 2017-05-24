import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './component/Counter';
import Todos from './component/Todos';
import { Provider } from 'react-redux'
import store from './store'

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

const App = (
    <Provider store={store}>
        <Router>
            <div>
                <Link to="/">Counter</Link>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/todo">Todo</Link>
                <Route exact path="/" component={Counter} />
                <Route path="/todo" component={Todos} />
            </div>
        </Router>
    </Provider>
)

ReactDOM.render(App, document.getElementById('root'));
