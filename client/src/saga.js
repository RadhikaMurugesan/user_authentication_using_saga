import { put, takeLatest, all } from 'redux-saga/effects';

function* getUserLog() {
console.log('click...');

  const json = yield fetch('http://localhost:4000/users')
    .then(response => response.json());
console.log('json', json)

  yield put({ type: "LOADUSER", data: json });
}

function* actionWatcher() {
  yield takeLatest('LOGINUSER', getUserLog)
}


export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}
