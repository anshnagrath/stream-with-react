import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux'; 
import reduxthunk from 'redux-thunk'
import {createStore,applyMiddleware,compose} from 'redux'
import reducers from './reducers'
const composeEnhanser = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose;

ReactDOM.render(<Provider store = {createStore(reducers,composeEnhanser(applyMiddleware(reduxthunk)))}>
                    <App />
                </Provider>, document.getElementById('root'));
                
