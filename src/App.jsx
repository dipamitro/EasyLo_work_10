import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faCheck, faTimes);
import './App.css'
import { Route, Routes } from 'react-router-dom';
import AllPartMarge from './Components/Firstpart/AllPartMarge';
import Login from './PageRealatToAdmin/Login/Login';
import AdminDeshBoard from './PageRealatToAdmin/AdminDeshBoard/AdminDeshBoard';
import AdminSideBar from './PageRealatToAdmin/AdminDeshBoard/AdminSideBar';
import OrderFood from './EmplyeeAndFoodInfo/OrderFood';
import AllTableList from './EmplyeeAndFoodInfo/AllTableList';
import AllFoodList from './EmplyeeAndFoodInfo/AllFoodList';
import AllEmployeeList from './EmplyeeAndFoodInfo/AllEmployeeList';
import EmployeeFatch from './EmplyeeAndFoodInfo/EmployeeFatch';
import EmplyeeAndTableMarge from './EmplyeeAndFoodInfo/EmplyeeAndTableMarge';
import EmplyeeAsingTable from './EmplyeeAndFoodInfo/EmplyeeAsingTable';
import CreateNewEmployee from './EmplyeeAndFoodInfo/CreateNewEmployee';
import CreateFood from './PageRealatToAdmin/AdminDeshBoard/CreateFood';
import AllFoodListCreatePart from './EmplyeeAndFoodInfo/AllFoodListCreatePart';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Routes>
   <Route path='/' element={<AllPartMarge />}></Route>
   <Route path='/logIn' element={<Login />}></Route>
   <Route path='/adminDeshBoard' element={<AdminDeshBoard />}></Route>
   <Route path='/adminSideBar' element={<AdminSideBar />}></Route>
   <Route path='/allTableList' element={<AllTableList />}></Route>
   <Route path='/allFoodList' element={<AllFoodList />}></Route>

   <Route path='/employeeFatch' element={<EmployeeFatch />}></Route>
   <Route path='/allEmployeeList' element={<AllEmployeeList />}></Route>
   <Route path='/orderFood' element={<OrderFood />}></Route>
   <Route path='/emplyeeAndTableMarge' element={<EmplyeeAndTableMarge />}></Route>
   <Route path='/emplyeeAsingTable' element={<EmplyeeAsingTable />}></Route>
   <Route path='/CreateNewEmployee' element={<CreateNewEmployee />}></Route>
   <Route path='/createFood' element={<CreateFood />}></Route>
   <Route path='/allFoodListCreatePart' element={<AllFoodListCreatePart />}></Route>
    
   </Routes>

      
    </>
  )
}
 
export default App
