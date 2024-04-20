import { Background, Title } from './Section.styles';

const Section = ({ children, title }) => (
  <Background>
    <Title>{title}</Title>
    {children}
  </Background>
);

export default Section;
