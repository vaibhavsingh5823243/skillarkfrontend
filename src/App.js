
import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import Loginmodule from './components/Loginmodule';
import Contactus from './components/Contactus';
import Careers from './components/Careers';
import Home from './components/Home';
import Course from './components/Course';
import Courses from './components/Courses';
import CourseData from './components/data/CourseData';
import NotFounds from './components/NotFounds';
// import NotFounds from './components/NotFounds';
import Counselling from './components/Counselling';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<NotFounds />} />
        <Route path='/' element={<Home />} />
        <Route path='/trainings' element={<Courses />} />
        <Route path='/counselling' element={<Counselling />} />
        <Route path='/careers' element={<Careers />} />
        <Route path='/contactus' element={<Contactus />} />
        <Route path="/login" element={<Loginmodule id={"#login"} />} />
        <Route path="/register" element={<Loginmodule id={"#register"} />} />

        {CourseData.map((item) => {
          return (<Route
            path={`/course/${item.id}`}
            element={<Course data={item}/>}
          />)
        }
        )}
      </Routes>

    </BrowserRouter>
  )
}