import Box from '../../commons/Box'
import styled from 'styled-components'
import { memo } from 'react'
const EventDate = () =>
(
  <Container>
    <Box>Event Schedule: 24 Oktober 2021, 16:30</Box>
  </Container>
)


export default memo(EventDate);

const Container = styled.div`
  width: 85%;
  margin: 0 auto;
  border-radius: .6rem
`