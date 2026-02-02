import React from 'react';

export default function Contact() {

  const mapUrl =
  "https://www.google.com/maps?q=91Springboard%20Sector%202%20Noida%20Plot%20No.%20D%20107%20Vyapar%20Marg%20D%20Block%20Sector%202%20Noida%20Uttar%20Pradesh%20201301&output=embed&z=16&controls=0&disableDefaultUI=1";


  return (
    <section className="bg-white w-full h-[90vh] flex flex-col lg:flex-row">

      {/* LEFT CONTENT */}
      <div className="flex-1 px-6 md:px-12 py-16 flex flex-col justify-center">

        {/* CONTACT label */}
        <h2
          className="text-xs font-bold tracking-[0.22em] uppercase text-gray-400 mb-6"
          style={{ fontFamily: "'Raleway', sans-serif" }}
        >
          Contact
        </h2>

        {/* Heading */}
        <h3
          className="text-xl md:text-2xl font-bold uppercase text-gray-900 mb-4 leading-snug"
          style={{ fontFamily: "'Raleway', sans-serif" }}
        >
          LET&apos;S BUILD SOMETHING<br />EXTRAORDINARY.
        </h3>

        {/* Description */}
        <p
          className="text-sm text-gray-600 leading-relaxed mb-8 max-w-md"
          style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
        >
          Ready to transform your business? Our team of engineers and strategists
          is ready to help you navigate your next digital leap.
        </p>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/918851407750"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center w-fit bg-[#4F786D] hover:bg-[#3d5e54] text-white font-bold py-3 px-6 rounded mb-10 transition-colors"
        >
          <svg className="w-5 h-5 mr-3 fill-current" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487z"/>
          </svg>
          Message us on WhatsApp
        </a>

        {/* Address */}
        <h4
          className="text-lg font-bold uppercase text-gray-900 mb-2"
          style={{ fontFamily: "'Raleway', sans-serif" }}
        >
          PRODESK IT
        </h4>

        <p className="text-sm text-gray-600 mb-3 max-w-xs">
          91springboard, Plot No. D, 107, Vyapar Marg, D Block, Sector 2, Noida,
          Uttar Pradesh 201301
        </p>

        <p className="text-sm text-gray-600">
          <span className="font-bold">Phone Number:</span> 8851407750 <br />
          <span className="font-bold">Business Email:</span> info@prodesk.in
        </p>
      </div>

      {/* RIGHT MAP */}
<div className="flex-1 min-h-[420px] relative overflow-hidden">

  {/* Mask Google bottom info box */}
  <div className="absolute bottom-0 left-0 right-0 h-16 bg-white z-10 pointer-events-none" />

  {/* Get Directions Button */}
  <a
    href="https://www.google.com/maps/dir/?api=1&destination=91Springboard+Sector+2+Noida+Plot+No+D+107+Vyapar+Marg+D+Block+Sector+2+Noida+Uttar+Pradesh+201301"
    target="_blank"
    rel="noopener noreferrer"
    className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-white text-gray-900 text-sm font-semibold px-4 py-2 rounded shadow-md hover:bg-gray-100 transition"
  >
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
      <path d="M19.94 6.078l-7.273 14.546c-.129.265-.345.398-.648.398a.962.962 0 01-.17-.023.716.716 0 01-.557-.705V13.75H4.746a.716.716 0 01-.704-.557.736.736 0 01.045-.477.687.687 0 01.33-.341L18.962 5.1a.683.683 0 01.33-.08c.204 0 .375.073.511.217a.678.678 0 01.21.392.69.69 0 01-.073.448z"/>
    </svg>
    Get directions
  </a>

  {/* Google Map */}
  <iframe
    title="91Springboard Sector 2 Noida"
    src={mapUrl}
    className="absolute inset-0 w-full h-full"
    style={{ border: 0 }}
    loading="lazy"
  />
</div>


    </section>
  );
}
