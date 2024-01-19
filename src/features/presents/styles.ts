import { Typography, styled } from '@mui/material';
import { CommonContainer } from 'features/styles';
import backgroundGreen from 'img/square-frame-green-golden-leaves-with-watercolor-painting_31965-94340.png';

export const Container = styled(CommonContainer)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  boxSizing: 'border-box',
  position: 'relative',
  backgroundColor: '#efeeea',
}));

export const ImageBackgroung = styled('div')(({ theme }) => ({
  backgroundImage: `url(${backgroundGreen})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  width: '90%',
  height: '100vh',
  position: 'absolute',
}));

export const ContainerContent = styled('div')(({ theme }) => ({
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  width: '43%',
}));

export const StyledTextTitle = styled(Typography)(({ theme }) => ({
  fontSize: 73,
  fontWeight: 600,
  fontFamily: 'Marck Script, sans-serif',
  textAlign: 'center',
}));

export const StyledTextInfo = styled(StyledTextTitle)(({ theme }) => ({
  fontSize: 40,
}));
