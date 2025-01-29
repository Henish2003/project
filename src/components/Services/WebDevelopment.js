import React from 'react';
import { FileText, Users, Globe, DollarSign } from 'lucide-react';
import './WebDevelopment.css';
import Devs from './Devcomponent';
import Footer from "../Footer";
import Contact from "./Contact";

function Dev() {
  return (
    <>
      <div className="seo-full-page-container">
        <Devs />
        <div className="seo-content-container">
          <div className="seo-max-width">
            <h1 className="seo-heading seo-text-center">
              ENHANCE YOUR ONLINE PRESENCE,<br />
              ATTRACT MORE TRAFFIC, AND EASILY<br />
              ACHIEVE HIGHER CONVERSION RATES.
            </h1>
            <div className="seo-benefits seo-text-left">
              <p className="seo-paragraph">✓ GUARANTEED FIRST-PAGE RANKINGS ON GOOGLE.COM.MY FOR YOUR MOST CRUCIAL MALAYSIAN KEYWORDS</p>
              <p className="seo-paragraph">✓ INCREASE LOCAL ORGANIC TRAFFIC BY UP TO 20X WITHIN 6 MONTHS, TAILORED FOR MALAYSIAN AUDIENCES.</p>
              <p className="seo-paragraph">✓ ELEVATE YOUR CONVERSION RATES BY UP TO 50%</p>
              <p className="seo-paragraph">✓ OUTRANK YOUR COMPETITORS WITH OUR EXPERTISE IN MALAYSIA'S SEO LANDSCAPE</p>
              <p className="seo-paragraph">✓ TRUST A REPUTABLE AND RELIABLE SEO COMPANY IN MALAYSIA TO SUPPORT YOUR GROWTH</p>
            </div>
            <div className="seo-text-center">
              <h1 className="seo-subheading">DOMINATE ONLINE SEARCHES</h1>
              <p className="seo-highlight">
                WITH 96.8% OF MALAYSIANS ACCESSING THE INTERNET DAILY, OUR SEO STRATEGIES ARE DESIGNED TO TAP INTO THIS HIGH ENGAGEMENT RATE TO BOOST YOUR VISIBILITY AND ENGAGEMENT.
              </p>
            </div>
            <div className="seo-grid seo-grid-cols-1">
              <div className="seo-section">
                <FileText className="seo-icon-large" />
                <div>
                  <h3>LONG-TERM, STABLE TRAFFIC</h3>
                  <p>SEO ATTRACTS A STEADY STREAM OF VISITORS, GIVING YOUR WEBSITE LONG-TERM VISIBILITY AND ORGANIC GROWTH.</p>
                </div>
              </div>
              <div className="seo-section">
                <Users className="seo-icon-large" />
                <div>
                  <h3>ATTRACT THE RIGHT CUSTOMERS</h3>
                  <p>SEO USES TARGETED KEYWORDS TO ATTRACT HIGH-QUALITY LEADS GENUINELY INTERESTED IN YOUR PRODUCTS OR SERVICES.</p>
                </div>
              </div>
              <div className="seo-section">
                <Globe className="seo-icon-large" />
                <div>
                  <h3>REACH A WIDER AUDIENCE</h3>
                  <p>SEO BECOMES BARRIER-FREE, ALLOWING YOU TO REACH A WIDER AUDIENCE FROM DIFFERENT ONLINE COMMUNITIES.</p>
                </div>
              </div>
              <div className="seo-section">
                <DollarSign className="seo-icon-large" />
                <div>
                  <h3>COST-EFFECTIVE</h3>
                  <p>SEO OFFERS A HIGH RETURN ON INVESTMENT WITHOUT NEEDING TO PAY FOR EVERY CLICK.</p>
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

export default Dev;
