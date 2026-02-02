import React from 'react';
import PageLayout from '../components/PageLayout';

export default function Vision() {
  // A high-tech "Vision/Eye" style image to match your screenshot's theme
  const heroImage = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop";
  const title = "Welcome to Prodesk";
  const heading = "OUR VISION";

  return (
    <PageLayout heroImageUrl={heroImage} heroTitle={title} sectionHeading={heading}>
      
      <p>
        At Prodesk, our vision is to be a global leader in innovative software solutions,
        driving positive change and shaping the future of technology. We envision a
        world where technology empowers individuals and organizations to achieve
        their full potential, driving growth, efficiency, and sustainability.
      </p>

      <div className="space-y-8 mt-8">
        
        {/* Section 1 */}
        <div>
          <h3 className="text-gray-900 font-bold text-lg mb-2">Innovation as a Driving Force</h3>
          <p>
            Innovation is at the core of our vision. We believe that innovation is not just
            about creating new technologies; it's about finding creative solutions to
            complex problems. We are committed to pushing the boundaries of what's
            possible, leveraging emerging technologies like artificial intelligence, machine
            learning, and blockchain to develop solutions that drive real value for
            our customers.
          </p>
        </div>

        {/* Section 2 */}
        <div>
          <h3 className="text-gray-900 font-bold text-lg mb-2">Quality as a Cornerstone</h3>
          <p>
            Quality is another cornerstone of our vision. We are committed to delivering
            high-quality products and services that meet or exceed customer expectations.
            We understand that quality is not just about delivering bug-free software; it's
            also about delivering software that is user-friendly, reliable, and meets the
            needs of its intended users. We invest heavily in quality assurance, testing,
            and code review processes to ensure that our products meet the highest
            standards of quality.
          </p>
        </div>

        {/* Section 3 */}
        <div>
          <h3 className="text-gray-900 font-bold text-lg mb-2">Customer Focus at the Forefront</h3>
          <p>
            Our customers are at the heart of everything we do. We understand that our
            success depends on our ability to satisfy our customers. We listen to their
            needs, understand their challenges, and deliver solutions that add real value
            to their business. We are committed to providing exceptional customer service,
            ensuring that our customers have the support and resources they need
            to succeed.
          </p>
        </div>

        {/* Section 4 */}
        <div>
          <h3 className="text-gray-900 font-bold text-lg mb-2">Integrity as a Guiding Principle</h3>
          <p>
            Integrity is a guiding principle in everything we do. We operate with honesty,
            transparency, and ethical behavior in all our business dealings. We believe that
            integrity is essential for building trust with our customers, employees, and
            partners, and for maintaining our reputation as a reliable and trustworthy
            software company.
          </p>
        </div>

        {/* Section 5 */}
        <div>
          <h3 className="text-gray-900 font-bold text-lg mb-2">Collaboration as a Key Driver</h3>
          <p>
            Collaboration is a key driver of our vision. We believe that great ideas come
            from collaboration. We work closely with our customers, partners, and team
            members to share ideas, solve problems, and achieve common goals. We
            understand that collaboration is essential for driving innovation, staying
            competitive, and delivering value to our customers.
          </p>
        </div>

        {/* Section 6 */}
        <div>
          <h3 className="text-gray-900 font-bold text-lg mb-2">Continuous Improvement as a Commitment</h3>
          <p>
            Continuous improvement is a commitment we make to ourselves and our
            customers. We are committed to constantly reviewing and refining our
            processes, technologies, and strategies to drive efficiency and effectiveness.
            We understand that the technology landscape is constantly evolving, and we
            need to adapt and improve to stay ahead.
          </p>
        </div>

        {/* Section 7 */}
        <div>
          <h3 className="text-gray-900 font-bold text-lg mb-2">Accountability as a Core Value</h3>
          <p>
            Accountability is a core value that underpins everything we do. We take
            ownership of our actions, decisions, and outcomes, holding ourselves
            accountable for delivering results that matter. We believe that accountability is
            essential for building trust with our customers and for maintaining our
            reputation as a reliable and trustworthy software company.
          </p>
        </div>

        {/* Section 8 */}
        <div>
          <h3 className="text-gray-900 font-bold text-lg mb-2">Diversity and Inclusion as a Strength</h3>
          <p>
            Diversity and inclusion are strengths that we embrace. We believe that
            diversity leads to better ideas and outcomes. We are committed to creating an
            inclusive environment where everyone feels welcome, respected, and valued.
            We understand that diversity and inclusion are essential for driving innovation
            and creativity.
          </p>
        </div>

        {/* Section 9 */}
        <div>
          <h3 className="text-gray-900 font-bold text-lg mb-2">Sustainability as a Responsibility</h3>
          <p>
            Sustainability is a responsibility we take seriously. We are committed to
            minimizing our environmental impact and supporting sustainable practices. We
            understand that we have a responsibility to future generations to protect the
            planet and ensure its long-term health and viability.
          </p>
        </div>

        {/* Section 10 */}
        <div>
          <h3 className="text-gray-900 font-bold text-lg mb-2">Community Engagement as a Commitment</h3>
          <p>
            Community engagement is a commitment we make to the communities in
            which we operate. We believe in giving back to the community and supporting
            social causes that make a positive impact. We understand that by being active
            members of our communities, we can make a meaningful difference in the
            world around us.
          </p>
        </div>

      </div>

      <div className="mt-10 space-y-4">
        <h3 className="text-gray-900 font-bold text-lg">Join Us on Our Journey</h3>
        <p>
          Join us on our journey of innovation, quality, and value creation. Together, we
          can shape a better future for our customers, employees, and community.
        </p>
        <p className="text-sm text-gray-500 italic">
          Feel free to customize this vision statement to better reflect your company's
          values and goals!
        </p>
      </div>

    </PageLayout>
  );
}