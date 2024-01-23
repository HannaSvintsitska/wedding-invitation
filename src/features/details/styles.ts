import backgroundGoldFoil from 'img/green-floral-frame_53876-116073.png';
import { Typography } from '@mui/material';
import { styled } from '@mui/system';
import { CommonScreenContainer } from 'features/styles';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import backgroundFrameRotated from 'img/green-floral-frame_53876-116073-rotated.png';

export const Container = styled(CommonScreenContainer)(({ theme }) => ({
  backgroundColor: '#efeeea',
}));

export const ContainerAllText = styled('div')(({ theme: { breakpoints } }) => ({
  backgroundImage: `url(${backgroundGoldFoil})`,
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  position: 'relative',
  height: '100vh',
  width: '76%',
  [breakpoints.down('sm')]: {
    backgroundImage: `url(${backgroundFrameRotated})`,
    width: '100%',
  },
  [breakpoints.down('md')]: {
    width: '100%',
  },
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
}));

export const ContainerWhenWhere = styled('div')(
  ({ theme: { breakpoints } }) => ({
    display: 'flex',
    width: '50%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    [breakpoints.down('md')]: {
      width: '100%',
    },
  })
);

export const Image = styled('img')(({ theme: { breakpoints } }) => ({
  display: 'flex',
  position: 'absolute',
  width: '5em',
  height: '5em',
  [breakpoints.down('sm')]: {
    display: 'none',
  },
}));

export const StyledTextSmaller = styled(StyledText)(({ theme }) => ({
  fontSize: '2.3em',
}));

export const ContainerDetails = styled('div')(({ theme: { breakpoints } }) => ({
  display: 'flex',
  width: '70%',
  alignItems: 'center',
  justifyContent: 'center',
  [breakpoints.down('sm')]: {
    flexDirection: 'column',
  },
}));

export const StyledAccessTimeIcon = styled(AccessTimeIcon)({
  fontSize: '2em',
  color: 'rgb(176, 146, 89)',
});

export const StyledPlaceOutlinedIcon = styled(PlaceOutlinedIcon)({
  fontSize: '2em',
  color: 'rgb(176, 146, 89)',
});
