import React from 'react';
import Footer from './Footer';
import { useLocation, useNavigate } from "react-router-dom";

// This component defines the standard structure for "About," "Values," etc.
// It accepts props for the varying content.
export default function PageLayout({ 
  heroImageUrl, 
  heroTitle, 
  sectionHeading, 
  children // 'children' is a special React prop for whatever you put inside the opening/closing tags of this component
}) {
  const navigate = useNavigate();
const location = useLocation();

const handleFindOutMore = () => {
  if (location.pathname === "/insights") {
    navigate("/success-stories");
  } else {
    navigate("/insights");
  }
};

  return (
    <div className="bg-white min-h-screen">
      
      {/* ==================== 1. REUSABLE HERO BANNER ==================== */}
      <section className="relative w-full h-[30vh] md:h-[40vh] flex items-center justify-center overflow-hidden">
        
        {/* Background Image - Passed via prop */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url("${heroImageUrl}")`, 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Dark Overlay - Standardized */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-6">
          {/* Hero Title - Passed via prop */}
          <h1 
            className="text-3xl md:text-5xl font-bold tracking-widest uppercase mb-8"
            style={{ fontFamily: "'Raleway', sans-serif" }}
          >
            {heroTitle}
          </h1>
          
          {/* Standard Button */}
  <button
  onClick={handleFindOutMore}
  className="inline-block border-2 border-white text-white px-8 py-3 text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-colors duration-300"
  style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
>
  Find out more
</button>


        </div>
      </section>

      {/* ==================== 2. REUSABLE CONTENT CONTAINER ==================== */}
      <section className="py-16 bg-white text-gray-800">
        {/* Standardized width and padding */}
        <div className="max-w-[760px] mx-auto px-6">

          {/* Section Heading - Passed via prop */}
          <div className="mb-9 text-center">
            <h2
              className="text-sm font-semibold tracking-[0.35em] uppercase text-gray-500"
              style={{ fontFamily: "'Raleway', sans-serif" }}
            >
              {sectionHeading}
            </h2>
          </div>

          {/* Inner Text Content - Passed via 'children' prop */}
          {/* Standardized font styles for the body content */}
          <div
            className="text-gray-600 text-[17px] leading-[1.9] space-y-8 font-light"
            style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
          >
             {children}
          </div>

        </div>
      </section>

      {/* Standard Footer */}
      <Footer />
    </div>
  );
}