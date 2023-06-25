import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { text: '5x Dean`s List Recipient, Graduating with Cum Laude Honors'},
  { text: 'Web Committee Developer for the Association for Computing Machinery', },
  { text: 'Mozilla Capstone Project Team Member for ECST 2023 Senior Design Expo', },
  { text: 'ACM 2023 Scholarship Finals Recipient for Academic Excellence', }
];

const Acomplishments = () => (
  <Section nopadding id="accomplishments">
    <SectionDivider />
    <SectionTitle style={{marginTop: "2rem"}}>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
