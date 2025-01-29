import React from 'react';
import { TrendingUp, Users, Target, BarChart2 } from 'lucide-react';
import './DigitalMarketing.css';
import Devs from './Digitalcomponent';
import Footer from "../Footer";
import Contact from './Contact';

function DigitalMarketing() {
  return (
    <>
      <div className="digital-full-page-container">
        <Devs />
        <div className="digital-content-container">
          <div className="digital-max-width">
            <h1 className="digital-heading digital-text-center">
              MASTER THE ART OF DIGITAL MARKETING,<br />
              REACH A WIDER AUDIENCE, AND<br />
              DRIVE ENGAGEMENT.
            </h1>
            <div className="digital-benefits digital-text-left">
              <p className="digital-paragraph">✓ COMPREHENSIVE DIGITAL STRATEGIES FOR MAXIMUM IMPACT</p>
              <p className="digital-paragraph">✓ BOOST YOUR ONLINE PRESENCE AND ENGAGE CUSTOMERS</p>
              <p className="digital-paragraph">✓ EFFECTIVE CAMPAIGNS TAILORED TO YOUR BUSINESS</p>
              <p className="digital-paragraph">✓ USE DATA-DRIVEN DECISIONS TO OPTIMIZE PERFORMANCE</p>
              <p className="digital-paragraph">✓ TRUST A REPUTABLE DIGITAL MARKETING AGENCY TO ACHIEVE YOUR GOALS</p>
            </div>
            <div className="digital-text-center">
              <h1 className="digital-subheading">EXCEL IN DIGITAL MARKETING</h1>
              <p className="digital-highlight">
                OUR STRATEGIES ARE DESIGNED TO ENHANCE YOUR ONLINE PRESENCE AND BOOST CUSTOMER ENGAGEMENT.
              </p>
            </div>
            <div className="digital-grid digital-grid-cols-1">
              <div className="digital-section">
                <TrendingUp className="digital-icon-large" />
                <div>
                  <h3>INCREASED VISIBILITY</h3>
                  <p>BOOST YOUR BRAND'S VISIBILITY WITH STRATEGIC DIGITAL MARKETING.</p>
                </div>
              </div>
              <div className="digital-section">
                <Users className="digital-icon-large" />
                <div>
                  <h3>AUDIENCE ENGAGEMENT</h3>
                  <p>ENGAGE YOUR TARGET AUDIENCE THROUGH EFFECTIVE CONTENT AND INTERACTIONS.</p>
                </div>
              </div>
              <div className="digital-section">
                <Target className="digital-icon-large" />
                <div>
                  <h3>TARGETED CAMPAIGNS</h3>
                  <p>REACH THE RIGHT AUDIENCE WITH TARGETED DIGITAL CAMPAIGNS.</p>
                </div>
              </div>
              <div className="digital-section">
                <BarChart2 className="digital-icon-large" />
                <div>
                  <h3>PERFORMANCE ANALYSIS</h3>
                  <p>USE DATA TO CONTINUALLY IMPROVE YOUR DIGITAL MARKETING STRATEGIES.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default DigitalMarketing;
