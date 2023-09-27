import React from 'react';

import { Routes, Route, BrowserRouter} from "react-router-dom";
import Login from "./Component/Login";
import Admin from "./Component/Admin";
import './App.css';
import OrderList from './pages/home/Pos/pages/OrderList';
import Kitchen from './pages/home/Pos/pages/Kiitchen/Kitchen';
import Counter from './pages/home/Pos/pages/Counter/Counter';
import Foodmanagement from './pages/Food management/Foodmanagement';
import ViewFoodmanager from './pages/ViewFoodmanager/ViewFoodmanager';
import Purchase from './pages/Purcahse/Purchase';
import ShowPurchaseItem from './pages/ShowPurchaseItem/ShowPurchaseItem';
import Supplier from './pages/Supplier/Supplier';
import SystemUser from './pages/SystemUser/SystemUser';
import CustomerUser from './pages/CustomerUser/CustomerUser';
import Emplyee from './pages/Employee/Emplyee';
import EmployeeView from './pages/EmployeeVeiw/EmployeeView';
import PayRoll from './pages/PayRoll/PayRoll';
import Check from './pages/home/Check/Check';
import PurchaseReport from './pages/PurchaseReport/PurchaseReport';
import Stock from './pages/Stock/Stock';
import StockKitchen from './pages/StockKitchen/StockKitchen';
import Expenseadd from './pages/Expenceadd/Expenseadd';
import ViewExpensedata from './Component/ViewExpensedata/ViewExpensedata';
import ViewExpensereport from './pages/ViewExpenserepoprt/ViewExpensereport';
import Expensecatagorey from './pages/ExpenseCatagorey/Expensecatagorey';
import Addcart from './pages/AddCart/Addcart';
import Foodcatagorey from './pages/FoodCatagorey/Foodcatagorey';
import ShowRecepydata from './pages/home/showRecepydata/ShowRecepydata';
import Profile from './Component/Profile/Profile';
import Setting from './Component/Setting/Setting';
import Orderdetail from './Component/Orderdetails/Orderdetail';
import Posinvoice from './Component/Posinvoice/Posinvoice';
import Acceptrejectorder from './Component/AcceptReject/Acceptrejectorder';
import Commonsetting from './Component/Common setting/Commonsetting';
import Bannersetting from './Component/BannerSetting/Bannersetting';
import Menusetting from './Component/Menusetting/Menusetting';
import POSinvoicetopbar from './Component/POSinvoicetopbar/POSinvoicetopbar';
import Kitchenstatus from './Component/KitchenStatus/Kitchenstatus';
import TodayOrders from './Component/TodayOrders/TodayOrders';
import Registration from './Component/Registration';
import RegistrationVerification from './Component/RegistrationVerification';
import Addrestaurants from './Component/Addrestaurants';




export default function App() {
  return (
    
   <>
    <BrowserRouter>
    
      <Routes>
        <Route path="/" exact element={<Login />}></Route>
        <Route path="/admin" exact element={<Admin />}>
        </Route>
        <Route path="/registration" exact element={<Registration />}>
        </Route>
        <Route path="/registrationverification" exact element={<RegistrationVerification />}>
        </Route>
        <Route path="/addrestaurants" exact element={<Addrestaurants />}>
        </Route>
        <Route path="/registerationverification" exact element={<RegistrationVerification />}>
        </Route>

 <Route path='/orderlist' exact element={<OrderList/>}/>
 <Route path='/Kitchen' exact element={<Kitchen/>}/>
 <Route path='/counter' exact element={<Counter/>}/>
 <Route path='/Kitchen' exact element={<Kitchen/>}/>
 <Route path='/foodmanagement' exact element={<Foodmanagement/>}/>
 <Route path='/viewfoodmanagement' exact element={<ViewFoodmanager/>}/>
 <Route path='/purchase' exact element={<Purchase/>}/>
 <Route path='/showpurchaseitem' exact element={<ShowPurchaseItem/>}/>
 <Route path='/supplier' exact element={<Supplier/>}/>
 <Route path='/systemuser' exact element={<SystemUser/>}/>
 <Route path='/costomeruser' exact element={<CustomerUser/>}/>
 <Route path='/employee' exact element={<Emplyee/>}/>
 <Route path='/employeeview' exact element={<EmployeeView/>}/>
 <Route path='/payroll' exact element={<PayRoll/>}/>
 <Route path='/check' exact element={<Check/>}/>
 <Route path='/purchasereport' exact element={<PurchaseReport/>}/>
 <Route path='/stock' exact element={<Stock/>}/>
 <Route path='/stockkitchen' exact element={<StockKitchen/>}/>
 <Route path='/expenseadd' exact element={<Expenseadd/>}/>
 <Route path='/viewexpensereport' exact element={<ViewExpensereport/>}/>
 <Route path='/expensecatagorey' exact element={<Expensecatagorey/>}/>
 <Route path='/addcart' exact element={<Addcart/>}/>
 <Route path='/foodcatagorey' exact element={<Foodcatagorey/>}/>
 <Route path='/showrecepydata' exact element={<ShowRecepydata/>}/>
 <Route path='/profile' exact element={<Profile/>}/>
 <Route path='/setting' exact element={<Setting/>}/>
 <Route path='/orderdetail' exact element={<Orderdetail/>}/>
 <Route path='/posinvoice' exact element={<Posinvoice/>}/>
 <Route path='/acceptrejectorder' exact element={<Acceptrejectorder/>}/>
 <Route path='/commonsetting' exact element={<Commonsetting/>}/>
 <Route path='/bannersetting' exact element={<Bannersetting/>}/>
 <Route path='/menusetting' exact element={<Menusetting/>}/>
 <Route path='/posinvoicetopbar' exact element={<POSinvoicetopbar/>}/>
 <Route path='/kitchenstatus' exact element={<Kitchenstatus/>}/>
 <Route path='/todayorder' exact element={<TodayOrders/>}/>

 
 
 

 

  </Routes>
      
    </BrowserRouter>
  {/* <div className='container'>
    <Sidebar/>
  </div> */}
   
  
   </>
  )
}