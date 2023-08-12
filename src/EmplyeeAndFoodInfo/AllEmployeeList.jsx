import React from "react";
import { Link } from "react-router-dom";

import FoodTableFatch from "./FoodTableFatch";
import EmployeeFatch from "./EmployeeFatch";
function AllEmployeeList() {
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
                                      src="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMfaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzEzOCA3OS4xNTk4MjQsIDIwMTYvMDkvMTQtMDE6MDk6MDEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkQ3MDQwMTFBRUNGMDExRThBNjRDQzQyMTE5Mjk5QTQ0IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkQ3MDQwMTE5RUNGMDExRThBNjRDQzQyMTE5Mjk5QTQ0IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IE1hY2ludG9zaCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSI0RjBENjMzNUYyM0RFMUYwNjM4MTY4RTUyODFERkI3QSIgc3RSZWY6ZG9jdW1lbnRJRD0iNEYwRDYzMzVGMjNERTFGMDYzODE2OEU1MjgxREZCN0EiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYGCAsMCgoLCgoMEAwM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"
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
                            <div className="widget-heading">Alina Mclourd</div>
                            <div className="widget-subheading">
                              VP People Manager
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
                          <i className="vsm-icon pe-7s-rocket" />
                          <span className="vsm-title">
                            <Link to={'/adminDeshBoard'}> Dashboards</Link></span>
                          <i className="vsm-arrow open-arrow" />
                        </a>
                        <div className="vsm-dropdown">
                          <div className="vsm-list">
                            <div className="vsm-item active-item">
                              <a
                                href="#"
                                className="vsm-link router-link-exact-active router-link-active"
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
                          <i className="pe-7s-plane icon-gradient bg-tempting-azure " >
                          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" font-size="1.375rem" class="iconify iconify--bx" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm9-8.586l6 6V15l.001 5H6v-9.585l6-6.001z"></path><path fill="currentColor" d="M12 17c2.206 0 4-1.794 4-4s-1.794-4-4-4s-4 1.794-4 4s1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2s-2-.897-2-2s.897-2 2-2z"></path></svg>
                            </i>
                          <span className="vsm-title">
                          <Link to={'/allEmployeeList'}> All Emplyee List</Link></span>
                          
                        </a>
                      </div>
                      <div className="vsm-header">Food</div>
                      <div className="vsm-item first-item">
                        <a href="#" className="vsm-link">
                          <i className="vsm-icon pe-7s-diamond" />
                          <span className="vsm-title">
                            <Link to={'/allFoodList'}> All Food List</Link>
                            
                            </span>
                          
                        </a>
                      </div>
                     
                    
                      <div className="vsm-header">Table</div>
                      <div className="vsm-item first-item">
                        <a href="#widgets/chart-boxes-3" className="vsm-link">
                          <i className="vsm-icon " ><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" font-size="1.375rem" class="iconify iconify--bx" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a5 5 0 1 0 5 5a5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3a3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path></svg> </i>
                          <span className="vsm-title">
                            <Link to={'/allTableList'}>Table List</Link>
                            </span>
                        </a>
                      </div>
                      <div className="vsm-item first-item">
                        <a href="#widgets/chart-boxes-3" className="vsm-link">
                          <i className="vsm-icon " ><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" font-size="1.375rem" class="iconify iconify--bx" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a5 5 0 1 0 5 5a5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3a3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path></svg> </i>
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
                          <i className="vsm-icon " ><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" font-size="1.375rem" class="iconify iconify--bx" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a5 5 0 1 0 5 5a5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3a3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path></svg> </i>
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
                          Analytics Dashboard
                          <div className="page-title-subheading">
                            This is an example dashboard created using build-in
                            elements and components.
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
                         <EmployeeFatch />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="app-footer">
                <div className="app-footer__inner text-center">
                  Copyright 2022 DashboardPack.com
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






export default AllEmployeeList