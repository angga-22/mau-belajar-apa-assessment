import Nav from '../components/commons/Nav'
import styled from 'styled-components'
const Layout = ({ children }) =>
(
  <Container>
    <Nav />
    {children}
  </Container>
)

export default Layout

const Container = styled.div`
  overflow: auto;
`