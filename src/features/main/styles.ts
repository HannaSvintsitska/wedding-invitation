import { Typography, styled } from '@mui/material';
import { CommonContainer } from 'features/styles';
import background from 'img/first-slide.jpg';

export const ImageBackgroung = styled(CommonContainer)(({ theme }) => ({
  backgroundImage: `url(${background})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  filter: 'blur(1.2px)',
  boxSizing: 'border-box',
  position: 'absolute',
}));

export const StyledText = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(0, 0, 0, 9),
  color: 'white',
  fontWeight: 600,
  fontFamily: 'Marck Script, sans-serif',
}));

export const ContainerMain = styled(CommonContainer)(({ theme }) => ({
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  boxSizing: 'border-box',
  position: 'relative',
}));

export const TextContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  boxSizing: 'border-box',
  position: 'relative',
}));
