import React from 'react'


function Nav() {
  return (
    <div>
      
      <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light scrolled awake" id="ftco-navbar">
        <div className="container">
          <a className="navbar-brand" href="index.html">ChickenKO</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="oi oi-menu" /> Menu
          </button>
          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item"><a href="index.html" className="nav-link active " style={{color: '#c8a97e'}}>Home</a></li>
              <li className="nav-item"><a href="about.html" className="nav-link">About</a></li>
              <li className="nav-item"><a href="menu.html" className="nav-link">Menu</a></li>
              <li className="nav-item"><a href="stories.html" className="nav-link">Stories</a></li>
              <li className="nav-item"><a href="contact.html" className="nav-link">Contact</a></li>
              <li className="nav-item cta"><a href="book.html" className="nav-link">Book a table</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="slider-item">
        <div className="overlay" />
        <div className="container">
          <div className="row slider-text justify-content-center align-items-center">
            <div className="col-md-12 col-sm-12 text-center ftco-animate fadeInUp ftco-animated">
              <span className="subheading">ChickenKO</span>
              <h1 className="mb-4">Nutritious &amp; Tasty</h1>
            </div>
          </div>
        </div>
      </div>
      

    </div>
  )
}

export default Nav