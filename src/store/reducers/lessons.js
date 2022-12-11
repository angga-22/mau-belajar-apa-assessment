import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  isLoading: false,
  sessions: []
}
export const lessonSlice = createSlice({
  name: 'lessons',
  initialState,
  reducers: {
    fetchLesson: (state) => {
      state.isLoading = true
    },
    fetchLessonSuccess: (state, { payload }) => {
      state.isLoading = false
      state.sessions = payload
    },
    fetchLessonFailed: (state) => {
      state.isLoading = false
    },
    addSession: (state, { payload }) => {
      state.sessions.push(payload)
    },
    removeSession: (state, { payload }) => {
      state.sessions = state.sessions.filter(item => item.sessionId !== payload)
    },
    changeSessionName: (state, { payload }) => {
      const findSession = state.sessions.findIndex(item => item.sessionId === payload.sessionId)
      if (findSession !== -1) state.sessions[findSession].sessionName = payload.name
    },
    addLesson: (state, { payload }) => {
      const findSession = state.sessions.findIndex(item => item.sessionId === payload.sessionId)
      state.sessions[findSession].lessons.push(payload.lessonObj)
    },
    removeLesson: (state, { payload }) => {
      const findSession = state.sessions.findIndex(item => item.sessionId === payload.sessionId)
      const findLesson = state.sessions[findSession].lessons.findIndex(item => item.lessonId === payload.lessonId)
      if (findLesson !== -1) state.sessions[findSession].lessons.splice(findLesson, 1)
    },
    onDragSession: (state, { payload }) => {
      state.sessions = payload
    },
    onDragLesson: (state, { payload }) => {
      const findSession = state.sessions.findIndex(item => item.sessionId === payload.sessionId)
      state.sessions[findSession].lessons = payload.lessons
    },
  }
})
export const {
  fetchLesson,
  fetchLessonSuccess,
  fetchLessonFailed,
  addLesson,
  removeLesson,
  addSession,
  removeSession,
  changeSessionName,
  onDragSession,
  onDragLesson
} = lessonSlice.actions;

export default lessonSlice.reducer;
