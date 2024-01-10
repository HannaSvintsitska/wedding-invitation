import backgroundGoldFoil from 'img/4174806.jpg';
import { Typography } from '@mui/material';
import { styled } from '@mui/system';
import { CommonContainer } from 'features/styles';

export const Container = styled(CommonContainer)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
}));
export const ImageBackgroung = styled('div')(({ theme }) => ({
  backgroundImage: `url(${backgroundGoldFoil})`,
  filter: 'blur(2px)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  width: '100%',
  height: '100vh',
}));

export const ContainerAllText = styled('div')(({ theme }) => ({
  position: 'absolute',
}));

export const StyledText = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  fontSize: 90,
  fontWeight: 500,
  color: 'rgb(176, 146, 89)',
  fontFamily: 'Marck Script, sans-serif',
}));

export const ContainerWhenWhere = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minWidth: '342px',
}));

export const StyledTextSmaller = styled(StyledText)(({ theme }) => ({
  fontSize: 48,
}));

export const ContainerDetails = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));
