import styled from 'styled-components'
const Box = ({ children, clean }) => <Scoped clean={clean}>{children}</Scoped>
export default Box
const Scoped = styled.div`
  width: ${props => !props.clean ? 'auto' : '85%'};
  margin: 2rem auto;
  border: ${props => props.clean ? '' : '2px solid rgb(229, 229, 229)'};
  border-radius: .6rem;
  padding: ${props => props.clean ? '0' : '2rem 3rem'};
  background: ${props => props.clean ? '' : '#fff'};
  display: ${props => props.clean && 'flex'};
  justify-content: ${props => props.clean && 'center'};
`