import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
       
    return (
   
        <MDBFooter color="blue" className="footerbox font-small pt-4 mt-4">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="12" className="aligncenter">
            <h5 className="title">Rick & Morty</h5>  
              <p>
                All you need to know about Rick & Morty the animated series.
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright: <a href="/"> Rick & Morty Adventures Forever </a>
          </MDBContainer>
        </div>
      </MDBFooter>

    );
}
 
export default Footer;