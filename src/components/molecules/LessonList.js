import { FaClock, FaDownload, FaEllipsisV, FaVideo } from 'react-icons/fa'
import Text from '../atoms/Text'
import styled from 'styled-components'
import { RxDragHandleDots2 } from 'react-icons/rx'

const LessonList = ({ data }) => {
  const { title, dateCreated, isDownloadable, duration } = data
  const getHours = (date) => {
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const parseHour = hours < 10 ? `0${hours}` : hours;
    const parseMinute = minutes < 10 ? `0${minutes}` : minutes;
    return `${parseHour}: ${parseMinute}`
  }
  return (
    <>
      <Container>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <RxDragHandleDots2 style={{ fontSize: '32px', color: 'gray' }} />
          <Text small iconSecondary={<FaVideo />}>{title}</Text>
        </div>
        <Wrapper>
          <Text small iconPrimary={<FaClock />}>{dateCreated.toISOString().slice(0, 10) + ', ' + getHours(dateCreated)}</Text>
          <Text small iconPrimary={<FaClock />}>{duration}</Text>
          {isDownloadable &&
            <Text small iconPrimary={<FaDownload />}>Downloadable</Text>
          }
          {!isDownloadable &&
            <Text small iconPrimary={<FaDownload />}>No Download</Text>
          }
          <Icon>
            <FaEllipsisV />
          </Icon>
        </Wrapper >
      </Container >
    </>
  )
}

export default LessonList;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgb(237, 246, 245);
  padding: 1rem;
  border-radius: .2rem;
  margin-bottom: 1rem;
  overflow: auto;
  white-space: nowrap;
`
const Wrapper = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: 50%;
`
const Icon = styled.span`
  cursor: pointer;
  color: gray;
`