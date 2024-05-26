import React from 'react'
import { Outlet } from 'react-router-dom'
import Hearder from './components/Hearder.jsx'
import Footer from './components/Footer.jsx'
import SubHeader from './components/subHeader.jsx'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {

  return (
    <>
    <Hearder/>
    <main className='min-h-[calc(100vh-120px)] pt-5 mt-10 mb-10'>
      <Outlet/>
    </main>
    <Footer/>
    </>
  )
}

export default App