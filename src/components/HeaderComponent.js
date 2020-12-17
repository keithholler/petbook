import React, { Component } from "react";
import { Navbar,Button,FormControl ,Nav ,Form} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";



class Header extends Component {
    
    
  
    render() {
      
        return (
            <Navbar  className='site-header' sticky="top">
            <Navbar.Brand href="/home" >PetBook</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/Feed">Feed</Nav.Link>
              <Nav.Link href="/PetProfile">PetProfile</Nav.Link>
              <Nav.Link href="/Shelters">Shelters</Nav.Link>
              <Nav.Link href="/LostPets">LostPets</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline" className="accent">Search</Button>
            </Form>
          </Navbar>
        );
      };
    }


    export default (Header)