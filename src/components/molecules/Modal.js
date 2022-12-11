import styled from 'styled-components'

const Modal = ({
  children
}) =>
(
  <>
    <Overlay>
      {children}
    </Overlay>
  </>
)

export default Modal

const Overlay = styled.div`
  border-radius: 1rem;
  padding: 2rem;
  position: absolute;
  z-index: 99;
  background: #fff;
  transition: all ease 3s;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`