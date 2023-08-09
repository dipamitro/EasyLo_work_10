import React from 'react'

function MakeReservation() {
  return (
    <div>
         <section className="ftco-section img" style={{backgroundImage: 'url("https://preview.colorlib.com/theme/feliciano/images/bg_3.jpg")', backgroundPosition: '50% 56.2px'}} data-stellar-background-ratio="0.5">
        <div className="container">
          <div className="row d-flex">
            <div className="col-md-7 ftco-animate makereservation p-4 px-md-5 pb-md-5 fadeInUp ftco-animated">
              <div className="heading-section ftco-animate mb-5 text-center fadeInUp ftco-animated">
                <span className="subheading" />
                <h2 className="mb-4">Make Reservation</h2>
              </div>
              <form action="https://preview.colorlib.com/theme/feliciano/#">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor>Name</label>
                      <input type="text" className="form-control" placeholder="Your Name" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor>Email</label>
                      <input type="text" className="form-control" placeholder="Your Email" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor>Phone</label>
                      <input type="text" className="form-control" placeholder="Phone" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor>Phone</label>
                      <input type="text" className="form-control" id="book_date" placeholder="Date" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor>Time</label>
                      <input type="text" className="form-control ui-timepicker-input" id="book_time" placeholder="Time" autoComplete="off" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor>Person</label>
                      <div className="select-wrap one-third">
                        <div className="icon"><span className="ion-ios-arrow-down" /></div>
                        <select name id className="form-control">
                          <option value>Person</option>
                          <option value>1</option>
                          <option value>2</option>
                          <option value>3</option>
                          <option value>4+</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mt-3">
                    <div className="form-group text-center">
                      <input type="submit" defaultValue="Make a Reservation" className="btn btn-primary py-3 px-5" />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MakeReservation