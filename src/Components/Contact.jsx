import { useState } from "react";
import ContactImg from "../assets/contact.png";

export const Contact = () => {
  const formInitialization = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialization);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    let response = await fetch(
      `${
        import.meta.env.MODE === "development"
          ? "http://localhost:4500"
          : "https://portfolio-backend-1b5p.onrender.com"
      }/contact`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formDetails),
      }
    );

    setButtonText("Send");

    let result = await response.json();
    setFormDetails(formInitialization);

    if (result.success) {
      setStatus({ success: true, message: "Message sent successfully!" });
    } else {
      setStatus({
        success: false,
        message: "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <section
      className="relative w-full px-4 sm:px-8 py-16 sm:py-20 flex justify-center items-center text-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${ContactImg})` }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-purple-900/60"></div>

      {/* Form wrapper */}
      <div className="relative z-10 w-full max-w-2xl sm:max-w-3xl bg-white/10 backdrop-blur-xl 
                      border border-white/20 rounded-2xl p-6 sm:p-10 shadow-2xl">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-10 text-center tracking-wide">
          Get In Touch
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">

            {/* First Name */}
            <input
              type="text"
              value={formDetails.firstName}
              placeholder="First Name"
              onChange={(e) => onFormUpdate("firstName", e.target.value)}
              className="p-3 sm:p-4 rounded-xl text-black bg-white/90 outline-none 
                         focus:ring-2 focus:ring-purple-400"
            />

            {/* Last Name */}
            <input
              type="text"
              value={formDetails.lastName}
              placeholder="Last Name"
              onChange={(e) => onFormUpdate("lastName", e.target.value)}
              className="p-3 sm:p-4 rounded-xl text-black bg-white/90 outline-none 
                         focus:ring-2 focus:ring-purple-400"
            />

            {/* Email */}
            <input
              type="email"
              value={formDetails.email}
              placeholder="Email Address"
              onChange={(e) => onFormUpdate("email", e.target.value)}
              className="p-3 sm:p-4 rounded-xl text-black bg-white/90 outline-none 
                         focus:ring-2 focus:ring-purple-400 sm:col-span-2"
            />

            {/* Phone */}
            <input
              type="tel"
              value={formDetails.phone}
              placeholder="Phone No."
              onChange={(e) => onFormUpdate("phone", e.target.value)}
              className="p-3 sm:p-4 rounded-xl text-black bg-white/90 outline-none 
                         focus:ring-2 focus:ring-purple-400 sm:col-span-2"
            />

            {/* Message */}
            <textarea
              value={formDetails.message}
              placeholder="Message"
              onChange={(e) => onFormUpdate("message", e.target.value)}
              className="p-3 sm:p-4 h-28 sm:h-32 rounded-xl text-black bg-white/90 outline-none 
                         focus:ring-2 focus:ring-purple-400 sm:col-span-2"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-6 sm:mt-8 w-full bg-white text-purple-800 font-bold py-3 
                       rounded-full text-lg sm:text-xl shadow-md
                       hover:bg-purple-900 hover:text-white transition-all"
          >
            {buttonText}
          </button>

          {/* Status Message */}
          {status.message && (
            <p
              className={`mt-4 text-center text-lg ${
                status.success ? "text-green-300" : "text-red-300"
              }`}
            >
              {status.message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};
