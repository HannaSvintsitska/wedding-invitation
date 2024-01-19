import backgroundGoldFoil from 'img/green-floral-frame_53876-116073.png';
import { Typography } from '@mui/material';
import { styled } from '@mui/system';
import { CommonContainer } from 'features/styles';

export const Container = styled(CommonContainer)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  backgroundColor: '#efeeea',
}));

export const ContainerAllText = styled('div')(({ theme }) => ({
  backgroundImage: `url(${backgroundGoldFoil})`,
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  position: 'relative',
  height: '100vh',
  width: '84%',
}));

export const ContainerText = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
}));

export const StyledText = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  fontSize: '3em',
  fontWeight: 600,
  // color: 'rgb(176, 146, 89)',
  fontFamily: 'Marck Script, sans-serif',
}));

export const ContainerWhenWhere = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minWidth: '249px',
}));

export const StyledTextSmaller = styled(StyledText)(({ theme }) => ({
  fontSize: '2.3em',
}));

export const ContainerDetails = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));
