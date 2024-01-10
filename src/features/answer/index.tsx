import { FC, RefObject } from 'react';
import {
  ButtonsContainer,
  Container,
  StyledButton,
  StyledText,
} from './styles';

interface MainProps {
  innerRef: RefObject<HTMLDivElement>;
}

const Answer: FC<MainProps> = ({ innerRef }) => {
  return (
    <Container id="answer" ref={innerRef}>
      <StyledText>Що скажете, ви з нами?</StyledText>
      <ButtonsContainer>
        <a href="https://t.me/+-f-fdFbL4XNhNGZi">
          <StyledButton>Так</StyledButton>
        </a>
      </ButtonsContainer>
      <StyledText>З нетерпінням чекаємо на вашу відповідь</StyledText>
    </Container>
  );
};

export default Answer;
