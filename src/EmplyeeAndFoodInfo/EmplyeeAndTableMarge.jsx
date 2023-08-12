import React from 'react'
import EmployeeWithTable from './EmployeeWithTable'
import TableNoWithEmplyee from './TableNoWithEmplyee'

function EmplyeeAndTableMarge() {
  return (
    <div style={{display:"flex"}}>
        <EmployeeWithTable />
        <TableNoWithEmplyee />
    </div>
  )
}

export default EmplyeeAndTableMarge