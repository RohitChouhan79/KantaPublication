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
    setUser({
      [name]: value,
    });
  
    console.log(user); // Check if the state updates correctly
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user); // You can handle form submission here
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Orange Banner */}
      <div className="w-full bg-[#F4F4F1] py-16 mb-8">
        <h1 className="text-center text-[3.5rem] font-serif text-black">Contact Us</h1>
      </div>

      <div className="mx-auto px-10 flex gap-10">
        <div className="w-[60%] max-w-screen-lg">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                name="phone" // Added name
                placeholder="Phone No"
                className="px-5 py-2 border border-black rounded-full w-full bg-[#F4F4F1] text-black"
                required
                value={user.phone}
                onChange={handleChange}
              />
              <input
                type="text"
                name="first_name" // Added name
                placeholder="First Name"
                className="px-5 py-2 border border-black rounded-full w-full bg-[#F4F4F1] text-black"
                required
                value={user.first_name}
                onChange={handleChange}
              />
              <input
                type="text"
                name="last_name" // Added name
                placeholder="Last Name"
                className="px-5 py-2 border border-black rounded-full w-full bg-[#F4F4F1] text-black"
                required
                value={user.last_name}
                onChange={handleChange}
              />
            </div>

            <input
              type="text"
              name="subject" // Added name
              placeholder="Subject"
              className="px-5 py-2 border border-black rounded-full w-full bg-[#F4F4F1] text-black"
              required
              value={user.subject}
              onChange={handleChange}
            />
            <textarea
              name="message" // Added name
              placeholder="Message"
              className="px-5 py-2 border border-black rounded w-full h-48 bg-[#F4F4F1] text-black"
              required
              value={user.message}
              onChange={handleChange}
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[#F4F4F1] text-black p-3 rounded-lg hover:bg-[#e0623b]"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="w-[40%] max-w-screen-lg gap-5 ">
          <form className="space-y-4">
            

            <input
              type="text"
              className="px-5 py-2 border border-black rounded-full w-full bg-[#F5D549] text-black font-bold"
              value="Contact No: +91 74151-99273"
            />
            <input
              type="text"
              className="px-5 py-2 border border-black rounded-full w-full bg-[#F5D549] text-black font-bold"
              value="Email Id: kantapublication@gmail.com"
            />
            
          </form>
          <div>
          <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.3422144531623!2d77.45405827778544!3d23.184655640358255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6cbd30c17efbc257%3A0x5676346915323d5e!2sflourishers%20edge%20pvt%20ltd!5e0!3m2!1sen!2sin!4v1724303844897!5m2!1sen!2sin"
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="object-fill rounded-[14px] md:rounded-[38px] h-[300px] md:h-[450px]"
              />
          </div>
        </div>
      </div>
    </div>
  );
}
