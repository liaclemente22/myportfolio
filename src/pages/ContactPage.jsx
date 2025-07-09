import React from "react";
import "./ContactPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const ContactPage = () => {
  return (
    <section className="contact-section">
      <div className="container text-center">
        <h1 className="section-title mb-4">Let's Connect</h1>
        <p className="lead mb-5">
          I’d love to hear from you! Feel free to reach out regarding
          opportunities, collaborations, or just to say hi.
        </p>

        <div className="row justify-content-center">
          <div className="col-md-8">
            {/* Contact Form */}
            <form
              action="https://formspree.io/f/mzzglynk"
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

            {/* Social Icons */}
            <div className="contact-icons mt-5 d-flex justify-content-center gap-4">
              <FontAwesomeIcon icon={faEnvelope} size="2x" className="text-primary" />
              <FontAwesomeIcon icon={faLinkedin} size="2x" className="text-primary" />
              <FontAwesomeIcon icon={faGithub} size="2x" className="text-dark" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
