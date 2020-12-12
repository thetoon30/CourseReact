import React, { useState, useEffect } from 'react';

function ContentTab() {
    let tab = [
      { id: 'description', name: "รายละเอียด", to: "active", className: "item-tab" },
      { id: 'payment', name: "วิธีการชำระเงิน", to: "", className: "visible-lg item-tab" },
      { id: 'discussion', name: "ห้องสนทนา", to: "", className: "visible-lg item-tab" },
      { id: 'instructor', name: "ผู้สอน", to: "", className: "item-tab hidden-lg" },
      { id: 'reviews', name: "รีวิว", to: "", className: "item-tab" }
    ];

    const [labelTab, setlabelTab] = useState([]);
    
    useEffect(() => {
      setlabelTab(tab);
    }, [])

    return (
        <div id="courseDetailContent" className="content-course">
        <div className="container">
          <div className="row content-course-row">
            <div className="col-lg-9 col-xs-12 course-detail-card -padding">
              <div role="tabpanel" className="content-course-tabs">
              <ul className="nav nav-tabs" role="tablist">
                  {labelTab.map(val => (
                    <li key={val.id} className={val.className + ' ' + val.to}>
                      <a href="#">{val.name}</a>
                    </li>
                  ))}
                </ul>
                <div className="tab-content">
                  {labelTab.map(val => (
                    <div key={val.id} role="tabpanel" className={'tab-pane ' + val.to} id={val.id}>
                      {val.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default ContentTab;