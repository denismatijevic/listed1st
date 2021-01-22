import React from "react";
import emailjs from 'emailjs-com';
import { MDBBtn, MDBIcon, MDBInput, MDBCard, MDBCardBody } from "mdbreact";

const ContactForm = () => {

function sendEmail(e) {
  e.preventDefault();

  emailjs.sendForm('service_sa9by6b', 'template_1aql2q7', e.target, 'user_kg7FnuA649SwSPhBnhFdR')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset()
}

return (
  <MDBCard className="my-5 px-5 mx-auto bg"
  style={{ fontWeight: 300, maxWidth: "80%" }}>
        <MDBCardBody>
         <form className="contact-form" onSubmit={sendEmail}>
          <p className="h5 text-center mb-4">Contact us!</p>
          <div className="grey-text">
            <MDBInput
              label="Your name"
              name="name"
              icon="user"
              group
              type="text"
              validate
              error="wrong"
              success="right"
            />
            <MDBInput
              label="Your email"
              name="email"
              icon="envelope"
              group
              type="email"
              validate
              error="wrong"
              success="right"
            />
            <MDBInput
              label="Subject"
              name="subject"
              icon="tag"
              group
              type="text"
              validate
              error="wrong"
              success="right"
            />
            <MDBInput
              type="textarea"
              rows="2"
              label="Your message"
              name="message"
              icon="pencil-alt"
            />
          </div>
          <div className="text-center">
            <MDBBtn outline color="info" type="submit">
              Send
              <MDBIcon far icon="paper-plane" className="ml-1" />
            </MDBBtn>
          </div>
        </form>
      </MDBCardBody>
    </MDBCard>
);
}

export default ContactForm;