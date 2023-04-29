import React from 'react';

const CoverSection = () => {

  return (
    <section id="cover" className='panel text-center vh-100 container-fluid' style={{ "color": "gold" }}>
      <div className='row gx-0 h-100'>
        <div className='col-12 col-lg-8 d-flex flex-column justify-content-center cover-content'>
          <h3 className='club-name'>𝕿𝖊𝖈𝖍-𝖊-𝖈𝖑𝖆𝖓</h3>
          <p className='cover-subtitle mb-0 text-white'>presents</p>
          <h1 className='cover-heading text-warning'> MPGI HACKSS 2023</h1>
          <h2 className='text-white position-relative' style={{ "marginBottom": "1rem" }}> DREAM CREATE INSPIRE</h2>
          <p className='cover-tagline'> 2 Days of Code, Coffee & Collaborations</p>
          <p className='cover-subtitle text-white'>powered by</p>
          <img src="./H2SLogoWhite.png" className='sponsor-img' />
          <div className='d-flex flex-wrap justify-content-center align-items-center'>
            <a className='text-decoration-none'><button className='custom-apply-button apply-button'><p>REGISTRATIONS CLOSED</p></button></a>
            <a href="https://docs.google.com/spreadsheets/d/1zfQbTaWoVnoTrcQvo4h0AAuDBdDeuuv-JOqAYGuPyTE/edit#gid=802367437" target='_blank' className='text-decoration-none custom-apply-button apply-button'><p>CERTIFICATES OF PARTICIPANTS</p></a>
          </div>
          
        </div>
        <div className='col-12 col-lg-4 order-first order-md-last d-flex flex-column align-items-center justify-content-center cover-image'>
          <img src='./mpgiHacksPNG.png' className='club-img' />
          <p className='cover-dates d-none d-sm-none d-md-block'><code className=' text-warning'>18<span>th</span> - 19<span>th</span> April</code></p>
        </div>
      </div>
    </section>
  )
}

export default CoverSection
// panel min-vh-100 d-flex flex-column align-items-start justify-content-center
