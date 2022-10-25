import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Nav, Navbar,Form, Button, Container} from 'react-bootstrap';  
import axios from 'axios';
// import {useNavigate} from 'react-router-dom';
import { Typography, Grid, Card, CardContent} from '@mui/material';

function UserComponent() {
    const [productList, setProductList] = useState([]);
    // const navigate = useNavigate();
    const token = localStorage.getItem("token")

    useEffect(async () => {
        {
        var response = await axios.get('http://localhost:3002/user/get', {
                headers: {
                    "access-token": token
                }
            });
            setProductList(response.data);
        }
        
    }, []);
    const updateProduct = async (id, userQuantity) =>{
        
            var response = await axios.put(`http://localhost:3002/user/update/${id}`, {
            userQuantity: userQuantity
        }, {
            headers: {
                "access-token": token
            }
        })
    
        var index = productList.findIndex(row => row.id === id);
        var productListCopy = [...productList];
        productListCopy[index] = response.data.value;
        setProductList(productListCopy);
}
const logout = async () => {
    await localStorage.removeItem("token");
    // navigate('/')
}

return(
<span>

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
           <Button variant="outline-primary" style={{marginLeft:"10px",marginRight:"10px"}}>Log in</Button>
            <Button variant="primary"style={{marginLeft:"10px",marginRight:"10px"}}>Sign up</Button>
         </Form>
         </Container>
</Navbar>
{/* <!-- Sidebar --> */}
<div class="scroller"> 
    <ul style={{height:"1000px", width:"200px", backgroundColor:"rgb(244, 247, 251)", overflow:"hidden"}}>
    <Nav.Link style={{marginTop:"20px", marginBottom:"20px",margin:"10px", fontSize:"14px"}} href="/">Home</Nav.Link>
    <li style={{listStyleType:"none",margin:"10px", fontSize:"14px"}} >PUBLIC</li>
       <Nav.Link style={{margin:"10px", fontSize:"14px"}} href="/question"><i class="fa fa-globe fa-1x" aria-hidden="true"></i>  Questions</Nav.Link>
       <Nav.Link style={{marginTop:"10px",marginBottom:"10px",marginLeft:"30px", fontSize:"14px"}} href="/tag">Tags</Nav.Link>
       <Nav.Link style={{marginTop:"10px",marginBottom:"10px",marginLeft:"30px", fontSize:"14px"}} href="/user">Users</Nav.Link>
       <Nav.Link style={{marginTop:"10px",marginBottom:"20px",marginLeft:"30px", fontSize:"14px"}} href="/companies">Companies</Nav.Link>
    <li style={{listStyleType:"none",margin:"10px", fontSize:"14px"}} >COLLECTIVES</li>
       <Nav.Link style={{margin:"10px", fontSize:"14px"}}>Explore Collectives</Nav.Link>
    <li style={{listStyleType:"none",marginLeft:"10px",marginTop:"20px",marginBottom:"20px", fontSize:"14px"}} >TEAMS</li>
  <div class= "box">
  <p><b>Stack Overflow for Teams – </b>Start collaborating and sharing organizational knowledge.</p>
  <img src= "https://cdn.sstatic.net/Img/teams/teams-illo-free-sidebar-promo.svg?v=47faa659a05e"/> 
  <Button variant= "warning" style={{fontSize:"12px", width:"130px", marginLeft:"10px", color:"white"}}>Create a Free Team</Button>
  <li style={{listStyleType:"none",marginLeft:"45px", marginTop:"10px", fontSize:"12px"}} >Why Teams?</li>
  </div>
  </ul>
</div>

{/* Main content */}
<Grid container spacing={2} style={{ margin: '2%' }}>
                {productList.map(row => (
                    <Grid item key={row._id}>
                        <Card sx={{ width: 275 }}>
                            <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary">
                                   UserName:{row.userName}
                                </Typography>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    UserId:{row.userId}
                                </Typography>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                                    Top Tags: {row.TopTags}
                                </Typography>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                                    Question: {row.questions}
                                </Typography>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                                    Answers: {row.answers}
                                </Typography>
                            </CardContent>
                            </Card>
                    </Grid>
))}
</Grid>

{/* Footer */}
<footer class="footer bg-dark">

   <div class="row"style={{color:"white", fontSize:"13px",maginLeft:"100px"}}>
         <div class="col-6 col-sm-1" style={{marginTop:"20px", lineHeight:"25px"}}>
            <img style={{height:"50px",width:"50px"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Stack_Overflow_icon.svg/768px-Stack_Overflow_icon.svg.png"/>
         </div> 
         <div class="col-6 col-sm-1" style={{marginTop:"20px", lineHeight:"25px"}}>
              <ul class="list-unstyled mb-0">
              <div class="text-uppercase">STACK OVERFLOW</div>
              <li>Questions</li>
              <li>Help</li>
            </ul>
         </div>
         <div class="col-6 col-sm-2" style={{marginTop:"20px", lineHeight:"25px"}}>
              <ul class="list-unstyled mb-0">
              <div class="text-uppercase">PRODUCTS</div>
              <li>Teams</li>
              <li>Advertising</li>
              <li>Collectives</li>
              <li>Talent</li>
              </ul>
         </div>
         <div class="col-6 col-sm-2" style={{marginTop:"20px",marginBottom:"20px", lineHeight:"25px"}}>
              <ul class="list-unstyled mb-0">
              <div class="text-uppercase">COMPANY</div>
              <li>About</li>
              <li>Press</li>
              <li>Work Here</li>
              <li>Legal</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Contact Us</li>
              <li>Cookie Settings</li>
              <li>Cookie Policy</li>
              </ul>
         </div>
         <div class="col-6 col-sm-2" style={{marginTop:"20px", lineHeight:"25px"}}>
              <ul class="list-unstyled mb-0">
              <div class="text-uppercase">STACK EXCHANGE NETWORK</div>
              <li>Technology</li>
              <li>Culture & recreation</li>
              <li>Life & arts</li>
              <li>Science</li>
              <li>Professional</li>
              <li>Business</li>
              <div class="text-uppercase">API</div>
              <li>Data</li>
              </ul>
         </div>
         <div class="col-6 col-sm-3" style={{marginTop:"20px", lineHeight:"25px"}}>
              <ul class="bar">
              <li style={{listStyleType:"none", columnGap:"30px"}}>Blog</li>
              <li style={{listStyleType:"none"}}>Facebook</li>
              <li style={{listStyleType:"none"}}>Twitter</li>
              <li style={{listStyleType:"none"}}>LinkedIn</li>
              <li style={{listStyleType:"none"}}>Instagram</li>
              </ul>
              <div class="footerbotttom">
                    <div class="copyright text-center my-auto">
                      <span>Site design / logo &copy; 2022 Stack Exchange Inc; user contributions licensed under CC BY-SA. rev 2022.10.20.2897 </span> 
                    </div>
                </div>
         </div>
   </div>
</footer>
</span>
);
}
export default UserComponent;

