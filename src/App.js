
import {Routes,Route} from "react-router-dom"
import Skills from "./container/skills/Skills";
import Resume from "./container/resume/Resume";
import Home from "./container/home/Home";

import About from "./container/about/About";
import Portfolio from "./container/portfolio/Portfolio";
import NotFound from "./container/NotFound";
function App() {
  return (
     <div>
      {/* ts particles */}
      {/* navbar */}
      {/* main page */}
      
      <Routes>
        <Route index path='/' element={<Home/>}/>
        <Route  path='/home' element={<Home/>}/>
        <Route  path='/about' element={<About/>}/>
        <Route  path='/skills' element={<Skills/>}/>
        <Route  path='/resume' element={<Resume/>}/>
        <Route  path='/portfolio' element={<Portfolio/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
     </div>
  );
} 

export default App;
