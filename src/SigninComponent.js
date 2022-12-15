import React from 'react';
import {useNavigate} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Nav, Navbar,Form, Button, Container} from 'react-bootstrap';

function SigninComponent () {
  const navigate = useNavigate();
    return(
    <span >
        
    {/* Top-bar */}
    <Navbar bg="light" expand="lg">
      <Container fluid style={{marginTop:"2px", marginBottom:"2px"}}>
      <img src= "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Stack_Overflow_logo.svg/1280px-Stack_Overflow_logo.svg.png" style={{ height: "26px", width:"140px", marginLeft:"20px" }} />
           <Nav>
            <Nav.Link style={{marginLeft:"20px" }}>About</Nav.Link>
            <Nav.Link>Products</Nav.Link>
            <Nav.Link>For Teams</Nav.Link>
           </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder= "Search"
              className="me-2"
              aria-label="Search"
              style={{marginLeft:"15px", marginRight:"10px", width:"700px", height:"40px" }}
            />
           <Button variant="outline-primary" style={{marginLeft:"10px",marginRight:"10px"}} onClick={()=>navigate("/")}>Log in</Button>
         </Form>
         </Container>
    </Navbar>

{/* Main content */}

    <div class="container" style={{margin:"50px 600px"}}>
        <div class="col-6 col-sm-1">
            <img style={{height:"80px",width:"80px"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Stack_Overflow_icon.svg/768px-Stack_Overflow_icon.svg.png"/>
        </div> 
    </div>
    <Form style={{marginTop:"50px", marginLeft:"500px", marginRight:"500px"}} >
      
    <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label><b>Name</b></Form.Label>
        <Form.Control type="name" placeholder="Enter Name"/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicAge">
        <Form.Label><b>Age</b></Form.Label>
        <Form.Control type="number" placeholder="Enter Age"/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicphonenumber">
        <Form.Label><b>Phone Number</b></Form.Label>
        <Form.Control type="number" placeholder="Enter Phone Number"/>
    </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label><b>Email</b></Form.Label>
        <Form.Control type="email" placeholder="Enter email"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label><b>Password</b></Form.Label>
        <Form.Control type="password" placeholder="Password"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label><b>Confirm Password</b></Form.Label>
        <Form.Control type="password" placeholder="Confirm Password"/>
      </Form.Group>
        
      <Button style={{margin:"20px 125px"}} variant="primary" type="submit" onClick={()=>navigate("/question")}>Signin</Button><br/>
      
    </Form>

</span> 
);
}

export default SigninComponent;
        
        
       