import { useState, useRef } from 'react'
import LessonList from '../../molecules/LessonList'
import Box from '../../commons/Box'
import Text from '../../atoms/Text'
import { FaEllipsisH, FaPencilAlt, FaPlus } from 'react-icons/fa'
import { RxDragHandleDots2 } from 'react-icons/rx'
import styled from 'styled-components'
import Button from '../../atoms/Button'
import { useDispatch } from 'react-redux'
import { changeSessionName, addLesson, onDragLesson, removeSession } from '../../../store/reducers/lessons'
import SessionNameForm from './modals/SessionNameForm'
import AddLessonForm from './AddLessonForm'
import RemoveSessionForm from './modals/RemoveSessionForm'

const SessionContent = ({ data }) => {
  const [openModal, setOpenModal] = useState(false)
  const [openLessonForm, setOpenLessonForm] = useState(false)
  const [openRemoveSession, setOpenRemoveSession] = useState(false)
  const [sessionName, setSessionName] = useState('')
  const [lessonName, setLessonName] = useState('')
  const [checked, setChecked] = useState(false)
  const dispatch = useDispatch()
  const dragItem = useRef();
  const dragOverItem = useRef();
  const { sessionId } = data
  const handleChangeName = () => {
    dispatch(changeSessionName({ sessionId, name: sessionName }))
    setOpenModal(false)
  }
  const handleOpen = () => {
    setSessionName('')
    setOpenModal(true)
  }
  const handleCancel = () => {
    setOpenModal(false)
  }
  const handleOpenLessonForm = () => {
    setLessonName('')
    setOpenLessonForm(true)
  }
  const handleCancelLessonForm = () => {
    setOpenLessonForm(false)
  }
  const lessonObj = {
    lessonId: Math.floor(Math.random() * 100),
    title: lessonName,
    isRequired: true,
    isPreviewAble: false,
    dateCreated: new Date(),
    duration: '10:00 Min',
    isDownloadable: checked
  }
  const submitLesson = () => {
    dispatch(addLesson({ sessionId, lessonObj }))
    setOpenLessonForm(false)
  }
  const dragStart = (_, position) => {
    dragItem.current = position;
  };
  const dragEnter = (_, position) => {
    dragOverItem.current = position;
  };
  const drop = () => {
    const copyListItems = [...data.lessons];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    dispatch(onDragLesson({ sessionId, lessons: copyListItems }))
  }

  return (
    <Box>
      {openModal &&
        <SessionNameForm
          onCancel={handleCancel}
          onConfirm={handleChangeName}
          handleChange={(e) => setSessionName(e.target.value)}
          value={sessionName}
        />
      }
      {openRemoveSession &&
        <RemoveSessionForm
          onCancel={() => setOpenRemoveSession(false)}
          onConfirm={() => {
            dispatch(removeSession(sessionId))
            setOpenRemoveSession(false)
          }}
        />
      }
      <Wrapper>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <RxDragHandleDots2 style={{ fontSize: '32px' }} />
          <Text large>{data.sessionName}</Text>
          <Icon onClick={handleOpen}>
            <FaPencilAlt />
          </Icon>
        </div>
        <Icon onClick={() => setOpenRemoveSession(true)}>
          <FaEllipsisH />
        </Icon>
      </Wrapper>
      {data.lessons.length > 0 ?
        data.lessons.map((item, idx) =>
        (
          <div key={item.id}
            onDragStart={(e) => dragStart(e, idx)}
            onDragEnter={(e) => dragEnter(e, idx)}
            onDragEnd={drop}
            draggable
          >
            <LessonList data={item} />
          </div>
        )
        )
        :
        <SessionEmpty>
          <img style={{ margin: '1rem 0' }} src={require('../../../assets/images/empty-box.png')} alt="empty-lesson" />
          <Text medium>Lesson is still empty, please add lesson first!</Text>
        </SessionEmpty>
      }
      {!openLessonForm &&
        <Button filled icon={<FaPlus />} handleClick={handleOpenLessonForm} />
      }
      {openLessonForm &&
        <AddLessonForm
          value={lessonName}
          handleChange={(e) => setLessonName(e.target.value)}
          onCancel={handleCancelLessonForm}
          onConfirm={submitLesson}
          isDownloadChange={() => setChecked(!checked)}
        />
      }
    </Box>
  )
}

export default SessionContent

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`
const Icon = styled.span`
  padding-left: 1rem;
  cursor: pointer;
`
const SessionEmpty = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: fit-content;
  margin: 2rem auto;
`
