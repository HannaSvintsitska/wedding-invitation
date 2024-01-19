import { Typography, styled } from '@mui/material';
import { CommonContainer } from 'features/styles';
import imagePaper from '../../img/paper.jpeg';
import branch from '../../img/branch.png';

export const Container = styled(CommonContainer)(({ theme }) => ({
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
  height: '70%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0 30px',
}));

export const StyledTextHistory = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  fontSize: 41,
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
  '&::before': {
    content: `""`,
    backgroundImage: `url(${branch})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    transform: 'rotateY(0.5turn) translate(55px, 36px)',
    width: '100%',
    height: '90vh',
  },
  '&::after': {
    content: `""`,
    backgroundImage: `url(${branch})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    transform: ' translate(55px, 36px)',
    width: '100%',
    height: '90vh',
  },
}));
