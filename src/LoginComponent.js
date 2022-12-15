import React, { useState }  from 'react';
import axios from 'axios';
import { useNavigate} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Nav, Navbar,Form, Button, Container} from 'react-bootstrap';


function LoginComponent () {
 
    const navigate = useNavigate();

    const[formData, setFormData] = useState({
        email: "",
        password: ""
    });
         
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            var response = await axios.post("https://hackthon1.herokuapp.com/register/signin", {
               ...formData,
            });
            if(response.data) {
                await localStorage.setItem("token", response.data);
               navigate("/question");  
                    }
        }catch(err) {
            console.log(err)
        }
    }
    
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
            <Button variant="primary"style={{marginLeft:"10px",marginRight:"10px"}} onClick={()=>navigate("/signin")}>Signin</Button>
         </Form>
         </Container>
    </Navbar>

{/* Main content */}

    <div class="container" style={{margin:"50px 600px"}}>
        <div class="col-6 col-sm-1">
            <img style={{height:"80px",width:"80px"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Stack_Overflow_icon.svg/768px-Stack_Overflow_icon.svg.png"/>
        </div> 
    </div>
    <Form style={{marginTop:"50px", marginLeft:"500px", marginRight:"500px"}} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label><b>Email</b></Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={formData.email} 
                    onChange={(e) => setFormData({...formData, email: e.target.value})  }/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label><b>Password</b></Form.Label>
        <Form.Control type="password" placeholder="Password" value={formData.password} 
                    onChange={(e) => setFormData({...formData, password: e.target.value}) 
                }/>
      </Form.Group>
      
      <Button style={{margin:"20px 125px"}} variant="primary" type="submit">Log in</Button><br/>
      
    </Form>

</span> 
);
}

export default LoginComponent;
        
        
       