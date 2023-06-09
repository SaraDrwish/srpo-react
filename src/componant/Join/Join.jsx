import React, { useRef } from 'react'
import "./join.css"
// import {bootstrap} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import emailjs from "@emailjs/browser"



function Join() {

  const form = useRef();

   const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_njoiiuf', 'template_dugg5bs', form.current, 'XekGWAkZmKhy1iUW5')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
      <div className="join">
          <hr />
          <div className="left-join">
              {/* <div className="line-join"></div> */}
              <span className='stroke-text'> Ready To</span><br></br>
              <span> do a wonderful Make Up</span> 
              <span className='stroke-text'> with us</span>
          </div>


      <div className="right-join">

            <Form ref={form}  onSubmit={sendEmail}>
                <Form.Group className="mx-3 " controlId="formBasicEmail">
                  {/* <Form.Label>Enter your Email address here </Form.Label> */}
                  <Form.Control className='emaill' type="email" name='user-email' placeholder="Enter your Email here" />
                  
                </Form.Group>
                <Button variant="primary main0" type="submit">
                        Join now
                </Button>
              
          </Form>
 
      </div>

      <hr />
      


    </div>
  )
}

export default Join
