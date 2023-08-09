import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCake } from '@fortawesome/free-solid-svg-icons';
function Service() {
  return (
    <div>
        <section className="ftco-section bg-light">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-2">
            <div className="col-md-12 text-center heading-section ftco-animate fadeInUp ftco-animated">
              <span className="subheading otherfont">Services</span>
              <span className=" otherfont">Services</span>
              <h2 className="mb-4">Catering Services</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 d-flex align-self-stretch ftco-animate text-center fadeInUp ftco-animated">
              <div className="media block-6 services d-block">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span>
                  
                    
                    <FontAwesomeIcon icon="check" size="lg" color="#dfa378" />
   </span>
                </div>
                <div className="media-body p-2 mt-3">
                  <h3 className="heading">Birthday Party</h3>
                  <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex align-self-stretch ftco-animate text-center fadeInUp ftco-animated">
              <div className="media block-6 services d-block">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="flaticon-meetin"><FontAwesomeIcon icon="check" size="lg" color="#dfa378" /></span>
                </div>
                <div className="media-body p-2 mt-3">
                  <h3 className="heading">Business Meetings</h3>
                  <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex align-self-stretch ftco-animate text-center fadeInUp ftco-animated">
              <div className="media block-6 services d-block">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className>
                  <FontAwesomeIcon icon="check" size="lg" color="#dfa378" />
                    
                    </span>
                </div>
                <div className="media-body p-2 mt-3">
                  <h3 className="heading">Wedding Party</h3>
                  <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Service