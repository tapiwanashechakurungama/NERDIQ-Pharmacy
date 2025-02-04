import { useState } from "react";

export const ContactUsSection = () => {
  const [successMessage, setuccessMessage] = useState();
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [message,setMessage] = useState("")
  const submitform = (e) => {
    e.preventDefault();
    setuccessMessage("Well received we will get back to you")
    setEmail("")
    setMessage("")
    setName("")
  };
  return (
    <section className="relative bg-gray-100 py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Form Section */}
        <div className="md:w-1/2 p-6">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Contact Us</h2>
          <p className="mb-8 text-gray-600">
            We would love to hear from you! Please fill out the form below.
          </p>
          {/* Contact Form */}
          <form
            className="bg-white p-8 rounded-lg shadow-lg"
            onSubmit={submitform}
          >
            <div className="Message-feebcakc">
              <p className="p text-blue-500">{successMessage}</p>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Tapiwanashe Chakurungama"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="info@nerdiq.co.zw"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea
                className="w-full p-3 border border-gray-300 rounded-lg
              focus:outline-none focus:ring focus:ring-blue-500"
                name=""
                required
                value={message}
                onChange={(e)=> setMessage(e.target.value)}
                id=""
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gray-800 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Google Maps Section */}
        <div className="md:w-1/2 p-6">
          <h2 className="text-xl font-bold mb-4">Find Us Here</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d30377.796958940577!2d30.932441!3d-17.874947499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2szw!4v1738583673701!5m2!1sen!2szw"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};
