import { all, fork } from '@redux-saga/core/effects';
import { getServicesWatcher } from './servicesSaga';

export function* rootSaga() {
  yield all([fork(getServicesWatcher)]);
}
