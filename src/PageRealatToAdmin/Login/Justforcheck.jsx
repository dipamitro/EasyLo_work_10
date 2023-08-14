// import React from 'react'


// function Justforcheck() {
//   return (
//     <div>


// <div className='body2'>
//         <noscript>&lt;strong&gt;We're sorry but ArchitectUI doesn't work properly without JavaScript enabled. Please
//           enable it to continue.&lt;/strong&gt;</noscript>
//         <div id="app">
//           <div className="app-container app-theme-white">
//             <div className="app-header header-shadow">
//               <div className="logo-src" />
//               <div className="app-header__content">
//                 <div className="app-header-left">
//                   <div>
//                     <div className="search-wrapper">
//                       <div className="input-holder"><input type="text" placeholder="Type to search" className="search-input" /><button className="search-icon"><span /></button></div><button className="close" />
//                     </div>
//                   </div>
//                 </div>
//                 <div className="app-header-right">
//                   <div className="d-flex">
//                     <div className="header-btn-lg pr-0">
//                       <div className="widget-content p-0">
//                         <div className="widget-content-wrapper">
//                           <div className="widget-content-left">
//                             <div className="btn-group b-dropdown dropdown" id="__BVID__8">{/**/}<button aria-haspopup="true" aria-expanded="false" type="button" className="btn btn-link dropdown-toggle p-0 mr-2" id="__BVID__8__BV_toggle_"><span>
//                                   <div className="icon-wrapper icon-wrapper-alt rounded-circle"><img width={42} src="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMfaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzEzOCA3OS4xNTk4MjQsIDIwMTYvMDkvMTQtMDE6MDk6MDEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkQ3MDQwMTFBRUNGMDExRThBNjRDQzQyMTE5Mjk5QTQ0IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkQ3MDQwMTE5RUNGMDExRThBNjRDQzQyMTE5Mjk5QTQ0IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IE1hY2ludG9zaCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSI0RjBENjMzNUYyM0RFMUYwNjM4MTY4RTUyODFERkI3QSIgc3RSZWY6ZG9jdW1lbnRJRD0iNEYwRDYzMzVGMjNERTFGMDYzODE2OEU1MjgxREZCN0EiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYGCAsMCgoLCgoMEAwM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" alt="" className="rounded-circle" /></div>
//                                 </span></button>
//                               <div role="menu" tabIndex={-1} className="dropdown-menu dropdown-menu-right dropdown-menu-lg" aria-labelledby="__BVID__8__BV_toggle_"><button type="button" tabIndex={0} className="dropdown-item">Menus</button><button type="button" tabIndex={0} className="dropdown-item">Settings</button>
//                                 <h6 tabIndex={-1} className="dropdown-header">Header</h6><button type="button" tabIndex={0} className="dropdown-item">Actions</button>
//                                 <div tabIndex={-1} className="dropdown-divider" /><button type="button" tabIndex={0} className="dropdown-item">Dividers</button>
//                               </div>
//                             </div>
//                           </div>
//                           <div className="widget-content-left  ml-3 header-user-info">
//                             <div className="widget-heading">Alina Mclourd</div>
//                             <div className="widget-subheading">VP People Manager</div>
//                           </div>
//                           <div className="widget-content-right header-user-info ml-3"><button title type="button" className="btn btn-shadow p-1 btn-info btn-sm" data-original-title="Tooltip Example"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="calendar-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="mr-1 ml-1 svg-inline--fa fa-calendar-alt fa-w-14">
//                                 <path fill="currentColor" d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z" className />
//                               </svg></button></div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="app-header__mobile-menu">
//                 <div><button type="button" className="hamburger close-sidebar-btn hamburger--elastic"><span className="hamburger-box"><span className="hamburger-inner" /></span></button></div>
//               </div>
//               <div className="app-header__menu"><span><button type="button" className="btn btn-icon btn-icon-only btn-primary btn-sm">
//                     <div className="btn-icon-wrapper"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="ellipsis-v" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" className="svg-inline--fa fa-ellipsis-v fa-w-6">
//                         <path fill="currentColor" d="M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z" className />
//                       </svg></div>
//                   </button></span></div>
//             </div>
//             <div className="app-sidebar sidebar-shadow">
//               <div className="app-header__logo">
//                 <div className="logo-src" />
//                 <div className="header__pane ml-auto"><button type="button" className="hamburger close-sidebar-btn hamburger--elastic"><span className="hamburger-box"><span className="hamburger-inner" /></span></button></div>
//               </div>
//               <div className="app-sidebar-content">
//                 <section className="ps-container app-sidebar-scroll ps ps--theme_default" data-ps-id="5b96dddf-4edd-a188-3f8b-ea67765c91ba">
//                   <div className="v-sidebar-menu vsm-default" style={{width: '350px'}}>
//                     <div className="vsm-list">
//                       <div className="vsm-header">
//                         Main Navigation
//                       </div>
//                       <div className="vsm-item first-item open-item parent-active-item"><a href="https://demo.dashboardpack.com/architectui-vue-free/#" className="vsm-link"><i className="vsm-icon pe-7s-rocket" /> {/**/} <span className="vsm-title">Dashboards</span> </a>
//                         <div className="vsm-dropdown">
//                           <div className="vsm-list">
//                             <div className="vsm-item active-item"><a href="https://demo.dashboardpack.com/architectui-vue-free/#/" className="vsm-link router-link-exact-active router-link-active">{/**/} {/**/} <span className="vsm-title">Analytics</span> {/**/}</a> {/**/}</div>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="vsm-item first-item"><a href="https://demo.dashboardpack.com/architectui-vue-free/#" className="vsm-link"><i className="vsm-icon " >
                          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" font-size="1.375rem" class="iconify iconify--bx" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm9-8.586l6 6V15l.001 5H6v-9.585l6-6.001z"></path><path fill="currentColor" d="M12 17c2.206 0 4-1.794 4-4s-1.794-4-4-4s-4 1.794-4 4s1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2s-2-.897-2-2s.897-2 2-2z"></path></svg>
                            </i> {/**/} <span className="vsm-title">Pages</span>
//                           <i className="vsm-arrow" /></a> {/**/}</div>
//                       <div className="vsm-header">
//                         UI Components
//                       </div>
//                       <div className="vsm-item first-item"><a href="https://demo.dashboardpack.com/architectui-vue-free/#" className="vsm-link"> <i className="vsm-icon ">
                          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M169.7 .9c-22.8-1.6-41.9 14-47.5 34.7L110.4 80c.5 0 1.1 0 1.6 0c176.7 0 320 143.3 320 320c0 .5 0 1.1 0 1.6l44.4-11.8c20.8-5.5 36.3-24.7 34.7-47.5C498.5 159.5 352.5 13.5 169.7 .9zM399.8 410.2c.1-3.4 .2-6.8 .2-10.2c0-159.1-128.9-288-288-288c-3.4 0-6.8 .1-10.2 .2L.5 491.9c-1.5 5.5 .1 11.4 4.1 15.4s9.9 5.6 15.4 4.1L399.8 410.2zM176 208a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm64 128a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM96 384a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>
                            </i> {/**/} <span className="vsm-title">Elements</span> <i className="vsm-arrow" /></a> {/**/}</div>
//                       <div className="vsm-item first-item"><a href="https://demo.dashboardpack.com/architectui-vue-free/#" className="vsm-link"><i className="vsm-icon pe-7s-car" /> {/**/} <span className="vsm-title">Components</span> <i className="vsm-arrow" /></a> {/**/}</div>
//                       <div className="vsm-item first-item"><a href="https://demo.dashboardpack.com/architectui-vue-free/#" className="vsm-link"><i className="vsm-icon pe-7s-display2" /> {/**/} <span className="vsm-title">Tables</span> <i className="vsm-arrow" /></a> {/**/}</div>
//                       <div className="vsm-header">
//                         Dashboard Boxes
//                       </div>
//                       <div className="vsm-item first-item"><a href="https://demo.dashboardpack.com/architectui-vue-free/#/widgets/chart-boxes-3" className="vsm-link"><i className="vsm-icon " ><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" font-size="1.375rem" class="iconify iconify--bx" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a5 5 0 1 0 5 5a5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3a3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path></svg> </i> {/**/} <span className="vsm-title">Chart
//                             Boxes</span> {/**/}</a> {/**/}</div>
//                       <div className="vsm-header">
//                         Forms
//                       </div>
//                       <div className="vsm-item first-item"><a href="https://demo.dashboardpack.com/architectui-vue-free/#" className="vsm-link"><i className="vsm-icon pe-7s-light" /> {/**/} <span className="vsm-title">Elements</span> <i className="vsm-arrow" /></a> {/**/}</div>
//                       <div className="vsm-header">
//                         Charts
//                       </div>
//                       <div className="vsm-item first-item"><a href="https://demo.dashboardpack.com/architectui-vue-free/#/charts/chartjs" className="vsm-link"><i className="vsm-icon " ><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" font-size="1.375rem" class="iconify iconify--bx" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a5 5 0 1 0 5 5a5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3a3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path></svg> </i> {/**/} <span className="vsm-title">ChartJS</span> {/**/}</a>
//                         {/**/}</div>
//                     </div> {/**/} <button className="collapse-btn" />
//                   </div>
//                   <div className="ps__scrollbar-x-rail" style={{left: '0px', bottom: '0px'}}>
//                     <div className="ps__scrollbar-x" tabIndex={0} style={{left: '0px', width: '0px'}} />
//                   </div>
//                   <div className="ps__scrollbar-y-rail" style={{top: '0px', right: '0px'}}>
//                     <div className="ps__scrollbar-y" tabIndex={0} style={{top: '0px', height: '0px'}} />
//                   </div>
//                 </section>
//               </div>
//             </div>
//             <div className="app-main__outer">
//               <div className="app-main__inner">
//                 <div>
//                   <div className="app-page-title">
//                     <div className="page-title-wrapper">
//                       <div className="page-title-heading">
//                         <div className="page-title-icon">    <i className="vsm-icon " >
                         

                          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M304 240V16.6c0-9 7-16.6 16-16.6C443.7 0 544 100.3 544 224c0 9-7.6 16-16.6 16H304zM32 272C32 150.7 122.1 50.3 239 34.3c9.2-1.3 17 6.1 17 15.4V288L412.5 444.5c6.7 6.7 6.2 17.7-1.5 23.1C371.8 495.6 323.8 512 272 512C139.5 512 32 404.6 32 272zm526.4 16c9.3 0 16.6 7.8 15.4 17c-7.7 55.9-34.6 105.6-73.9 142.3c-6 5.6-15.4 5.2-21.2-.7L320 288H558.4z"/></svg>

                          
                          </i></div>
//                         <div>
//                           Analytics Dashboard
//                           <div className="page-title-subheading">
//                             This is an example dashboard created using build-in elements and components.
//                           </div>
//                         </div>
//                       </div>
//                       <div className="page-title-actions"><button type="button" className="btn-shadow mr-3 btn btn-dark"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="svg-inline--fa fa-star fa-w-18">
//                             <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" className />
//                           </svg></button><button type="button" className="btn-shadow d-inline-flex align-items-center btn btn-success"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="mr-2 svg-inline--fa fa-plus fa-w-14">
//                             <path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" className />
//                           </svg>
//                           Create New
//                         </button></div>
//                     </div>
//                   </div>
//                   <div className="mb-3 card">
//                     <div className="card-header-tab card-header">
//                       <div className="card-header-title font-size-lg text-capitalize font-weight-normal"><i className="header-icon lnr-charts icon-gradient bg-happy-green" />
//                         Data Statistics
//                       </div>
//                     </div>
//                     <div className="no-gutters row">
//                       <div className="col-sm-6 col-md-4 col-xl-4">
//                         <div className="card no-shadow rm-border bg-transparent widget-chart text-left">
//                           <div className="icon-wrapper rounded-circle">
//                             <div className="icon-wrapper-bg opacity-10 bg-warning" /><i className="pe-7s-scissors text-white opacity-8" />
//                           </div>
//                           <div className="widget-chart-content">
//                             <div className="widget-subheading">Cash Deposits</div>
//                             <div className="widget-numbers">1,7M</div>
//                             <div className="widget-description opacity-8 text-focus">
//                               <div className="d-inline text-danger pr-1"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="svg-inline--fa fa-angle-down fa-w-10">
//                                   <path fill="currentColor" d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" className />
//                                 </svg><span className="pl-1">54.1%</span></div>
//                               less earnings
//                             </div>
//                           </div>
//                         </div>
//                         <div className="divider m-0 d-md-none d-sm-block" />
//                       </div>
//                       <div className="col-sm-6 col-md-4 col-xl-4">
//                         <div className="card no-shadow rm-border bg-transparent widget-chart text-left">
//                           <div className="icon-wrapper rounded-circle">
//                             <div className="icon-wrapper-bg opacity-9 bg-danger" /><i className="pe-7s-radio text-white" />
//                           </div>
//                           <div className="widget-chart-content">
//                             <div className="widget-subheading">Invested Dividents</div>
//                             <div className="widget-numbers"><span>9M</span></div>
//                             <div className="widget-description opacity-8 text-focus">
//                               Grow Rate:
//                               <span className="text-info pl-1"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="svg-inline--fa fa-angle-down fa-w-10">
//                                   <path fill="currentColor" d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" className />
//                                 </svg><span className="pl-1">14.1%</span></span>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="divider m-0 d-md-none d-sm-block" />
//                       </div>
//                       <div className="col-sm-12 col-md-4 col-xl-4">
//                         <div className="card no-shadow rm-border bg-transparent widget-chart text-left">
//                           <div className="icon-wrapper rounded-circle">
//                             <div className="icon-wrapper-bg opacity-9 bg-success" /><i className="pe-7s-musiclist text-white" />
//                           </div>
//                           <div className="widget-chart-content">
//                             <div className="widget-subheading">Capital Gains</div>
//                             <div className="widget-numbers text-success"><span>$563</span></div>
//                             <div className="widget-description text-focus">
//                               Increased by
//                               <span className="text-warning pl-1"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-up" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="svg-inline--fa fa-angle-up fa-w-10">
//                                   <path fill="currentColor" d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z" className />
//                                 </svg><span className="pl-1">7.35%</span></span>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="text-center d-block p-3 card-footer"><button className="btn-pill btn-shadow btn-wide fsize-1 btn btn-primary btn-lg"><span className="mr-2 opacity-7"><i className="icon icon-anim-pulse ion-ios-analytics-outline" /></span><span className="mr-1">View Complete
//                           Report</span></button></div>
//                   </div>
//                   <div className="row">
//                     <div className="col-sm-12 col-lg-6">
//                       <div className="mb-3 card">
//                         <div className="card-header-tab card-header">
//                           <div className="card-header-title font-size-lg text-capitalize font-weight-normal"><i className="header-icon lnr-cloud-download icon-gradient bg-happy-itmeo" />
//                             Technical Support
//                           </div>
//                         </div>
//                         <div className="p-0 card-body">
//                           <div className="p-1 slick-slider-sm mx-auto">
//                             <div className="widget-chart widget-chart2 text-left p-0">
//                               <div className="widget-chat-wrapper-outer">
//                                 <div className="widget-chart-content widget-chart-content-lg pb-0">
//                                   <div className="widget-chart-flex">
//                                     <div className="widget-title opacity-5 text-muted text-uppercase">Helpdesk
//                                       Tickets
//                                     </div>
//                                   </div>
//                                   <div className="widget-numbers">
//                                     <div className="widget-chart-flex">
//                                       <div><span className="text-warning">34</span></div>
//                                       <div className="widget-title ml-2 font-size-lg font-weight-normal text-dark"><span className="opacity-5 text-muted pl-2 pr-1">5%</span>
//                                         increase
//                                       </div>
//                                     </div>
//                                   </div>
//                                 </div>
//                                 <div className="widget-chart-wrapper he-auto opacity-10 m-0">
//                                   <div className>
//                                     <div className="chartjs-size-monitor">
//                                       <div className="chartjs-size-monitor-expand">
//                                         <div className />
//                                       </div>
//                                       <div className="chartjs-size-monitor-shrink">
//                                         <div className />
//                                       </div>
//                                     </div><canvas id="line-chart" width={706} height={181} style={{display: 'block', height: '145px', width: '565px'}} className="chartjs-render-monitor" />
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                           <h6 className="text-muted text-uppercase font-size-md opacity-5 pl-3 pr-3 pb-1 font-weight-normal">
//                             Sales Progress</h6>
//                           <ul className="list-group list-group-flush">
//                             <li className="p-3 bg-transparent list-group-item">
//                               <div className="widget-content p-0">
//                                 <div className="widget-content-outer">
//                                   <div className="widget-content-wrapper">
//                                     <div className="widget-content-left">
//                                       <div className="widget-heading">Total Orders</div>
//                                       <div className="widget-subheading">Last year expenses</div>
//                                     </div>
//                                     <div className="widget-content-right">
//                                       <div className="widget-numbers text-success"><small>$</small>
//                                         1896
//                                       </div>
//                                     </div>
//                                   </div>
//                                   <div className="widget-progress-wrapper">
//                                     <div className="progress-bar-sm progress-bar-animated-alt progress">
//                                       <div role="progressbar" aria-valuenow={43} aria-valuemin={0} aria-valuemax={100} className="progress-bar bg-primary" style={{width: '43%'}} />
//                                     </div>
//                                     <div className="progress-sub-label">
//                                       <div className="sub-label-left">YoY Growth</div>
//                                       <div className="sub-label-right">100%</div>
//                                     </div>
//                                   </div>
//                                 </div>
//                               </div>
//                             </li>
//                           </ul>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-sm-12 col-lg-6">
//                       <div className="card-hover-shadow-2x mb-3 card">
//                         <div className="card-header-tab card-header">
//                           <div className="card-header-title font-size-lg text-capitalize font-weight-normal"><i className="header-icon lnr-lighter icon-gradient bg-amy-crisp" />
//                             Timeline Example
//                           </div>
//                         </div>
//                         <div className="scroll-area-lg">
//                           <section className="ps-container scrollbar-container ps ps--theme_default ps--active-y" data-ps-id="f2ac8965-fe50-ffde-4aa1-b5484975ebe0">
//                             <div className="p-4">
//                               <div className="vertical-time-simple vertical-without-time vertical-timeline vertical-timeline--animate vertical-timeline--one-column">
//                                 <div className="dot-danger vertical-timeline-element">
//                                   <div><span className="vertical-timeline-element-icon bounce-in" />
//                                     <div className="vertical-timeline-element-content bounce-in">
//                                       <h4 className="timeline-title">All Hands Meeting</h4>
//                                     </div>
//                                   </div>
//                                 </div>
//                                 <div className="dot-warning vertical-timeline-element">
//                                   <div><span className="vertical-timeline-element-icon bounce-in" />
//                                     <div className="vertical-timeline-element-content bounce-in">
//                                       <p>Yet another one, at <span className="text-success">15:00 PM</span></p>
//                                     </div>
//                                   </div>
//                                 </div>
//                                 <div className="dot-success vertical-timeline-element">
//                                   <div><span className="vertical-timeline-element-icon bounce-in" />
//                                     <div className="vertical-timeline-element-content bounce-in">
//                                       <h4 className="timeline-title">Build the production release
//                                         <div className="badge badge-danger ml-2">NEW</div>
//                                       </h4>
//                                     </div>
//                                   </div>
//                                 </div>
//                                 <div className="dot-primary vertical-timeline-element">
//                                   <div><span className="vertical-timeline-element-icon bounce-in" />
//                                     <div className="vertical-timeline-element-content bounce-in">
//                                       <h4 className="timeline-title">
//                                         Something not important
//                                       </h4>
//                                     </div>
//                                   </div>
//                                 </div>
//                                 <div className="dot-warning vertical-timeline-element">
//                                   <div><span className="vertical-timeline-element-icon bounce-in" />
//                                     <div className="vertical-timeline-element-content bounce-in">
//                                       <p>Yet another one, at <span className="text-success">15:00 PM</span></p>
//                                     </div>
//                                   </div>
//                                 </div>
//                                 <div className="dot-success vertical-timeline-element">
//                                   <div><span className="vertical-timeline-element-icon bounce-in" />
//                                     <div className="vertical-timeline-element-content bounce-in">
//                                       <h4 className="timeline-title">Build the production release
//                                         <div className="badge badge-danger ml-2">NEW</div>
//                                       </h4>
//                                     </div>
//                                   </div>
//                                 </div>
//                                 <div className="dot-info vertical-timeline-element">
//                                   <div><span className="vertical-timeline-element-icon bounce-in" />
//                                     <div className="vertical-timeline-element-content bounce-in">
//                                       <h4 className="timeline-title">This dot has an info state</h4>
//                                     </div>
//                                   </div>
//                                 </div>
//                                 <div className="dot-dark vertical-timeline-element">
//                                   <div><span className="vertical-timeline-element-icon bounce-in" />
//                                     <div className="vertical-timeline-element-content bounce-in">
//                                       <h4 className="timeline-title">This dot has a dark state</h4>
//                                     </div>
//                                   </div>
//                                 </div>
//                                 <div className="dot-danger vertical-timeline-element">
//                                   <div><span className="vertical-timeline-element-icon bounce-in" />
//                                     <div className="vertical-timeline-element-content bounce-in">
//                                       <h4 className="timeline-title">All Hands Meeting</h4>
//                                     </div>
//                                   </div>
//                                 </div>
//                                 <div className="dot-warning vertical-timeline-element">
//                                   <div><span className="vertical-timeline-element-icon bounce-in" />
//                                     <div className="vertical-timeline-element-content bounce-in">
//                                       <p>Yet another one, at <span className="text-success">15:00 PM</span></p>
//                                     </div>
//                                   </div>
//                                 </div>
//                                 <div className="dot-success vertical-timeline-element">
//                                   <div><span className="vertical-timeline-element-icon bounce-in" />
//                                     <div className="vertical-timeline-element-content bounce-in">
//                                       <h4 className="timeline-title">Build the production release
//                                         <div className="badge badge-danger ml-2">NEW</div>
//                                       </h4>
//                                     </div>
//                                   </div>
//                                 </div>
//                                 <div className="dot-primary vertical-timeline-element">
//                                   <div><span className="vertical-timeline-element-icon bounce-in" />
//                                     <div className="vertical-timeline-element-content bounce-in">
//                                       <h4 className="timeline-title">
//                                         Something not important
//                                       </h4>
//                                     </div>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="ps__scrollbar-x-rail" style={{left: '0px', bottom: '0px'}}>
//                               <div className="ps__scrollbar-x" tabIndex={0} style={{left: '0px', width: '0px'}} />
//                             </div>
//                             <div className="ps__scrollbar-y-rail" style={{top: '0px', height: '400px', right: '0px'}}>
//                               <div className="ps__scrollbar-y" tabIndex={0} style={{top: '0px', height: '324px'}} />
//                             </div>
//                           </section>
//                         </div>
//                         <div className="d-block text-center card-footer"><button className="btn-shadow btn-wide btn-pill btn btn-focus">
//                             View All Messages
//                           </button></div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="row">
//                     <div className="col-md-6 col-xl-3">
//                       <div className="card mb-3 widget-chart widget-chart2 text-left card-btm-border card-shadow-success border-success">
//                         <div className="widget-chat-wrapper-outer">
//                           <div className="widget-chart-content pt-3 pl-3 pb-1">
//                             <div className="widget-chart-flex">
//                               <div className="widget-numbers">
//                                 <div className="widget-chart-flex">
//                                   <div className="fsize-4"><small className="opacity-5">$</small><span>874</span></div>
//                                 </div>
//                               </div>
//                             </div>
//                             <h6 className="widget-subheading mb-0 opacity-5">sales last month</h6>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-md-6 col-xl-3">
//                       <div className="card mb-3 widget-chart widget-chart2 text-left card-btm-border card-shadow-primary border-primary">
//                         <div className="widget-chat-wrapper-outer">
//                           <div className="widget-chart-content pt-3 pl-3 pb-1">
//                             <div className="widget-chart-flex">
//                               <div className="widget-numbers">
//                                 <div className="widget-chart-flex">
//                                   <div className="fsize-4"><small className="opacity-5">$</small><span>1283</span></div>
//                                 </div>
//                               </div>
//                             </div>
//                             <h6 className="widget-subheading mb-0 opacity-5">sales Income</h6>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-md-6 col-xl-3">
//                       <div className="card mb-3 widget-chart widget-chart2 text-left card-btm-border card-shadow-warning border-warning">
//                         <div className="widget-chat-wrapper-outer">
//                           <div className="widget-chart-content pt-3 pl-3 pb-1">
//                             <div className="widget-chart-flex">
//                               <div className="widget-numbers">
//                                 <div className="widget-chart-flex">
//                                   <div className="fsize-4"><small className="opacity-5">$</small><span>1286</span></div>
//                                 </div>
//                               </div>
//                             </div>
//                             <h6 className="widget-subheading mb-0 opacity-5">last month sales</h6>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-md-6 col-xl-3">
//                       <div className="card mb-3 widget-chart widget-chart2 text-left card-btm-border card-shadow-danger border-danger">
//                         <div className="widget-chat-wrapper-outer">
//                           <div className="widget-chart-content pt-3 pl-3 pb-1">
//                             <div className="widget-chart-flex">
//                               <div className="widget-numbers">
//                                 <div className="widget-chart-flex">
//                                   <div className="fsize-4"><small className="opacity-5">$</small><span>564</span></div>
//                                 </div>
//                               </div>
//                             </div>
//                             <h6 className="widget-subheading mb-0 opacity-5">total revenue</h6>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="row">
//                     <div className="col-sm-12 col-lg-6">
//                       <div className="card-hover-shadow-2x mb-3 card">
//                         <div className="card-header-tab card-header">
//                           <div className="card-header-title font-size-lg text-capitalize font-weight-normal"><i className="header-icon lnr-database icon-gradient bg-malibu-beach" />Tasks List
//                           </div>
//                         </div>
//                         <div className="scroll-area-lg">
//                           <section className="ps-container scrollbar-container ps ps--theme_default ps--active-y" data-ps-id="f4919267-7653-21ea-8945-96da73d15c94">
//                             <ul className="todo-list-wrapper list-group list-group-flush">
//                               <li className="list-group-item">
//                                 <div className="todo-indicator bg-warning" />
//                                 <div className="widget-content p-0">
//                                   <div className="widget-content-wrapper">
//                                     <div className="widget-content-left mr-2">
//                                       <div className="custom-checkbox custom-control"><input type="checkbox" id="exampleCustomCheckbox12" className="custom-control-input" /><label htmlFor="exampleCustomCheckbox12" className="custom-control-label">&nbsp;</label></div>
//                                     </div>
//                                     <div className="widget-content-left">
//                                       <div className="widget-heading">Wash the car
//                                         <div className="badge badge-danger ml-2">Rejected</div>
//                                       </div>
//                                       <div className="widget-subheading"><i>Written by Bob</i></div>
//                                     </div>
//                                     <div className="widget-content-right widget-content-actions"><button className="border-0 btn-transition btn btn-outline-success"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-check fa-w-16">
//                                           <path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" className />
//                                         </svg></button><button className="border-0 btn-transition btn btn-outline-danger"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-trash-alt fa-w-14">
//                                           <path fill="currentColor" d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z" className />
//                                         </svg></button></div>
//                                   </div>
//                                 </div>
//                               </li>
//                               <li className="list-group-item">
//                                 <div className="todo-indicator bg-focus" />
//                                 <div className="widget-content p-0">
//                                   <div className="widget-content-wrapper">
//                                     <div className="widget-content-left mr-2">
//                                       <div className="custom-checkbox custom-control"><input type="checkbox" id="exampleCustomCheckbox1" className="custom-control-input" /><label htmlFor="exampleCustomCheckbox1" className="custom-control-label">&nbsp;</label></div>
//                                     </div>
//                                     <div className="widget-content-left">
//                                       <div className="widget-heading">Task with hover dropdown menu</div>
//                                       <div className="widget-subheading">
//                                         <div>By Johnny
//                                           <div className="badge badge-pill badge-info ml-2">NEW</div>
//                                         </div>
//                                       </div>
//                                     </div>
//                                   </div>
//                                 </div>
//                               </li>
//                               <li className="list-group-item">
//                                 <div className="todo-indicator bg-primary" />
//                                 <div className="widget-content p-0">
//                                   <div className="widget-content-wrapper">
//                                     <div className="widget-content-left mr-2">
//                                       <div className="custom-checkbox custom-control"><input type="checkbox" id="exampleCustomCheckbox4" className="custom-control-input" /><label htmlFor="exampleCustomCheckbox4" className="custom-control-label">&nbsp;</label></div>
//                                     </div>
//                                     <div className="widget-content-left flex2">
//                                       <div className="widget-heading">Badge on the right task</div>
//                                       <div className="widget-subheading">This task has show on hover actions!
//                                       </div>
//                                     </div>
//                                     <div className="widget-content-right widget-content-actions"><button className="border-0 btn-transition btn btn-outline-success"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-check fa-w-16">
//                                           <path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" className />
//                                         </svg></button></div>
//                                     <div className="widget-content-right ml-3">
//                                       <div className="badge badge-pill badge-success">Latest Task</div>
//                                     </div>
//                                   </div>
//                                 </div>
//                               </li>
//                               <li className="list-group-item">
//                                 <div className="todo-indicator bg-info" />
//                                 <div className="widget-content p-0">
//                                   <div className="widget-content-wrapper">
//                                     <div className="widget-content-left mr-2">
//                                       <div className="custom-checkbox custom-control"><input type="checkbox" id="exampleCustomCheckbox2" className="custom-control-input" /><label htmlFor="exampleCustomCheckbox2" className="custom-control-label">&nbsp;</label></div>
//                                     </div>
//                                     <div className="widget-content-left mr-3">
//                                       <div className="widget-content-left"><img width={42} src="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMfaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzEzOCA3OS4xNTk4MjQsIDIwMTYvMDkvMTQtMDE6MDk6MDEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkQ3MDQwMTFBRUNGMDExRThBNjRDQzQyMTE5Mjk5QTQ0IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkQ3MDQwMTE5RUNGMDExRThBNjRDQzQyMTE5Mjk5QTQ0IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IE1hY2ludG9zaCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSI0RjBENjMzNUYyM0RFMUYwNjM4MTY4RTUyODFERkI3QSIgc3RSZWY6ZG9jdW1lbnRJRD0iNEYwRDYzMzVGMjNERTFGMDYzODE2OEU1MjgxREZCN0EiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYGCAsMCgoLCgoMEAwM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" alt="" className="rounded" /></div>
//                                     </div>
//                                     <div className="widget-content-left">
//                                       <div className="widget-heading">Go grocery shopping</div>
//                                       <div className="widget-subheading">A short description for this todo item
//                                       </div>
//                                     </div>
//                                     <div className="widget-content-right widget-content-actions"><button className="border-0 btn-transition btn btn-outline-success"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-check fa-w-16">
//                                           <path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" className />
//                                         </svg></button><button className="border-0 btn-transition btn btn-outline-danger"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-trash-alt fa-w-14">
//                                           <path fill="currentColor" d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z" className />
//                                         </svg></button></div>
//                                   </div>
//                                 </div>
//                               </li>
//                               <li className="list-group-item">
//                                 <div className="todo-indicator bg-warning" />
//                                 <div className="widget-content p-0">
//                                   <div className="widget-content-wrapper">
//                                     <div className="widget-content-left mr-2">
//                                       <div className="custom-checkbox custom-control"><input type="checkbox" id="exampleCustomCheckbox12" className="custom-control-input" /><label htmlFor="exampleCustomCheckbox12" className="custom-control-label">&nbsp;</label></div>
//                                     </div>
//                                     <div className="widget-content-left">
//                                       <div className="widget-heading">Wash the car
//                                         <div className="badge badge-danger ml-2">Rejected</div>
//                                       </div>
//                                       <div className="widget-subheading"><i>Written by Bob</i></div>
//                                     </div>
//                                     <div className="widget-content-right widget-content-actions"><button className="border-0 btn-transition btn btn-outline-success"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-check fa-w-16">
//                                           <path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" className />
//                                         </svg></button><button className="border-0 btn-transition btn btn-outline-danger"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-trash-alt fa-w-14">
//                                           <path fill="currentColor" d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z" className />
//                                         </svg></button></div>
//                                   </div>
//                                 </div>
//                               </li>
//                               <li className="list-group-item">
//                                 <div className="todo-indicator bg-focus" />
//                                 <div className="widget-content p-0">
//                                   <div className="widget-content-wrapper">
//                                     <div className="widget-content-left mr-2">
//                                       <div className="custom-checkbox custom-control"><input type="checkbox" id="exampleCustomCheckbox1" className="custom-control-input" /><label htmlFor="exampleCustomCheckbox1" className="custom-control-label">&nbsp;</label></div>
//                                     </div>
//                                     <div className="widget-content-left">
//                                       <div className="widget-heading">Task with hover dropdown menu</div>
//                                       <div className="widget-subheading">
//                                         <div>By Johnny
//                                           <div className="badge badge-pill badge-info ml-2">NEW</div>
//                                         </div>
//                                       </div>
//                                     </div>
//                                     <div className="widget-content-right widget-content-actions"><button className="border-0 btn-transition btn btn-outline-success"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-check fa-w-16">
//                                           <path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" className />
//                                         </svg></button><button className="border-0 btn-transition btn btn-outline-danger"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-trash-alt fa-w-14">
//                                           <path fill="currentColor" d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z" className />
//                                         </svg></button></div>
//                                   </div>
//                                 </div>
//                               </li>
//                               <li className="list-group-item">
//                                 <div className="todo-indicator bg-primary" />
//                                 <div className="widget-content p-0">
//                                   <div className="widget-content-wrapper">
//                                     <div className="widget-content-left mr-2">
//                                       <div className="custom-checkbox custom-control"><input type="checkbox" id="exampleCustomCheckbox4" className="custom-control-input" /><label htmlFor="exampleCustomCheckbox4" className="custom-control-label">&nbsp;</label></div>
//                                     </div>
//                                     <div className="widget-content-left flex2">
//                                       <div className="widget-heading">Badge on the right task</div>
//                                       <div className="widget-subheading">This task has show on hover actions!
//                                       </div>
//                                     </div>
//                                     <div className="widget-content-right widget-content-actions"><button className="border-0 btn-transition btn btn-outline-success"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-check fa-w-16">
//                                           <path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" className />
//                                         </svg></button></div>
//                                     <div className="widget-content-right ml-3">
//                                       <div className="badge badge-pill badge-success">Latest Task</div>
//                                     </div>
//                                   </div>
//                                 </div>
//                               </li>
//                               <li className="list-group-item">
//                                 <div className="todo-indicator bg-success" />
//                                 <div className="widget-content p-0">
//                                   <div className="widget-content-wrapper">
//                                     <div className="widget-content-left mr-2">
//                                       <div className="custom-checkbox custom-control"><input type="checkbox" id="exampleCustomCheckbox3" className="custom-control-input" /><label htmlFor="exampleCustomCheckbox3" className="custom-control-label">&nbsp;</label></div>
//                                     </div>
//                                     <div className="widget-content-left flex2">
//                                       <div className="widget-heading">Development Task</div>
//                                       <div className="widget-subheading">Finish Vue ToDo List App</div>
//                                     </div>
//                                     <div className="widget-content-right">
//                                       <div className="badge badge-warning mr-2">69</div>
//                                     </div>
//                                     <div className="widget-content-right"><button className="border-0 btn-transition btn btn-outline-success"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-check fa-w-16">
//                                           <path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" className />
//                                         </svg></button><button className="border-0 btn-transition btn btn-outline-danger"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-trash-alt fa-w-14">
//                                           <path fill="currentColor" d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z" className />
//                                         </svg></button></div>
//                                   </div>
//                                 </div>
//                               </li>
//                             </ul>
//                             <div className="ps__scrollbar-x-rail" style={{left: '0px', bottom: '0px'}}>
//                               <div className="ps__scrollbar-x" tabIndex={0} style={{left: '0px', width: '0px'}} />
//                             </div>
//                             <div className="ps__scrollbar-y-rail" style={{top: '0px', height: '400px', right: '0px'}}>
//                               <div className="ps__scrollbar-y" tabIndex={0} style={{top: '0px', height: '297px'}} />
//                             </div>
//                           </section>
//                         </div>
//                         <div className="d-block text-right card-footer"><button className="mr-2 btn btn-link btn-sm">Cancel</button><button className="btn btn-primary">Add Task</button>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-sm-12 col-lg-6">
//                       <div className="card-hover-shadow-2x mb-3 card">
//                         <div className="card-header-tab card-header">
//                           <div className="card-header-title font-size-lg text-capitalize font-weight-normal"><i className="header-icon lnr-laptop-phone mr-3 text-muted opacity-6" />
//                             Tables Examples
//                           </div>
//                         </div>
//                         <div className="card-body">
//                           <table aria-busy="false" aria-colcount={3} className="table b-table table-striped table-hover table-bordered border mb-0">
//                             <thead role="rowgroup">
//                               <tr role="row">
//                                 <th role="columnheader" scope="col" aria-colindex={1}>First Name</th>
//                                 <th role="columnheader" scope="col" aria-colindex={2}>Last Name</th>
//                                 <th role="columnheader" scope="col" aria-colindex={3}>Age</th>
//                               </tr>
//                             </thead>
//                             <tfoot role="rowgroup">
//                               <tr role="row">
//                                 <th role="columnheader" scope="col" aria-colindex={1}>First Name</th>
//                                 <th role="columnheader" scope="col" aria-colindex={2}>Last Name</th>
//                                 <th role="columnheader" scope="col" aria-colindex={3}>Age</th>
//                               </tr>
//                             </tfoot>
//                             <tbody role="rowgroup">
//                               <tr role="row">
//                                 <td role="cell" aria-colindex={1}>Dickerson</td>
//                                 <td role="cell" aria-colindex={2}>Macdonald</td>
//                                 <td role="cell" aria-colindex={3}>40</td>
//                               </tr>
//                               <tr role="row">
//                                 <td role="cell" aria-colindex={1}>Larsen</td>
//                                 <td role="cell" aria-colindex={2}>Shaw</td>
//                                 <td role="cell" aria-colindex={3}>21</td>
//                               </tr>
//                               <tr role="row">
//                                 <td role="cell" aria-colindex={1}>Geneva</td>
//                                 <td role="cell" aria-colindex={2}>Wilson</td>
//                                 <td role="cell" aria-colindex={3}>89</td>
//                               </tr>
//                               <tr role="row">
//                                 <td role="cell" aria-colindex={1}>Dickerson</td>
//                                 <td role="cell" aria-colindex={2}>Macdonald</td>
//                                 <td role="cell" aria-colindex={3}>40</td>
//                               </tr>
//                               <tr role="row">
//                                 <td role="cell" aria-colindex={1}>Larsen</td>
//                                 <td role="cell" aria-colindex={2}>Shaw</td>
//                                 <td role="cell" aria-colindex={3}>21</td>
//                               </tr>
//                               <tr role="row">
//                                 <td role="cell" aria-colindex={1}>Geneva</td>
//                                 <td role="cell" aria-colindex={2}>Wilson</td>
//                                 <td role="cell" aria-colindex={3}>89</td>
//                               </tr>
//                               <tr role="row">
//                                 <td role="cell" aria-colindex={1}>Dickerson</td>
//                                 <td role="cell" aria-colindex={2}>Macdonald</td>
//                                 <td role="cell" aria-colindex={3}>40</td>
//                               </tr>
//                               <tr role="row">
//                                 <td role="cell" aria-colindex={1}>Larsen</td>
//                                 <td role="cell" aria-colindex={2}>Shaw</td>
//                                 <td role="cell" aria-colindex={3}>21</td>
//                               </tr>
//                               <tr role="row">
//                                 <td role="cell" aria-colindex={1}>Geneva</td>
//                                 <td role="cell" aria-colindex={2}>Wilson</td>
//                                 <td role="cell" aria-colindex={3}>89</td>
//                               </tr>
//                             </tbody>
//                           </table>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="card mb-3">
//                     <div className="no-gutters row">
//                       <div className="col-md-12 col-lg-4">
//                         <ul className="list-group list-group-flush">
//                           <li className="bg-transparent list-group-item">
//                             <div className="widget-content p-0">
//                               <div className="widget-content-outer">
//                                 <div className="widget-content-wrapper">
//                                   <div className="widget-content-left">
//                                     <div className="widget-heading">Total Orders</div>
//                                     <div className="widget-subheading">Last year expenses</div>
//                                   </div>
//                                   <div className="widget-content-right">
//                                     <div className="widget-numbers text-success">1896</div>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           </li>
//                           <li className="bg-transparent list-group-item">
//                             <div className="widget-content p-0">
//                               <div className="widget-content-outer">
//                                 <div className="widget-content-wrapper">
//                                   <div className="widget-content-left">
//                                     <div className="widget-heading">Clients</div>
//                                     <div className="widget-subheading">Total Clients Profit</div>
//                                   </div>
//                                   <div className="widget-content-right">
//                                     <div className="widget-numbers text-primary">$12.6k</div>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           </li>
//                         </ul>
//                       </div>
//                       <div className="col-md-12 col-lg-4">
//                         <ul className="list-group list-group-flush">
//                           <li className="bg-transparent list-group-item">
//                             <div className="widget-content p-0">
//                               <div className="widget-content-outer">
//                                 <div className="widget-content-wrapper">
//                                   <div className="widget-content-left">
//                                     <div className="widget-heading">Followers</div>
//                                     <div className="widget-subheading">People Interested</div>
//                                   </div>
//                                   <div className="widget-content-right">
//                                     <div className="widget-numbers text-danger">45,9%</div>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           </li>
//                           <li className="bg-transparent list-group-item">
//                             <div className="widget-content p-0">
//                               <div className="widget-content-outer">
//                                 <div className="widget-content-wrapper">
//                                   <div className="widget-content-left">
//                                     <div className="widget-heading">Products Sold</div>
//                                     <div className="widget-subheading">Total revenue streams</div>
//                                   </div>
//                                   <div className="widget-content-right">
//                                     <div className="widget-numbers text-warning">$3M</div>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           </li>
//                         </ul>
//                       </div>
//                       <div className="col-md-12 col-lg-4">
//                         <ul className="list-group list-group-flush">
//                           <li className="bg-transparent list-group-item">
//                             <div className="widget-content p-0">
//                               <div className="widget-content-outer">
//                                 <div className="widget-content-wrapper">
//                                   <div className="widget-content-left">
//                                     <div className="widget-heading">Total Orders</div>
//                                     <div className="widget-subheading">Last year expenses</div>
//                                   </div>
//                                   <div className="widget-content-right">
//                                     <div className="widget-numbers text-success">1896</div>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           </li>
//                           <li className="bg-transparent list-group-item">
//                             <div className="widget-content p-0">
//                               <div className="widget-content-outer">
//                                 <div className="widget-content-wrapper">
//                                   <div className="widget-content-left">
//                                     <div className="widget-heading">Clients</div>
//                                     <div className="widget-subheading">Total Clients Profit</div>
//                                   </div>
//                                   <div className="widget-content-right">
//                                     <div className="widget-numbers text-primary">$12.6k</div>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           </li>
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="app-footer">
//                 <div className="app-footer__inner text-center">
//                   Copyright 2022 DashboardPack.com
//                 </div>
//               </div>
//             </div>
//             <div>
//               <div id="modal1___BV_modal_outer_" style={{position: 'absolute', zIndex: 1040}}>
//                 <div id="modal1" role="dialog" tabIndex={-1} aria-hidden="true" className="modal fade" style={{display: 'none'}}>
//                   <div className="modal-dialog modal-md">
//                     <div role="document" id="modal1___BV_modal_content_" aria-labelledby="modal1___BV_modal_header_" aria-describedby="modal1___BV_modal_body_" className="modal-content">
//                       <header id="modal1___BV_modal_header_" className="modal-header">
//                         <h5 className="modal-title">Bootstrap-Vue</h5><button type="button" aria-label="Close" className="close">×</button>
//                       </header>
//                       <div id="modal1___BV_modal_body_" className="modal-body">
//                         <p className="my-4">Hello from modal!</p>
//                       </div>
//                       <footer id="modal1___BV_modal_footer_" className="modal-footer"><button type="button" className="btn btn-secondary">Cancel</button><button type="button" className="btn btn-primary">OK</button>
//                       </footer>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div>
//               <div id="modallg___BV_modal_outer_" style={{position: 'absolute', zIndex: 1040}}>
//                 <div id="modallg" role="dialog" tabIndex={-1} aria-hidden="true" className="modal fade" style={{display: 'none'}}>
//                   <div className="modal-dialog modal-lg">
//                     <div role="document" id="modallg___BV_modal_content_" aria-labelledby="modallg___BV_modal_header_" aria-describedby="modallg___BV_modal_body_" className="modal-content">
//                       <header id="modallg___BV_modal_header_" className="modal-header">
//                         <h5 className="modal-title">Large Modal</h5><button type="button" aria-label="Close" className="close">×</button>
//                       </header>
//                       <div id="modallg___BV_modal_body_" className="modal-body">
//                         Hello Modal!
//                       </div>
//                       <footer id="modallg___BV_modal_footer_" className="modal-footer"><button type="button" className="btn btn-secondary">Cancel</button><button type="button" className="btn btn-primary">OK</button>
//                       </footer>
//                     </div>
//                   </div>
//                 </div>{/**/}{/**/}
//               </div>
//             </div>
//             <div>
//               <div id="modalsm___BV_modal_outer_" style={{position: 'absolute', zIndex: 1040}}>
//                 <div id="modalsm" role="dialog" tabIndex={-1} aria-hidden="true" className="modal fade" style={{display: 'none'}}>
//                   <div className="modal-dialog modal-sm">
//                     <div role="document" id="modalsm___BV_modal_content_" aria-labelledby="modalsm___BV_modal_header_" aria-describedby="modalsm___BV_modal_body_" className="modal-content">
//                       <header id="modalsm___BV_modal_header_" className="modal-header">
//                         <h5 className="modal-title">Small Modal</h5><button type="button" aria-label="Close" className="close">×</button>
//                       </header>
//                       <div id="modalsm___BV_modal_body_" className="modal-body">
//                         Hello Modal!
//                       </div>
//                       <footer id="modalsm___BV_modal_footer_" className="modal-footer"><button type="button" className="btn btn-secondary">Cancel</button><button type="button" className="btn btn-primary">OK</button>
//                       </footer>
//                     </div>
//                   </div>
//                 </div>{/**/}{/**/}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
// {/*     
//     <LadminSideBar /> */}
//     </div>
//   )
// }

// export default Justforcheck

