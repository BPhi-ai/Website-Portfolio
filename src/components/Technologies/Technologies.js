import React from 'react';
import { DiFirebase, DiReact, DiZend, DiGit } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section nopadding id="tech">
    <SectionDivider />
    <a style={{marginTop: "2rem"}}>
      <SectionTitle>Technologies</SectionTitle>
    </a>
    <SectionText>
      I've worked with a range of technologies not only in web development, but all around in the tech field.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="8rem"/>
        <ListContainer>
          <ListTitle>Front-End/Web Development</ListTitle>
          <ListParagraph>
            Experience with <br/>
            React.js, CSS, and HTML.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="8rem"/>
        <ListContainer>
          <ListTitle>Data Structures and Databases</ListTitle>
          <ListParagraph>
            Experience with <br />
            JavaScript, Java, Python, <br />
            MySQL, Jupiter Notebook, etc.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiGit size="8rem"/>
        <ListContainer>
          <ListTitle>UI/UX and Source Code Softwares</ListTitle>
          <ListParagraph>
           Experience with <br />
           tools like Figma, Git, <br />
           Phabricator and Mercurial.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
