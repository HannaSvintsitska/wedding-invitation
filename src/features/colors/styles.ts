import backgroundDots from '../../img/12572881_SL-061319-20750-48.png';
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
  backgroundColor: '#b0c7ad',
}));

export const ImageBackgroung = styled('div')(({ theme }) => ({
  backgroundImage: `url(${backgroundDots})`,
  backgroundSize: 'cover',
  filter: 'blur(0.7px)',
  backgroundPosition: 'center',
  position: 'absolute',
  boxSizing: 'border-box',
  width: '100%',
  height: '100%',
}));

export const ContentContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  width: '45%',
}));

export const ColorContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  width: '75%',
  height: 50,
  marginTop: 40,
}));

export const StyledText = styled(Typography)(({ theme }) => ({
  fontSize: '3em',
  fontWeight: 600,
  // color: 'rgb(176, 146, 89)',
  fontFamily: 'Marck Script, sans-serif',
}));

export const StyledTextInfo = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  fontSize: '2.3em',
  fontWeight: 600,
  // color: 'rgb(176, 146, 89)',
  fontFamily: 'Marck Script, sans-serif',
}));

export const ColorsCircle = styled('div')(({ theme, color }) => ({
  backgroundColor: color,
  width: 70,
  height: 70,
  borderRadius: '50%',
}));
