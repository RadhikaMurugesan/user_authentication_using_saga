import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootSaga from './saga';
import reducer from './reducers/Reducers';
import RouteNav from './route/RouteNav';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware),
  );
  
  sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <RouteNav />
    </Provider>,
 document.getElementById('root'));


