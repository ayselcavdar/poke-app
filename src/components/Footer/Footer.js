import { Navbar, Card, Nav } from "react-bootstrap";

const Footer = () => {
  return (
    <>
        <Navbar bg="info" variant="darker" fixed="bottom" title="FooterTitle" style={{display:"flex", justifyContent:'center', height:'5vh'}}>     
            <Card.Subtitle> © 2021 Copyright:</Card.Subtitle>
            <Nav.Link className="text-white mb-2" href="https://github.com/ayselcavdar">ayselcavdar</Nav.Link>      
        </Navbar>
    </>
  );
};

export default Footer;