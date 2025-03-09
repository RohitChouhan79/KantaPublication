'use client';

import { useState } from "react";

export default function Contact() {
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //        geter seter func 
    console.log(user);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="w-full bg-[#F4F4F1] py-24 mb-6 text-center">
        <h1 className="text-3xl md:text-[3.5rem] font-serif text-black">Contact Us</h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row gap-8 md:gap-10">
        <div className="w-full md:w-3/5">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="px-5 py-2 border border-black rounded-full w-full bg-[#F4F4F1] text-black"
                required
                value={user.email}
                onChange={handleChange}
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone No"
                className="px-5 py-2 border border-black rounded-full w-full bg-[#F4F4F1] text-black"
                required
                value={user.phone}
                onChange={handleChange}
              />
              <input
                type="text"
                name="first_name"
                placeholder="First Name"
                className="px-5 py-2 border border-black rounded-full w-full bg-[#F4F4F1] text-black"
                required
                value={user.first_name}
                onChange={handleChange}
              />
              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                className="px-5 py-2 border border-black rounded-full w-full bg-[#F4F4F1] text-black"
                required
                value={user.last_name}
                onChange={handleChange}
              />
            </div>

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="px-5 py-2 border border-black rounded-full w-full bg-[#F4F4F1] text-black"
              required
              value={user.subject}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Message"
              className="px-5 py-2 border border-black rounded w-full h-40 md:h-48 bg-[#F4F4F1] text-black"
              required
              value={user.message}
              onChange={handleChange}
            ></textarea>
            <div className="flex justify-end px-4 sm:px-8">
  <button
    type="submit"
    className="bg-[#F4F4F1]                            text-black px-5 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-[#e0623b] transition-all "
  >
    Submit
  </button>
</div>

          </form>
        </div>
        
        <div className="w-full md:w-2/5 space-y-4">
          <div className="space-y-2">
            <p className="px-5 py-2 border border-black rounded-full bg-[#F5D549] text-black font-bold">
              Contact No: +91 74151-99273
            </p>
            <p className="px-5 py-2 border border-black rounded-full bg-[#F5D549] text-black font-bold">
              Email Id: kantapublication@gmail.com
            </p>
          </div>
          
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.6075620210922!2d77.4515332750969!3d23.184518979060563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c432232c97de1%3A0xb51e23a24cd21b20!2sSmart%20Space%20danish%20nagar!5e0!3m2!1sen!2sin!4v1738380373101!5m2!1sen!2sin"
              width="100%"
              height="300"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="object-cover rounded-[14px] md:rounded-[38px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
