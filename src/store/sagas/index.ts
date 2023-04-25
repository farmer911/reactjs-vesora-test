import { fork, all } from 'redux-saga/effects';
import profileWatcher from './profile.saga'
import orderWatcher from './orderTab.saga'

/* PLOP IMPORT */

const sagas: any[] = [
  /* PLOP EXPORT */
  profileWatcher,
  orderWatcher
];

export default function* root(): any {
  yield all(sagas.map(fork));
}
