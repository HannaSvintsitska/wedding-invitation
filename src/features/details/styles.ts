import backgroundGoldFoil from 'img/green-floral-frame_53876-116073.png';
import { Typography } from '@mui/material';
import { styled } from '@mui/system';
import { CommonScreenContainer } from 'features/styles';
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";

export const Container = styled(CommonScreenContainer)(({ theme }) => ({
  backgroundColor: '#efeeea',
}));

export const ContainerAllText = styled('div')(({ theme }) => ({
  backgroundImage: `url(${backgroundGoldFoil})`,
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  position: 'relative',
  height: '100vh',
  width: '84%',
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
  fontFamily: 'Marck Script, sans-serif',
}));

export const ContainerWhenWhere = styled('div')(({ theme }) => ({
  display: 'flex',
  width: '50%',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}));


export const Image = styled('img')(({ theme }) => ({
  display: 'flex',
  position: 'absolute',
  width: '5em',
  height: '5em',
}));

export const StyledTextSmaller = styled(StyledText)(({ theme }) => ({
  fontSize: '2.3em',
}));

export const ContainerDetails = styled('div')(({ theme }) => ({
  display: 'flex',
  width: '70%',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const StyledAccessTimeIcon = styled(AccessTimeIcon)({
  fontSize: '2em',
  color: 'rgb(176, 146, 89)',
});

export const StyledPlaceOutlinedIcon = styled(PlaceOutlinedIcon)({
  fontSize: '2em',
  color: 'rgb(176, 146, 89)',
});
