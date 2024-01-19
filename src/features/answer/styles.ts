import { Button, Typography, styled } from '@mui/material';
import { CommonContainer } from 'features/styles';

export const Container = styled(CommonContainer)(({ theme }) => ({
  backgroundColor: '#b0c7ad',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const StyledText = styled(Typography)(({ theme }) => ({
  fontSize: '3em',
  fontWeight: 600,
  fontFamily: 'Marck Script, sans-serif',
}));

export const ButtonsContainer = styled('div')(({ theme }) => ({
  display: 'flex',
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  color: 'black',
  fontSize: '3em',
  fontWeight: 500,
  fontFamily: 'Marck Script, sans-serif',
  margin: '10px 30px',
  minWidth: '120px',
  border: 'black solid 3px',
  borderRadius: '10px',
  height: 70,
  '&:hover': {
    backgroundColor: 'black',
    color: '#b0c7ad',
  },
}));
