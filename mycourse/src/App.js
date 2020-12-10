//import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';
import Background from './img/education.jpg';
import React, { useState, useEffect } from 'react';

function App() {
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
    </div>
  );
}

export default App;
