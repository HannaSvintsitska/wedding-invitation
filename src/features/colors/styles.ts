import backgroundDots from '../../img/12572881_SL-061319-20750-48-original.png';
import backgroundFrameRotated from '../../img/12572881_SL-061319-20750-48.png';
import { Typography } from '@mui/material';
import { styled } from '@mui/system';
import { CommonContentContainer, CommonScreenContainer } from 'features/styles';

export const Container = styled(CommonScreenContainer)(({ theme }) => ({
  backgroundColor: '#b0c7ad',
}));

export const CardContainer = styled(CommonContentContainer)(
  ({ theme: { breakpoints } }) => ({
    backgroundImage: `url(${backgroundDots})`,
    [breakpoints.down('sm')]: {
      backgroundImage: `url(${backgroundFrameRotated})`,
    },

    [breakpoints.down('md')]: {
      width: '100%',
      // backgroundSize: 'contain',
    },
    [breakpoints.up('md')]: {
      backgroundSize: 'cover',
      width: '86%',
    },
  })
);

export const ContentContainer = styled(CommonContentContainer)(
  ({ theme: { breakpoints } }) => ({
    width: '36%',
    height: '40%',
    [breakpoints.down('md')]: {
      width: '57%',
    },
  })
);

export const StyledText = styled(Typography)(({ theme }) => ({
  display: 'flex',
  fontSize: '3em',
  fontWeight: 600,
  // color: 'rgb(176, 146, 89)',
}));

export const StyledTextInfo = styled(Typography)(({ theme }) => ({
  display: 'flex',
  textAlign: 'center',
  fontSize: '2.3em',
  lineHeight: '1.15em',
  fontWeight: 600,
  // color: 'rgb(176, 146, 89)',
}));

export const ColorContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '75%',
  marginTop: '5%',
}));

export const ColorsCircle = styled('div')(({ theme, color }) => ({
  display: 'flex',
  backgroundColor: color,
  width: '16%',
  marginInline: '2%',
  borderRadius: '50%',

  ':before': {
    content: '""',
    display: 'block',
    paddingTop: '100%',
  },
}));
