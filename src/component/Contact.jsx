import React from "react";
import "../style/contact.css"

const Contact = () => {
  return (
    <div className="p-5" style={{backgroundColor:"#f7f9fb"}}>
      <div className="d-flex justify-content-center">
        <h1 className="text-center mb-5">
         Contact details
        </h1>
      </div>
    <div className="d-flex justify-content-center align-items-center">
        <form action="" className="form">
          <div className="form-field-div">
            <input type="text" id="name"/>
            <label htmlFor="name">Name</label>
          </div>
          <div className="form-field-div">
            <input type="email" id="email"/>
            <label htmlFor="email">Email</label>
          </div>
          <div className="form-field-div">
          <textarea name="" id="message"></textarea>
          <label htmlFor="message">Message</label>
          </div>
          <div>
            <button className="button">Send Message....</button>
          </div>
        </form>
    </div>
    </div>
  );
};

export default Contact;
