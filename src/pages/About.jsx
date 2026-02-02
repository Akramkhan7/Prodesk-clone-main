import React from 'react';
import PageLayout from '../components/PageLayout'; // Import the new layout

export default function About() {
  // Define specific data for this page
  const heroImage = "https://img1.wsimg.com/isteam/getty/1495819409";
  const title = "Welcome to Prodesk";
  const heading = "ABOUT US";

  return (
    // Use the Layout component and pass data as props
    <PageLayout heroImageUrl={heroImage} heroTitle={title} sectionHeading={heading}>
      
      {/* Everything inside here is passed as the 'children' prop */}
      
      <p>
        <strong className="text-gray-800 font-semibold">
          Engineering the Digital Future.
        </strong>
      </p>

      <p>
        Prodesk IT is a global technology consulting and software engineering firm.
        We help the world’s most ambitious change-makers define the future.
        We work alongside our clients as one team with a shared ambition to achieve
        extraordinary results, outperform the competition, and redefine industries.
        We complement our tailored, integrated expertise with a vibrant ecosystem
        of digital innovators to deliver better, faster, and more enduring outcomes.
      </p>

      <p>
        We are not just a service provider; we are a strategic partner.
        We combine deep industry knowledge with rigorous engineering standards
        to build software that drives revenue, optimizes operations,
        and creates new digital value.
      </p>

      <p>
        <strong className="text-gray-800 font-semibold uppercase tracking-wide block mb-1">
          OUR PHILOSOPHY: ENGINEERING FIRST
        </strong>
        In a world of hype, we believe in the code.
      </p>

      <p>
        At Prodesk, we are an{" "}
        <strong className="text-gray-800 font-semibold">
          Engineering-First
        </strong>{" "}
        organization. This means that every decision we make—from the architecture
        we choose to the project management methodologies we employ—is driven by
        technical excellence. We do not cut corners. We do not ship “good enough.”
        We build systems that are scalable, secure, and built to last.
      </p>

      <ul className="list-disc pl-5 space-y-3 text-gray-600">
        <li>
          <strong className="text-gray-800 font-semibold">Precision:</strong>{" "}
          We measure twice, cut once. Our solutions are architected for stability.
        </li>
        <li>
          <strong className="text-gray-800 font-semibold">Agility:</strong>{" "}
          We embrace change. Our agile workflows allow us to pivot instantly
          as market needs shift.
        </li>
        <li>
          <strong className="text-gray-800 font-semibold">Transparency:</strong>{" "}
          We believe in radical honesty. You see what we see. No hidden costs,
          no black boxes.
        </li>
      </ul>

      <p>
        <strong className="text-gray-800 font-semibold uppercase tracking-wide block mb-1">
          OUR VISION
        </strong>
        To be the world’s most trusted partner for Digital Transformation,
        bridging the gap between human potential and artificial intelligence.
      </p>

      <p>
        <strong className="text-gray-800 font-semibold uppercase tracking-wide block mb-1">
          OUR MISSION
        </strong>
        To empower organizations with the technology they need to solve their most
        complex challenges. We strive to democratize access to high-end engineering,
        making enterprise-grade software accessible to businesses that are ready
        to scale.
      </p>

      <div>
        <strong className="text-gray-800 font-semibold uppercase tracking-wide block mb-2">
          THE PRODESK DIFFERENCE
        </strong>

        <p className="mb-4">Why do global enterprises choose Prodesk?</p>

        <div className="space-y-4">
          <p>
            <strong className="text-gray-800 font-semibold block">
              1. Business-Aligned Technology
            </strong>
            We don't build technology for technology’s sake.
            We start with the business goal and work backward to the code.
          </p>

          <p>
            <strong className="text-gray-800 font-semibold block">
              2. Global Standards, Local Agility
            </strong>
            Enterprise-grade rigor combined with boutique-level speed and flexibility.
          </p>

          <p>
            <strong className="text-gray-800 font-semibold block">
              3. Long-Term Partnership
            </strong>
            We build relationships that last for years, not transactions.
          </p>
        </div>
      </div>

      <div className="pt-6">
        <strong className="text-gray-800 font-semibold uppercase tracking-wide block mb-2">
          A MESSAGE FROM LEADERSHIP
        </strong>

        <p className="italic text-gray-500 border-l-4 border-gray-200 pl-4">
          “Technology is the great equalizer. In the modern economy, the size of your
          company matters less than the speed of your innovation. At Prodesk, our job
          is to provide you with the engine that drives that speed.”
        </p>
      </div>
    
    </PageLayout>
  );
}