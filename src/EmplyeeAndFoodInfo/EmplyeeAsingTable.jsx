import React from "react";
import { Link } from "react-router-dom";
import AllEmployeeList from "../EmplyeeAndFoodInfo/AllEmployeeList";
import FoodTableFatch from "./FoodTableFatch";
import EmplyeeAndTableMarge from "./EmplyeeAndTableMarge";
function EmplyeeAsingTable() {
  return (
    <div>
      <div className="body2">
        <div id="app">
          <div className="app-container app-theme-white">
            <div className="app-header header-shadow">
              <div className="logo-src" />
              <div className="app-header__content">
                <div className="app-header-left">
                  <div>
                    <div className="search-wrapper">
                      <div className="input-holder">
                        <input
                          type="text"
                          placeholder="Type to search"
                          className="search-input"
                        />
                        <button className="search-icon">
                          <span />
                        </button>
                      </div>
                      <button className="close" />
                    </div>
                  </div>
                </div>
                <div className="app-header-right">
                  <div className="d-flex">
                    <div className="header-btn-lg pr-0">
                      <div className="widget-content p-0">
                        <div className="widget-content-wrapper">
                          <div className="widget-content-left">
                            <div
                              className="btn-group b-dropdown dropdown"
                              id="__BVID__8"
                            >
                              <button
                                aria-haspopup="true"
                                aria-expanded="false"
                                type="button"
                                className="btn btn-link dropdown-toggle p-0 mr-2"
                                id="__BVID__8__BV_toggle_"
                              >
                                <span>
                                  <div className="icon-wrapper icon-wrapper-alt rounded-circle">
                                  <img
                                      width={42}
                                      src="https://e1.pxfuel.com/desktop-wallpaper/732/405/desktop-wallpaper-cartoon-dp-boy-for-whatsapp-handsome-boy-cartoon-thumbnail.jpg"
                                      alt=""
                                      className="rounded-circle"
                                    />
                                  </div>
                                </span>
                              </button>
                              <div
                                role="menu"
                                tabIndex={-1}
                                className="dropdown-menu dropdown-menu-right dropdown-menu-lg"
                                aria-labelledby="__BVID__8__BV_toggle_"
                              >
                                <button
                                  type="button"
                                  tabIndex={0}
                                  className="dropdown-item"
                                >
                                  Menus
                                </button>
                                <button
                                  type="button"
                                  tabIndex={0}
                                  className="dropdown-item"
                                >
                                  Settings
                                </button>
                                <h6 tabIndex={-1} className="dropdown-header">
                                  Header
                                </h6>
                                <button
                                  type="button"
                                  tabIndex={0}
                                  className="dropdown-item"
                                >
                                  Actions
                                </button>
                                <div
                                  tabIndex={-1}
                                  className="dropdown-divider"
                                />
                                <button
                                  type="button"
                                  tabIndex={0}
                                  className="dropdown-item"
                                >
                                  Dividers
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="widget-content-left  ml-3 header-user-info">
                            <div className="widget-heading">Arica Moleurd</div>
                            <div className="widget-subheading">
                              Bss Manager
                            </div>
                          </div>
                          <div className="widget-content-right header-user-info ml-3">
                            <button
                              title
                              type="button"
                              className="btn btn-shadow p-1 btn-info btn-sm"
                              data-original-title="Tooltip Example"
                            >
                              <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="calendar-alt"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                                className="mr-1 ml-1 svg-inline--fa fa-calendar-alt fa-w-14"
                              >
                                <path
                                  fill="currentColor"
                                  d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"
                                  className
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="app-header__mobile-menu">
                <div>
                  <button
                    type="button"
                    className="hamburger close-sidebar-btn hamburger--elastic"
                  >
                    <span className="hamburger-box">
                      <span className="hamburger-inner" />
                    </span>
                  </button>
                </div>
              </div>
              <div className="app-header__menu">
                <span>
                  <button
                    type="button"
                    className="btn btn-icon btn-icon-only btn-primary btn-sm"
                  >
                    <div className="btn-icon-wrapper">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="ellipsis-v"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 192 512"
                        className="svg-inline--fa fa-ellipsis-v fa-w-6"
                      >
                        <path
                          fill="currentColor"
                          d="M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z"
                          className
                        />
                      </svg>
                    </div>
                  </button>
                </span>
              </div>
            </div>
            <div className="app-sidebar sidebar-shadow">
              <div className="app-header__logo">
                <h4>Admin</h4>
                
                
                <div className="header__pane ml-auto">
                  <button
                    type="button"
                    className="hamburger close-sidebar-btn hamburger--elastic"
                  >
                    <span className="hamburger-box">
                      <span className="hamburger-inner" />
                    </span>
                  </button>
                </div>
              </div>
              <div className="app-sidebar-content">
                <section
                  className="ps-container app-sidebar-scroll ps ps--theme_default"
                  data-ps-id="5b96dddf-4edd-a188-3f8b-ea67765c91ba"
                >
                  <div
                    className="v-sidebar-menu vsm-default"
                    style={{ width: "350px" }}
                  >
                    <div className="vsm-list">
                      <div className="vsm-header">Main Navigation</div>
                      <div className="vsm-header">Employee</div>
                      <div className="vsm-item first-item open-item parent-active-item">
                        <a href="#" className="vsm-link">
                          {/* <i className="vsm-icon " /> */}


                          <i className="vsm-icon icon-gradient bg-tempting-azure " >
                          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" font-size="1.375rem" class="iconify iconify--bx" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm9-8.586l6 6V15l.001 5H6v-9.585l6-6.001z"></path><path fill="currentColor" d="M12 17c2.206 0 4-1.794 4-4s-1.794-4-4-4s-4 1.794-4 4s1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2s-2-.897-2-2s.897-2 2-2z"></path></svg>
                            </i>
                          <span className="vsm-title">
                            <Link to={'/adminDeshBoard'}> Dashboards</Link></span>
                          
                        </a>
                        <div className="vsm-dropdown">
                          <div className="vsm-list">
                            <div className="vsm-item ">
                              <a
                                href="#"
                                className="vsm-link router-link-exact-active router-link-active" style={{color:"#69AA8A"}}
                                
                              >
                                
                                <span className="vsm-title">
                                  Analytics
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="vsm-item first-item">
                        <a href="#" className="vsm-link">
                         <i className="vsm-icon icon-gradient bg-tempting-azure " >
                          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" font-size="1.375rem" class="iconify iconify--bx" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm9-8.586l6 6V15l.001 5H6v-9.585l6-6.001z"></path><path fill="currentColor" d="M12 17c2.206 0 4-1.794 4-4s-1.794-4-4-4s-4 1.794-4 4s1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2s-2-.897-2-2s.897-2 2-2z"></path></svg>
                            </i>
                          <span className="vsm-title">
                          <Link to={'/allEmployeeList'}> All Emplyee List</Link></span>
                          
                        </a>
                      </div>
                      <div className="vsm-header">Food</div>
                      <div className="vsm-item first-item">
                        <a href="#" className="vsm-link">
                           <i className="vsm-icon ">
                          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M169.7 .9c-22.8-1.6-41.9 14-47.5 34.7L110.4 80c.5 0 1.1 0 1.6 0c176.7 0 320 143.3 320 320c0 .5 0 1.1 0 1.6l44.4-11.8c20.8-5.5 36.3-24.7 34.7-47.5C498.5 159.5 352.5 13.5 169.7 .9zM399.8 410.2c.1-3.4 .2-6.8 .2-10.2c0-159.1-128.9-288-288-288c-3.4 0-6.8 .1-10.2 .2L.5 491.9c-1.5 5.5 .1 11.4 4.1 15.4s9.9 5.6 15.4 4.1L399.8 410.2zM176 208a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm64 128a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM96 384a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>
                            </i>
                          <span className="vsm-title">
                            <Link to={'/allFoodList'}> All Food List</Link>
                            
                            </span>
                          
                        </a>
                      </div>
                     
                    
                      <div className="vsm-header">Table</div>
                      <div className="vsm-item first-item">
                        <a href="#widgets/chart-boxes-3" className="vsm-link">
                           <i className="vsm-icon " >
                          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" font-size="1.375rem" class="iconify iconify--bx" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M4 21h15.893c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zm0-2v-5h4v5H4zM14 7v5h-4V7h4zM8 7v5H4V7h4zm2 12v-5h4v5h-4zm6 0v-5h3.894v5H16zm3.893-7H16V7h3.893v5z"></path></svg>



                          
                          </i>
                          <span className="vsm-title">
                            <Link to={'/allTableList'}>Table List</Link>
                            </span>
                        </a>
                      </div>
                      <div className="vsm-item first-item" style={{ background: '#eafff4'}}>
                        <a href="#widgets/chart-boxes-3" className="vsm-link">
                           <i className="vsm-icon " >
                          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" font-size="1.375rem" class="iconify iconify--bx" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M4 21h15.893c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zm0-2v-5h4v5H4zM14 7v5h-4V7h4zM8 7v5H4V7h4zm2 12v-5h4v5h-4zm6 0v-5h3.894v5H16zm3.893-7H16V7h3.893v5z"></path></svg>



                          
                          </i>
                          <span className="vsm-title">
                            <Link to={'/emplyeeAsingTable'}>Emplyee & Table</Link>
                            </span>
                        </a>
                      </div>
                      <div className="vsm-header">Order</div>
                      <div className="vsm-item first-item">
                        <a href="#" className="vsm-link">
                         <i className="vsm-icon ">
                         <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M61.1 224C45 224 32 211 32 194.9c0-1.9 .2-3.7 .6-5.6C37.9 168.3 78.8 32 256 32s218.1 136.3 223.4 157.3c.5 1.9 .6 3.7 .6 5.6c0 16.1-13 29.1-29.1 29.1H61.1zM144 128a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm240 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32zM272 96a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zM16 304c0-26.5 21.5-48 48-48H448c26.5 0 48 21.5 48 48s-21.5 48-48 48H64c-26.5 0-48-21.5-48-48zm16 96c0-8.8 7.2-16 16-16H464c8.8 0 16 7.2 16 16v16c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V400z"/></svg>
                            </i>
                          <span className="vsm-title"><Link to={'/orderFood'}>Order Food</Link></span>
                          
                        </a>
                      </div>
                      <div className="vsm-header">Charts</div>
                      <div className="vsm-item first-item">
                        <a href="#charts/chartjs" className="vsm-link">
                           <i className="vsm-icon " >
                          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" font-size="1.375rem" class="iconify iconify--bx" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M4 21h15.893c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zm0-2v-5h4v5H4zM14 7v5h-4V7h4zM8 7v5H4V7h4zm2 12v-5h4v5h-4zm6 0v-5h3.894v5H16zm3.893-7H16V7h3.893v5z"></path></svg>



                          
                          </i>
                          <span className="vsm-title">ChartJS</span>
                        </a>
                      </div>
                    </div>
                    <button className="collapse-btn" />
                  </div>
                  <div
                    className="ps__scrollbar-x-rail"
                    style={{ left: "0px", bottom: "0px" }}
                  >
                    <div
                      className="ps__scrollbar-x"
                      tabIndex={0}
                      style={{ left: "0px", width: "0px" }}
                    />
                  </div>
                  <div
                    className="ps__scrollbar-y-rail"
                    style={{ top: "0px", right: "0px" }}
                  >
                    <div
                      className="ps__scrollbar-y"
                      tabIndex={0}
                      style={{ top: "0px", height: "0px" }}
                    />
                  </div>
                </section>
              </div>
            </div>
            <div className="app-main__outer">
              <div className="app-main__inner">
                <div>
                  <div className="app-page-title">
                    <div className="page-title-wrapper">
                      <div className="page-title-heading">
                        <div className="page-title-icon">
                              <i className="vsm-icon " >
                         

                          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M304 240V16.6c0-9 7-16.6 16-16.6C443.7 0 544 100.3 544 224c0 9-7.6 16-16.6 16H304zM32 272C32 150.7 122.1 50.3 239 34.3c9.2-1.3 17 6.1 17 15.4V288L412.5 444.5c6.7 6.7 6.2 17.7-1.5 23.1C371.8 495.6 323.8 512 272 512C139.5 512 32 404.6 32 272zm526.4 16c9.3 0 16.6 7.8 15.4 17c-7.7 55.9-34.6 105.6-73.9 142.3c-6 5.6-15.4 5.2-21.2-.7L320 288H558.4z"/></svg>

                          
                          </i>
                        </div>
                        <div>
                          Admin Dashboard
                          <div className="page-title-subheading">
                           API Calling
                          </div>
                        </div>
                      </div>
                      <div className="page-title-actions">
                        <button
                          type="button"
                          className="btn-shadow mr-3 btn btn-dark"
                        >
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="star"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                            className="svg-inline--fa fa-star fa-w-18"
                          >
                            <path
                              fill="currentColor"
                              d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                              className
                            />
                          </svg>
                        </button>
                        <button
                          type="button"
                          className="btn-shadow d-inline-flex align-items-center btn btn-success"
                        >
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="plus"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            className="mr-2 svg-inline--fa fa-plus fa-w-14"
                          >
                            <path
                              fill="currentColor"
                              d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
                              className
                            />
                          </svg>
                          Create New
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-12 col-lg-12">
                      <div className="card-hover-shadow-2x mb-3 card">
                        <div className="card-header-tab card-header">
                          <div className="card-header-title font-size-lg text-capitalize font-weight-normal">
                            <i className="header-icon lnr-laptop-phone mr-3 text-muted opacity-6" />
                            Tables Examples
                          </div>
                        </div>
                        <div className="card-body">
                          {/* <table
                            aria-busy="false"
                            aria-colcount={3}
                            className="table b-table table-striped table-hover table-bordered border mb-0"
                          >
                            <thead >
                              <tr role="row">
                                <th
                                  
                                >
                                  First Name
                                </th>
                                <th
                                  
                                >
                                  Last Name
                                </th>
                                <th
                                 
                                >
                                  Age
                                </th>
                              </tr>
                            </thead>
                           
                            <tbody >
                              <tr role="row">
                                <td role="cell" aria-colindex={1}>
                                  Dickerson
                                </td>
                                <td role="cell" aria-colindex={2}>
                                  Macdonald
                                </td>
                                <td role="cell" aria-colindex={3}>
                                  40
                                </td>
                              </tr>
                              <tr role="row">
                                <td role="cell" aria-colindex={1}>
                                  Larsen
                                </td>
                                <td role="cell" aria-colindex={2}>
                                  Shaw
                                </td>
                                <td role="cell" aria-colindex={3}>
                                  21
                                </td>
                              </tr>
                              <tr role="row">
                                <td role="cell" aria-colindex={1}>
                                  Geneva
                                </td>
                                <td role="cell" aria-colindex={2}>
                                  Wilson
                                </td>
                                <td role="cell" aria-colindex={3}>
                                  89
                                </td>
                              </tr>
                              <tr role="row">
                                <td role="cell" aria-colindex={1}>
                                  Dickerson
                                </td>
                                <td role="cell" aria-colindex={2}>
                                  Macdonald
                                </td>
                                <td role="cell" aria-colindex={3}>
                                  40
                                </td>
                              </tr>
                              <tr role="row">
                                <td role="cell" aria-colindex={1}>
                                  Larsen
                                </td>
                                <td role="cell" aria-colindex={2}>
                                  Shaw
                                </td>
                                <td role="cell" aria-colindex={3}>
                                  21
                                </td>
                              </tr>
                              <tr role="row">
                                <td role="cell" aria-colindex={1}>
                                  Geneva
                                </td>
                                <td role="cell" aria-colindex={2}>
                                  Wilson
                                </td>
                                <td role="cell" aria-colindex={3}>
                                  89
                                </td>
                              </tr>
                              <tr role="row">
                                <td role="cell" aria-colindex={1}>
                                  Dickerson
                                </td>
                                <td role="cell" aria-colindex={2}>
                                  Macdonald
                                </td>
                                <td role="cell" aria-colindex={3}>
                                  40
                                </td>
                              </tr>
                              <tr role="row">
                                <td role="cell" aria-colindex={1}>
                                  Larsen
                                </td>
                                <td role="cell" aria-colindex={2}>
                                  Shaw
                                </td>
                                <td role="cell" aria-colindex={3}>
                                  21
                                </td>
                              </tr>
                              <tr role="row">
                                <td role="cell" aria-colindex={1}>
                                  Geneva
                                </td>
                                <td role="cell" aria-colindex={2}>
                                  Wilson
                                </td>
                                <td role="cell" aria-colindex={3}>
                                  89
                                </td>
                              </tr>
                            </tbody>
                          </table> */}
                         <EmplyeeAndTableMarge />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="app-footer">
                <div className="app-footer__inner text-center">
                  DashboardBss.com
                </div>
              </div>
            </div>

            <div>
              <div
                id="modalsm___BV_modal_outer_"
                style={{ position: "absolute", zIndex: 1040 }}
              >
                <div
                  id="modalsm"
                  role="dialog"
                  tabIndex={-1}
                  aria-hidden="true"
                  className="modal fade"
                  style={{ display: "none" }}
                >
                  <div className="modal-dialog modal-sm">
                    <div
                      role="document"
                      id="modalsm___BV_modal_content_"
                      aria-labelledby="modalsm___BV_modal_header_"
                      aria-describedby="modalsm___BV_modal_body_"
                      className="modal-content"
                    >
                      <header
                        id="modalsm___BV_modal_header_"
                        className="modal-header"
                      >
                        <h5 className="modal-title">Small Modal</h5>
                        <button
                          type="button"
                          aria-label="Close"
                          className="close"
                        >
                          ×
                        </button>
                      </header>
                      <div id="modalsm___BV_modal_body_" className="modal-body">
                        Hello Modal!
                      </div>
                      <footer
                        id="modalsm___BV_modal_footer_"
                        className="modal-footer"
                      >
                        <button type="button" className="btn btn-secondary">
                          Cancel
                        </button>
                        <button type="button" className="btn btn-primary">
                          OK
                        </button>
                      </footer>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmplyeeAsingTable;


