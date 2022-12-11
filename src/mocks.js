export const data = [
  {
    sessionId: Math.floor(Math.random() * 100),
    sessionName: 'Session 1',
    dateCreated: new Date(),
    lessons: [
      {
        lessonId: Math.floor(Math.random() * 100),
        title: 'title video',
        isRequired: true,
        isPreviewAble: false,
        dateCreated: new Date(),
        duration: '10:00 Min',
        isDownloadable: true,
      },
      {
        lessonId: Math.floor(Math.random() * 100),
        title: 'title video 2',
        isRequired: true,
        isPreviewAble: false,
        dateCreated: new Date(),
        duration: '10:00 Min',
        isDownloadable: true
      }
    ]
  },
  {
    sessionId: 2,
    sessionName: 'Session 2',
    dateCreated: new Date(),
    lessons: []
  }
]