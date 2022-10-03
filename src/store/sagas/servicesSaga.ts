import { getServices } from './../../api/getServices';
import { all, takeLatest, call, put } from '@redux-saga/core/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { addService } from '../../api/addService';
import {
  addNewServiceFailed,
  addNewServiceSuccess,
  getServicesFailed,
  getServicesSuccess,
  Service,
} from 'store/reducers/ServicesSlice';
import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';

function* getServicesWorker() {
  try {
    const data: Service[] = yield call(() => getServices());
    yield put(getServicesSuccess(data));
  } catch (e) {
    yield put(getServicesFailed(e));
  }
}

function* addNewServiceWorker(action: PayloadAction<Service>) {
  try {
    const data: FirebaseFirestoreTypes.DocumentReference<FirebaseFirestoreTypes.DocumentData> =
      yield call(() => addService(action.payload));
    yield put(addNewServiceSuccess({ ...action.payload, id: data.id }));
  } catch (e) {
    yield put(addNewServiceFailed(e));
  }
}

export function* getServicesWatcher() {
  yield all([
    takeLatest('services/getServicesStarted', getServicesWorker),
    takeLatest('services/addNewServiceStarted', addNewServiceWorker),
  ]);
}
