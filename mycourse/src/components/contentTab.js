import React, { useState, useEffect } from 'react';

function ContentTab() {
    let tab = [
      { id: 'description', name: "รายละเอียด", className: "item-tab" },
      { id: 'payment', name: "วิธีการชำระเงิน", className: "visible-lg item-tab" },
      { id: 'discussion', name: "ห้องสนทนา", className: "visible-lg item-tab" },
      { id: 'instructor', name: "ผู้สอน", className: "item-tab hidden-lg" },
      { id: 'reviews', name: "รีวิว", className: "item-tab" }
    ];

    const [labelTab, setlabelTab] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);
    
    useEffect(() => {
      setlabelTab(tab);
    }, [])

    function changeTab(id) {
      let foundIndex = tab.findIndex(x => x.id === id);
      setActiveIndex(foundIndex);
    }

    return (
        <div id="courseDetailContent" className="content-course">
        <div className="container">
          <div className="row content-course-row">
            <div className="col-lg-9 col-xs-12 course-detail-card -padding">
              <div role="tabpanel" className="content-course-tabs">
              <ul className="nav nav-tabs" role="tablist">
                  {labelTab.map((val, index) => (
                    <li id={index} key={val.id} 
                    className={activeIndex == index ? val.className + ' active' : val.className} 
                    onClick={() => changeTab(val.id)}>
                      <a href="#" onClick={e => e.preventDefault()}>{val.name}</a>
                    </li>
                  ))}
                </ul>
                <div className="tab-content">
                  {labelTab.map((val, index) => (
                    <div key={val.id} role="tabpanel"  id={val.id}
                    className={'tab-pane '}
                    className={activeIndex == index ? 'tab-pane active' : 'tab-pane'}>
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