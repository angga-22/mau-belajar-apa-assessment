import Modal from '../../../molecules/Modal'
import Button from '../../../atoms/Button'
import styled from 'styled-components'
import FormField from '../../../atoms/FormField'
const SessionNameForm = ({
  onCancel,
  onConfirm,
  value,
  handleChange
}) =>
(
  <Modal>
    <FormField
      htmlFor="sessionName"
      label="Change Session Name"
      type="text"
      name="sessionName"
      id="sessionName"
      placeholder="Session Name"
      value={value}
      handleChange={handleChange}
    />
    <BtnWrapper>
      <Button outlined handleClick={onCancel}>Cancel</Button>
      <Button filled handleClick={onConfirm}>Confirm</Button>
    </BtnWrapper>
  </Modal>
)


export default SessionNameForm

const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 300px;
  margin: 2rem 0 0 0;
  
`

