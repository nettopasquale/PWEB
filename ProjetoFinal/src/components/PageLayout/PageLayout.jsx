import React from 'react'
import PropTypes from "prop-types";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import bgImage from '../../../assets/imgs/bg.jpg';

export default function PageLayout({children}){
  return (
    <div class="relative min-h-screen bg-cover bg-center bg-no-repeat " style={{ backgroundImage: `url(${bgImage})` }}>
        {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black/90 z-0"></div>
      <div className='relative z-10 '>
          <Header/>
        <main className='flex-1'>
          {children}
        </main>
        <Footer/>
      </div>
    </div>
  )
}
