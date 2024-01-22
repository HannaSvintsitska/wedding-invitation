import { RefObject, FC } from 'react';
import {
    ContainerMain,
    ImageBackgroung,
    MainText,
    NamesText,
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
        <NamesText>Антон і Аня</NamesText>
        <MainText>
          4-го травня 2024 р., 13:00 | Кожумʼяцька 16В
        </MainText>
      </TextContainer>
    </ContainerMain>
  );
};

export default Main;
