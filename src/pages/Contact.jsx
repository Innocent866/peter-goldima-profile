import React, { useState } from "react";
import "../style/contact.css";
import emailjs from "emailjs-com";

const Contact = () => {
  const [isSending, setIsSending] = useState(false);
  const [formState, setFormState] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      setIsSending(true);
  
      emailjs
        .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formState, "YOUR_USER_ID")
        .then(() => {
          alert("Message sent successfully!");
          setFormState({
            user_name: "",
            user_email: "",
            message: "",
          });
        })
        .catch((error) => {
          alert("Failed to send the message. Please try again.");
          console.error("Error:", error);
        })
        .finally(() => {
          setIsSending(false);
        });
    } catch (error) {
      console.error("Unexpected error:", error);
      alert("An unexpected error occurred.");
      setIsSending(false);
    }
  };
  

  return (
    <div style={{ backgroundColor: "#f7f9fb" }}>
      <div className="contact-title">
        <h1 className="text-center fw-bold p-5">CONTACT DETAILS</h1>
      </div>
      <div className="container d-flex justify-content-center pb-5 align-items-center">
        <form action="" onSubmit={handleSubmit} className="form">
          <div className="form-field-div">
            <input
              type="text"
              id="name"
              value={formState.user_name}
              onChange={(e) =>
                setFormState({ ...formState, user_name: e.target.value })
              }
            />
            <label htmlFor="name">Name</label>
          </div>
          <div className="form-field-div">
            <input
              type="email"
              id="email"
              value={formState.user_email}
              onChange={(e) =>
                setFormState({ ...formState, user_email: e.target.value })
              }
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="form-field-div">
            <textarea
              id="message"
              name="message"
              value={formState.message}
              onChange={(e) =>
                setFormState({
                  ...formState,
                  message: e.target.value,
                })
              }
              rows="4"
              required
            ></textarea>{" "}
            <label htmlFor="message">Message</label>
          </div>
          <div>
            <button className="button" disabled={isSending}>{isSending ? "Sending..." : "Send Message"}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;