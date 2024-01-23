import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './mypages/layout';
import { HomePage } from './mypages/homePage';
import CoursePage from './mypages/coursePage';
import { TeacherTraining } from './mypages/teacherPage';
import { AboutPage } from './mypages/aboutPage';
import { BlogPage } from './mypages/blogPage';

function App() {
  return (
    <>
    {/* <h1>Hello</h1> */}

    <BrowserRouter>
   <Routes>
   <Route path="/" element={<Layout/>}/>
      <Route path="/homePage" element={<HomePage/>}/>
      <Route path="/coursePage" element={<CoursePage/>}/>
      <Route path="/teacherPage" element={<TeacherTraining/>}/>
      <Route path="/blogPage" element={<BlogPage/>}/>
      <Route path="/aboutPage" element={<AboutPage/>}>
      
        </Route>
        </Routes>
   </BrowserRouter>
    </>
  );
}

export default App;
