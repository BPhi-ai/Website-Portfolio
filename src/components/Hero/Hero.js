import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
      </SectionTitle>
      <SectionText>
         When it comes to the field of Computer Science, the learning never stops, the possibilities
         are endless! Click below for my resume!
      </SectionText>
      <Button><a href="https://drive.google.com/file/d/1X5USD-4yXaBsC0hLJg0KY6KyBHSUsuW6/view?usp=sharing">See Resume</a></Button>
    </LeftSection>
  </Section>
);

export default Hero;