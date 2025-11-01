import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../Layout/Header';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Error404 from '../Pages/Error404';
import CreateBlog from '../Pages/CreateBlog';
import Footer from '../Layout/Footer';
import AllBlogs from '../Pages/AllBlogs';
import BlogDetails from '../Pages/BlogDetails';
import EditBlog from '../Pages/EditBlog';
import ScrollToTop from '../Components/ScrollToTop';








const Routing = () => {
  return (  
    <>
    <Header/>
    <ScrollToTop/>
    <Routes>
        <Route path = "/" element ={<Home/>}/>
        <Route path = "/home" element ={<Home/>}/>
        <Route path = "/CreateBlog" element ={<CreateBlog/>}/>
        <Route path ="/About" element={<About/>}/>
        <Route path ="/AllBlogs" element={<AllBlogs/>}/>
        <Route path="/BlogDetails/:id" element={<BlogDetails />} />
        <Route path="/edit/:id" element={<EditBlog />} />
        <Route path = "*" element ={<Error404/>}/>      
    </Routes>
    <Footer/>
      
    </>
  )
}

export default Routing
