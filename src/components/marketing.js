import React from "react";
import { GrNotes } from "react-icons/gr";
import { TbReportSearch } from "react-icons/tb";
import { MdOutlinePeopleAlt } from "react-icons/md";
import "./marketing.css";


const ContentMarketing = () => {
  return (
    <>

      <div className="min-h-screen bg-gray-50">
        <main className="pt-20 pb-16 px-4">
          <div className="max-w-4xl mx-auto"> {/* Center content with max-width */}
            <center><h1 className="text-4xl md:text-5xl font-bold text-black mb-12">
              HOW CONTENT MARKETING CAN 
              <br />
              HELP YOUR BUSINESS GROW
            </h1></center>

            {/* First row of cards */}
            <div className="card-container mb-8">
              <div className="card mb-4">
                <h3 className="font-semibold text-lg mb-3">Increase Sales Conversions</h3>
                <p>Create content that will help your target audience make well-informed decisions.</p>
              </div>

              <div className="card mb-4">
                <h3 className="font-semibold text-lg mb-3">Connect with Your Audience</h3>
                <p>Provide engaging content that will captivate readers, spark discussions, and cultivate a devoted following.</p>
              </div>

              <div className="card mb-4">
                <h3 className="font-semibold text-lg mb-3">Equip Customers with Knowledge</h3>
                <p>Give people access to a single platform where they can get detailed information about your products and developments in the industry.</p>
              </div>
            </div>
            <br />
            {/* Second row of cards */}
            <div className="card-container mb-16">
              <div className="card mb-4">
                <h3 className="font-semibold text-lg mb-3">Enhance the Customer Experience</h3>
                <p>Provide personalized content at every stage of the customer journey to nurture leads into loyal customers.</p>
              </div>

              <div className="card mb-4">
                <h3 className="font-semibold text-lg mb-3">Attract Visitors to Your Website</h3>
                <p>Create content that search engines will find appealing so that your website will rank higher in search results and receive more natural traffic.</p>
              </div>
            </div>

            {/* Feature section */}
            <div className="feature-section mb-16">
              <h2 className="text-3xl font-bold text-center mb-4">Achieve More Than Just Content</h2>
              <p className="text-center font-semibold mb-12 text-pink-600">
                YOU CAN LEARN ABOUT A FULL RANGE OF CONTENT MARKETING SERVICES DESIGNED TO IMPROVE YOUR BRAND'S ONLINE VISIBILITY AND SUCCESSFULLY INTERACT WITH YOUR TARGET MARKET.
              </p>
              <center>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="feature-item flex items-center text-center">
               
                    <GrNotes className="feature-icon" />
                  <div className="feature-content text-left ml-4">
                    <h3 className="font-bold mb-2">CONTENT YOU'LL LOVE</h3>
                    <p className="text-pink-600">WE WRITE ENGAGING CONTENT FOR HUMANS (NOT JUST SEARCH ENGINES!) WHO WILL ENJOY READING AND SHARING.</p>
                  </div>
                </div>

                <div className="feature-item flex items-center text-center">
                  <TbReportSearch className="feature-icon" />
                  <div className="feature-content text-left ml-4">
                    <h3 className="font-bold mb-2">CLEAR REPORTING, ALWAYS</h3>
                    <p className="text-pink-600">KEEP YOURSELF UPDATED WITH FREQUENT REPORTS THAT HIGHLIGHT WHAT IS AND IS NOT WORKING. TRACK YOUR PROGRESS MONTHLY, QUARTERLY, AND ANNUALLY.</p>
                  </div>
                </div>

                <div className="feature-item flex items-center text-center">
                  <MdOutlinePeopleAlt className="feature-icon" />
                  <div className="feature-content text-left ml-4">
                    <h3 className="font-bold mb-2">WE ARE HERE FOR YOU</h3>
                    <p className="text-pink-600">WE LISTEN TO YOUR NEEDS, INCORPORATE YOUR INPUT, AND PUBLISH ONLY WITH YOUR APPROVAL. WE'RE A TRUE PARTNER IN YOUR CONTENT MARKETING JOURNEY.</p>
                  </div>
                </div>
              </div>
              </center>

            </div>
          </div>

        </main>
        
      </div>
    </>
  );
};

export default ContentMarketing;
