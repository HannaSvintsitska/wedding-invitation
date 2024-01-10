import { Typography, styled } from '@mui/material';
import { CommonContainer } from 'features/styles';
import backgroundPeach from 'img/watercolor-light-peach-background_23-2150303077.jpg';

export const Container = styled(CommonContainer)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  boxSizing: 'border-box',
  position: 'relative',
}));
export const ImageBackgroung = styled('div')(({ theme }) => ({
  backgroundImage: `url(${backgroundPeach})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  width: '100%',
  height: '100vh',
  position: 'absolute',
}));

export const ContainerContent = styled('div')(({ theme }) => ({
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  padding: '0 146px',
}));

export const StyledTextTitle = styled(Typography)(({ theme }) => ({
  fontSize: 90,
  fontWeight: 600,
  fontFamily: 'Marck Script, sans-serif',
  textAlign: 'center',
}));

export const StyledTextInfo = styled(StyledTextTitle)(({ theme }) => ({
  fontSize: 40,
}));
