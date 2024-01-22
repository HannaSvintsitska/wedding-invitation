import { Typography, styled } from '@mui/material';
import { CommonScreenContainer } from 'features/styles';
import background from 'img/first-slide.jpg';
import backgroundMobile from 'img/first-slide-mobile.png';

export const ImageBackgroung = styled(CommonScreenContainer)(({ theme }) => ({
  backgroundImage: `url(${background})`,
  backgroundPosition: 'right',
  backgroundSize: 'cover',
  filter: 'blur(1.2px)',
  boxSizing: 'border-box',
  position: 'absolute',
  [theme.breakpoints.down('md')]: {
    backgroundImage: `url(${backgroundMobile})`,
    backgroundPosition: 'top center',
  },
}));

export const StyledText = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(0, 0, 0, 9),
  color: 'white',
  fontWeight: 600,
  fontFamily: 'Marck Script, sans-serif',
}));

export const ContainerMain = styled(CommonScreenContainer)(({ theme }) => ({
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  boxSizing: 'border-box',
  position: 'relative',
}));

export const TextContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  boxSizing: 'border-box',
  position: 'relative',
}));

export const NamesText = styled(StyledText)(({ theme: { breakpoints } }) => ({
  fontSize: '6em',
  [breakpoints.down('sm')]: {
    fontSize: '8em',
  },
}));

export const MainText = styled(StyledText)(({ theme: { breakpoints } }) => ({
  fontSize: '2em',
  [breakpoints.down('sm')]: {
    fontSize: '3em',
  },
}));
