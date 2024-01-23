import { Typography, styled } from '@mui/material';
import { CommonScreenContainer } from 'features/styles';
import imagePaper from '../../img/paper.jpg';
import branch from '../../img/branch.png';

export const Container = styled(CommonScreenContainer)(({ theme }) => ({
  backgroundColor: '#b0c7ad',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  height: '100vh',
}));

export const StyledContainerPaper = styled('div')(
  ({ theme: { breakpoints } }) => ({
    backgroundImage: `url(${imagePaper})`,
    // backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: '48%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 30px',
    [breakpoints.up('xs')]: {
      height: '59%',
      width: '66%',
    },
    [breakpoints.down('sm')]: {
      height: '49%',
    },
    [breakpoints.up('md')]: {
      width: '46%',
    },
    ':before': {
      content: '""',
      display: 'block',
      paddingTop: '80%',
    },
  })
);

export const StyledTextHistory = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  fontSize: '2.3em',
  fontWeight: 600,
}));

export const TextContainer = styled('div')(({ theme }) => ({
  position: 'absolute',
  width: '40%',
  height: '70%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const ImageBranches = styled('div')(({ theme: { breakpoints } }) => ({
  position: 'absolute',
  width: '100%',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  [breakpoints.down('sm')]: {
    width: '70%',
  },

  '&::before': {
    content: `""`,
    backgroundImage: `url(${branch})`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    transform: 'rotateY(0.5turn)',
    width: '100%',
    height: '90vh',
    [breakpoints.up('md')]: {
      height: '69vh',
    },
  },
  '&::after': {
    content: `""`,
    backgroundImage: `url(${branch})`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '90vh',
    [breakpoints.up('md')]: {
      height: '69vh',
    },
  },
}));
