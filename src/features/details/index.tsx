import React, { FC, RefObject } from 'react';
import {
  Container,
  ContainerAllText,
  ContainerDetails,
  ContainerText,
  ContainerWhenWhere,
  Image,
  StyledAccessTimeIcon,
  StyledPlaceOutlinedIcon,
  StyledText,
  StyledTextSmaller,
} from './styles';
import smallBranch from '../../img/small-branch.png';

interface MainProps {
  innerRef: RefObject<HTMLDivElement>;
}

const Details: FC<MainProps> = ({ innerRef }) => {
  return (
    <Container id="details" ref={innerRef}>
      <ContainerAllText>
        <ContainerText>
          <StyledText>Деталі</StyledText>
          <ContainerDetails>
            <ContainerWhenWhere>
              <StyledAccessTimeIcon/>
              <StyledTextSmaller>Коли?</StyledTextSmaller>
              <StyledTextSmaller>4-го травня</StyledTextSmaller>
              <StyledTextSmaller>13:00</StyledTextSmaller>
            </ContainerWhenWhere>
            <Image src={smallBranch} alt="" />
            <ContainerWhenWhere>
              <StyledPlaceOutlinedIcon/>
              <StyledTextSmaller>Де?</StyledTextSmaller>
              <StyledTextSmaller>Кожумʼяцька 16В</StyledTextSmaller>
              <StyledTextSmaller>Prosto ЗАГС</StyledTextSmaller>
            </ContainerWhenWhere>
          </ContainerDetails>
        </ContainerText>
      </ContainerAllText>
    </Container>
  );
};

export default Details;
