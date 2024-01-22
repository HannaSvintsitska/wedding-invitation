import React, { FC, RefObject } from 'react';
import {
  ColorContainer,
  ColorsCircle,
  Container,
  ContentContainer,
  CardContainer,
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
        <CardContainer>
          <ContentContainer>
            <StyledText>Кольори весілля</StyledText>
            <StyledTextInfo>
              На весіллі буде кольорова гамма, тому просимо вас обирати свої наряди
              в цих відтінках
            </StyledTextInfo>
            <ColorContainer>
              {COLORS.map((el, index) => (
                  <ColorsCircle color={el} key={index} />
              ))}
            </ColorContainer>
          </ContentContainer>
        </CardContainer>
    </Container>
  );
};

export default Colors;
