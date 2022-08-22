// import { indexWatcher } from "./index.saga";
// import { vtminiWatcher } from "./vtmini.saga";
// import { vtpWatcher } from "./vtp.saga";
// import { globalWatcher } from "./global.saga";
// import { newsWatcher } from "./news.saga";
import { all, take, select } from "redux-saga/effects";

//quan sát toàn bộ các action
const watchAndLog = function* () {
  while (true) {
    const action = yield take("*");
    const state = yield select();
  }
};

const rootSaga = function* () {
  yield all([watchAndLog()]);
};

export default rootSaga;