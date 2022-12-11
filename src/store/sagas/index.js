import { all } from 'redux-saga/effects'
import lessonsAction from './lessons'

export default function* saga() {
  yield all([lessonsAction()])
}