import React from "react";
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <section className="contact-section">
      <div className="container text-center">

        <h1 className="section-title mb-4">Let's Connect</h1>
        <p className="lead mb-5">I’d love to hear from you! Feel free to reach out regarding opportunities, collaborations, or just to say hi.</p>

        <div className="row justify-content-center">
          <div className="col-md-8">

            <form 
              action="https://formspree.io/f/your-form-id" 
              method="POST"
              className="contact-form shadow p-4 rounded bg-white"
            >
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input type="text" name="name" id="name" className="form-control" required />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input type="email" name="email" id="email" className="form-control" required />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label">Your Message</label>
                <textarea name="message" id="message" rows="5" className="form-control" required></textarea>
              </div>

              <button type="submit" className="btn btn-primary mt-2">Send Message</button>
            </form>

            <div className="contact-details mt-5">
              <p>Email: <a href="mailto:liaalmidaclemente@gmail.com">liaalmidaclemente@gmail.com</a></p>
              <p>LinkedIn: <a href="https://www.linkedin.com/in/liaalmida/" target="_blank" rel="noreferrer">linkedin.com/in/liaalmida</a></p>
              <p>GitHub: <a href="https://github.com/liaclemente22" target="_blank" rel="noreferrer">github.com/liaclemente22</a></p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
