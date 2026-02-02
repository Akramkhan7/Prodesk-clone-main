import React from 'react';

export default function OurStory() {
  return (
    <section className="bg-white pt-16 pb-24 px-8 md:px-16">
      {/* Container */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left spacer column */}
          <div className="lg:col-span-1"></div>

          {/* Main content */}
          <div className="lg:col-span-10">
            
            {/* Heading */}
            <h4
              className="text-3xl font-bold tracking-widest text-gray-900 uppercase mb-10"
              style={{ fontFamily: "'Raleway', sans-serif" }}
            >
              OUR STORY
            </h4>

            {/* Text + vertical line wrapper */}
            <div className="relative pl-12">
              
              {/* Vertical line */}
              <span className="absolute left-0 top-1 h-full w-[4px] bg-gray-800"></span>

              {/* Body text */}
              <div
                className="text-gray-700 text-lg leading-relaxed font-light space-y-6"
                style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
              >
                <p>
                  From Vision to Global Velocity.
                </p>

                <p>
                  Established in 2012 under the visionary leadership of Dr. Amit Maheshwari (former Technology Leader at Tech Mahindra), Prodesk IT began with a singular mission: to bridge the gap between complex business challenges and elegant engineering solutions. What started as a focused software development boutique has evolved into a global technology consultancy, trusted by enterprises to drive digital transformation.
                </p>

                <p>
                  Over the last decade, we have scaled our operations from a local team to a robust global workforce. Today, Prodesk is powered by over 150+ full-time engineers and strategists operating from 5 global delivery centers. Our journey is defined not just by our growth, but by the tangible impact we create for our clients—turning ambitious ideas into mission-critical realities.
                </p>
              </div>
            </div>

            {/* Button */}
            <div className="mt-14">
              <a
              href="/success-stories"
                className="inline-block border border-black text-black px-10 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-black hover:text-white transition-colors duration-300"
                style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
              >
                Find out more
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
