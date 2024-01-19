import { FC, RefObject } from 'react';
import {
  Container,
  ContainerAllText,
  ContainerDetails,
  ContainerText,
  ContainerWhenWhere,
  StyledText,
  StyledTextSmaller,
} from './styles';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import smallBranch from '../../img/small-branch.png';

interface MainProps {
  innerRef: RefObject<HTMLDivElement>;
}

const Details: FC<MainProps> = ({ innerRef }) => {
  return (
    <Container id="details" ref={innerRef}>
      <ContainerAllText>
        {/* <ImageBackgroung /> */}
        <ContainerText>
          <StyledText>Деталі</StyledText>
          <ContainerDetails>
            <ContainerWhenWhere>
              <AccessTimeIcon
                sx={{ color: 'rgb(176, 146, 89)' }}
                fontSize="large"
              />
              <StyledTextSmaller>Коли?</StyledTextSmaller>
              <StyledTextSmaller>4-го травня</StyledTextSmaller>
              <StyledTextSmaller>13:00</StyledTextSmaller>
            </ContainerWhenWhere>
            <img src={smallBranch} alt="" style={{ marginRight: '20px' }}></img>
            <ContainerWhenWhere>
              <PlaceOutlinedIcon
                sx={{ color: 'rgb(176, 146, 89)' }}
                fontSize="large"
              />
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
