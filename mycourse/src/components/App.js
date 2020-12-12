import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';
import ContentBannar from './contentBanner.js';
import ContentCourse from './contentCourse.js';

function App() { 
  return (
    <div id="course-detail-page" className="theme-skilllane">
      <ContentBannar></ContentBannar>
      <ContentCourse></ContentCourse>
    </div>
  );
}

export default App;
