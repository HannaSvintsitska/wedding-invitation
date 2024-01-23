import { Typography, styled } from '@mui/material';
import { CommonScreenContainer } from 'features/styles';
import backgroundGreen from 'img/square-frame-green-golden-leaves-with-watercolor-painting_31965-94340-Edit.png';
import backgroundFrameRotated from 'img/square-frame-green-golden-leaves-with-watercolor-painting_31965-94340-rotated.png';

export const Container = styled(CommonScreenContainer)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  boxSizing: 'border-box',
  position: 'relative',
  backgroundColor: '#efeeea',
}));

export const ImageBackgroung = styled('div')(({ theme: { breakpoints } }) => ({
  backgroundImage: `url(${backgroundGreen})`,
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  width: '100%',
  height: '100vh',
  position: 'absolute',
  [breakpoints.down('sm')]: {
    backgroundImage: `url(${backgroundFrameRotated})`,
    width: '100%',
  },
}));

export const ContainerContent = styled('div')(({ theme }) => ({
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  width: '43%',
}));

export const StyledTextTitle = styled(Typography)(({ theme }) => ({
  fontSize: '3em',
  fontWeight: 600,
  textAlign: 'center',
}));

export const StyledTextInfo = styled(StyledTextTitle)(({ theme }) => ({
  fontSize: '2.3em',
}));
