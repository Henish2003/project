import React from 'react';
import { ClipboardList, DollarSign, Users, TrendingUp } from 'lucide-react';
import './BusinessAnalysis.css';
import Devs from './BusinessComponent';
import Footer from "../Footer";
import Contact from "./Contact";

function BusinessAnalysis() {
  return (
    <>
      <div className="analysis-full-page-container">
        <Devs />
        <div className="analysis-content-container">
          <div className="analysis-max-width">
            <h1 className="analysis-heading analysis-text-center">
              UNLOCK BUSINESS POTENTIAL,<br />
              IMPROVE PROCESSES, AND<br />
              DRIVE GROWTH.
            </h1>
            <div className="analysis-benefits analysis-text-left">
              <p className="analysis-paragraph">✓ IDENTIFY OPPORTUNITIES FOR GROWTH</p>
              <p className="analysis-paragraph">✓ OPTIMIZE BUSINESS PROCESSES</p>
              <p className="analysis-paragraph">✓ STRATEGIC PLANNING FOR SUCCESS</p>
              <p className="analysis-paragraph">✓ DATA-DRIVEN DECISION MAKING</p>
              <p className="analysis-paragraph">✓ RELY ON EXPERIENCED BUSINESS ANALYSTS</p>
            </div>
            <div className="analysis-text-center">
              <h1 className="analysis-subheading">EXCEL IN BUSINESS ANALYSIS</h1>
              <p className="analysis-highlight">
                OUR BUSINESS ANALYSIS SERVICES ARE DESIGNED TO BOOST EFFICIENCY AND DRIVE BUSINESS GROWTH.
              </p>
            </div>
            <div className="analysis-grid analysis-grid-cols-1">
              <div className="analysis-section">
                <ClipboardList className="analysis-icon-large" />
                <div>
                  <h3>STRATEGIC INSIGHTS</h3>
                  <p>GAIN VALUABLE INSIGHTS INTO BUSINESS PERFORMANCE AND OPPORTUNITIES.</p>
                </div>
              </div>
              <div className="analysis-section">
                <DollarSign className="analysis-icon-large" />
                <div>
                  <h3>INCREASE PROFITS</h3>
                  <p>IMPLEMENT STRATEGIES TO BOOST PROFITABILITY AND GROWTH.</p>
                </div>
              </div>
              <div className="analysis-section">
                <Users className="analysis-icon-large" />
                <div>
                  <h3>OPTIMIZE PROCESSES</h3>
                  <p>IMPROVE BUSINESS PROCESSES FOR GREATER EFFICIENCY AND PRODUCTIVITY.</p>
                </div>
              </div>
              <div className="analysis-section">
                <TrendingUp className="analysis-icon-large" />
                <div>
                  <h3>EXPAND GLOBALLY</h3>
                  <p>IDENTIFY AND CAPITALIZE ON GLOBAL BUSINESS OPPORTUNITIES.</p>
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

export default BusinessAnalysis;
