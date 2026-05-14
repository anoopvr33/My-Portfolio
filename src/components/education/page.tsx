// components/EducationExperience.tsx

"use client";

export default function EducationExperience() {
  return (
    <section className="bg-slate-950 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.3em] text-cyan-400 text-sm">
            Qualification & Career
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Education & Experience
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-14">
          
          {/* Education */}
          <div>
            <h3 className="text-3xl font-bold mb-10 text-cyan-400">
              Education
            </h3>

            <div className="space-y-8 border-l border-slate-800 pl-8">
              
              {/* Item */}
              <div className="relative">
                <div className="absolute -left-[41px] top-2 w-4 h-4 rounded-full bg-cyan-400"></div>

                <p className="text-sm text-slate-400 mb-2">
                  2023 Oct - 2024 Feb
                </p>

                <h4 className="text-2xl font-semibold">
                  MERN Full Stack Development
                </h4>

                <p className="text-slate-400 mt-2">
                  TechMindz, Kochi
                </p>
              </div>

              {/* Item */}
              <div className="relative">
                <div className="absolute -left-[41px] top-2 w-4 h-4 rounded-full bg-cyan-400"></div>

                <p className="text-sm text-slate-400 mb-2">
                  2020 - 2023
                </p>

                <h4 className="text-2xl font-semibold">
                  Computer Engineering
                </h4>

                <p className="text-slate-400 mt-2">
                  SreeRama Gov. College, Triprayar
                </p>
              </div>

              {/* Item */}
              <div className="relative">
                <div className="absolute -left-[41px] top-2 w-4 h-4 rounded-full bg-cyan-400"></div>

                <p className="text-sm text-slate-400 mb-2">
                  2018 - 2020
                </p>

                <h4 className="text-2xl font-semibold">
                  Computer Science
                </h4>

                <p className="text-slate-400 mt-2">
                  Valapad HSS
                </p>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-3xl font-bold mb-10 text-cyan-400">
              Professional Experience
            </h3>

            <div className="space-y-10 border-l border-slate-800 pl-8">
              
              {/* Experience 1 */}
              <div className="relative">
                <div className="absolute -left-[41px] top-2 w-4 h-4 rounded-full bg-cyan-400"></div>

                <p className="text-sm text-slate-400 mb-2">
                  2025 July - Present
                </p>

                <h4 className="text-2xl font-semibold">
                  Jr Full-Stack Developer
                </h4>

                <p className="text-cyan-400 mt-2 mb-4">
                  Nibhas IT Solutions — Thrissur, Kerala
                </p>

                <ul className="space-y-3 text-slate-300">
                  <li>
                    • Developed scalable web applications using React (Vite)
                    with clean architecture and reusable components.
                  </li>

                  <li>
                    • Built responsive and interactive UIs using Bootstrap,
                    Material UI, and Framer Motion.
                  </li>

                  <li>
                    • Integrated REST APIs and Razorpay payment gateway for
                    secure transactions.
                  </li>

                  <li>
                    • Managed complex application state using Redux.
                  </li>

                  <li>
                    • Collaborated with team members using Git for version
                    control and code reviews.
                  </li>
                </ul>
              </div>

              {/* Experience 2 */}
              <div className="relative">
                <div className="absolute -left-[41px] top-2 w-4 h-4 rounded-full bg-cyan-400"></div>

                <p className="text-sm text-slate-400 mb-2">
                  Internship / Training
                </p>

                <h4 className="text-2xl font-semibold">
                  MERN-Stack Development Trainee
                </h4>

                <p className="text-cyan-400 mt-2 mb-4">
                  Druv360 — Kochi, Kerala
                </p>

                <ul className="space-y-3 text-slate-300">
                  <li>
                    • Managed end-to-end application development using React.js
                    and Node.js.
                  </li>

                  <li>
                    • Built high-performance applications with real-time
                    features using WebSocket.
                  </li>

                  <li>
                    • Designed and optimized MongoDB database structures.
                  </li>

                  <li>
                    • Integrated Passport.js (JWT Authentication), Twilio, and
                    Razorpay.
                  </li>

                  <li>
                    • Deployed applications using AWS (EC2, S3), NGINX, and PM2.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}