import React, { FC, RefObject } from 'react';
import {
  Container,
  ContainerContent,
  ImageBackgroung,
  StyledTextInfo,
  StyledTextTitle,
} from './styles';

interface MainProps {
  innerRef: RefObject<HTMLDivElement>;
}

const Presents: FC<MainProps> = ({ innerRef }) => {
  return (
    <Container id="presents" ref={innerRef}>
      <ImageBackgroung />
      <ContainerContent>
        <StyledTextTitle>Подарунки</StyledTextTitle>
        <StyledTextInfo>
          Найкращий подарунок - гроші<br></br>Проте якщо у вас є краща ідея -
          будемо раді отримати і щось інше.
        </StyledTextInfo>
      </ContainerContent>
    </Container>
  );
};

export default Presents;
