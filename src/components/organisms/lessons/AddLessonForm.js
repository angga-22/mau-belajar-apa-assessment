import Button from '../../atoms/Button'
import Text from '../../atoms/Text'
import FormField from '../../atoms/FormField'
import styled from 'styled-components'
const AddLessonForm = ({
  onCancel,
  onConfirm,
  value,
  handleChange,
  isDownloadChange
}) =>
(
  <div>
    <Text medium>Add Lessons Here!</Text>
    <FormField
      htmlFor="lessonTitle"
      type="text"
      name="lessonTitle"
      id="lessonTitle"
      placeholder="Lesson Title"
      value={value}
      handleChange={handleChange}
    />
    <FormField
      htmlFor="lessonDate"
      type="text"
      name="lessonDate"
      id="lessonDate"
      placeholder="Date Create"
      value="12/12/2022 {dummy date}"
    />
    <FormField
      htmlFor="lessonHours"
      type="text"
      name="lessonHours"
      id="lessonHours"
      placeholder="Date Create"
      value="12:59 {dummy o'clock}"
    />
    <div style={{ marginTop: '1rem', display: 'flex' }}>
      <Text medium>Downloadable</Text>
      <input type="checkbox" onChange={isDownloadChange} />
    </div>
    <BtnWrapper>
      <Button outlined handleClick={onCancel}>Cancel</Button>
      <Button filled handleClick={onConfirm}>Confirm</Button>
    </BtnWrapper>

  </div>
)


export default AddLessonForm
const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 300px;
  margin: 2rem 0 0 0;
  
`

