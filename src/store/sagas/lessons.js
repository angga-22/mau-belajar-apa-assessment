import { put, takeEvery, call } from 'redux-saga/effects'
import { fetchLessonSuccess } from '../reducers/lessons';
import { data } from '../../mocks'
function* fetchLessons() {
  const sleep = 1000;
  const getData = new Promise((resolve, _) => {
    setTimeout(() => {
      resolve(data)
    }, sleep);
  })
  const result = yield call(() => getData)
  yield put(fetchLessonSuccess(result))
}

function* lessonsAction() {
  yield takeEvery("lessons/fetchLesson", fetchLessons);
}

export default lessonsAction;