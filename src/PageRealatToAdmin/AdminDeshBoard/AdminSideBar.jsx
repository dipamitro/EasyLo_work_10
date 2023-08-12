import React from 'react'

function AdminSideBar() {
    const [visible, setVisible] = useState(false)
  return (
    <div>
        
        <CButton onClick={() => setVisible(true)}>Enable body scrolling</CButton>
    <COffcanvas backdrop={false} placement="start" scroll={true} visible={visible} onHide={() => setVisible(false)}>
      <COffcanvasHeader>
        <COffcanvasTitle>Offcanvas with body scrolling</COffcanvasTitle>
        <CCloseButton className="text-reset" onClick={() => setVisible(false)} />
      </COffcanvasHeader>
      <COffcanvasBody>
        Try scrolling the rest of the page to see this option in action.
      </COffcanvasBody>
    </COffcanvas>
    </div>
  )
}

export default AdminSideBar