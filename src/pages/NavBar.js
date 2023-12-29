
import {  useSelector} from "react-redux";
import { Link } from "react-router-dom";
import { selectCartCount} from '../store/products/selector';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';




const  NavBar = () => {
 const productDetails = useSelector(selectCartCount); 
const cartTotal = productDetails.reduce((acc, currentvalue) => {
        return acc+currentvalue.quantity;
    }, 0);
 return (
      <div>
      
      <Navbar bg="light" expand="lg">
      <Container fluid>
        <Nav>
            
            <Nav.Link  to ='/'  as={Link} style={{  color :'blue'}}> Product List Page </Nav.Link>
           {/* <button onClick={handleSortByPrice}>sort by price</button> */}
            </Nav> 
          <Navbar.Toggle />
          <Navbar.Collapse className='justify-content-end'>
             <Navbar.Text>
            <Nav.Link to ='products/cart'  as ={Link} style={{color :"blue"}}>MyCart:{cartTotal} </Nav.Link>
           </Navbar.Text> 
          </Navbar.Collapse>
        
      </Container>
    </Navbar>
  
 
  </div>  
    
  );
  };
  export default NavBar;