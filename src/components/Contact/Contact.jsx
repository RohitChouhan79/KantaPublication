'use client';

export default function Contact() {




const [user, setuser] = useState({
  first_name:"",
  last_name:"",
  email:"",
  subject:"",
  message:"",

})



const handleChange=(e)=>{
  const {name,value}=e.target;

setuser({...user ,
  [name]:value});


}






const handleSubmit=(e)=>{{
e.preventDefault()











}}





  return (
    <div className="min-h-screen bg-white py-12">
      {/* Orange Banner */}
      <div className="w-full bg-[#F7A034] py-16 mb-8">
        <h1 className="text-center text-[3.5rem] font-serif text-black">Contact Us</h1>
      </div>

      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-gray-100 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-serif mb-6">Get in Touch</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="First Name" className="p-3 border rounded w-full" required             value={user.first_name}        onChange={handleChange}      />
              <input type="text" placeholder="Last Name" className="p-3 border rounded w-full" required  value={user.last_name}   onChange={handleChange}/>
            </div>
            <input type="email" placeholder="Email" className="p-3 border rounded w-full" required   value={user.email }  onChange={handleChange} />
            <input type="text" placeholder="Subject" className="p-3 border rounded w-full" required  value={user.subject}    onChange={handleChange}/>
            <textarea placeholder="Message" className="p-3 border rounded w-full h-32" required   value={user.message}    onChange={handleChange}                ></textarea>
            <button type="submit" className="w-full bg-[#F07347] text-white p-3 rounded-lg hover:bg-[#e0623b]">Submit</button>
          </form>
        </div>

        {/* Contact Details */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-serif">Contact Information</h3>
          <p className="mt-2">📍 D1/191, Smart Space Apartment Phase 2, Danish Nagar, Bhopal, 462026</p>
          <p>📧 Email: <a href="mailto:kantapublication@gmail.com" className="text-blue-600">kantapublication@gmail.com</a></p>
          <p>📞 Phone: +91 74151-99273</p>
        </div>
      </div>
    </div>
  );
}
