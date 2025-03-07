import { useState } from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const PrescriptionsPage = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, phone, email, file });
    toast.success("Request successfully made");
    setName("");
    setPhone("");
    setEmail("");
    setFile(null);
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto flex flex-col md:flex-row">
        {/* Left Side - Form */}
        <div className="md:w-1/2 p-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Request a Prescription
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Please fill out the form below to upload your prescription. Our team
            will review it and get back to you shortly.
          </p>
          <motion.form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4">
              <label
                className="block text-left text-gray-700 mb-2"
                htmlFor="name"
              >
                Full Name
              </label>
              <input
                type="text"
                placeholder="eg  : Tapiwanashe Chakurungama"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-left text-gray-700 mb-2"
                htmlFor="phone"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="+263733517788"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-left text-gray-700 mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="info@nerdiq.co.zw"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-left text-gray-700 mb-2"
                htmlFor="file"
              >
                Upload Prescription
              </label>
              <input
                type="file"
                id="file"
                placeholder="Nashy prescription"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={(e) => setFile(e.target.files[0])}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>

            <motion.button
              type="submit"
              className="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Submit Request
            </motion.button>
          </motion.form>
        </div>
        <div className="md:w-1/2 bg-blue-50 p-8 flex flex-col justify-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Why Upload Your Prescription?
          </h3>
          <p className="text-gray-600 mb-4">
            Uploading your prescription allows our pharmacists to verify your
            medication needs quickly and accurately. This ensures that you
            receive the right medication for your health condition without
            delay.
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>Fast and convenient service.</li>
            <li>Expert consultation from our pharmacists.</li>
            <li>Secure handling of your personal information.</li>
          </ul>
          <p className="text-gray-600">
            If you have any questions or need assistance, feel free to contact
            us at +263 771 383 631 or email us at info@nerdiq.co.zw
          </p>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};
