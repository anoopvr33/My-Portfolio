import "../assets/css/messageform.css";

export default function MessageForm() {
  return (
    <section id="message">
      <div className="message-container">
        <div className="message-left">
          <span className="message-tag">Direct Message</span>

          <h2>Let's Build Something Amazing Together</h2>

          <p>
            Tell us about your project, business goals, HR requirements or IT
            requirements. Our team will get back to you within 24 hours.
          </p>

          <div className="message-info">
            <div>⚡ Fast Response</div>

            <div>🔒 Secure Communication</div>

            <div>🚀 Business Growth</div>
          </div>
        </div>

        <form className="message-form card">
          <div className="input-group">
            <input type="text" placeholder="Your Name" />
          </div>

          <div className="input-group">
            <input type="email" placeholder="Email Address" />
          </div>

          <div className="input-group">
            <input type="text" placeholder="Company Name" />
          </div>

          <div className="input-group">
            <input type="text" placeholder="Phone Number" />
          </div>

          <div className="input-group">
            <input type="text" placeholder="Subject" />
          </div>

          <div className="input-group">
            <textarea placeholder="Tell us about your project"></textarea>
          </div>

          <button type="submit">Send Message →</button>
        </form>
      </div>

      <form
        action="https://formsubmit.co/anoopvranoop33@gmail.com"
        method="POST"
      >
        <input type="hidden" name="_captcha" value="false" />

        <input
          type="hidden"
          name="_subject"
          value="New Nibhas Website Enquiry"
        />

        <input type="hidden" name="_template" value="table" />

        <input type="hidden" name="_next" value="http://localhost:5173" />

        <input type="text" name="name" placeholder="Your Name" required />

        <input type="email" name="email" placeholder="Email" required />

        <input type="text" name="phone" placeholder="Phone" />

        <input type="text" name="company" placeholder="Company" />

        <input type="text" name="subject" placeholder="Subject" />

        <textarea name="message" placeholder="Message" required />

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}
