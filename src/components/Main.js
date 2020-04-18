import React,{Component} from 'react';
import Header from './Header';
import Description from './Description';
import Overview from './Overview';
import { Container, Row, Col } from 'react-grid-system';
import ToggleButton from 'react-toggle-button'
class Main extends Component{
    render(){
      return (
    <div style={{padding:"10px",background:"#000000"}}>
      <Row style={{color:"white",background:"gray",padding:"15px"}}>

        <Col>
          <div> 
            <center><a href="#" style={{textDecoration:"none",color:"white",fontFamily:"timeburner",fontSize:"40px",justifyContent:"center"}} onClick = {() => this.Stage0()}><h1 style={{fontWeight:"bold"}}>Project-Based-ReactJS-Learning</h1></a></center>
          </div>
        </Col>

      </Row>   
    </div>
  );
      }
}

export default Main;
