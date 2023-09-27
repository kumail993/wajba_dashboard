import './OrderSidebar.css'
// import DashboardIcon from '@mui/icons-material/Dashboard';
import Avatar from '@mui/material/Avatar';
import { deepOrange} from '@mui/material/colors';
// import { useState } from 'react';


export default function Sidebar() {


  return (
    <div className='sidebar'>

     

    <aside class="main-sidebar">

<div class="sidebar">

<div class="user-panel text-center">
<div class="image">
<Avatar sx={{ bgcolor: deepOrange[500] }}>J</Avatar>

{/* <img src="https://bhojon.bdtask-demo.com/demo-default/./assets/img/user/m2.png" class="img-circle" alt="User Image"> */}
</div>
<div class="info">
<p>Joses Fernando</p>
<a href="#"><i class="fa fa-circle text-success"></i> Admin</a>
</div>
</div>

<ul class="sidebar-menu">
<li class="treeview active">
<a href="https://bhojon.bdtask-demo.com/demo-default/dashboard/home"><i class="bi bi-speedometer2"></i> <span>Dashboard</span>
</a>
</li>

<li class="treeview">
<a href="javascript:void(0)">
<i class="bi bi-clock" aria-hidden="true"></i> <span>Manage Order</span>
<span class="pull-right-container">
<i class="fa fa-angle-left pull-right"></i>
</span>
</a>
<ul class="treeview-menu">

<li class="">
<a href="https://bhojon.bdtask-demo.com/demo-default/ordermanage/order/pos_invoice">Pos Invoice</a>
</li>

<li class="">
<a href="https://bhojon.bdtask-demo.com/demo-default/ordermanage/order/orderlist">Order list </a>
</li>

<li class="">
<a href="https://bhojon.bdtask-demo.com/demo-default/ordermanage/order/pendingorder">Pending order </a>
</li>

<li class="">
<a href="https://bhojon.bdtask-demo.com/demo-default/ordermanage/order/completelist">Complete order </a>
</li>

<li class="">
<a href="https://bhojon.bdtask-demo.com/demo-default/ordermanage/order/cancellist">Cancel order </a>
</li>

<li class="">
<a href="https://bhojon.bdtask-demo.com/demo-default/ordermanage/order/allkitchen">Kitchen Dashboard</a>
</li>

<li class="">
<a href="https://bhojon.bdtask-demo.com/demo-default/ordermanage/order/counterboard">Counter Dashboard</a>
</li>

<li class="">
<a href="https://bhojon.bdtask-demo.com/demo-default/ordermanage/order/counterlist">Counter List</a>
</li>

<li class="">
<a href="https://bhojon.bdtask-demo.com/demo-default/ordermanage/order/possetting">POS Setting</a>
</li>

<li class="">
<a href="https://bhojon.bdtask-demo.com/demo-default/ordermanage/order/soundsetting">Sound Setting</a>
</li>

</ul>
</li>


<li class="treeview">
<a href="javascript:void(0)">
<i class="fa fa-tags" aria-hidden="true"></i> <span>Reservation</span>
<span class="pull-right-container">
<i class="fa fa-angle-left pull-right"></i>
</span>
</a>
<ul class="treeview-menu">

<li class="">
<a href="https://bhojon.bdtask-demo.com/demo-default/reservation/reservation/index">Reservation</a>
</li>

<li class="">
<a href="https://bhojon.bdtask-demo.com/demo-default/reservation/reservation/tablebooking">Add Booking</a>
</li>

<li class="">
<a href="https://bhojon.bdtask-demo.com/demo-default/reservation/reservation/unavailablelist">Unavailable Day</a>
</li>

<li class="">
<a href="https://bhojon.bdtask-demo.com/demo-default/reservation/reservation/setting">Reservation Setting</a>
</li>

</ul>
</li>


<li class="treeview">
<a href="javascript:void(0)">
<i class="fa fa-shopping-cart" aria-hidden="true"></i> <span>Purchase Manage</span>
<span class="pull-right-container">
<i class="fa fa-angle-left pull-right"></i>
</span>
</a>
<ul class="treeview-menu">

<li class="">
<a href="https://bhojon.bdtask-demo.com/demo-default/purchase/purchase/index">Purchase Item</a>
</li>

<li class="">
<a href="https://bhojon.bdtask-demo.com/demo-default/purchase/purchase/create">Add Purchase</a>
</li>

<li class="">
<a href="https://bhojon.bdtask-demo.com/demo-default/purchase/purchase/return_form">Purchase Return</a>
</li>

<li class="">
<a href="https://bhojon.bdtask-demo.com/demo-default/purchase/purchase/return_invoice">Return Invoice</a>
</li>

<li class="">
<a href="https://bhojon.bdtask-demo.com/demo-default/purchase/supplierlist/index">Supplier Manage</a>
</li>

<li class="">
<a href="https://bhojon.bdtask-demo.com/demo-default/purchase/supplierlist/supplier_ledger_report">Supplier Ledger</a>
</li>

<li class="">
<a href="https://bhojon.bdtask-demo.com/demo-default/purchase/purchase/stock_out_ingredients">Stock Out Ingredients</a>
</li>

</ul>
</li>


<li class="treeview">
<a href="javascript:void(0)">
<i class="fa fa-line-chart" aria-hidden="true"></i> <span>Report</span>
<span class="pull-right-container">
<i class="fa fa-angle-left pull-right"></i>
</span>
</a>
<ul class="treeview-menu">

<li class="">
<a href="https://bhojon.bdtask-demo.com/demo-default/report/reports/index">Purchase Report</a>
</li>

<li class="">
<a href="https://bhojon.bdtask-demo.com/demo-default/report/reports/productwise">Stock Report (Product Wise)</a>
</li>

<li class="">
<a href="https://bhojon.bdtask-demo.com/demo-default/report/reports/ingredientwise">Stock Report (Kitchen)</a>
</li>



<li class="">
<a href="#">Sell Report <span class="pull-right-container"><i class="fa fa-angle-left pull-right"></i></span>
</a>
<ul class="treeview-menu">
<li class=""><a href="https://bhojon.bdtask-demo.com/demo-default/report/reports/sellrpt">Sell Report</a></li>
<li class=""><a href="https://bhojon.bdtask-demo.com/demo-default/report/reports/sellrptItems">Sell Report Items</a></li>
<li class=""><a href="https://bhojon.bdtask-demo.com/demo-default/report/reports/servicerpt">Service Charge Repoert</a></li>
<li class=""><a href="https://bhojon.bdtask-demo.com/demo-default/report/reports/sellrptwaiter">Sell Report Waiters</a></li>
<li class=""><a href="https://bhojon.bdtask-demo.com/demo-default/report/reports/kichansrpt">Kitchen Sell</a></li>
<li class=""><a href="https://bhojon.bdtask-demo.com/demo-default/report/reports/sellrptdelvirytype">Sell Report Delivery Type </a></li>
<li class=""><a href="https://bhojon.bdtask-demo.com/demo-default/report/reports/sellrptCasher">Sell Report Cashier</a></li>
</ul>
</li>


<li class="">
<a href="https://bhojon.bdtask-demo.com/demo-default/report/reports/cashregister">Cashregister Report</a>
</li>

<li class="">
<a href="https://bhojon.bdtask-demo.com/demo-default/report/reports/sellrpt2">Sell Report Filtering</a>
</li>

<li class="">
<a href="https://bhojon.bdtask-demo.com/demo-default/report/reports/sellrptbydate">sell By Date</a>
</li>

<li class="">
<a href="https://bhojon.bdtask-demo.com/demo-default/report/reports/payroll_commission">Commission </a>
</li>

<li class="">
<a href="https://bhojon.bdtask-demo.com/demo-default/report/reports/table_sale">Sale By Table</a>
</li>

</ul>
</li>


<li class="treeview">
<a href="javascript:void(0)">
<i class="fa fa-cube" aria-hidden="true"></i> <span>Food Management</span>
<span class="pull-right-container">
<i class="fa fa-angle-left pull-right"></i>
</span>
</a>
<ul class="treeview-menu">



<li class="">
<a href="#">Manage Category <span class="pull-right-container"><i class="fa fa-angle-left pull-right"></i></span>
</a>
<ul class="treeview-menu">
<li class=""><a href="https://bhojon.bdtask-demo.com/demo-default/itemmanage/item_category/create">Add Category</a></li>
<li class=""><a href="https://bhojon.bdtask-demo.com/demo-default/itemmanage/item_category/index">Category List</a></li>
</ul>
</li>




<li class="">
<a href="#">Manage Food <span class="pull-right-container"><i class="fa fa-angle-left pull-right"></i></span>
</a>
<ul class="treeview-menu">
<li class=""><a href="https://bhojon.bdtask-demo.com/demo-default/itemmanage/item_food/create">Add Food</a></li>
<li class=""><a href="https://bhojon.bdtask-demo.com/demo-default/itemmanage/item_food/index">Food list </a></li>
<li class=""><a href="https://bhojon.bdtask-demo.com/demo-default/itemmanage/item_food/addgroupfood">Add Group Item</a></li>
<li class=""><a href="https://bhojon.bdtask-demo.com/demo-default/itemmanage/item_food/foodvarientlist">Food varient </a></li>
<li class=""><a href="https://bhojon.bdtask-demo.com/demo-default/itemmanage/item_food/availablelist">Food Availablity</a></li>
<li class=""><a href="https://bhojon.bdtask-demo.com/demo-default/itemmanage/item_food/todaymenutype">Menu TYpe</a></li>
</ul>
</li>




<li class="">
<a href="#">Manage Adons <span class="pull-right-container"><i class="fa fa-angle-left pull-right"></i></span>
</a>
<ul class="treeview-menu">
<li class=""><a href="https://bhojon.bdtask-demo.com/demo-default/itemmanage/menu_addons/create">Add Add-ons</a></li>
<li class=""><a href="https://bhojon.bdtask-demo.com/demo-default/itemmanage/menu_addons/index">Addons list </a></li>
<li class=""><a href="https://bhojon.bdtask-demo.com/demo-default/itemmanage/menu_addons/assignaddons">Add-ons Assign List</a></li>
</ul>
</li>


</ul>
</li>


<li class="treeview">
<a href="javascript:void(0)">
<i class="fa fa-product-hunt" aria-hidden="true"></i> <span>Production</span>
<span class="pull-right-container">
<i class="fa fa-angle-left pull-right"></i>
</span>
</a>
<ul class="treeview-menu">

<li class="">
<a href="https://bhojon.bdtask-demo.com/demo-default/production/production/productionunit">Set Production Unit</a>
</li>

<li class="">
<a href="https://bhojon.bdtask-demo.com/demo-default/production/production/index">Production Set List</a>
</li>

<li class="">
<a href="https://bhojon.bdtask-demo.com/demo-default/production/production/create">Add Production</a>
</li>

<li class="">
<a href="https://bhojon.bdtask-demo.com/demo-default/production/production/possetting">Production Setting</a>
</li>

</ul>
</li>


<li class="treeview">
<a href="javascript:void(0)">
<i class="fa fa-gear" aria-hidden="true"></i> <span>Setting</span>
<span class="pull-right-container">
<i class="fa fa-angle-left pull-right"></i>
</span>
</a>
<ul class="treeview-menu">



<li class="">
<a href="#">Payment setting <span class="pull-right-container"><i class="fa fa-angle-left pull-right"></i></span>
</a>
<ul class="treeview-menu">
<li class=""><a href="https://bhojon.bdtask-demo.com/demo-default/setting/paymentmethod/index">Payment Method List</a></li>
<li class=""><a href="https://bhojon.bdtask-demo.com/demo-default/setting/paymentmethod/paymentsetup">Payment Setup</a></li>
<li class=""><a href="https://bhojon.bdtask-demo.com/demo-default/setting/shippingmethod/index">Shipping Method Setting</a></li>
</ul>
</li>




<li class="">
<a href="#">Manage Table <span class="pull-right-container"><i class="fa fa-angle-left pull-right"></i></span>
</a>
<ul class="treeview-menu">
<li class=""><a href="https://bhojon.bdtask-demo.com/demo-default/setting/restauranttable/index">Table list </a></li>
<li class=""><a href="https://bhojon.bdtask-demo.com/demo-default/setting/restauranttable/tablesetting">Table setting </a></li>
</ul>
</li>




<li class="">
<a href="#">Customer type <span class="pull-right-container"><i class="fa fa-angle-left pull-right"></i></span>
</a>
<ul class="treeview-menu">
<li class=""><a href="https://bhojon.bdtask-demo.com/demo-default/setting/customerlist/index">Customer list </a></li>
<li class=""><a href="https://bhojon.bdtask-demo.com/demo-default/setting/customertype/index">Customer Type List</a></li>
<li class=""><a href="https://bhojon.bdtask-demo.com/demo-default/setting/thirdpratycustomer/index">Third-Party Customers</a></li>
<li class=""><a href="https://bhojon.bdtask-demo.com/demo-default/setting/card_terminal/index">Card Terminal List</a></li>
</ul>
</li>




<li class="">
<a href="#">kitchen Setting <span class="pull-right-container"><i class="fa fa-angle-left pull-right"></i></span>
</a>
<ul class="treeview-menu">
<li class=""><a href="https://bhojon.bdtask-demo.com/demo-default/setting/kitchensetting/index">Kitchen List</a></li>
<li class=""><a href="https://bhojon.bdtask-demo.com/demo-default/setting/kitchensetting/assignkitchen">Kitchen Assign</a></li>
<li class=""><a href="https://bhojon.bdtask-demo.com/demo-default/setting/kitchensetting/kitchen_dashboardsetting">Kitchen Dashboard Setting</a></li>
</ul>
</li>




<li class="">
<a href="#">Unit Measurement <span class="pull-right-container"><i class="fa fa-angle-left pull-right"></i></span>
</a>
<ul class="treeview-menu">
<li class=""><a href="https://bhojon.bdtask-demo.com/demo-default/setting/unitmeasurement/index">Unit Measurement List</a></li>
<li class=""><a href="https://bhojon.bdtask-demo.com/demo-default/setting/ingradient/index">Ingredient List</a></li>
</ul>
</li>




<li class="">
<a href="#">SMS Setting <span class="pull-right-container"><i class="fa fa-angle-left pull-right"></i></span>
</a>
<ul class="treeview-menu">
<li class=""><a href="https://bhojon.bdtask-demo.com/demo-default/setting/smsetting/sms_configuration">SMS Configuration</a></li>
<li class=""><a href="https://bhojon.bdtask-demo.com/demo-default/setting/smsetting/sms_template">SMS Template</a></li>
</ul>
</li>




<li class="">
<a href="#">Bank <span class="pull-right-container"><i class="fa fa-angle-left pull-right"></i></span>
</a>
<ul class="treeview-menu">
<li class=""><a href="https://bhojon.bdtask-demo.com/demo-default/setting/bank_list/index">Bank List</a></li>
<li class=""><a href="https://bhojon.bdtask-demo.com/demo-default/setting/bank_list/bank_transaction">Bank Transaction</a></li>
</ul>
</li>


<li class="">
<a href="https://bhojon.bdtask-demo.com/demo-default/setting/language/index">Language </a>
</li>

<li class="">
<a href="https://bhojon.bdtask-demo.com/demo-default/setting/setting/index">Application setting </a>
</li>

<li class="">
<a href="https://bhojon.bdtask-demo.com/demo-default/setting/serversetting/index">App Setting</a>
</li>

<li class="">
<a href="https://bhojon.bdtask-demo.com/demo-default/setting/setting/factoryreset">Factory Reset</a>
</li>

<li class="">
<a href="https://bhojon.bdtask-demo.com/demo-default/setting/currency/index">Currency </a>
</li>

<li class="">
<a href="https://bhojon.bdtask-demo.com/demo-default/setting/country_city_list/index">Country</a>
</li>

<li class="">
<a href="https://bhojon.bdtask-demo.com/demo-default/setting/country_city_list/statelist">State</a>
</li>

<li class="">
<a href="https://bhojon.bdtask-demo.com/demo-default/setting/country_city_list/citylist">City</a>
</li>

<li class="">
<a href="https://bhojon.bdtask-demo.com/demo-default/setting/Commissionsetting/payroll_commission">Commission </a>
</li>

</ul>
</li>


<li class="treeview">
<a href="javascript:void(0)">
<i class="ti-bag"></i> <span>Accounts</span>
<span class="pull-right-container">
<i class="fa fa-angle-left pull-right"></i>
</span>
</a>
<ul class="treeview-menu">

<li class="">
<a href="https://bhojon.bdtask-demo.com/demo-default/accounts/accounts/show_tree">Chart of Account</a>
</li>

<li class="">
<a href="https://bhojon.bdtask-demo.com/demo-default/accounts/accounts/supplier_payments">Supplier Payment</a>
</li>

<li class="">
<a href="https://bhojon.bdtask-demo.com/demo-default/accounts/accounts/cash_adjustment">Cash Adjustment</a>
</li>

<li class="">
<a href="https://bhojon.bdtask-demo.com/demo-default/accounts/accounts/debit_voucher">Debit Voucher</a>
</li>

<li class="">
<a href="https://bhojon.bdtask-demo.com/demo-default/accounts/accounts/credit_voucher">Credit Voucher</a>
</li>

<li class="">
<a href="https://bhojon.bdtask-demo.com/demo-default/accounts/accounts/contra_voucher">Contra Voucher</a>
</li>

<li class="">
<a href="https://bhojon.bdtask-demo.com/demo-default/accounts/accounts/journal_voucher">Journal Voucher</a>
</li>

<li class="">
<a href="https://bhojon.bdtask-demo.com/demo-default/accounts/accounts/aprove_v">Voucher Approval</a>
</li>



<li class="">
<a href="#">Account Repor <span class="pull-right-container"><i class="fa fa-angle-left pull-right"></i></span>
</a>
<ul class="treeview-menu">
<li class=""><a href="https://bhojon.bdtask-demo.com/demo-default/accounts/accounts/voucher_report">Voucher Report</a></li>
<li class=""><a href="https://bhojon.bdtask-demo.com/demo-default/accounts/accounts/cash_book">Cash Book</a></li>
<li class=""><a href="https://bhojon.bdtask-demo.com/demo-default/accounts/accounts/bank_book">Bank Book</a></li>
<li class=""><a href="https://bhojon.bdtask-demo.com/demo-default/accounts/accounts/general_ledger">General Ledger</a></li>
<li class=""><a href="https://bhojon.bdtask-demo.com/demo-default/accounts/accounts/trial_balance">Trial Balance</a></li>
<li class=""><a href="https://bhojon.bdtask-demo.com/demo-default/accounts/accounts/profit_loss_report">Profit Loss</a></li>
<li class=""><a href="https://bhojon.bdtask-demo.com/demo-default/accounts/accounts/cash_flow_report">Cash Flow</a></li>
<li class=""><a href="https://bhojon.bdtask-demo.com/demo-default/accounts/accounts/coa_print">Coa Print</a></li>
<li class=""><a href="https://bhojon.bdtask-demo.com/demo-default/accounts/accounts/balance_sheet">Balance Sheet</a></li>
</ul>
</li>


</ul>
</li>


<li class="treeview">
<a href="javascript:void(0)">
<i class="fa fa-users"></i> <span>Human Resource</span>
<span class="pull-right-container">
<i class="fa fa-angle-left pull-right"></i>
</span>
</a>
<ul class="treeview-menu">



<li class="">
<a href="#">HRM <span class="pull-right-container"><i class="fa fa-angle-left pull-right"></i></span>
</a>
<ul class="treeview-menu">
<li class=""><a href="https://bhojon.bdtask-demo.com/demo-default/hrm/Employees/create_position">Designation</a></li>
<li class=""><a href="https://bhojon.bdtask-demo.com/demo-default/hrm/Employees/viewEmhistory">Add Employee</a></li>
<li class=""><a href="https://bhojon.bdtask-demo.com/demo-default/hrm/Employees/manageemployee">Manage Employee</a></li>
<li class=""><a href="https://bhojon.bdtask-demo.com/demo-default/hrm/Employees/emp_payment_view">Manage Employee Salary</a></li>
</ul>
</li>




<li class="">
<a href="#">Attendance <span class="pull-right-container"><i class="fa fa-angle-left pull-right"></i></span>
</a>
<ul class="treeview-menu">
<li class=""><a href="https://bhojon.bdtask-demo.com/demo-default/hrm/Home/index">Attendance Form</a></li>
<li class=""><a href="https://bhojon.bdtask-demo.com/demo-default/hrm/Home/attenlist">Attendance Reports</a></li>
</ul>
</li>




<li class="">
<a href="#">Expense <span class="pull-right-container"><i class="fa fa-angle-left pull-right"></i></span>
</a>
<ul class="treeview-menu">
<li class=""><a href="https://bhojon.bdtask-demo.com/demo-default/hrm/Cexpense/add_expense_item">Add Expense Item</a></li>
<li class=""><a href="https://bhojon.bdtask-demo.com/demo-default/hrm/Cexpense/manage_expense_item">Manage Expense Item</a></li>
<li class=""><a href="https://bhojon.bdtask-demo.com/demo-default/hrm/Cexpense/add_expense">Add Expense</a></li>
<li class=""><a href="https://bhojon.bdtask-demo.com/demo-default/hrm/Cexpense/manage_expense">Manage Expense</a></li>
<li class=""><a href="https://bhojon.bdtask-demo.com/demo-default/hrm/Cexpense/expense_statement_form">Expense Statement</a></li>
</ul>
</li>




<li class="">
<a href="#">Award <span class="pull-right-container"><i class="fa fa-angle-left pull-right"></i></span>
</a>
<ul class="treeview-menu">
<li class=""><a href="https://bhojon.bdtask-demo.com/demo-default/hrm/Award_controller/create_award">New Award</a></li>
</ul>
</li>




<li class="">
<a href="#">Recruitment <span class="pull-right-container"><i class="fa fa-angle-left pull-right"></i></span>
</a>
<ul class="treeview-menu">
<li class=""><a href="https://bhojon.bdtask-demo.com/demo-default/hrm/Candidate/caninfo_create">Add New Candidate</a></li>
<li class=""><a href="https://bhojon.bdtask-demo.com/demo-default/hrm/Candidate/candidateinfo_view">Manage Candidate</a></li>
<li class=""><a href="https://bhojon.bdtask-demo.com/demo-default/hrm/Candidate_select/create_shortlist">Candidate Shortlist</a></li>
<li class=""><a href="https://bhojon.bdtask-demo.com/demo-default/hrm/Candidate_select/create_interview">Interview</a></li>
<li class=""><a href="https://bhojon.bdtask-demo.com/demo-default/hrm/Candidate_select/create_selection">Candidate Selection</a></li>
</ul>
</li>




<li class="">
<a href="#">Department <span class="pull-right-container"><i class="fa fa-angle-left pull-right"></i></span>
</a>
<ul class="treeview-menu">
<li class=""><a href="https://bhojon.bdtask-demo.com/demo-default/hrm/Department_controller/create_dept">Department</a></li>
<li class=""><a href="https://bhojon.bdtask-demo.com/demo-default/hrm/Division_controller/division_form">Add Division</a></li>
<li class=""><a href="https://bhojon.bdtask-demo.com/demo-default/hrm/Division_controller/index">Manage Division </a></li>
</ul>
</li>




<li class="">
<a href="#">Leave <span class="pull-right-container"><i class="fa fa-angle-left pull-right"></i></span>
</a>
<ul class="treeview-menu">
<li class=""><a href="https://bhojon.bdtask-demo.com/demo-default/hrm/Leave/create_weekleave">Weekly Holiday</a></li>
<li class=""><a href="https://bhojon.bdtask-demo.com/demo-default/hrm/Leave/holiday_view">Holiday</a></li>
<li class=""><a href="https://bhojon.bdtask-demo.com/demo-default/hrm/Leave/add_leave_type">Add Leave Type</a></li>
<li class=""><a href="https://bhojon.bdtask-demo.com/demo-default/hrm/Leave/others_leave">Leave Application</a></li>
</ul>
</li>




<li class="">
<a href="#">Loan <span class="pull-right-container"><i class="fa fa-angle-left pull-right"></i></span>
</a>
<ul class="treeview-menu">
<li class=""><a href="https://bhojon.bdtask-demo.com/demo-default/hrm/Loan/create_grandloan">Grant Loan</a></li>
<li class=""><a href="https://bhojon.bdtask-demo.com/demo-default/hrm/Loan/create_installment">Loan Installment</a></li>
<li class=""><a href="https://bhojon.bdtask-demo.com/demo-default/hrm/Loan/loan_report">Loan Report</a></li>
</ul>
</li>




<li class="">
<a href="#">Payroll <span class="pull-right-container"><i class="fa fa-angle-left pull-right"></i></span>
</a>
<ul class="treeview-menu">
<li class=""><a href="https://bhojon.bdtask-demo.com/demo-default/hrm/Payroll/create_salary_setup">Salary Type Setup</a></li>
<li class=""><a href="https://bhojon.bdtask-demo.com/demo-default/hrm/Payroll/create_s_setup">Salary SetUp</a></li>
<li class=""><a href="https://bhojon.bdtask-demo.com/demo-default/hrm/Payroll/create_salary_generate">Salary Generate</a></li>
</ul>
</li>


</ul>
</li>


<li class="treeview">
<a href="javascript:void(0)">
<i class="fa fa-facebook"></i> <span>Facebook Setting</span>
<span class="pull-right-container">
<i class="fa fa-angle-left pull-right"></i>
</span>
</a>
<ul class="treeview-menu menu-open">
<li class="treeview"><a href="https://bhojon.bdtask-demo.com/demo-default/facebooklogin/facebookloginback/showsetting"><i class="fa fa-hand-o-right"></i><span>Facebook Api</span> </a></li>
</ul>
</li>

<li class="header">Default </li>
<li class="treeview">
<a href="#">
<i class="ti-user"></i><span>User</span>
<span class="pull-right-container">
<i class="fa fa-angle-left pull-right"></i>
</span>
</a>
<ul class="treeview-menu">
<li><a href="https://bhojon.bdtask-demo.com/demo-default/dashboard/user/form">Add User</a></li>
<li><a href="https://bhojon.bdtask-demo.com/demo-default/dashboard/user/index">User List</a></li>
</ul>
</li>
<li class="treeview"><a href="https://bhojon.bdtask-demo.com/demo-default/addon/module/index"><i class="fa fa-adn"></i><span>Modules</span> </a></li>
<li class="treeview"><a href="https://bhojon.bdtask-demo.com/demo-default/addon/theme/index"><i class="fa fa-adn"></i><span>Themes</span> </a></li>
<li class="treeview">
<a href="#">
<i class="ti-lock"></i><span>Role Permission</span>
<span class="pull-right-container">
<i class="fa fa-angle-left pull-right"></i>
</span>
</a>
<ul class="treeview-menu">
<li><a href="https://bhojon.bdtask-demo.com/demo-default/dashboard/permission_setup">Permission Setup</a></li>
<li><a href="https://bhojon.bdtask-demo.com/demo-default/dashboard/role/create_system_role">Add Role</a></li>
<li><a href="https://bhojon.bdtask-demo.com/demo-default/dashboard/role/role_list">Role List</a></li>
<li><a href="https://bhojon.bdtask-demo.com/demo-default/dashboard/role/user_access_role">User Access Role</a></li>
</ul>
</li>
<li class="treeview">
<a href="#">
<i class="ti-settings"></i><span>Web Setting</span>
<span class="pull-right-container">
<i class="fa fa-angle-left pull-right"></i>
</span>
</a>
<ul class="treeview-menu">
<li><a href="https://bhojon.bdtask-demo.com/demo-default/dashboard/web_setting/">Common Setting</a></li>
<li><a href="https://bhojon.bdtask-demo.com/demo-default/dashboard/web_setting/storetime">Manage store Time</a></li>
<li><a href="https://bhojon.bdtask-demo.com/demo-default/dashboard/web_setting/bannersetting">Banner Setting</a></li>
<li><a href="https://bhojon.bdtask-demo.com/demo-default/dashboard/web_setting/menusetting">Menu Setting</a></li>

<li><a href="https://bhojon.bdtask-demo.com/demo-default/dashboard/web_setting/seosetting">Seo Setting</a></li>
<li><a href="https://bhojon.bdtask-demo.com/demo-default/dashboard/web_setting/socialtting">Social Setting</a></li>
<li><a href="https://bhojon.bdtask-demo.com/demo-default/dashboard/web_setting/widgetsetting">Widget Setting</a></li>
<li><a href="https://bhojon.bdtask-demo.com/demo-default/dashboard/web_setting/email_config_setup">Email Setting</a></li>
<li><a href="https://bhojon.bdtask-demo.com/demo-default/dashboard/rating">Customer </a></li>
<li><a href="https://bhojon.bdtask-demo.com/demo-default/dashboard/couponlist">Coupon List</a></li>
<li><a href="https://bhojon.bdtask-demo.com/demo-default/dashboard/web_setting/subscribeList">Subscribe List</a></li>
</ul>
</li>
<li class="treeview">
<a href="https://bhojon.bdtask-demo.com/demo-default/dashboard/autoupdate"><i class="ti-reload"></i> <span>Auto Update</span></a>
</li>

<li class="treeview">
<a href="#">
<i class="ti-comments"></i><span>Message</span>
<span class="pull-right-container">
<i class="fa fa-angle-left pull-right"></i>
</span>
</a>
<ul class="treeview-menu">
<li><a href="https://bhojon.bdtask-demo.com/demo-default/dashboard/message/new_message">New</a></li>
<li><a href="https://bhojon.bdtask-demo.com/demo-default/dashboard/message/index">Inbox</a></li>
<li><a href="https://bhojon.bdtask-demo.com/demo-default/dashboard/message/sent">Sent</a></li>
</ul>
</li>
</ul>
</div>  </aside>
</div>


//     <div className='sidebar'>
//       <div className="sidebarwrapper">
//         <div className="sidebarmenu">
//           <div className='Avatar'>
//             <Avatar sx={{ bgcolor: 'orange' }}>N</Avatar>
//           </div>
//           <h5 className='owner'>Owner Name</h5>
//           <h6 className='owner'>Admin</h6>
//           <h3 className="sidebarTitle active">
//             <DashboardIcon/>
//             Dashboard
//           </h3>
//           <div className={open ? 'sidebar-item open' : 'sidebar-item'}>

//             <div className='sidebar-title'>
//               <span>
//                 <i className='bi bi-geo'></i>
//                 Manage Order
//               </span>
//               <i className='bi-chevron-down toggle-btn' onClick={() => setOpen(!open)} > </i>
//             </div>
//             <div className='sidebar-content '>
//             <ul className="sidebarList">

//                 <li className="sidebarListItem">

//                   Order List
//                 </li>
              
//               </ul>

//             </div>

//           </div>
//           <div className={open ? 'sidebar-item open' : 'sidebar-item'}>

//             <div className='sidebar-title'>
//               <span>
//                 <i className='bi bi-cart-fill'></i>
//                 Purchase Manage
//               </span>
//               <i className='bi-chevron-down toggle-btn' onClick={() => setOpen(open)} >  </i>
              
//             </div>
//             <div className='sidebar-content '>
//               <ul className="sidebarList">
//                 <li className="sidebarListItem">

//                   Purchase item

//                 </li>
//                 <li className="sidebarListItem">

//                   Add Purchase
//                 </li>
//                 <li className="sidebarListItem">

//                   Purchase Return
//                 </li>
//                 <li className="sidebarListItem">

//                   Supplier manager
//                 </li>
//                 <li className="sidebarListItem">

//                   Supplier Ledger
//                 </li>
//                 <li className="sidebarListItem">

//                   Stock Out Ingredient
//                 </li>
//               </ul>

//             </div>

//           </div>
//           <div className={open ? 'sidebar-item open' : 'sidebar-item'}>

//             <div className='sidebar-title'>
//               <span>
//                 <i className='bi bi-graph-up-arrow'></i>
//                 Report
//               </span>
//               <i className='bi-chevron-down toggle-btn' onClick={() => setOpen(!open)} > </i>
//             </div>
//             <div className='sidebar-content '>
//             <ul className="sidebarList">
//                 <li className="sidebarListItem">
//                   Purchase Report
//                 </li>
//                 <li className="sidebarListItem">

//                   Stock Report(product Wise)
//                 </li>
//                 <li className="sidebarListItem">

//                   Stock Report(Kitchen)
//                 </li>
//                 <li className="sidebarListItem">

//                   Sell Report
//                 </li>
//                 <li className="sidebarListItem">

//                   CashRegister Report
//                 </li>
//                 <li className="sidebarListItem">

//                   Sell Report Feltering 
//                 </li>
//                 <li className="sidebarListItem">

//                   Sell By Date 
//                 </li>
//                 <li className="sidebarListItem">
//                   Commission 
//                 </li>
//                 <li className="sidebarListItem">
//                   Sale By Table
//                 </li>
//               </ul>


//             </div>

//           </div>
//           <div className={open ? 'sidebar-item open' : 'sidebar-item'}>

//             <div className='sidebar-title'>
//               <span>
//                 <i className='bi bi-box'></i>
//                 Food Management
//               </span>
//               <i className='bi-chevron-down toggle-btn' onClick={() => setOpen(!open)} > </i>
//             </div>
//             <div className='sidebar-content '>
//               <ul className="sidebarList">
//                 <li className="sidebarListItem">

//                   Add

//                 </li>
//                 <li className="sidebarListItem">

//                   View

//                 </li>
//                 <li className="sidebarListItem">

//                   Manage Category

//                 </li>
//                 <li className="sidebarListItem">

//                 Recipy Add
//                 </li>
//                 <li className="sidebarListItem">
//                   View Reciepy
//                 </li>

//               </ul>

//             </div>

//           </div>
//           <div className={open ? 'sidebar-item open' : 'sidebar-item'}>

//             <div className='sidebar-title'>
//               <span>
//                 <i className='bi bi-flag-fill'></i>
//                 Production
//               </span>
//               <i className='bi-chevron-down toggle-btn' onClick={() => setOpen(!open)} > </i>
//             </div>
//             <div className='sidebar-content '>
//               <ul className="sidebarList">
//                 <li className="sidebarListItem">
//                   Set Production Unit 

//                 </li>
//                 <li className="sidebarListItem">
//                   production Set List

                  
//                 </li>
//                 <li className="sidebarListItem">

//                   Add Production
//                 </li>
//                 <li className="sidebarListItem">

//                   production Setting
//                 </li>

//               </ul>

//             </div>

//           </div>
//           <div className={open ? 'sidebar-item open' : 'sidebar-item'}>

//             <div className='sidebar-title'>
//               <span>
//                 <i className='bi bi-gear-fill'></i>
//                 Setting
//               </span>
//               <i className='bi-chevron-down toggle-btn' onClick={() => setOpen(!open)} > </i>
//             </div>
//             <div className='sidebar-content '>
//               <ul className="sidebarList">
//                 <li className="sidebarListItem">
//                   Payment Setting

//                 </li>
//                 <li className="sidebarListItem">
//                 Manage Table
                  
//                 </li>
//                 <li className="sidebarListItem">

//                   Customer Type
//                 </li>
//                 <li className="sidebarListItem">

//                   Kitchen Setting
//                 </li>
//                 <li className="sidebarListItem">

//                   Unit Measurement 
//                 </li>
//                 <li className="sidebarListItem">

//                   SMS Setting
//                 </li>
//                 <li className="sidebarListItem">

//                   Language 
//                 </li>
//                 <li className="sidebarListItem">

//                   Application Setting 
//                 </li>
//                 <li className="sidebarListItem">

//                   App Setting
//                 </li>
//                 <li className="sidebarListItem">

//                   Factory Reset
//                 </li>
//                 <li className="sidebarListItem">

//                   Country
//                 </li>
//                 <li className="sidebarListItem">

//                   State
//                 </li>
//                 <li className="sidebarListItem">

//                   City
//                 </li>
//                 <li className="sidebarListItem">

//                   Communication
//                 </li>

//               </ul>

//             </div>

//           </div>
          
//           <div className={open ? 'sidebar-item open' : 'sidebar-item'}>

//             <div className='sidebar-title'>
//               <span>
//                 <i className='bi bi-people'></i>
//                 Human Resource
//               </span>
//               <i className='bi-chevron-down toggle-btn' onClick={() => setOpen(!open)} > </i>
//             </div>
//             <div className='sidebar-content '>
//               <ul className="sidebarList">
//                 <li className="sidebarListItem">

//                  HRM

//                 </li>
//                 <li className="sidebarListItem">
//                   Attendance
//                 </li>
//                 <li className="sidebarListItem">

//                   Expense
//                 </li>
//                 <li className="sidebarListItem">

//                   Recuritment
//                 </li>
//                 <li className="sidebarListItem">

//                   Department
//                 </li>
//                 <li className="sidebarListItem">

//                   Leave
//                 </li>
               
//                 <li className="sidebarListItem">

//                   Payroll
//                 </li>

//               </ul>

//             </div>

//           </div>
//           <h3 className="sidebarTitle active">
          
//             Default
//           </h3>
//           <div className={open ? 'sidebar-item open' : 'sidebar-item'}>

//             <div className='sidebar-title'>
//               <span>
//                 <i className='bi bi-person'></i>
//                 User
//               </span>
//               <i className='bi-chevron-down toggle-btn' onClick={() => setOpen(!open)} > </i>
//             </div>
//             <div className='sidebar-content '>
//               <ul className="sidebarList">
//                 <li className="sidebarListItem">
//                   Add User
//                 </li>
//                 <li className="sidebarListItem">
//                   User list
//                 </li>
                
//               </ul>
//             </div>
//           </div>
//           <div className={open ? 'sidebar-item open' : 'sidebar-item'}>

//             <div className='sidebar-title'>
//               <span>
//                 <i className='bi bi-exclude'></i>
//                 Module
//               </span>
//             </div>
//           </div>
//           <div className={open ? 'sidebar-item open' : 'sidebar-item'}>

//             <div className='sidebar-title'>
//               <span>
//                 <i className='bi bi-exclude'></i>
//                 Theme
//               </span>
//             </div>
//           </div>
//           <div className={open ? 'sidebar-item open' : 'sidebar-item'}>

//             <div className='sidebar-title'>
//               <span>
//                 <i className='bi bi-file-lock'></i>
//                 Role Permission
//               </span>
//               <i className='bi-chevron-down toggle-btn' onClick={() => setOpen(!open)} > </i>
//             </div>
//             <div className='sidebar-content '>
//               <ul className="sidebarList">
//                 <li className="sidebarListItem">
//                   Permission Setup
//                 </li>
//                 <li className="sidebarListItem">
//                   Add Role
//                 </li>
//                 <li className="sidebarListItem">
//                   Role List
//                 </li>
//                 <li className="sidebarListItem">
//                   User Access Role 
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div className={open ? 'sidebar-item open' : 'sidebar-item'}>

//             <div className='sidebar-title'>
//               <span>
//                 <i className='bi bi-wordpress'></i>
//                 Web Setting 
//               </span>
//               <i className='bi-chevron-down toggle-btn' onClick={() => setOpen(!open)} > </i>
//             </div>
//             <div className='sidebar-content '>
//               <ul className="sidebarList">
//                 <li className="sidebarListItem">
//                   Common Setting
//                 </li>
//                 <li className="sidebarListItem">
//                 Manage Store Time
//                 </li>
//                 <li className="sidebarListItem">
//                   Banner Setting
//                 </li>
//                 <li className="sidebarListItem">
//                 Menu Setting
//                 </li>
//                 <li className="sidebarListItem">
//                   Seo Setting
//                 </li>
//                 <li className="sidebarListItem">
//                   Social Setting
//                 </li>
//                 <li className="sidebarListItem">
//                   Widget Setting
//                 </li>
//                 <li className="sidebarListItem">
//                   Email Setting
//                 </li>
//                 <li className="sidebarListItem">
//                   Coustomer Setting
//                 </li>
//                 <li className="sidebarListItem">
//                   Coupon List
//                 </li>
//                 <li className="sidebarListItem">
//                   Subscribe List
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div className={open ? 'sidebar-item open' : 'sidebar-item'}>

// <div className='sidebar-title'>
//   <span>
//     <i className='bi bi-check2-circle'></i>
//     Auto Update
//   </span>
// </div>
// </div>
//           <div className={open ? 'sidebar-item open' : 'sidebar-item'}>

//             <div className='sidebar-title'>
//               <span>
//                 <i className='bi bi-chat-left-text'></i>
//                 Suppliers
//               </span>
//               <i className='bi-chevron-down toggle-btn' onClick={() => setOpen(!open)} > </i>
//             </div>
            
//           </div>
          
          
          

//           {/* <ul className="sidebarList">
//                 <li className="sidebarListItem">
//                     <LineStyleIcon/>
//                     Manage Order
                    
//                 </li>
//                 <li className="sidebarListItem">
//                     <TimelineIcon/>
//                     Analytics
//                 </li>
//                 <li className="sidebarListItem">
//                     <TrendingUpIcon/>
//                     Sales
//                 </li>

//             </ul> */}

//         </div>

//       </div>
//     </div>
  )
}
