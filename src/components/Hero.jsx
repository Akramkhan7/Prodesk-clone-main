import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="relative h-screen w-full bg-black text-white flex items-center justify-center overflow-hidden">
      
      {/* 1. Background Video */}
      {/* z-0 ensures it stays at the back */}
      <video
        autoPlay
        loop
        muted
        playsInline // Important for mobile support
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/video.mp4" type="video/mp4" />
        {/* Fallback if video fails to load */}
        Your browser does not support the video tag.
      </video>

      {/* 2. Dark Overlay */}
      {/* This sits on top of the video (z-10) but behind the text. 
          Adjust 'bg-black/60' to /40 or /70 if you want the video brighter/darker. */}
      <div className="absolute inset-0 bg-black/20 z-10"></div>

      {/* 3. Content Container */}
      {/* z-20 ensures text is on top of everything */}
      <div className="relative z-20 w-full max-w-[800px] px-8 md:px-12 flex flex-col items-start">
        
        {/* Main Heading */}
        <h1 
          className="font-bold text-white mb-6"
          style={{ 
            fontFamily: "'Raleway', sans-serif",
            fontSize: '39px', 
            lineHeight: '1.2',
            letterSpacing: '1px'
          }}
        >
          Engineering the Future of <br />
          Global Enterprises
        </h1>

        {/* Sub-headline */}
        <p 
          className="text-white mb-10 max-w-2xl"
          style={{
            fontFamily: "Helvetica, Arial, sans-serif",
            fontSize: '22px', 
            fontWeight: '400',
            lineHeight: '1.5'
          }}
        >
          From Cloud-Native Architecture to AI-Driven Automation—
          we build the systems that define your future.
        </p>

        {/* Button */}
<Link
  to="/contact"
  className="inline-block border border-white text-white hover:bg-white hover:text-black transition-colors duration-300"
  style={{
    fontFamily: "Helvetica, Arial, sans-serif",
    fontSize: '12px',
    letterSpacing: '2px',
    padding: '16px 32px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textDecoration: 'none'
  }}
>
  Start Your Transformation
</Link>


      </div>
    </div>
  );
}