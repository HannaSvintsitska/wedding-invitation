import { styled } from '@mui/material';

export const CommonScreenContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  boxSizing: 'border-box',
  width: '100%',
  height: '100vh',
  display: 'flex',
}));

export const CommonContentContainer = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  boxSizing: 'border-box',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
}));
