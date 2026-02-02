import React from 'react';
import PageLayout from '../components/PageLayout';

export default function Insights() {
  // IMPORTANT: Make sure 'insight.jpg' is in your project's 'public' folder.
  const heroImage = "/insight.jpg"; 
  const title = "Welcome to Prodesk";
  const heading = "INSIGHTS";

  return (
    <PageLayout heroImageUrl={heroImage} heroTitle={title} sectionHeading={heading}>
      
      {/* Intro Text */}
      <p className="text-lg font-medium text-gray-800 mb-6">
        Exploring the frontiers of technology, business, and innovation.
      </p>
      <p>
        Welcome to the Prodesk Insights hub. Here we share our thoughts on emerging trends,
        best practices in software engineering, and strategies for digital transformation.
        Dive into our latest thinking on how technology is reshaping industries.
      </p>

      {/* Placeholder Article Previews - Replace with real content later */}
      <div className="mt-12 space-y-12">

        {/* Article 1 Placeholder */}
        <div className="border-b border-gray-100 pb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            The Future of AI in Enterprise Software
          </h3>
          <p className="text-sm text-gray-500 mb-4 uppercase tracking-wider font-semibold">
            October 25, 2023 | Technology Trend
          </p>
          <p className="mb-4">
            Artificial Intelligence is moving beyond hype and into core business processes.
            We explore practical applications of generative AI, predictive analytics, and
            how enterprises can prepare their data infrastructure for the AI revolution...
          </p>
          <span className="text-gray-800 font-semibold tracking-wide uppercase text-sm cursor-pointer hover:text-blue-600 transition-colors">
            Read More →
          </span>
        </div>

         {/* Article 2 Placeholder */}
        <div className="border-b border-gray-100 pb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Why "Engineering-First" Matters More Than Ever
          </h3>
          <p className="text-sm text-gray-500 mb-4 uppercase tracking-wider font-semibold">
            September 12, 2023 | Methodology
          </p>
          <p className="mb-4">
            In a world flooded with low-code solutions and quick fixes, robust engineering
            principles are the only guarantee of long-term scalability and security. We
            discuss why we double down on technical excellence...
          </p>
          <span className="text-gray-800 font-semibold tracking-wide uppercase text-sm cursor-pointer hover:text-blue-600 transition-colors">
            Read More →
          </span>
        </div>

        {/* Article 3 Placeholder */}
         <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Navigating Cloud Migration Challenges
          </h3>
          <p className="text-sm text-gray-500 mb-4 uppercase tracking-wider font-semibold">
            August 5, 2023 | Cloud & DevOps
          </p>
          <p className="mb-4">
            Moving legacy systems to the cloud is rarely straightforward. Learn about common
            pitfalls, strategies for a smooth transition, and how to optimize costs once
            you're there...
          </p>
          <span className="text-gray-800 font-semibold tracking-wide uppercase text-sm cursor-pointer hover:text-blue-600 transition-colors">
            Read More →
          </span>
        </div>

      </div>

    </PageLayout>
  );
}