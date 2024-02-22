import { RefObject, FC } from 'react';
import {
  Container,
  ImageBranches,
  StyledContainerPaper,
  StyledTextHistory,
  TextContainer,
} from './styles';

import { useParams } from 'react-router';

interface MainProps {
  innerRef: RefObject<HTMLDivElement>;
}

const History: FC<MainProps> = ({ innerRef }) => {
  const { id = '' } = useParams();

  return (
    <Container id="history" ref={innerRef}>
      <ImageBranches />
      <StyledContainerPaper>
        <TextContainer>
          <StyledTextHistory>
            Ми з Антоном створюємо сімʼю (:
            <br />І тому ми запрошуємо вас розділити цей визначний та
            по-спражньому особливий для нас день.
          </StyledTextHistory>
        </TextContainer>
      </StyledContainerPaper>
    </Container>
  );
};

export default History;
