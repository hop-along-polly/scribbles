import React from "react";
import HorizontalNavMenu from "../../src/Navigation/HorizontalNavMenu";
import { Nav, Container } from "../../src/Navigation/NavOption";
import './navExample.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseChimney, faCaretDown} from '@fortawesome/free-solid-svg-icons'

export default {
  title: "Navigation/HorizontalNavMenuExamples",
  component: HorizontalNavMenu
}

export const DesktopExample = () => {
  const homeIcon = (<FontAwesomeIcon style={{ paddingRight: "8px" }} icon={faHouseChimney} />);
  const carat = (<FontAwesomeIcon style={{ paddingLeft: "5px" }} icon={faCaretDown} />);

  return (
    <HorizontalNavMenu className='example-navbar'>
      <Nav url="#home" className="example-nav" startIcon={homeIcon}>Home</Nav>
      <Container className="example-subnav">
        <Nav url='#about' className="example-nav" endIcon={carat}>About</Nav>
        <Container className="example-subnav-content">
          <Nav url="#company" className="example-nav">Company</Nav>
          <Nav url="#team" className="example-nav">Team</Nav>
          <Nav url="#careers" className="example-nav">Careers</Nav>
        </Container>
      </Container>
      <Container className="example-subnav">
        <Nav url="#services" endIcon={carat} className="example-nav">Services</Nav>
        <Container className="example-subnav-content">
          <Nav url="#bring" className="example-nav">Bring</Nav>
          <Nav url="#deliver" className="example-nav">Deliver</Nav>
          <Nav url="#package" className="example-nav">Package</Nav>
          <Nav url="#express" className="example-nav">Express</Nav>
        </Container>
      </Container>
      <Container className="example-subnav">
        <Nav url="#partners" endIcon={carat} className="example-nav">Partners</Nav>
        <Container className="example-subnav-content">
          <Nav url="#link-1" className="example-nav">Link 1</Nav>
          <Nav url="#link-2" className="example-nav">Link 2</Nav>
          <Nav url="#link-3" className="example-nav">Link 3</Nav>
          <Nav url="#link-4" className="example-nav">Link 4</Nav>
        </Container>
      </Container>
      <Nav url="#contact" className="example-nav">Contact</Nav>
    </HorizontalNavMenu>
  );
};
