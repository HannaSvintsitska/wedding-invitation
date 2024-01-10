import { useRef, useMemo } from 'react';
import Main from './main';
import History from './history';
import Details from './details';
import Presents from './presents';
import Answer from './answer';
import './home.scss';
import { useScrollspy } from '@makotot/ghostui';
import Navigator from './navigator';
import Colors from './colors';

const Features = () => {
  const sectionRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const memoizedRefs = useMemo(() => sectionRefs, []);
  const { currentElementIndexInViewport } = useScrollspy({
    sectionRefs: memoizedRefs,
  });

  return (
    <>
      <Navigator activeIndex={currentElementIndexInViewport} />
      <Main innerRef={sectionRefs[0]} />
      <History innerRef={sectionRefs[1]} />
      <Details innerRef={sectionRefs[2]} />
      <Colors innerRef={sectionRefs[3]} />
      <Presents innerRef={sectionRefs[4]} />
      <Answer innerRef={sectionRefs[5]} />
    </>
  );
};

export default Features;
