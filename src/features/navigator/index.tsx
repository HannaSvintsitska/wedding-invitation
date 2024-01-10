import { TABS } from 'features/utils';
import { Circle, NavigatorContainer, StyledLink, StyledText } from './styles';

interface NavigatorProps {
  activeIndex: number;
}

const Navigator = ({ activeIndex }: NavigatorProps) => {
  return (
    <NavigatorContainer>
      {TABS.map((el, index) => (
        <StyledLink key={index} href={`#${el.link}`}>
          <StyledText isActive={activeIndex === index}>{el.title}</StyledText>
          <Circle isActive={activeIndex === index} />
        </StyledLink>
      ))}
    </NavigatorContainer>
  );
};

export default Navigator;
