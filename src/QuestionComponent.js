import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Nav, Navbar,Form, Button, Container} from 'react-bootstrap';  

function QuestionComponent() {
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

<div class="container">
  <div class="row">
    <div class="col-6 col-sm-7"><h3>Questions tagged [javascript]</h3></div>
    <div class="col-6 col-sm-2"><Button variant="primary">Ask Question</Button></div>
  </div>
  <div class="row">
    <div class="col-6 col-sm-9" style={{fontSize:"14px"}}>
      <p>For questions regarding programming in ECMAScript (JavaScript/JS) and its various dialects/implementations (excluding ActionScript). Note JavaScript is NOT the same as Java! Please include all relevant tags on your question; e.g., [node.js], [jquery], [json], [reactjs], [angular], [ember.js], [vue.js], [typescript], [svelte], etc.</p>
    </div>
  </div>
  <div class="col-6 col-sm-4" style={{fontSize:"14px"}}>
    <ul class="bar">
      <li style={{listStyleType:"none"}}><a href="#">Learn more…</a></li>
      <li style={{listStyleType:"none"}}><a href="#">Top users</a></li>
      <li style={{listStyleType:"none"}}><a href="#">Synonyms (14)</a></li>
    </ul>
  </div>


<div class="container-box">
  <div class="row">
  <div class="col-6 col-sm-3"><h5>2,438,021 questions</h5></div>
  <div class="col-6 col-sm-3 btn-group" role="group" aria-label="Basic outlined example">
  <button type="button" class="btn btn-outline-primary">Newest</button>
  <button type="button" class="btn btn-outline-primary">Active</button>
  <button type="button" class="btn btn-outline-primary">Bountied</button>
  <button type="button" class="btn btn-outline-primary">Unanswered</button>
  <div class="btn-group" role="group">
    <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
      More</button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Frequent</a></li>
      <li><a class="dropdown-item" href="#">Score</a></li>
    </ul>
  </div>
  </div>
  </div>
</div>

<hr class="col-6 col-sm-8"/>
<div class="row">
    <div class="col-6 col-sm-2">
      <ul class="space">
         <li style={{listStyleType:"none", fontSize:"14px"}}>0 votes</li>
         <li style={{listStyleType:"none", fontSize:"14px"}}>0 answers</li>
         <li style={{listStyleType:"none", fontSize:"14px"}}>2 views</li>
      </ul>
   </div>
    <div class="col-6 col-sm-6">
      <a href="#" class="link-primary">Is it possible to use XMLHttpRequest to download all files in a directory from a URL?</a>
      <p style= {{fontSize:"14px"}}>I'm working on a project to create a web-client to connect to a server with Xmlhttprequest and download all the files from the server. I've been succeeded in downloading a specific file. I wonder Is ...</p>
  <div class="row">
   <div class="col-6 col-sm-8">
    <ul class="bar">
      <li style={{listStyleType:"none"}}><button style={{fontSize:"13px"}} type="button" class="btn btn-info">javascript</button></li>
      <li style={{listStyleType:"none"}}><button style={{fontSize:"13px"}} type="button" class="btn btn-info">http</button></li>
      <li style={{listStyleType:"none"}}><button style={{fontSize:"13px"}} type="button" class="btn btn-info">sockets</button></li>
      <li style={{listStyleType:"none"}}><button style={{fontSize:"13px"}} type="button" class="btn btn-info">xmlhttprequest</button></li>
    </ul>
   </div>
    <div class="col-6 col-sm-4" style={{fontSize:"10px"}}>
    <img style={{height:"15px",width:"15px"}}src="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg"/><a class="dropdown-item" href="#">Khương Mai</a><p>271 asked 1 min ago</p>
    </div>
  </div>
</div>

</div>
</div>
<div class="leftside">
    <ul>
      <li style={{listStyleType:"none",fontSize:"13px",}} class="color" ><b>The Overflow Blog</b></li>
      <li style={{listStyleType:"none",fontSize:"13px"}}><i class="fa fa-pencil" aria-hidden="true"></i>  Faster feedback loops make for faster developer velocity (Ep. 498)</li>
      <li style={{listStyleType:"none",fontSize:"13px"}}><i class="fa fa-pencil" aria-hidden="true"></i>  Introducing the Overflow Offline project</li>
      <li style={{listStyleType:"none",fontSize:"13px",}} class="color" ><b>Featured on Meta</b></li>
      <li style={{listStyleType:"none",fontSize:"13px"}}><img style={{height:"15px",width:"15px"}} src="https://cdn-icons-png.flaticon.com/512/3608/3608177.png"/>  The 2022 Community-a-thon has begun!</li>
      <li style={{listStyleType:"none",fontSize:"13px"}}><img style={{height:"15px",width:"15px"}} src="https://cdn-icons-png.flaticon.com/512/3608/3608177.png"/>  Mobile app infrastructure being decommissioned</li>
      <li style={{listStyleType:"none",fontSize:"13px"}}><img style={{height:"15px",width:"15px"}} src="https://w7.pngwing.com/pngs/331/576/png-transparent-computer-icons-stack-overflow-encapsulated-postscript-stacking-angle-text-stack.png"/>  Collectives Update: Recognized Members, Articles, and GitLab</li>
      <li style={{listStyleType:"none",fontSize:"13px"}}><img style={{height:"15px",width:"15px"}} src="https://w7.pngwing.com/pngs/331/576/png-transparent-computer-icons-stack-overflow-encapsulated-postscript-stacking-angle-text-stack.png"/>  The [script] tag is being burninated</li>
       <li style={{listStyleType:"none",fontSize:"13px"}}><img style={{height:"15px",width:"15px"}} src="https://w7.pngwing.com/pngs/331/576/png-transparent-computer-icons-stack-overflow-encapsulated-postscript-stacking-angle-text-stack.png"/>  Staging Ground Workflow: Canned Comments</li>
   </ul>

</div>

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
export default QuestionComponent;
