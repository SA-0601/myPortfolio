import React from "react";
// import thankyou from "../images/Thankyou.jpg";

function Contact() {
  return (
    <div>
      <h2 className="heading-secondary">Contact</h2>
      <div className="contact-container">
        <div className="form-container">
          <p>Feel free to Contact me by submitting the form below and I will <br></br>get back to you as soon as possible</p>
          <form action="https://formbold.com/s/3qDEZ" method="POST">
            <label>
              Name:
              <input type="text" name="name" placeholder="Enter Name"></input>
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                placeholder="Enter your Email Id"
              ></input>
            </label>
            <label>
              Your message:
              <textarea name="message" placeholder="Enter Message"></textarea>
            </label>
            <button type="submit">Send</button>
          </form>
        </div>
        {/* <div className="image-container">
          <img src={thankyou} alt="thankyou"></img>
        </div> */}
      </div>
    </div>
  );
}
export default Contact;
