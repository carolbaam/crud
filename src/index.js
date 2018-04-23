import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import Login from './components/login'
import Header from './routes/header'
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
   <BrowserRouter>
       <div>
           <Header />
           <Switch>
               <Route path="/" component={App} exact={true}></Route>
               <Route path="/login" component={Login} exact={true}></Route>
               
           </Switch>
       </div>
      </BrowserRouter>
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();