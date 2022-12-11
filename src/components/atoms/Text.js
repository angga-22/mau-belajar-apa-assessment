import styled from 'styled-components'
const Text = ({
  medium,
  large,
  small,
  color,
  children,
  iconPrimary,
  iconSecondary
}) =>
(
  <Wrapper>
    {iconPrimary &&
      <IconPrimary>{iconPrimary}</IconPrimary>
    }
    {
      iconSecondary &&
      <IconSecondary>{iconSecondary}</IconSecondary>
    }
    {medium &&
      <TxtMedium color={color}>{children}</TxtMedium>
    }
    {
      large &&
      <TxtLarge color={color}>{children}</TxtLarge>
    }
    {
      small &&
      <TxtSmall color={color}>{children}</TxtSmall>
    }
  </Wrapper>
)
export default Text
const Wrapper = styled.div`
  display: flex;
  align-items: center;
`
const TxtMedium = styled.span`
  font-size: 16px;
  color: ${props => props.color};
`
const TxtLarge = styled.span`
  font-size: 32px;
  color: ${props => props.color};
`
const TxtSmall = styled.span`
  font-size: 12px;
  color: ${props => props.color};
`
const IconPrimary = styled.i`
  padding-right: 10px;
  font-size: 18px;
  color: gray;
`
const IconSecondary = styled.i`
  padding-right: 10px;
  font-size: 32px;
  margin-bottom: -7px;
  color: gray;
`