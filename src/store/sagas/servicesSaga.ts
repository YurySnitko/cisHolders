import { all, takeLatest, call, put } from '@redux-saga/core/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import {
  addNewServiceFailed,
  addNewServiceSuccess,
  getServicesFailed,
  getServicesSuccess,
  Service,
} from 'store/reducers/ServicesSlice';

const services = [
  {
    dateAdded: '20.12.1111',
    title: 'porshe',
    description: 'rl,emm  kmkmkm ',
    location: 'egrge',
    attachment: null,
    serviceType: 'auto',
  },
  {
    dateAdded: '20.12.1111',
    title: 'audi',
    description: 'rl,emm  kmkmkm ',
    location: 'egrge',
    attachment: null,
    serviceType: 'auto',
  },
  {
    dateAdded: '20.12.1111',
    title: 'tesla',
    description: 'rl,emm  kmkmkm ',
    location: 'egrge',
    attachment: null,
    serviceType: 'auto',
  },
  {
    dateAdded: '20.12.1111',
    title: 'starbucks',
    description: 'rl,emm  kmkmkm ',
    location: 'egrge',
    attachment: null,
    serviceType: 'cafe',
  },
  {
    dateAdded: '20.12.1111',
    title: 'MCDonalds',
    description: 'rl,emm  kmkmkm ',
    location: 'egrge',
    attachment: null,
    serviceType: 'cafe',
  },
  {
    dateAdded: '20.12.1111',
    title: 'school 4',
    description: 'rl,emm  kmkmkm ',
    location: 'egrge',
    attachment: null,
    serviceType: 'study',
  },
  {
    dateAdded: '20.12.1111',
    title: 'school 6',
    description: 'rl,emm  kmkmkm ',
    location: 'egrge',
    attachment: null,
    serviceType: 'study',
  },
];

function* getServicesWorker() {
  try {
    const data: Service[] = yield call(() => {
      return Promise.resolve(services);
    });
    yield put(getServicesSuccess(data));
  } catch (e) {
    yield put(getServicesFailed(e));
  }
}

function* addNewServiceWorker(action: PayloadAction<Service>) {
  try {
    console.log(action.payload);

    yield call(() => {
      return Promise.resolve();
    });
    yield put(addNewServiceSuccess());
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
