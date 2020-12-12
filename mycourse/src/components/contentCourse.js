import Background from '../assets/img/education.jpg';

function ContentCourse() {
    let posterImage = {
        backgroundImage: `url(${Background})`,
        width: '100%',
        minHeight: "321px",
    };

    return (
        <div className="content-course course-academic none-credit-mode">
            <div className="container">
                <div className="row content-course-row">
                    <div className="video-container content-course-card -padding" style={{ marginBottom: "350px" }}>
                        <div className="video preview-video-card">
                            <div className="video-js vjs-fluid intro-video-dimensions"
                                id="intro-video" style={{ outline: "currentcolor none medium" }}>
                                <div className="vjs-poster" style={posterImage}>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="course-audit-container content-course-card -padding">
                        <div className="course-glance-card -border-light">
                            <div className="row border-line"></div>
                            <div className="row glance-card-row">
                                <div className="col-lg-12 col-md-6 col-xs-12 glance-card-head">
                                    <div className="glance-purchase-detail">
                                        <div className="glance-purchase-enroll">
                                            <div className="dummy-price-button">
                                                <div className="glance-purchase-price">
                                                    <span className="glance-purchase-price-normal ">
                                                        1,500 บาท
                            </span>
                                                </div>
                                                <button className="enroll-button audit-button">
                                                    ชำระเงินเรียนไม่เก็บหน่วยกิต
                          </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-6 col-xs-12 glance-card-content">
                                    <div className="glance-item">
                                        <div className="glance-item-icon">
                                            <svg className="svg-inline--fa fa-check fa-w-16" focusable="false" data-prefix="far" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                <path fill="currentColor" d="M435.848 83.466L172.804 346.51l-96.652-96.652c-4.686-4.686-12.284-4.686-16.971 0l-28.284 28.284c-4.686 4.686-4.686 12.284 0 16.971l133.421 133.421c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-28.284-28.284c-4.686-4.686-12.284-4.686-16.97 0z"></path></svg>
                                        </div>
                                        <div className="glance-item-text">
                                            <p>สามารถเรียนที่ไหน เมื่อไหร่ก็ได้ตลอดชีพ</p>
                                        </div>
                                    </div>

                                    <div className="glance-item">
                                        <div className="glance-item-icon">
                                            <svg className="svg-inline--fa fa-check fa-w-16" focusable="false" data-prefix="far" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                <path fill="currentColor" d="M435.848 83.466L172.804 346.51l-96.652-96.652c-4.686-4.686-12.284-4.686-16.971 0l-28.284 28.284c-4.686 4.686-4.686 12.284 0 16.971l133.421 133.421c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-28.284-28.284c-4.686-4.686-12.284-4.686-16.97 0z"></path></svg>
                                        </div>
                                        <div className="glance-item-text">
                                            <p>เนื้อหาทั้งหมด 40 วิดีโอ</p>
                                        </div>
                                    </div>

                                    <div className="glance-item">
                                        <div className="glance-item-icon">
                                            <svg className="svg-inline--fa fa-times fa-w-10" focusable="false" data-prefix="far" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z"></path></svg>
                                        </div>
                                        <div className="glance-item-text">
                                            <p>แบบทดสอบทั้งหมด 4 แบบทดสอบ</p>
                                        </div>
                                    </div>

                                    <div className="glance-item">
                                        <div className="glance-item-icon">
                                            <svg className="svg-inline--fa fa-times fa-w-10" focusable="false" data-prefix="far" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z"></path></svg>
                                        </div>
                                        <div className="glance-item-text">
                                            <p>ข้อสอบทั้งหมด 1 ข้อสอบ</p>
                                        </div>
                                    </div>

                                    <div className="glance-item">
                                        <div className="glance-item-icon">
                                            <svg className="svg-inline--fa fa-times fa-w-10" focusable="false" data-prefix="far" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z"></path></svg>
                                        </div>
                                        <div className="glance-item-text">
                                            <p>เก็บหน่วยกิตเรียนปริญญาโท</p>
                                        </div>
                                    </div>

                                    <div className="glance-item">
                                        <div className="glance-item-icon">
                                            <svg className="svg-inline--fa fa-times fa-w-10" focusable="false" data-prefix="far" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z"></path></svg>
                                        </div>
                                        <div className="glance-item-text">
                                            <p>ประกาศนียบัตร</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="course-sidebar-container content-course-card -relative">
                        <div className="course-glance-col">
                            <div className="course-glance-card -border-dark">
                                <div className="row border-line"></div>
                                <div className="row glance-card-row">
                                    <div className="col-lg-12 col-md-6 col-xs-12 glance-card-head">
                                        <div className="glance-purchase-detail">
                                            <div className="glance-purchase-enroll">
                                                <div className="dummy-price-button">
                                                    <div className="glance-purchase-price">
                                                        <span className="glance-purchase-price-normal ">
                                                            4,500 บาท
                              </span>
                                                    </div>
                                                    <button className="enroll-button">
                                                        ชำระเงินเรียนเก็บหน่วยกิต
                            </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-6 col-xs-12 glance-card-content">
                                        <div className="glance-item">
                                            <div className="glance-item-icon">
                                                <svg className="svg-inline--fa fa-check fa-w-16" focusable="false" data-prefix="far" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path fill="currentColor" d="M435.848 83.466L172.804 346.51l-96.652-96.652c-4.686-4.686-12.284-4.686-16.971 0l-28.284 28.284c-4.686 4.686-4.686 12.284 0 16.971l133.421 133.421c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-28.284-28.284c-4.686-4.686-12.284-4.686-16.97 0z"></path></svg>
                                            </div>
                                            <div className="glance-item-text">
                                                <p>สามารถเรียนที่ไหน เมื่อไหร่ก็ได้ตลอดชีพ</p>
                                            </div>
                                        </div>

                                        <div className="glance-item">
                                            <div className="glance-item-icon">
                                                <svg className="svg-inline--fa fa-check fa-w-16" focusable="false" data-prefix="far" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path fill="currentColor" d="M435.848 83.466L172.804 346.51l-96.652-96.652c-4.686-4.686-12.284-4.686-16.971 0l-28.284 28.284c-4.686 4.686-4.686 12.284 0 16.971l133.421 133.421c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-28.284-28.284c-4.686-4.686-12.284-4.686-16.97 0z"></path></svg>
                                            </div>
                                            <div className="glance-item-text">
                                                <p>เนื้อหาทั้งหมด 40 วิดีโอ</p>
                                            </div>
                                        </div>

                                        <div className="glance-item">
                                            <div className="glance-item-icon">
                                                <svg className="svg-inline--fa fa-check fa-w-16" focusable="false" data-prefix="far" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M435.848 83.466L172.804 346.51l-96.652-96.652c-4.686-4.686-12.284-4.686-16.971 0l-28.284 28.284c-4.686 4.686-4.686 12.284 0 16.971l133.421 133.421c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-28.284-28.284c-4.686-4.686-12.284-4.686-16.97 0z"></path></svg>
                                            </div>
                                            <div className="glance-item-text">
                                                <p>แบบทดสอบทั้งหมด 4 แบบทดสอบ</p>
                                            </div>
                                        </div>

                                        <div className="glance-item">
                                            <div className="glance-item-icon">
                                                <svg className="svg-inline--fa fa-check fa-w-16" focusable="false" data-prefix="far" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M435.848 83.466L172.804 346.51l-96.652-96.652c-4.686-4.686-12.284-4.686-16.971 0l-28.284 28.284c-4.686 4.686-4.686 12.284 0 16.971l133.421 133.421c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-28.284-28.284c-4.686-4.686-12.284-4.686-16.97 0z"></path></svg>
                                            </div>
                                            <div className="glance-item-text">
                                                <p>ข้อสอบทั้งหมด 1 ข้อสอบ</p>
                                            </div>
                                        </div>

                                        <div className="glance-item">
                                            <div className="glance-item-icon">
                                                <svg className="svg-inline--fa fa-check fa-w-16" focusable="false" data-prefix="far" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M435.848 83.466L172.804 346.51l-96.652-96.652c-4.686-4.686-12.284-4.686-16.971 0l-28.284 28.284c-4.686 4.686-4.686 12.284 0 16.971l133.421 133.421c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-28.284-28.284c-4.686-4.686-12.284-4.686-16.97 0z"></path></svg>
                                            </div>
                                            <div className="glance-item-text">
                                                <p>เก็บหน่วยกิตเรียนปริญญาโท</p>
                                            </div>
                                        </div>

                                        <div className="glance-item">
                                            <div className="glance-item-icon">
                                                <svg className="svg-inline--fa fa-check fa-w-16" focusable="false" data-prefix="far" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M435.848 83.466L172.804 346.51l-96.652-96.652c-4.686-4.686-12.284-4.686-16.971 0l-28.284 28.284c-4.686 4.686-4.686 12.284 0 16.971l133.421 133.421c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-28.284-28.284c-4.686-4.686-12.284-4.686-16.97 0z"></path></svg>
                                            </div>
                                            <div className="glance-item-text">
                                                <p>ประกาศนียบัตร</p>
                                            </div>
                                        </div>
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

export default ContentCourse;