import React, { FC, RefObject } from 'react';
import {
  ColorContainer,
  ColorsCircle,
  Container,
  ContentContainer,
  ImageBackgroung,
  StyledText,
  StyledTextInfo,
} from './styles';
import { COLORS } from 'features/utils';

interface MainProps {
  innerRef: RefObject<HTMLDivElement>;
}

const Colors: FC<MainProps> = ({ innerRef }) => {
  return (
    <Container id="colors" ref={innerRef}>
      <ImageBackgroung />
      <ContentContainer>
        <StyledText>Кольори весілля</StyledText>
        <StyledTextInfo>
          Також хочемо повідомити, що на весіллі буде кольорова гамма, тому
          просимо вас обирати свої наряди в цих відтінках
        </StyledTextInfo>
        <ColorContainer>
          {COLORS.map((el, index) => (
            <ColorsCircle color={el} key={index} />
          ))}
        </ColorContainer>
      </ContentContainer>
    </Container>
  );
};

export default Colors;
