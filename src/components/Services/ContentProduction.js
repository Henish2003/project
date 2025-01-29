import React from 'react';
import { Edit, Film, BookOpen, Camera } from 'lucide-react';
import './ContentProduction.css';
import Devs from './ContentComponent';
import Footer from "../Footer";
import Contact from "./Contact";

function ContentProduction() {
  return (
    <>
      <div className="content-full-page-container">
        <Devs />
        <div className="content-content-container">
          <div className="content-max-width">
            <h1 className="content-heading content-text-center">
              PRODUCE HIGH-QUALITY CONTENT,<br />
              MANAGE CONTENT EFFECTIVELY, AND<br />
              ENGAGE YOUR AUDIENCE.
            </h1>
            <div className="content-benefits content-text-left">
              <p className="content-paragraph">✓ CREATE ENGAGING AND RELEVANT CONTENT</p>
              <p className="content-paragraph">✓ MANAGE CONTENT ACROSS MULTIPLE PLATFORMS</p>
              <p className="content-paragraph">✓ OPTIMIZE CONTENT FOR MAXIMUM REACH</p>
              <p className="content-paragraph">✓ DRIVE AUDIENCE ENGAGEMENT WITH QUALITY CONTENT</p>
              <p className="content-paragraph">✓ TRUST PROFESSIONALS FOR YOUR CONTENT NEEDS</p>
            </div>
            <div className="content-text-center">
              <h1 className="content-subheading">EXCEL IN CONTENT PRODUCTION</h1>
              <p className="content-highlight">
                OUR SERVICES HELP YOU CREATE AND MANAGE HIGH-QUALITY CONTENT THAT RESONATES WITH YOUR AUDIENCE.
              </p>
            </div>
            <div className="content-grid content-grid-cols-1">
              <div className="content-section">
                <Edit className="content-icon-large" />
                <div>
                  <h3>ENGAGING CONTENT</h3>
                  <p>CREATE CONTENT THAT ENGAGES AND INFORMS YOUR AUDIENCE.</p>
                </div>
              </div>
              <div className="content-section">
                <Film className="content-icon-large" />
                <div>
                  <h3>MULTIMEDIA PRODUCTION</h3>
                  <p>PRODUCE VIDEOS, PODCASTS, AND OTHER MULTIMEDIA CONTENT.</p>
                </div>
              </div>
              <div className="content-section">
                <BookOpen className="content-icon-large" />
                <div>
                  <h3>CONTENT MANAGEMENT</h3>
                  <p>MANAGE CONTENT ACROSS ALL YOUR PLATFORMS WITH EASE.</p>
                </div>
              </div>
              <div className="content-section">
                <Camera className="content-icon-large" />
                <div>
                  <h3>VISUAL STORYTELLING</h3>
                  <p>USE IMAGES AND VIDEOS TO TELL COMPELLING STORIES.</p>
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

export default ContentProduction;