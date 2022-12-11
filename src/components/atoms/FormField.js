import styled from 'styled-components';

const FormField = ({
  label,
  type,
  name,
  id,
  value,
  handleChange,
  htmlFor,
  ...props
}) =>
(
  <>
    <BoxField>
      <Label htmlFor={htmlFor}>{label}</Label>
      <Input
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={handleChange}
        {...props}
      />
    </BoxField>
  </>
);

export default FormField;

const BoxField = styled.div`
  display: flex;
  flex-direction: column;
`
const Label = styled.label`
  font-size: 24px;
  padding-bottom: .5rem;
  margin-top: 1rem;
`
const Input = styled.input`
position: relative
  margin-bottom: 1rem;
  padding: .5rem 1rem;
  border-radius: .5rem;
  border: 1px solid gray;
  height: 33px;
`



