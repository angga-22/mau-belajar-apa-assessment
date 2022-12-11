import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import saga from './sagas/index'
import lessonReducer from './reducers/lessons'
const store = () => {
  const sagaMiddleware = createSagaMiddleware();
  const setupStore = configureStore({
    reducer: {
      lessonReducer
    },
    middleware: (getDefaultMiddleware) => [
      ...getDefaultMiddleware({
        serializableCheck: false
      }),
      sagaMiddleware
    ]
  })
  sagaMiddleware.run(saga)
  return setupStore
}

export default store