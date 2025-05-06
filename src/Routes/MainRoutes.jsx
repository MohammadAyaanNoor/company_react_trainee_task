import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import { Navigate } from "react-router-dom";
import PageNotFound from '../pages/PageNotFound';


const MainRoutes = () => {
    const isAuthenticated = localStorage.getItem("token");
  return (
    <Routes>
    <Route path="/" element={<LoginPage/>}/>
    <Route path="/home" element={isAuthenticated ? <HomePage/> : <LoginPage/>}/>
    <Route path="/login" element={isAuthenticated ? Navigate('/home') : <LoginPage />} />
    <Route path="/logout" element={isAuthenticated ? Navigate('/') : <PageNotFound/>} />
  </Routes>
  )
}

export default MainRoutes