import { Typography, styled } from '@mui/material';
import { CommonScreenContainer } from 'features/styles';
import imagePaper from '../../img/paper.jpeg';
import branch from '../../img/branch.png';

export const Container = styled(CommonScreenContainer)(({ theme }) => ({
  backgroundColor: '#b0c7ad',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  height: '100vh',
}));

export const StyledContainerPaper = styled('div')(({ theme }) => ({
  backgroundImage: `url(${imagePaper})`,
  // backgroundPosition: 'center',
  backgroundSize: 'cover',
  width: '48%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0 30px',

  ':before': {
    content: '""',
    display: 'block',
    paddingTop: '80%',
  },
}));

export const StyledTextHistory = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  fontSize: '2.3em',
  fontWeight: 600,
  fontFamily: 'Marck Script, sans-serif',
}));

export const TextContainer = styled('div')(({ theme }) => ({
  position: 'absolute',
  width: '40%',
  height: '70%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const ImageBranches = styled('div')(({ theme }) => ({
  position: 'absolute',
  width: '100%',
  height: '100vh',
  display: 'flex',
  [theme.breakpoints.down('sm')]: {
    width: '70%',
  },

  '&::before': {
    content: `""`,
    backgroundImage: `url(${branch})`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    transform: 'rotateY(0.5turn) translate(55px, 36px)',
    width: '100%',
    height: '90vh',
  },
  '&::after': {
    content: `""`,
    backgroundImage: `url(${branch})`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    transform: ' translate(55px, 36px)',
    width: '100%',
    height: '90vh',
  },
}));
