import styled from 'styled-components'
const Button = ({
  handleClick,
  children,
  filled,
  outlined,
  icon,
}) =>
(
  <Btn
    filled={filled}
    outlined={outlined}
    onClick={handleClick}
    label={children}
  >
    {icon}
    <Label label={children}>{children}</Label>
  </Btn>
)
export default Button
const Btn = styled.button`
  background-color: ${props => (props.filled && "#7800EF") || (props.outlined && "#fff")};
  color:${props => (props.filled && "#fff") || (props.outlined && "#7800EF")};
  border: 1px solid #7800EF;
  border-radius: .3rem;
  padding: ${props => props.label ? '.8rem 1.2rem' : '8px 10px'};
  width: fit-content;
  display: flex;
  align-items: center;
  cursor: pointer;
`
const Label = styled.span`
  font-size: 16px;
  padding-left: ${props => props.label ? '10px' : '0'}
`



