import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchLesson, addSession, onDragSession } from '../../store/reducers/lessons';
import HeaderContent from '../../components/organisms/lessons/HeaderContent';
import EventDate from '../../components/organisms/lessons/EventDate';
import SessionContent from '../../components/organisms/lessons/SessionContent';
import Button from '../../components/atoms/Button';
import Box from '../../components/commons/Box';
import { FaPlus } from 'react-icons/fa';
import Spinner from '../../components/commons/Spinner';
import styled from 'styled-components';
import AddSessionForm from '../../components/organisms/lessons/AddSessionForm';
const Home = () => {
  const dispatch = useDispatch()
  const [openAddSession, setOpenAddSession] = useState(false)
  const [sessionName, setSessionName] = useState('')
  const state = useSelector(state => state.lessonReducer)
  const { sessions, isLoading } = state
  const dragItem = useRef();
  const dragOverItem = useRef();
  const sessionObj = {
    sessionId: Math.floor(Math.random() * 100),
    sessionName,
    dateCreated: new Date(),
    lessons: []
  }
  const submitSession = () => {
    dispatch(addSession(sessionObj))
    setOpenAddSession(false)
    setSessionName('')
  }
  const openForm = () => {
    setOpenAddSession(true)
  }
  const closeForm = () => {
    setOpenAddSession(false)
    setSessionName('')
  }
  const dragStart = (_, position) => {
    dragItem.current = position;
  };
  const dragEnter = (_, position) => {
    dragOverItem.current = position;
  };
  const drop = () => {
    const copyListItems = [...sessions];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    dispatch(onDragSession(copyListItems))
  };
  useEffect(() => {
    dispatch(fetchLesson())
  }, [])
  return (
    <>
      {isLoading &&
        <Overlay>
          <Spinner />
        </Overlay>
      }
      <HeaderContent />
      <EventDate />

      {sessions.map((item, idx) => (
        <DragWrapper key={item.id}
          onDragStart={(e) => dragStart(e, idx)}
          onDragEnter={(e) => dragEnter(e, idx)}
          onDragEnd={drop}
          draggable
        >
          <SessionContent data={item} />
        </DragWrapper>
      ))}
      {!openAddSession &&
        <Box clean>
          <Button filled icon={<FaPlus />} handleClick={openForm}>Add Session</Button>
        </Box>
      }
      {openAddSession &&
        <AddSessionForm
          handleChange={(e) => setSessionName(e.target.value)}
          value={sessionName}
          onCancel={closeForm}
          onConfirm={submitSession}
        />
      }
    </>
  )
}

export default Home;


const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding-top: 30vh;
  background: rgba(0, 0, 0, 0.5);
  transition: opacity 200ms;
  height: 100%;
`
const DragWrapper = styled.div`
  width: 85%;
  margin: 0 auto;
  border-radius: .6rem
`