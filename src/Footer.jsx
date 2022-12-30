import React from 'react'

const Footer = () => {
  return (
    <div>
    <div className=" border">
    <footer className="py-5">
      <div className="row">
        <div className="col-6 col-md-2 mb-3">
          <h5>ABOUT US</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">ABOUT CMRL</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">VISION & MISSIOM</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">BOARD OF DIRECTORS</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">CMRL CORE VALUES</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">DIRECTION</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">SENIOR MANAGEMENT</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">ANNUAL REPORT</a></li>
          </ul>
        </div>
  
        <div className="col-6 col-md-2 mb-3">
          <h5>THE PROJECT</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">WHY METRO RAIL</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">PROJECT BRIEF</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">PROJECT STATUS</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">SITEMAP</a></li>
          </ul>
        </div>
  
        <div className="col-6 col-md-2 mb-3">
          <h5>MEDIA</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">PRESS CLIPPINGS</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">PRESS RELEASES</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">PHOTO GALLERY</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">PUBLIC NOTIFICATIONS</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">BROCHURE</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">NEWSLETTER</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">GAZETTE NOTIFICATIONS</a></li>
            
          </ul>
        </div>
        <div className="col-6 col-md-2 mb-3">
          <h5>ADMIN</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">TERMS AND CONDITION</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">HOME</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">ADMIN</a></li>
          </ul>
        </div>
  
        
      </div>
  
      <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
        <p>© 2022 CHENNAI METRO RAIL LIMITED. ALL RIGHTS RESERVED.</p>
        
        <ul className="list-unstyled d-flex">
          <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"><use href="#twitter"></use></svg></a></li>
          <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"><use href="#instagram"></use></svg></a></li>
          <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"><use href="#facebook"></use></svg></a></li>
        </ul>
      </div>
    </footer>
  </div>
    </div>
  )
}

export default Footer