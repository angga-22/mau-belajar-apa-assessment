import Modal from '../../../molecules/Modal'
import Button from '../../../atoms/Button'
import Text from '../../../atoms/Text'
import styled from 'styled-components'
const RemoveSessionForm = ({
  onCancel,
  onConfirm,
}) =>
(
  <Modal>
    <Text medium>Are you sure want to remove this session?</Text>
    <BtnWrapper>
      <Button outlined handleClick={onCancel}>Cancel</Button>
      <Button filled handleClick={onConfirm}>Confirm</Button>
    </BtnWrapper>
  </Modal>
)

export default RemoveSessionForm

const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 300px;
  margin: 2rem 0 0 0;
  
`

