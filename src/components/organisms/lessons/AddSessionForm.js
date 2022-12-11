import Text from '../../atoms/Text'
import Button from '../../atoms/Button'
import Box from '../../commons/Box'
import FormField from '../../atoms/FormField'
import styled from 'styled-components'
const AddSessionForm = ({
  onCancel,
  onConfirm,
  handleChange,
  value
}) =>
(
  <Container>
    <Box>
      <Text large>Add New Session Here!</Text>
      <FormField
        htmlFor="sessionName"
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
    </Box>
  </Container>

)


export default AddSessionForm

const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 300px;
  margin: 2rem 0 0 0;
`
const Container = styled.div`
  width: 85%;
  margin: 0 auto;
  border-radius: .6rem
`

