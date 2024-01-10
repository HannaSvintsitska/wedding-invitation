import { Link, Typography, styled } from '@mui/material';

export const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  margin: theme.spacing(0, 0, 1),

  ':hover': {
    p: {
      color: 'black !important',
    },
    div: {
      backgroundColor: 'black',
    },
  },
}));

export const StyledText = styled(Typography)<{ isActive: boolean }>(
  ({ theme, isActive }) => ({
    color: isActive ? 'black' : 'transparent',
    textDecoration: 'none',
    fontFamily: 'Pattaya, sans-serif',
    transition: 'all 0.3s ease-in-out',
  })
);

export const Circle = styled('div')<{ isActive: boolean }>(
  ({ theme, isActive }) => ({
    width: 9,
    height: 9,
    borderRadius: '50%',
    border: 'black solid 3px',
    margin: theme.spacing(0, 0, 0, 2.5),
    backgroundColor: isActive ? 'black' : 'transparent',
    transition: 'all 0.3s ease-in-out',
  })
);

export const NavigatorContainer = styled('div')(({ theme }) => ({
  position: 'fixed',
  right: 40,
  top: '40%',
  flexDirection: 'column',
  zIndex: 1,
  display: 'flex',
}));
