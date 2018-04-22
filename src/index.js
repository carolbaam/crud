import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
//redux
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';
//create redux store-->//reducers-->//actions-actionType-->applymIDDLEWARE

const store= createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));

//provide the stor to react




ReactDOM.render(
   <Provider store={store}>
      <App />
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();