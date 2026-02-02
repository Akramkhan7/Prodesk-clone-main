import React, { useState } from 'react';
import PageLayout from '../components/PageLayout';
import { supabase } from '../supabase';

export default function Careers() {
  const heroImage = "/carrers.jpg";
  const title = "Welcome to Prodesk";
  const heading = "CAREERS AT PRODESK";

  // --- FORM STATE ---
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    linkedin: ''
  });
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // --- HANDLERS ---
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  // --- NEW PHONE VALIDATION ---
  // This regex allows +, spaces, dashes, and 10-15 digits
  const phoneRegex = /^\+?[\d\s-]{10,15}$/; 
  
  if (!phoneRegex.test(formData.phone)) {
    alert("Please enter a valid phone number (at least 10 digits).");
    return;
  }
  // ----------------------------

  if (!file) {
    alert("Please upload your CV/Resume.");
    return;
  }

  setLoading(true);
  // ... rest of your Supabase code

    try {
      // 1. Clean filename (replace spaces with underscores)
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}_${formData.name.replace(/\s+/g, '_')}.${fileExt}`;

      // 2. Upload File to Supabase Storage
      const { data: uploadData, error: uploadError } = await supabase
        .storage
        .from('resumes')
        .upload(fileName, file);

      if (uploadError) throw new Error("Upload Error: " + uploadError.message);

      // 3. Get Public URL
      const { data: urlData } = supabase
        .storage
        .from('resumes')
        .getPublicUrl(fileName);

      // 4. Save Applicant Data to Database
      const { error: dbError } = await supabase
        .from('applicants')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            position: formData.position,
            linkedin: formData.linkedin,
            cv_url: urlData.publicUrl
          }
        ]);

      if (dbError) throw new Error("Database Error: " + dbError.message);

      // 5. Success
      setSuccess(true);
      setFormData({ name: '', email: '', phone: '', position: '', linkedin: '' });
      setFile(null);

    } catch (error) {
      console.error("Submission Error:", error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageLayout heroImageUrl={heroImage} heroTitle={title} sectionHeading={heading}>
      
      {/* --- TEXT CONTENT --- */}
      <p>
        <strong className="text-gray-800 font-semibold block mb-2">Build the Future. Build Your Legacy.</strong>
      </p>
      <p className="mb-8">
        At Prodesk IT, we are not just building software; we are building the next generation of technology leaders. 
        Whether you are a seasoned architect or a fresh graduate, Prodesk offers you a platform to challenge the status quo.
      </p>

      {/* --- APPLICATION FORM --- */}
      <div className="mt-16 pt-10 border-t border-gray-200">
        <h3 className="text-2xl font-bold uppercase tracking-wide text-gray-900 mb-2">READY TO JOIN US?</h3>
        <p className="text-gray-600 mb-8">Don't wait for the perfect opportunity. Create it.</p>

        {success ? (
          <div className="bg-green-50 border border-green-200 text-green-800 p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-2">Application Received!</h3>
            <p className="mb-4">Thank you! Our HR team will review your CV shortly.</p>
            <button onClick={() => setSuccess(false)} className="text-sm font-bold text-green-700 underline">
              Submit another application
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-lg border border-gray-100 space-y-6">
            
            {/* Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Full Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full border-b-2 border-gray-300 bg-transparent py-3 focus:border-blue-600 outline-none" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Email Address</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full border-b-2 border-gray-300 bg-transparent py-3 focus:border-blue-600 outline-none" placeholder="john@example.com" />
              </div>
            </div>

            {/* Phone & Position */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Phone Number</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="w-full border-b-2 border-gray-300 bg-transparent py-3 focus:border-blue-600 outline-none" placeholder="+91..." />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Position</label>
                <select name="position" value={formData.position} onChange={handleChange} required className="w-full border-b-2 border-gray-300 bg-transparent py-3 focus:border-blue-600 outline-none">
                  <option value="" disabled>Select a Role</option>
                  <option value="Software Engineer">Software Engineer</option>
                  <option value="Mobile Developer">Mobile Developer</option>
                  <option value="Data Scientist">Data Scientist</option>
                  <option value="Business Development">Business Development</option>
                  <option value="Internship">Internship</option>
                </select>
              </div>
            </div>

            {/* LinkedIn & File */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase text-gray-500 mb-2">LinkedIn URL</label>
                <input type="url" name="linkedin" value={formData.linkedin} onChange={handleChange} className="w-full border-b-2 border-gray-300 bg-transparent py-3 focus:border-blue-600 outline-none" placeholder="https://linkedin.com/in/..." />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Upload CV (PDF)</label>
                <input type="file" onChange={handleFileChange} accept=".pdf,.doc,.docx" required className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
              </div>
            </div>

            <button type="submit" disabled={loading} className="w-full py-4 bg-black text-white font-bold uppercase tracking-widest hover:bg-gray-800 transition-all">
              {loading ? "Submitting..." : "Submit Application"}
            </button>
            
          </form>
        )}
      </div>
    </PageLayout>
  );
}