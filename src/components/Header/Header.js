import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillFacebook } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { Navbar, NavDropdown, Nav, Button, Modal, NavbarBrand } from "react-bootstrap";

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span, HeaderDivider } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link
        href={"/"}
        style={{display: "flex", alignItems: "center", color: "white", marginBottom: "20px"}}>

        <DiCssdeck size="3rem"/> <Span>Brian Pham</Span>

      </Link>
    </Div1>
    <Div2>
      <li style={{marginLeft: "5px", marginRight: "10px"}}>
        <Link href={"#projects"} legacyBehavior>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <HeaderDivider/>
      <li style={{marginLeft: "5px", marginRight: "10px"}}>
        <Link href={"#tech"} legacyBehavior>
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <HeaderDivider/>
      <li style={{marginLeft: "5px", marginRight: "10px"}}>
        <Link href={"#about"} legacyBehavior>
          <NavLink>About</NavLink>
        </Link>
      </li>
      <HeaderDivider/>
      <li style={{marginLeft: "5px", marginRight: "10px"}}>
        <Link href={"#accomplishments"} legacyBehavior>
          <NavLink>Accomplishments</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/BPhi-ai">
          <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/brian-pham-a5674b163/">
          <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/briantrpham/">
          <AiFillInstagram size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.facebook.com/brian.pham.3950/">
        <AiFillFacebook size="3rem"/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
