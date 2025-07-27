import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000); // Hide message after 3 sec
  };

  return (
    <div className="flex flex-row contact-us-page items-center w-full bg-gray-50 p-4">
      {/* Left Section */}
      <div className="flex flex-col w-6/12 p-6">
        <h1 className="text-3xl font-bold text-center mt-4 md:mt-10">Customer Support</h1>
        <p className="text-center text-lg mt-4 px-4">For any inquiries or support, please contact us at:</p>
        <p className="text-center text-lg mt-4 px-4">
          Email:
          <a href="mailto:surjeetkaur961@gmail.com" className="text-customOrange hover:text-blue-500 ml-2">
            surjeetkaur961@gmail.com
          </a>
        </p>
      </div>

      {/* Right Section (Form) */}
      <div className="flex flex-col w-6/12 items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-4/6 text-black m-8 bg-opacity-10 border-4 border-white rounded-lg p-6 shadow-2xl"
        >
          <h2 className="font-bold text-black text-3xl py-4">Get in touch</h2>

          {submitted && (
            <div className="bg-green-100 text-green-800 font-medium p-3 mb-4 rounded text-center shadow">
              ✅ Your message has been sent!
            </div>
          )}

          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              rows="4"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button
            className="bg-customOrange hover:bg-orange-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
