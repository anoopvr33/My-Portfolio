// components/ContactSection.tsx

"use client";

import { useState } from "react";
import { BsLinkedin } from "react-icons/bs";
import { SiWhatsapp, SiInstagram, SiGithub } from "react-icons/si";

import { Resend } from "resend";

const resend = new Resend("re_Pb9ERGJ9_ArB8NQzcQ3JkBbrphPysWh5M");

export default function ContactSection() {
  const [data, setData] = useState({
    email: "",
    message: "",
    subject: "",
  });

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    resend.emails
      .send({
        from: data.email,
        to: "anoopvranoop33@gmail.com",
        subject: data.subject,
        html: "<p>" + data.message + "</p>",
      })
      .then(() => {
        alert("Email sent successfully!");
      });
  };

  return (
    <section className="bg-slate-950 text-white py-20 px-6 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.3em] text-cyan-400 text-sm">
            Contact Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Let’s Work Together
          </h2>

          <p className="text-slate-400 mt-5 max-w-2xl mx-auto">
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
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 bg-slate-900 border border-slate-800 hover:border-cyan-400 transition p-5 rounded-2xl"
              >
                <div className="text-3xl text-green-500">
                  <SiWhatsapp />
                </div>

                <div>
                  <h4 className="font-semibold text-lg">WhatsApp</h4>

                  <p className="text-slate-400 text-sm">
                    Chat directly on WhatsApp
                  </p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 bg-slate-900 border border-slate-800 hover:border-cyan-400 transition p-5 rounded-2xl"
              >
                <div className="text-3xl text-blue-500">
                  <BsLinkedin />
                </div>

                <div>
                  <h4 className="font-semibold text-lg">LinkedIn</h4>

                  <p className="text-slate-400 text-sm">
                    Professional profile & networking
                  </p>
                </div>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 bg-slate-900 border border-slate-800 hover:border-cyan-400 transition p-5 rounded-2xl"
              >
                <div className="text-3xl text-pink-500">
                  <SiInstagram />
                </div>

                <div>
                  <h4 className="font-semibold text-lg">Instagram</h4>

                  <p className="text-slate-400 text-sm">
                    Follow my creative journey
                  </p>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 bg-slate-900 border border-slate-800 hover:border-cyan-400 transition p-5 rounded-2xl"
              >
                <div className="text-3xl text-white">
                  <SiGithub />
                </div>

                <div>
                  <h4 className="font-semibold text-lg">GitHub</h4>

                  <p className="text-slate-400 text-sm">
                    Explore my projects & repositories
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
            <h3 className="text-3xl font-bold mb-8">Send Message</h3>

            <form onSubmit={sendEmail} className="space-y-6">
              {/* Name */}

              {/* Email */}
              <div>
                <label className="block mb-2 text-sm text-slate-400">
                  Your Email
                </label>

                <input
                  onChange={onChange}
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-slate-950 border border-slate-700 focus:border-cyan-400 outline-none rounded-xl px-5 py-4 transition"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-slate-400">
                  Subject
                </label>

                <input
                  onChange={onChange}
                  name="subject"
                  type="text"
                  placeholder="Write your subject..."
                  className="w-full bg-slate-950 border border-slate-700 focus:border-cyan-400 outline-none rounded-xl px-5 py-4 transition resize-none"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block mb-2 text-sm text-slate-400">
                  Message
                </label>

                <textarea
                  onChange={onChange}
                  name="message"
                  rows={6}
                  placeholder="Write your message..."
                  className="w-full bg-slate-950 border border-slate-700 focus:border-cyan-400 outline-none rounded-xl px-5 py-4 transition resize-none"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-cyan-500 hover:bg-cyan-400 transition text-black font-semibold py-4 rounded-xl"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-slate-800 mt-20 pt-8 text-center text-slate-500">
          © 2026 Your Name. All rights reserved.
        </div>
      </div>
    </section>
  );
}
