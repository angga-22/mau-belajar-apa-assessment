import { FaArrowLeft } from 'react-icons/fa'
import styled from 'styled-components'
import Text from '../atoms/Text'
import { memo } from 'react'
const Nav = () =>
(
  <Container>
    <Icon>
      <FaArrowLeft />
    </Icon>
    <Text medium>Event</Text>
  </Container>
)

export default memo(Nav);

const Container = styled.nav`
  padding: 2rem 5rem;
  background: #fff;
  margin-bottom: 2rem;
  display: flex;
  position: fixed;
  width: 100%;
  top: 0;
`
const Icon = styled.span`
  padding-right: 1rem
`