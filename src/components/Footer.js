import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Contact = () => {
  return (
    <MDBFooter color="default-color" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Denis Matijevic</h5>
            <p>
              Reach out to us with any questions.
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Contact</h5>
            <ul>
              <li className="list-unstyled">
                <p>Phone 801-809-9105</p>
              </li>
              <li className="list-unstyled">
                <p>Email denis@listedfirst.com</p>
              </li>
              {/* <li className="list-unstyled">
                <a href="#!">Link 3</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li> */}
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="www.github.com/denismatijevic" target="_blank"> DenCo Industries </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Contact;