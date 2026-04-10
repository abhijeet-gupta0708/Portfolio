import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef();
const [loading, setLoading] = useState(false);
const [status, setStatus] = useState("");

const sendEmail = (e) => {
  e.preventDefault();
  setLoading(true);

  emailjs
    .sendForm(
      "service_3meg2fj",
      "template_1cu53lf",
      formRef.current,
      "brZxb-7UxOSHjzQqY"
    )
    .then(() => {
      setStatus("success");
      setLoading(false);
      formRef.current.reset();
    })
    .catch(() => {
      setStatus("error");
      setLoading(false);
    });
};

  return (
    <section
      id="contact"
      className="min-h-screen max-w-full bg-[var(--bg)] text-black px-6 md:px-16 py-20 overflow-hidden"
    >
      {/* HEADING */}
      <div className="text-center mb-16">
        <p className="font-bold text-2xl text-[var(--primary-color)]">
          CONTACT
        </p>
        <h2 className="text-4xl md:text-6xl font-bold text-[var(--secondary-color)]">
          Let's <span className="text-[var(--primary-color)]">Connect</span>
        </h2>
        <p className="mt-4 max-w-xl mx-auto">
          Currently open to new opportunities, research collaborations,
          and creative partnerships.
        </p>
      </div>

      {/* MAIN GRID */}
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">

        {/* LEFT SIDE */}
        <div>
          <h3 className="text-2xl font-semibold mb-8">
            Contact Details
          </h3>

          <div className="space-y-6">

            <div>
              <a
                href="mailto:abhijeet.sci02@gmail.com"
                className="underline text-[var(--secondary-color)]"
              >
                EMAIL
              </a>
              <p className="text-lg">abhijeet.sci02@gmail.com</p>
            </div>

            <div>
              <a
                href="https://www.linkedin.com/in/abhijeet-gupta-b2b30135b"
                target="_blank"
                className="underline text-[var(--secondary-color)]"
              >
                LINKEDIN
              </a>
              <p className="text-lg">Abhijeet Gupta</p>
            </div>

            <div>
              <a
                href="https://github.com/abhijeet-gupta0708"
                target="_blank"
                className="underline text-[var(--secondary-color)]"
              >
                GITHUB
              </a>
              <p className="text-lg">Abhijeet Gupta</p>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <div className="bg-[#0f0f0f] p-8 rounded-2xl shadow-lg border border-gray-800">

          <form ref={formRef} onSubmit={sendEmail} className="space-y-6">

            {/* NAME */}
            <div>
              <label className="text-sm text-gray-400">Your Name</label>
              <input
                type="text"
                name="user_name"
                required
                placeholder="Enter your name"
                className="w-full mt-2 p-3 rounded-lg bg-black text-white border border-gray-700 focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="text-sm text-gray-400">Email Address</label>
              <input
                type="email"
                name="user_email"
                required
                placeholder="hello@example.com"
                className="w-full mt-2 p-3 rounded-lg bg-black text-white border border-gray-700 focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* MESSAGE */}
            <div>
              <label className="text-sm text-gray-400">Message</label>
              <textarea
                rows="4"
                name="message"
                required
                placeholder="Tell me about your project..."
                className="w-full mt-2 p-3 rounded-lg bg-black text-white border border-gray-700 focus:outline-none focus:border-blue-500"
              ></textarea>
            </div>

            {/* BUTTON */}
            <button
  type="submit"
  disabled={loading}
  className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition font-semibold"
>
  {loading ? "Sending..." : "Send Message"}
</button>

          </form>

        </div>

      </div>
    </section>
  );
}