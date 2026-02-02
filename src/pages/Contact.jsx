import React, { useState } from 'react';
import Footer from '../components/Footer';
import { supabase } from '../supabase'; // Import Supabase Client

export default function Contact() {
  // --- STATE 1: For the Original Hero Section (Hours Dropdown) ---
  const [hoursOpen, setHoursOpen] = useState(false);

  // --- STATE 2: For the Contact Form ---
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // --- IMAGES ---
  const sideImage = "/Frontview.webp";  
  const officeImage = "/officeLoaction.webp";
  const formSectionImage = "/contactForm.png"; 
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.778841445785!2d77.31346297610013!3d28.57640498661642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce4439c299999%3A0x6b7204431e7c95a5!2s91springboard%20Sector%202%20Noida!5e0!3m2!1sen!2sin!4v1700000000000";

  // --- FORM HANDLERS ---
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // --- SUPABASE INSERT LOGIC ---
      const { error } = await supabase
        .from('contacts') // Make sure you create this table in Supabase!
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: formData.message
          }
        ]);

      if (error) throw error;

      // Success
      setSuccess(true);
      setFormData({ name: '', email: '', phone: '', message: '' });

    } catch (error) {
      console.error("Error submitting form: ", error);
      alert("Error sending message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white min-h-screen">
      
      {/* ==================== SECTION 1: ORIGINAL WHATSAPP & ADDRESS HERO ==================== */}
      <section className="flex flex-col lg:flex-row w-full">
        
        {/* LEFT: CONTENT */}
        <div className="lg:w-1/2 w-full bg-white px-8 py-16 lg:px-20 lg:py-24 flex flex-col justify-center order-2 lg:order-1">
          
          <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-gray-500 mb-6" style={{ fontFamily: "'Raleway', sans-serif" }}>
            CONTACT US
          </h4>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 uppercase leading-tight" style={{ fontFamily: "'Raleway', sans-serif" }}>
            LET'S BUILD SOMETHING EXTRAORDINARY.
          </h2>
          
          <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-lg">
            Ready to transform your business? Our team of engineers and strategists is ready to help you navigate your next digital leap.
          </p>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/918851407750"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center w-fit bg-[#4F786D] text-white font-bold py-3 px-6 rounded mb-10"
          >
            <svg className="w-5 h-5 mr-3 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487z"/>
            </svg>
            Message us on WhatsApp
          </a>

          {/* Contact Details */}
          <div style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>
            <h4 className="text-lg font-bold uppercase text-gray-900 mb-2" style={{ fontFamily: "'Raleway', sans-serif" }}>
              PRODESK IT
            </h4>

            <p className="text-sm text-gray-600 mb-4 max-w-xs leading-relaxed">
              4th Floor, 91springboard, Plot No. D, 107, Vyapar Marg, D Block, Sector 2, Noida, Uttar Pradesh 201301
            </p>

            <div className="text-sm text-gray-600 space-y-1">
              <p>
                <a href="mailto:info@prodesk.in" className="hover:text-[#4F786D] transition-colors">info@prodesk.in</a>
              </p>
              <p>
                <a href="tel:8851407750" className="hover:text-[#4F786D] transition-colors">8851407750</a>
              </p>
            </div>

            {/* Hours Dropdown */}
            <div className="mt-6 text-sm text-gray-600 border-t border-gray-100 pt-4 max-w-xs">
              <button
                onClick={() => setHoursOpen(!hoursOpen)}
                className="flex items-center justify-between w-full text-left"
              >
                <span className="font-medium">
                  Open today 09:00 am – 05:00 pm
                </span>
                <svg
                  className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${
                    hoursOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  hoursOpen ? "max-h-96 mt-4" : "max-h-0"
                }`}
              >
                <ul className="space-y-1">
                  <li>Mon 09:00 am – 05:00 pm</li>
                  <li>Tue 09:00 am – 05:00 pm</li>
                  <li>Wed 09:00 am – 05:00 pm</li>
                  <li>Thu 09:00 am – 05:00 pm</li>
                  <li>Fri 09:00 am – 05:00 pm</li>
                  <li>Sat By Appointment</li>
                  <li>Sun Closed</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: HERO IMAGE */}
        <div className="lg:w-1/2 w-full relative min-h-[400px] lg:min-h-auto order-1 lg:order-2">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url("${sideImage}")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </div>
      </section>

      {/* ==================== SECTION 2: NEW CONTACT FORM ==================== */}
      <section className="flex flex-col lg:flex-row w-full bg-gray-50 border-t border-gray-100">
        
        {/* LEFT: THE FORM */}
        <div className="w-full lg:w-1/2 px-8 py-16 lg:px-20 lg:py-24">
          <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-gray-500 mb-4" style={{ fontFamily: "'Raleway', sans-serif" }}>
            SEND A MESSAGE
          </h4>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 uppercase" style={{ fontFamily: "'Raleway', sans-serif" }}>
            Start the Conversation
          </h2>

          {success ? (
            <div className="bg-green-100 border border-green-300 text-green-800 p-6 rounded text-center">
              <h3 className="font-bold text-lg">Message Sent!</h3>
              <p>We'll be in touch shortly.</p>
              <button onClick={() => setSuccess(false)} className="underline mt-4 text-sm">Send another</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8 max-w-lg">
              
              {/* Name Field */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border-b-2 border-gray-200 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-600 transition-colors bg-transparent"
                  placeholder="Enter your name"
                />
              </div>

              {/* Email & Phone Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border-b-2 border-gray-200 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-600 transition-colors bg-transparent"
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border-b-2 border-gray-200 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-600 transition-colors bg-transparent"
                    placeholder="+91..."
                  />
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full border-b-2 border-gray-200 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-600 transition-colors resize-none bg-transparent"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-4 bg-black text-white font-bold uppercase tracking-widest hover:bg-gray-800 transition-all ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {loading ? "SENDING..." : "SEND MESSAGE"}
              </button>
            </form>
          )}
        </div>

        {/* RIGHT: IMAGE WITH TEXT OVERLAY (Hidden on Mobile) */}
        <div className="hidden lg:block lg:w-1/2 relative min-h-[600px]">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url("${formSectionImage}")`, 
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
             {/* Dark Overlay with Text */}
             <div className="absolute inset-0 flex flex-col justify-end p-12 text-white">
                <h3 className="text-3xl font-bold mb-4 leading-tight" style={{ fontFamily: "'Raleway', sans-serif" }}>
                  "Prodesk IT delivers the engineering rigor and strategic vision essential for modern digital transformation."
                </h3>
                <div className="flex flex-col space-y-1 text-sm">
                   <span className="font-bold uppercase tracking-wider">Prodesk IT</span>
                   <span className="text-gray-300">Engineering & Digital Services</span>
                </div>
             </div>
          </div>
        </div>

      </section>

      {/* ==================== SECTION 3: MAP ==================== */}
      <section className="w-full h-[450px] relative overflow-hidden bg-gray-100">
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white z-10 pointer-events-none" />
        <a
          href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.778841445785!2d77.31346297610013!3d28.57640498661642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce4439c299999%3A0x6b7204431e7c95a5!2s91springboard%20Sector%202%20Noida!5e0!3m2!1sen!2sin!4v1700000000000"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-white text-gray-900 text-sm font-semibold px-4 py-3 rounded shadow-lg hover:bg-gray-50 transition"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-blue-600">
            <path d="M19.94 6.078l-7.273 14.546c-.129.265-.345.398-.648.398a.962.962 0 01-.17-.023.716.716 0 01-.557-.705V13.75H4.746a.716.716 0 01-.704-.557.736.736 0 01.045-.477.687.687 0 01.33-.341L18.962 5.1a.683.683 0 01.33-.08c.204 0 .375.073.511.217a.678.678 0 01.21.392.69.69 0 01-.073.448z"/>
          </svg>
          GET DIRECTIONS
        </a>
        <iframe
          title="91Springboard Sector 2 Noida"
          src={mapUrl}
          className="absolute inset-0 w-full h-full"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
        />
      </section>

      {/* ==================== SECTION 4: OFFICE IMAGE ==================== */}
      <section className="bg-white py-10 lg:py-16 text-center">
        <h4 
          className="text-xs font-bold tracking-[0.2em] uppercase text-gray-500 mb-10" 
          style={{ fontFamily: "'Raleway', sans-serif" }}
        >
          OFFICE LOCATION
        </h4>
        <div className="w-full h-[300px] md:h-[600px] relative">
          <img 
            src={officeImage} 
            alt="Prodesk Office Location" 
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}