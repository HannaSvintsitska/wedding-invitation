import backgroundDots from '../../img/leaves-background-with-metallic-foil-design_79603-939.png';
import { Typography } from '@mui/material';
import { styled } from '@mui/system';
import { CommonContainer } from 'features/styles';

export const Container = styled(CommonContainer)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  boxSizing: 'border-box',
  position: 'relative',
}));
export const ImageBackgroung = styled('div')(({ theme }) => ({
  backgroundImage: `url(${backgroundDots})`,
  filter: 'blur(2px)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  width: '100%',
  height: '100vh',
  position: 'absolute',
}));

export const ContentContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  padding: '0 246px',
}));

export const ColorContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  width: '80%',
  height: 50,
  marginTop: 40,
}));

export const StyledText = styled(Typography)(({ theme }) => ({
  fontSize: 90,
  fontWeight: 600,
  color: 'rgb(176, 146, 89)',
  fontFamily: 'Marck Script, sans-serif',
}));

export const StyledTextInfo = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  fontSize: 40,
  fontWeight: 600,
  color: 'rgb(176, 146, 89)',
  fontFamily: 'Marck Script, sans-serif',
}));

export const ColorsCircle = styled('div')(({ theme, color }) => ({
  backgroundColor: color,
  width: 70,
  height: 70,
  borderRadius: '50%',
}));
