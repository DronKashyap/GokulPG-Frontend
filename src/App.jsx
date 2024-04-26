import React from 'react';
import 'tailwindcss/tailwind.css'
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './Pages/Homepage';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';
import Blog from './Pages/Blog';
import Properties from './Pages/Properties';
import Admin from './adminpages/Admin';
import AddProperty from './adminpages/AddProperty';

import {Booknowform} from './Components/Booknowform';
import PropertyInfo from './Components/Propertyinfo';
import AddReview from './adminpages/AddReview';
import AddBlog from './adminpages/AddBlog';


function App() {
 

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage />}></Route>
      <Route path='/signin' element={<Signin />}></Route>
      <Route path='/signup' element={<Signup />}></Route>
      <Route path='/properties' element={<Properties />}></Route>
      <Route path='/blog' element={<Blog />}></Route>
      <Route path='/book' element={<Booknowform />}></Route>
      <Route path="/property/:id" element={<PropertyInfo/ >}></Route> 


      <Route path='/admin' element={<Admin />}></Route>
      <Route path='/admin/addproperty' element={<AddProperty />}></Route>
      <Route path='/admin/addreview' element={<AddReview />}></Route>
      <Route path='/admin/addblog' element={<AddBlog />}></Route>
    </Routes>
    </BrowserRouter>
    
  )
}

export default App
