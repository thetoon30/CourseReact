//import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';
import Background from './img/education.jpg';
import React, { useState, useEffect } from 'react';

function App() {
  let sectionStyle = {
    backgroundImage: `url(${Background})`,
    width: '100%',
    minHeight: "321px",
  };
  
  return (
    <div id="course-detail-page" className="theme-skilllane">
      <div className="banner-course-detail _academic _tu-banner">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-lg-11">
              <div className="banner-course-detail-sub-header">
                <span className="academic-icon">
                </span>
                  หลักสูตรปริญญาโทออนไลน์
              </div>

              <div className="banner-course-detail-header">
                <h1>Design Thinking กระบวนการคิดเชิงออกแบบ</h1>
              </div>

              <div className="banner-course-detail-degree">
                <a href="https://www.skilllane.com/academic/tuxsa/businessinnovation"
                  className="btn btn-degree">
                  ปริญญาโทบริหารธุรกิจ สาขา Business Innovation
              </a>
              </div>

              <div className="banner-course-detail-footer -gutter-bottom -display-block">
                <div className="review-course-detail">
                  <div className="stars read-only"><div className="star-svg-container filled">
                  </div>
                    <div className="star-svg-container filled">
                    </div>
                  </div>
                  <h3>4.7 (500 รีวิว)</h3>
                </div>

                <div className="social-share-button" id="social-popover">
                  <span className="social-share-icon">
                  </span>
                  <span className="social-share-text">
                    &nbsp;&nbsp;&nbsp;แชร์คอร์สนี้
                  </span>
                </div>
                <div className="clear"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="content-course course-academic none-credit-mode">
        <div className="container">
          <div className="row content-course-row">
          <div className="video-container content-course-card -padding">
              <div className="video preview-video-card">
                <div className="video-js vjs-fluid intro-video-dimensions"
                  id="intro-video" style={{ outline: "currentcolor none medium" }}>
                  <div className="vjs-poster" style={sectionStyle}>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
