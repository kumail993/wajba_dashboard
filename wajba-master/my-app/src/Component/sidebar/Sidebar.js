// import React, { useState } from 'react';
// import './Sidebar.css';
// import LineStyleIcon from '@mui/icons-material/LineStyle';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import AvTimerIcon from '@mui/icons-material/AvTimer';
// import EngineeringIcon from '@mui/icons-material/Engineering';
// import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
// import GraphicEqIcon from '@mui/icons-material/GraphicEq';
// import GroupIcon from '@mui/icons-material/Group';
// import ExplicitIcon from '@mui/icons-material/Explicit';
// import TimelineIcon from '@mui/icons-material/Timeline';
// import SpeedIcon from '@mui/icons-material/Speed';
// import Avatar from '@mui/material/Avatar';
// import { deepOrange, deepPurple } from '@mui/material/colors';
// import { useNavigate } from 'react-router-dom';
// export default function Sidebar() {
//   const navigate = useNavigate();
//   const [showOrderDropdown, setShowOrderDropdown] = useState(false);
//   const [showFoodDropdown, setShowFoodDropdown] = useState(false);
//   const [showPurchaseDropdown, setShowPurchaseDropdown] = useState(false);
//   const [showUsersDropdown, setShowUsersDropdown] = useState(false);
//   const [showHRmDropdown, setShowHRmDropdown] = useState(false);
//   const [showExpensesDropdown, setShowExpensesDropdown] = useState(false);
//   const [showReportDropdown, setShowReportDropdown] = useState(false);
//   const [selectedDropdownItem, setSelectedDropdownItem] = useState(null);

//   const toggleDropdown = (dropdownName) => {
//     switch (dropdownName) {
//       case 'order':
//         setShowOrderDropdown(!showOrderDropdown);
//         break;
//       case 'food':
//         setShowFoodDropdown(!showFoodDropdown);
//         break;
//       case 'purchase':
//         setShowPurchaseDropdown(!showPurchaseDropdown);
//         break;
//       case 'users':
//         setShowUsersDropdown(!showUsersDropdown);
//         break;
//       case 'hrm':
//         setShowHRmDropdown(!showHRmDropdown);
//         break;
//       case 'expenses':
//         setShowExpensesDropdown(!showExpensesDropdown);
//         break;
//       case 'report':
//         setShowReportDropdown(!showReportDropdown);
//         break;
//       default:
//         break;
//     }
//   };

//   const handleDropdownItemClick = (item, dropdownName) => {
//     // Handle click for the dropdown item here
//     console.log(`Clicked item "${item}" in dropdown "${dropdownName}"`);
//     setSelectedDropdownItem(item);
//     toggleDropdown(dropdownName);
//   };

//   return (
//     <div>
//       <div className='sidebar'>
//         <div className='sidebarwrapper'>
//           <div className='sidebarmenu'>
//             <div className='avator'>
//               <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
//             </div>
//             <h3 className='admindashboard'>Admin Dashboard</h3>
//             <h3 className='sidebarTitle' >
//               <SpeedIcon />
//               <div onClick={() =>
//                 navigate('/admin')}>
//                 Dashboard
//               </div>

//             </h3>
//             <ul className='sidebarList'>
//               <li className='sidebarlistitem' onClick={() => toggleDropdown('order')}>
//                 <AvTimerIcon />
//                 <span className='sidebardata' >
//                   Order
//                 </span>
//                 <ArrowDropDownIcon />
//               </li>
//               {showOrderDropdown && (
//                 <ul className='dropdownList'>
//                   <li
//                     className={`dropdownItem ${selectedDropdownItem === 'Dropdown Item 1' ? 'selected' : ''
//                       }`}
//                     onClick={() => handleDropdownItemClick('Order List', 'order')}
//                     onClick={() =>
//                       navigate('/orderlist')}

//                   >
//                     Order List
//                   </li>
//                 </ul>
//               )}
//               <li className='sidebarlistitem' onClick={() => toggleDropdown('food')}>
//                 <RestaurantMenuIcon />
//                 <span>Food management</span>
//                 <ArrowDropDownIcon />
//               </li>
//               {showFoodDropdown && (
//                 <ul className='dropdownList'>
//                   <li
//                     className={`dropdownItem ${selectedDropdownItem === 'Add Food' ? 'selected' : ''
//                       }`}
//                     onClick={() => handleDropdownItemClick('Add Food', 'food')} onClick={() =>
//                       navigate('/foodmanagement')}
//                   >
//                     Add Food
//                   </li>
//                   <li
//                     className={`dropdownItem ${selectedDropdownItem === 'View Food' ? 'selected' : ''
//                       }`}
//                     onClick={() => handleDropdownItemClick('View Food', 'food')} onClick={() =>
//                       navigate('/viewfoodmanagement')}
//                   >
//                     View Food
//                   </li>
//                   <li
//                     className={`dropdownItem ${selectedDropdownItem === 'Food Category' ? 'selected' : ''
//                       }`}
//                     onClick={() => handleDropdownItemClick('Food Category', 'food')} onClick={() =>
//                       navigate('/foodcatagorey')}
//                   >
//                     Food Category
//                   </li>
//                   <li
//                     className={`dropdownItem ${selectedDropdownItem === 'Recipe Add' ? 'selected' : ''
//                       }`}
//                     onClick={() => handleDropdownItemClick('Recipe Add', 'food')} onClick={() =>
//                       navigate('/showrecepydata')}
//                   >
//                     Recipe Add
//                   </li>
//                   <li
//                     className={`dropdownItem ${selectedDropdownItem === 'View Recipe' ? 'selected' : ''
//                       }`}
//                     onClick={() => handleDropdownItemClick('View Recipe', 'food')}
//                   >
//                     View Recipe
//                   </li>
//                 </ul>
//               )}
//               <li className='sidebarlistitem' onClick={() => toggleDropdown('purchase')}>
//                 <GraphicEqIcon />
//                 <span>Purchase</span>
//                 <ArrowDropDownIcon />
//               </li>
//               {showPurchaseDropdown && (
//                 <ul className='dropdownList'>
//                   <li
//                     className={`dropdownItem ${selectedDropdownItem === 'Add Purchase' ? 'selected' : ''
//                       }`}
//                     onClick={() => handleDropdownItemClick('Add Purchase', 'purchase')} onClick={() =>
//                       navigate('/purchase')}
//                   >
//                     Add Purchase
//                   </li>
//                   <li
//                     className={`dropdownItem ${selectedDropdownItem === 'List View' ? 'selected' : ''
//                       }`}
//                     onClick={() => handleDropdownItemClick('List View', 'purchase')} onClick={() =>
//                       navigate('/showpurchaseitem')}
//                   >
//                     List View
//                   </li>
//                 </ul>
//               )}
//               <li className='sidebarlistitem' onClick={() => toggleDropdown('users')}>
//                 <EngineeringIcon />
//                 <span>Users</span>
//                 <ArrowDropDownIcon />
//               </li>
//               {showUsersDropdown && (
//                 <ul className='dropdownList'>
//                   <li
//                     className={`dropdownItem ${selectedDropdownItem === 'Suppliers' ? 'selected' : ''
//                       }`}
//                     onClick={() => handleDropdownItemClick('Suppliers', 'users')} onClick={() =>
//                       navigate('/supplier')}
//                   >
//                     Suppliers
//                   </li>
//                   <li
//                     className={`dropdownItem ${selectedDropdownItem === 'System Users' ? 'selected' : ''
//                       }`}
//                     onClick={() => handleDropdownItemClick('System Users', 'users')} onClick={() =>
//                       navigate('/systemuser')}
//                   >
//                     System Users
//                   </li>
//                   <li
//                     className={`dropdownItem ${selectedDropdownItem === 'Customer User' ? 'selected' : ''
//                       }`}
//                     onClick={() => handleDropdownItemClick('Customer User', 'users')} onClick={() =>
//                       navigate('/costomeruser')}
//                   >
//                     Customer User
//                   </li>
//                 </ul>
//               )}
//               <li className='sidebarlistitem' onClick={() => toggleDropdown('hrm')}>
//                 <GroupIcon />
//                 <span>HRm</span>
//                 <ArrowDropDownIcon />
//               </li>
//               {showHRmDropdown && (
//                 <ul className='dropdownList'>
//                   <li
//                     className={`dropdownItem ${selectedDropdownItem === 'Add Employee' ? 'selected' : ''
//                       }`}
//                     onClick={() => handleDropdownItemClick('Add Employee', 'hrm')} onClick={() =>
//                       navigate('/employee')}
//                   >
//                     Add Employee
//                   </li>
//                   <li
//                     className={`dropdownItem ${selectedDropdownItem === 'View Employee' ? 'selected' : ''
//                       }`}
//                     onClick={() => handleDropdownItemClick('View Employee', 'hrm')} onClick={() =>
//                       navigate('/employeeview')}
//                   >
//                     View Employee
//                   </li>
//                   <li
//                     className={`dropdownItem ${selectedDropdownItem === 'Pay' ? 'selected' : ''
//                       }`}
//                     onClick={() => handleDropdownItemClick('Pay', 'hrm')} onClick={() =>
//                       navigate('/payroll')}
//                   >
//                     Pay
//                   </li>
//                 </ul>
//               )}
//               <li className='sidebarlistitem' onClick={() => toggleDropdown('expenses')}>
//                 <ExplicitIcon />
//                 <span>Expenses</span>
//                 <ArrowDropDownIcon />
//               </li>
//               {showExpensesDropdown && (
//                 <ul className='dropdownList'>
//                   <li
//                     className={`dropdownItem ${selectedDropdownItem === 'Add Expenses' ? 'selected' : ''
//                       }`}
//                     onClick={() => handleDropdownItemClick('Add Expenses', 'expenses')} onClick={() =>
//                       navigate('/check')}
//                   >
//                     check
//                   </li>
//                   <li
//                     className={`dropdownItem ${selectedDropdownItem === 'Add Expenses' ? 'selected' : ''
//                       }`}
//                     onClick={() => handleDropdownItemClick('Add Expenses', 'expenses')} onClick={() =>
//                       navigate('/expenseadd')}
//                   >
//                     Add Expenses
//                   </li>
//                   <li
//                     className={`dropdownItem ${selectedDropdownItem === 'Add Category' ? 'selected' : ''
//                       }`}
//                     onClick={() => handleDropdownItemClick('Add Category', 'expenses')} onClick={() =>
//                       navigate('/expensecatagorey')}

//                   >
//                     Add Category
//                   </li>
//                   <li
//                     className={`dropdownItem ${selectedDropdownItem === 'View Cart' ? 'selected' : ''
//                       }`}
//                     onClick={() => handleDropdownItemClick('View Cart', 'expenses')} onClick={() =>
//                       navigate('/addcart')}
//                   >
//                     View Cart
//                   </li>
//                   <li
//                     className={`dropdownItem ${selectedDropdownItem === 'View Expenses' ? 'selected' : ''
//                       }`}
//                     onClick={() => handleDropdownItemClick('View Expenses', 'expenses')} onClick={() =>
//                       navigate('/viewexpensereport')}
//                   >
//                     View Expenses
//                   </li>
//                 </ul>
//               )}
//               <li className='sidebarlistitem' onClick={() => toggleDropdown('report')}>
//                 <TimelineIcon />
//                 <span>Report</span>
//                 <ArrowDropDownIcon />
//               </li>
//               {showReportDropdown && (
//                 <ul className='dropdownList'>
//                   <li
//                     className={`dropdownItem ${selectedDropdownItem === 'Purchase Report' ? 'selected' : ''
//                       }`}
//                     onClick={() => handleDropdownItemClick('Purchase Report', 'report')} onClick={() =>
//                       navigate('/purchasereport')}
//                   >
//                     Purchase Report
//                   </li>
//                   <li
//                     className={`dropdownItem ${selectedDropdownItem === 'Stock Report(Product Wise)' ? 'selected' : ''
//                       }`}
//                     onClick={() => handleDropdownItemClick('Stock Report(Product Wise)', 'report')} onClick={() =>
//                       navigate('/stock')}
//                   >
//                     Stock Report (Product Wise)
//                   </li>
//                   <li
//                     className={`dropdownItem ${selectedDropdownItem === 'Stock Report(Kitchen)' ? 'selected' : ''
//                       }`}
//                     onClick={() => handleDropdownItemClick('Stock Report(Kitchen)', 'report')} onClick={() =>
//                       navigate('/stockkitchen')}
//                   >
//                     Stock Report (Kitchen)
//                   </li>
//                 </ul>
//               )}
//             </ul>
//           </div>
//         </div>

//       </div>


//     </div>
//   );
// }





import React, { useState } from 'react';
import './Sidebar.css';
import LineStyleIcon from '@mui/icons-material/LineStyle';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import EngineeringIcon from '@mui/icons-material/Engineering';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import GroupIcon from '@mui/icons-material/Group';
import ExplicitIcon from '@mui/icons-material/Explicit';
import TimelineIcon from '@mui/icons-material/Timeline';
import SpeedIcon from '@mui/icons-material/Speed';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';

export default function Sidebar() {
  const navigate = useNavigate();
  const [showOrderDropdown, setShowOrderDropdown] = useState(false);
  const [showFoodDropdown, setShowFoodDropdown] = useState(false);
  const [showPurchaseDropdown, setShowPurchaseDropdown] = useState(false);
  const [showUsersDropdown, setShowUsersDropdown] = useState(false);
  const [showHRmDropdown, setShowHRmDropdown] = useState(false);
  const [showExpensesDropdown, setShowExpensesDropdown] = useState(false);
  const [showReportDropdown, setShowReportDropdown] = useState(false);
  const [selectedDropdownItem, setSelectedDropdownItem] = useState(null);

  const toggleDropdown = (dropdownName) => {
    switch (dropdownName) {
      case 'order':
        setShowOrderDropdown(!showOrderDropdown);
        break;
      case 'food':
        setShowFoodDropdown(!showFoodDropdown);
        break;
      case 'purchase':
        setShowPurchaseDropdown(!showPurchaseDropdown);
        break;
      case 'users':
        setShowUsersDropdown(!showUsersDropdown);
        break;
      case 'hrm':
        setShowHRmDropdown(!showHRmDropdown);
        break;
      case 'expenses':
        setShowExpensesDropdown(!showExpensesDropdown);
        break;
      case 'report':
        setShowReportDropdown(!showReportDropdown);
        break;
      default:
        break;
    }
  };

  const handleDropdownItemClick = (item, dropdownName) => {
    // Handle click for the dropdown item here
    console.log(`Clicked item "${item}" in dropdown "${dropdownName}"`);
    setSelectedDropdownItem(item);
    toggleDropdown(dropdownName);
  };

  return (
    <div className='sidebar'>
      <div className='sidebarwrapper'>
        <div className='sidebarmenu'>
          <div className='avator'>
            <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
          </div>
          <h3 className='admindashboard'>Admin Dashboard</h3>
          <h3 className='sidebarTitle'>
            <SpeedIcon />
            <div onClick={() => navigate('/admin')}>Dashboard</div>
          </h3>
          <div className="sidebar-scrollable">
            <ul className='sidebarList'>
              <li className='sidebarlistitem' onClick={() => toggleDropdown('order')}>
                <AvTimerIcon />
                <span className='sidebardata'>Order</span>
                <ArrowDropDownIcon />
              </li>
              {showOrderDropdown && (
                <ul className='dropdownList'>
                  <li
                    className={`dropdownItem ${selectedDropdownItem === 'Order List' ? 'selected' : ''
                      }`}
                    onClick={() => handleDropdownItemClick('Order List', 'order')}
                    onClick={() => navigate('/orderlist')}
                  >
                    Order List
                  </li>
                </ul>
              )}
              <li className='sidebarlistitem' onClick={() => toggleDropdown('food')}>
                <RestaurantMenuIcon />
                <span>Food management</span>
                <ArrowDropDownIcon />
              </li>
              {showFoodDropdown && (
                <ul className='dropdownList'>
                  <li
                    className={`dropdownItem ${selectedDropdownItem === 'Add Food' ? 'selected' : ''
                      }`}
                    onClick={() => handleDropdownItemClick('Add Food', 'food')} onClick={() =>
                      navigate('/foodmanagement')}
                  >
                    Add Food
                  </li>
                  <li
                    className={`dropdownItem ${selectedDropdownItem === 'View Food' ? 'selected' : ''
                      }`}
                    onClick={() => handleDropdownItemClick('View Food', 'food')} onClick={() =>
                      navigate('/viewfoodmanagement')}
                  >
                    View Food
                  </li>
                  <li
                    className={`dropdownItem ${selectedDropdownItem === 'Food Category' ? 'selected' : ''
                      }`}
                    onClick={() => handleDropdownItemClick('Food Category', 'food')} onClick={() =>
                      navigate('/foodcatagorey')}
                  >
                    Food Category
                  </li>
                  <li
                    className={`dropdownItem ${selectedDropdownItem === 'Recipe Add' ? 'selected' : ''
                      }`}
                    onClick={() => handleDropdownItemClick('Recipe Add', 'food')} onClick={() =>
                      navigate('/showrecepydata')}
                  >
                    Recipe Add
                  </li>
                  <li
                    className={`dropdownItem ${selectedDropdownItem === 'View Recipe' ? 'selected' : ''
                      }`}
                    onClick={() => handleDropdownItemClick('View Recipe', 'food')}
                  >
                    View Recipe
                  </li>
                </ul>
              )}
              <li className='sidebarlistitem' onClick={() => toggleDropdown('purchase')}>
                <GraphicEqIcon />
                <span>Purchase</span>
                <ArrowDropDownIcon />
              </li>
              {showPurchaseDropdown && (
                <ul className='dropdownList'>
                  <li
                    className={`dropdownItem ${selectedDropdownItem === 'Add Purchase' ? 'selected' : ''
                      }`}
                    onClick={() => handleDropdownItemClick('Add Purchase', 'purchase')} onClick={() =>
                      navigate('/purchase')}
                  >
                    Add Purchase
                  </li>
                  <li
                    className={`dropdownItem ${selectedDropdownItem === 'List View' ? 'selected' : ''
                      }`}
                    onClick={() => handleDropdownItemClick('List View', 'purchase')} onClick={() =>
                      navigate('/showpurchaseitem')}
                  >
                    List View
                  </li>
                </ul>
              )}
              <li className='sidebarlistitem' onClick={() => toggleDropdown('users')}>
                <EngineeringIcon />
                <span>Users</span>
                <ArrowDropDownIcon />
              </li>
              {showUsersDropdown && (
                <ul className='dropdownList'>
                  <li
                    className={`dropdownItem ${selectedDropdownItem === 'Suppliers' ? 'selected' : ''
                      }`}
                    onClick={() => handleDropdownItemClick('Suppliers', 'users')} onClick={() =>
                      navigate('/supplier')}
                  >
                    Suppliers
                  </li>
                  <li
                    className={`dropdownItem ${selectedDropdownItem === 'System Users' ? 'selected' : ''
                      }`}
                    onClick={() => handleDropdownItemClick('System Users', 'users')} onClick={() =>
                      navigate('/systemuser')}
                  >
                    System Users
                  </li>
                  <li
                    className={`dropdownItem ${selectedDropdownItem === 'Customer User' ? 'selected' : ''
                      }`}
                    onClick={() => handleDropdownItemClick('Customer User', 'users')} onClick={() =>
                      navigate('/costomeruser')}
                  >
                    Customer User
                  </li>
                </ul>
              )}
              <li className='sidebarlistitem' onClick={() => toggleDropdown('hrm')}>
                <GroupIcon />
                <span>HRm</span>
                <ArrowDropDownIcon />
              </li>
              {showHRmDropdown && (
                <ul className='dropdownList'>
                  <li
                    className={`dropdownItem ${selectedDropdownItem === 'Add Employee' ? 'selected' : ''
                      }`}
                    onClick={() => handleDropdownItemClick('Add Employee', 'hrm')} onClick={() =>
                      navigate('/employee')}
                  >
                    Add Employee
                  </li>
                  <li
                    className={`dropdownItem ${selectedDropdownItem === 'View Employee' ? 'selected' : ''
                      }`}
                    onClick={() => handleDropdownItemClick('View Employee', 'hrm')} onClick={() =>
                      navigate('/employeeview')}
                  >
                    View Employee
                  </li>
                  <li
                    className={`dropdownItem ${selectedDropdownItem === 'Pay' ? 'selected' : ''
                      }`}
                    onClick={() => handleDropdownItemClick('Pay', 'hrm')} onClick={() =>
                      navigate('/payroll')}
                  >
                    Pay
                  </li>
                </ul>
              )}
              <li className='sidebarlistitem' onClick={() => toggleDropdown('expenses')}>
                <ExplicitIcon />
                <span>Expenses</span>
                <ArrowDropDownIcon />
              </li>
              {showExpensesDropdown && (
                <ul className='dropdownList'>
                  <li
                    className={`dropdownItem ${selectedDropdownItem === 'Add Expenses' ? 'selected' : ''
                      }`}
                    onClick={() => handleDropdownItemClick('Add Expenses', 'expenses')} onClick={() =>
                      navigate('/check')}
                  >
                    check
                  </li>
                  <li
                    className={`dropdownItem ${selectedDropdownItem === 'Add Expenses' ? 'selected' : ''
                      }`}
                    onClick={() => handleDropdownItemClick('Add Expenses', 'expenses')} onClick={() =>
                      navigate('/expenseadd')}
                  >
                    Add Expenses
                  </li>
                  <li
                    className={`dropdownItem ${selectedDropdownItem === 'Add Category' ? 'selected' : ''
                      }`}
                    onClick={() => handleDropdownItemClick('Add Category', 'expenses')} onClick={() =>
                      navigate('/expensecatagorey')}

                  >
                    Add Category
                  </li>
                  <li
                    className={`dropdownItem ${selectedDropdownItem === 'View Cart' ? 'selected' : ''
                      }`}
                    onClick={() => handleDropdownItemClick('View Cart', 'expenses')} onClick={() =>
                      navigate('/addcart')}
                  >
                    View Cart
                  </li>
                  <li
                    className={`dropdownItem ${selectedDropdownItem === 'View Expenses' ? 'selected' : ''
                      }`}
                    onClick={() => handleDropdownItemClick('View Expenses', 'expenses')} onClick={() =>
                      navigate('/viewexpensereport')}
                  >
                    View Expenses
                  </li>
                </ul>
              )}
              <li className='sidebarlistitem' onClick={() => toggleDropdown('report')}>
                <TimelineIcon />
                <span>Report</span>
                <ArrowDropDownIcon />
              </li>
              {showReportDropdown && (
                <ul className='dropdownList'>
                  <li
                    className={`dropdownItem ${selectedDropdownItem === 'Purchase Report' ? 'selected' : ''
                      }`}
                    onClick={() => handleDropdownItemClick('Purchase Report', 'report')} onClick={() =>
                      navigate('/purchasereport')}
                  >
                    Purchase Report
                  </li>
                  <li
                    className={`dropdownItem ${selectedDropdownItem === 'Stock Report(Product Wise)' ? 'selected' : ''
                      }`}
                    onClick={() => handleDropdownItemClick('Stock Report(Product Wise)', 'report')} onClick={() =>
                      navigate('/stock')}
                  >
                    Stock Report (Product Wise)
                  </li>
                  <li
                    className={`dropdownItem ${selectedDropdownItem === 'Stock Report(Kitchen)' ? 'selected' : ''
                      }`}
                    onClick={() => handleDropdownItemClick('Stock Report(Kitchen)', 'report')} onClick={() =>
                      navigate('/stockkitchen')}
                  >
                    Stock Report (Kitchen)
                  </li>

                </ul>
              )}
              {/* ... Rest of the code ... */}
              <h3 className='sidebarTitle'>

                <div>Default</div>
              </h3>
              <li className='sidebarlistitem' onClick={() => toggleDropdown('order')}>
                <AvTimerIcon />
                <span className='sidebardata'>Website setting</span>
                <ArrowDropDownIcon />
              </li>
              {showOrderDropdown && (
                <ul className='dropdownList'>
                  <li
                    className={`dropdownItem ${selectedDropdownItem === 'Order List' ? 'selected' : ''
                      }`}
                    onClick={() => handleDropdownItemClick('Order List', 'order')}
                    onClick={() => navigate('/commonsetting')}
                  >
                    Common setting
                  </li>
                  <li
                    className={`dropdownItem ${selectedDropdownItem === 'Order List' ? 'selected' : ''
                      }`}
                    onClick={() => handleDropdownItemClick('Order List', 'order')}
                    onClick={() => navigate('/bannersetting')}
                  >
                   Banner Setting
                  </li>
                  <li
                    className={`dropdownItem ${selectedDropdownItem === 'Order List' ? 'selected' : ''
                      }`}
                    onClick={() => handleDropdownItemClick('Order List', 'order')}
                    onClick={() => navigate('/menusetting')}
                  >
                   Menu Setting 
                  </li>
                 
                </ul>
              )}
              <li className='sidebarlistitem' onClick={() => toggleDropdown('order')}>
                <AvTimerIcon />
                <span className='sidebardata'>Order</span>
                <ArrowDropDownIcon />
              </li>
              {showOrderDropdown && (
                <ul className='dropdownList'>
                  <li
                    className={`dropdownItem ${selectedDropdownItem === 'Order List' ? 'selected' : ''
                      }`}
                    onClick={() => handleDropdownItemClick('Order List', 'order')}
                    onClick={() => navigate('/orderlist')}
                  >
                    Order List
                  </li>
                </ul>
              )}
              

            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

