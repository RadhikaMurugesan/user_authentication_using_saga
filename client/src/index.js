import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootSaga from './sagas/Saga';
import reducer from './reducers/Reducers';
import Route from './routes/Route';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware),
  );
  
  sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <Route />
    </Provider>,
 document.getElementById('root'));


