import styled from 'styled-components'
import Text from '../../atoms/Text'
import Button from '../../atoms/Button'
import { FaEye } from 'react-icons/fa'
import { memo } from 'react'
const HeaderContent = () =>
(
  <Container>
    <div>
      <Text large>Belajar dan prakter cinematic videography</Text>
      <Text small>Last edited 18 October 2021 | 14.00</Text>
    </div>
    <Button outlined icon={<FaEye />}>Preview</Button>
  </Container>
)


export default memo(HeaderContent);

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background: #fff;
  width: auto;
  padding: 2rem 4rem;
  margin-top: 7rem;
`