import { RefObject, FC } from 'react';
import {
  ContainerMain,
  ImageBackgroung,
  StyledText,
  TextContainer,
} from './styles';

interface MainProps {
  innerRef: RefObject<HTMLDivElement>;
}

const Main: FC<MainProps> = ({ innerRef }) => {
  return (
    <ContainerMain id="main" ref={innerRef}>
      <ImageBackgroung />
      <TextContainer>
        <StyledText variant="h1">Антон і Аня</StyledText>
        <StyledText variant="h4">
          4-го травня 2024 р., 13:00 | Кожумʼяцька 16В
        </StyledText>
      </TextContainer>
    </ContainerMain>
  );
};

export default Main;
