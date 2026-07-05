// components/ContactSection.tsx

"use client";

import { type FormEvent } from "react";
import { BsLinkedin } from "react-icons/bs";
import { SiWhatsapp, SiInstagram, SiGithub } from "react-icons/si";

// import { Resend } from "resend";

// const resend = new Resend("re_Pb9ERGJ9_ArB8NQzcQ3JkBbrphPysWh5M");

export default function ContactSection() {
  // const [data, setData] = useState({
  //   email: "",
  //   message: "",
  //   subject: "",
  // });
  // const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(
        "https://formsubmit.co/anoopvranoop33@gmail.com",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        },
      );

      if (response.ok) {
        alert("✅ Email sent successfully!");
        form.reset();
      } else {
        alert("❌ Failed to send email.");
      }
    } catch (error) {
      console.error(error);
      alert("❌ Something went wrong.");
    }

    // setLoading(false);
  };

  return (
    <section
      id="contact"
      className="bg-slate-950 text-white py-20 px-6 border-t border-slate-800"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.3em] text-rose-700 text-sm">
            Contact Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Let’s Work Together
          </h2>

          <p className="text-srose-700 mt-5 max-w-2xl mx-auto">
            Have a project idea or want to collaborate? Feel free to reach out
            through social platforms or send a message directly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-14">
          {/* Left Side */}
          <div>
            <h3 className="text-3xl font-bold mb-8">Connect With Me</h3>

            <div className="space-y-5">
              {/* WhatsApp */}
              <a
                href="https://wa.me/919745962256"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 bg-slate-900 border border-slate-800 hover:border-rose-700 transition p-5 rounded-2xl"
              >
                <div className="text-3xl text-green-500">
                  <SiWhatsapp />
                </div>

                <div>
                  <h4 className="font-semibold text-lg">WhatsApp</h4>

                  <p className="text-srose-700 text-sm">
                    Chat directly on WhatsApp
                  </p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/anoop-v-r-9b6b67275"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 bg-slate-900 border border-slate-800 hover:border-rose-700 transition p-5 rounded-2xl"
              >
                <div className="text-3xl text-blue-500">
                  <BsLinkedin />
                </div>

                <div>
                  <h4 className="font-semibold text-lg">LinkedIn</h4>

                  <p className="text-srose-700 text-sm">
                    Professional profile & networking
                  </p>
                </div>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 bg-slate-900 border border-slate-800 hover:border-rose-700 transition p-5 rounded-2xl"
              >
                <div className="text-3xl text-pink-500">
                  <SiInstagram />
                </div>

                <div>
                  <h4 className="font-semibold text-lg">Instagram</h4>

                  <p className="text-srose-700 text-sm">
                    Follow my creative journey
                  </p>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/anoopvr33"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 bg-slate-900 border border-slate-800 hover:border-rose-700 transition p-5 rounded-2xl"
              >
                <div className="text-3xl text-white">
                  <SiGithub />
                </div>

                <div>
                  <h4 className="font-semibold text-lg">GitHub</h4>

                  <p className="text-srose-700 text-sm">
                    Explore my projects & repositories
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
            <h3 className="text-3xl font-bold mb-8">Send Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}

              {/* Email */}
              <div>
                <label className="block mb-2 text-sm text-srose-700">
                  Your Email
                </label>

                <input
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-slate-950 border border-slate-700 focus:border-rose-700 outline-none rounded-xl px-5 py-4 transition"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-srose-700">
                  Subject
                </label>

                <input
                  name="subject"
                  type="text"
                  placeholder="Write your subject..."
                  className="w-full bg-slate-950 border border-slate-700 focus:border-rose-700 outline-none rounded-xl px-5 py-4 transition resize-none"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block mb-2 text-sm text-srose-700">
                  Message
                </label>
                <input
                  type="text"
                  name="_subject"
                  value="New Portfolio Contact"
                  readOnly
                  className="hidden"
                />

                <textarea
                  name="message"
                  rows={6}
                  placeholder="Write your message..."
                  className="w-full bg-slate-950 border border-slate-700 focus:border-rose-700 outline-none rounded-xl px-5 py-4 transition resize-none"
                />
              </div>
              <input type="hidden" name="_captcha" value="false" />

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-rose-700 hover:bg-rose-700 transition text-white font-semibold py-4 rounded-xl"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-slate-800 mt-20 pt-8 text-center text-slate-500">
          © 2026 Anoop V R. All rights reserved.
        </div>
      </div>
    </section>
  );
}
