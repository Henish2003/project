import React from 'react';
import { PieChart, BarChart, Search, Layers } from 'lucide-react';
import './MarketResearch.css';
import Devs from './Marketcomponent';
import Footer from "../Footer";
import Contact from "./Contact"

function MarketResearch() {
  return (
    <>
      <div className="research-full-page-container">
        <Devs />
        <div className="research-content-container">
          <div className="research-max-width">
            <h1 className="research-heading research-text-center">
              DISCOVER MARKET INSIGHTS,<br />
              DEVELOP STRATEGIES, AND<br />
              DRIVE BUSINESS SUCCESS.
            </h1>
            <div className="research-benefits research-text-left">
              <p className="research-paragraph">✓ IN-DEPTH MARKET RESEARCH FOR BETTER DECISIONS</p>
              <p className="research-paragraph">✓ STRATEGIC PLANNING FOR MARKET PENETRATION</p>
              <p className="research-paragraph">✓ DATA-DRIVEN INSIGHTS FOR COMPETITIVE ADVANTAGE</p>
              <p className="research-paragraph">✓ IDENTIFYING TRENDS AND OPPORTUNITIES</p>
              <p className="research-paragraph">✓ RELIABLE MARKET ANALYSIS TO GROW YOUR BUSINESS</p>
            </div>
            <div className="research-text-center">
              <h1 className="research-subheading">THRIVE WITH MARKET RESEARCH</h1>
              <p className="research-highlight">
                OUR MARKET RESEARCH SERVICES PROVIDE THE INSIGHTS YOU NEED TO DRIVE BUSINESS SUCCESS AND STAY AHEAD OF THE COMPETITION.
              </p>
            </div>
            <div className="research-grid research-grid-cols-1">
              <div className="research-section">
                <PieChart className="research-icon-large" />
                <div>
                  <h3>COMPREHENSIVE ANALYSIS</h3>
                  <p>DETAILED MARKET ANALYSIS TO IDENTIFY GROWTH OPPORTUNITIES.</p>
                </div>
              </div>
              <div className="research-section">
                <BarChart className="research-icon-large" />
                <div>
                  <h3>STRATEGIC PLANNING</h3>
                  <p>DEVELOP STRATEGIES BASED ON MARKET INSIGHTS.</p>
                </div>
              </div>
              <div className="research-section">
                <Search className="research-icon-large" />
                <div>
                  <h3>TREND IDENTIFICATION</h3>
                  <p>IDENTIFY MARKET TRENDS AND ADAPT YOUR STRATEGY ACCORDINGLY.</p>
                </div>
              </div>
              <div className="research-section">
                <Layers className="research-icon-large" />
                <div>
                  <h3>COMPETITIVE ADVANTAGE</h3>
                  <p>GAIN A COMPETITIVE ADVANTAGE THROUGH MARKET INSIGHTS.</p>
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

export default MarketResearch;
