import {ButtonContainer} from './styles';

const Button = ({label, onClick}) => {
  return (
    <ButtonContainer label={label} onClick={onClick}>
      {label}
    </ButtonContainer>
  );
}

export default Button;
