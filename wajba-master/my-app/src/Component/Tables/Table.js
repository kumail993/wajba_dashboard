// import './Table.css'
// import * as React from 'react';
// import { experimentalStyled as styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

// export default function Table() {
  
//   return (
//     <div class="row">
//     <Box sx={{ flexGrow: 1 }}>
//     <Grid container spacing={2} columns={16}>
//       <Grid item xs={5.3}>
//       <div class="col-sm-12 col-md-4">
// <div class="panel panel-bd ">
// <div class="panel-heading">
// <div class="panel-title">
// <h4>Latest Order</h4>
// </div>
// </div>
// <div class="panel-body">
// <div class="slimScrollDiv">
//   <div class="message_inner1" >
// <div class="message_widgets">
// <div class="inbox-item">
// <p class="inbox-item-customer-name"><strong class="inbox-item-author">Name : Walkin</strong></p>
// <p class="inbox-item-text">Phone: 8801717426371</p>
// <p class="inbox-item-text">Order No.: <a href="https://bhojon.bdtask-demo.com/demo-default/ordermanage/order/orderdetails/139">(0139)</a></p>
// <p class="inbox-item-text">Table No: Table-2D</p>
// <p class="inbox-item-text">Time : 13:44:52</p>
// </div>
// <div class="inbox-item">
// <p class="inbox-item-customer-name"><strong class="inbox-item-author">Name : Walkin</strong></p>
// <p class="inbox-item-text">Phone: 8801717426371</p>
// <p class="inbox-item-text">Order No.: <a href="https://bhojon.bdtask-demo.com/demo-default/ordermanage/order/orderdetails/138">(0138)</a></p>
// <p class="inbox-item-text">Table No: Table-2B</p>
// <p class="inbox-item-text">Time : 13:43:06</p>
// </div>
// <div class="inbox-item">
// <p class="inbox-item-customer-name"><strong class="inbox-item-author">Name : Walkin</strong></p>
// <p class="inbox-item-text">Phone: 8801717426371</p>
// <p class="inbox-item-text">Order No.: <a href="https://bhojon.bdtask-demo.com/demo-default/ordermanage/order/orderdetails/137">(0137)</a></p>
// <p class="inbox-item-text">Table No: Table-3</p>
// <p class="inbox-item-text">Time : 11:50:01</p>
// </div>
// <div class="inbox-item">
// <p class="inbox-item-customer-name"><strong class="inbox-item-author">Name : Walkin</strong></p>
// <p class="inbox-item-text">Phone: 8801717426371</p>
// <p class="inbox-item-text">Order No.: <a href="https://bhojon.bdtask-demo.com/demo-default/ordermanage/order/orderdetails/136">(0136)</a></p>
// <p class="inbox-item-text">Table No: </p>
// <p class="inbox-item-text">Time : 10:14:29</p>
// </div>
// <div class="inbox-item">
// <p class="inbox-item-customer-name"><strong class="inbox-item-author">Name : Walkin</strong></p>
// <p class="inbox-item-text">Phone: 8801717426371</p>
// <p class="inbox-item-text">Order No.: <a href="https://bhojon.bdtask-demo.com/demo-default/ordermanage/order/orderdetails/135">(0135)</a></p>
// <p class="inbox-item-text">Table No: Table Corner</p>
// <p class="inbox-item-text">Time : 03:34:33</p>
// </div>
// <div class="inbox-item">
// <p class="inbox-item-customer-name"><strong class="inbox-item-author">Name : Walkin</strong></p>
// <p class="inbox-item-text">Phone: 8801717426371</p>
// <p class="inbox-item-text">Order No.: <a href="https://bhojon.bdtask-demo.com/demo-default/ordermanage/order/orderdetails/134">(0134)</a></p>
// <p class="inbox-item-text">Table No: Table Corner</p>
// <p class="inbox-item-text">Time : 03:32:56</p>
// </div>
// <div class="inbox-item">
// <p class="inbox-item-customer-name"><strong class="inbox-item-author">Name : Walkin</strong></p>
// <p class="inbox-item-text">Phone: 8801717426371</p>
// <p class="inbox-item-text">Order No.: <a href="https://bhojon.bdtask-demo.com/demo-default/ordermanage/order/orderdetails/133">(0133)</a></p>
// <p class="inbox-item-text">Table No: </p>
// <p class="inbox-item-text">Time : 01:34:11</p>
// </div>
// <div class="inbox-item">
// <p class="inbox-item-customer-name"><strong class="inbox-item-author">Name : Walkin</strong></p>
// <p class="inbox-item-text">Phone: 8801717426371</p>
// <p class="inbox-item-text">Order No.: <a href="https://bhojon.bdtask-demo.com/demo-default/ordermanage/order/orderdetails/132">(0132)</a></p>
// <p class="inbox-item-text">Table No: Table-3</p>
// <p class="inbox-item-text">Time : 23:12:07</p>
// </div>
// <div class="inbox-item">
// <p class="inbox-item-customer-name"><strong class="inbox-item-author">Name : Walkin</strong></p>
// <p class="inbox-item-text">Phone: 8801717426371</p>
// <p class="inbox-item-text">Order No.: <a href="https://bhojon.bdtask-demo.com/demo-default/ordermanage/order/orderdetails/131">(0131)</a></p>
// <p class="inbox-item-text">Table No: Table-3</p>
// <p class="inbox-item-text">Time : 22:55:50</p>
// </div>
// <div class="inbox-item">
// <p class="inbox-item-customer-name"><strong class="inbox-item-author">Name : Walkin</strong></p>
// <p class="inbox-item-text">Phone: 8801717426371</p>
// <p class="inbox-item-text">Order No.: <a href="https://bhojon.bdtask-demo.com/demo-default/ordermanage/order/orderdetails/130">(0130)</a></p>
// <p class="inbox-item-text">Table No: Table-3</p>
// <p class="inbox-item-text">Time : 22:54:37</p>
// </div>
// </div>
// </div><div class="slimScrollBar" ></div>
// <div class="slimScrollRail" ></div></div>
// </div>
// </div>
// </div>
//       </Grid>
//       <Grid item xs={5.3}>
//       <div class="col-sm-12 col-md-4">
// <div class="panel panel-bd">
// <div class="panel-heading">
// <div class="panel-title">
// <h4>Latest Reservation</h4>
// </div>
// </div>
// <div class="panel-body">
// <div class="slimScrollDiv" >
//   <div class="message_inner1" >
// <div class="message_widgets">
// <div class="inbox-item">
// <p class="inbox-item-customer-name"><strong class="inbox-item-author">Name : rtyry</strong></p>
// <p class="inbox-item-text">Phone: 1732432986</p>
// <p class="inbox-item-text">Date : <a href="https://bhojon.bdtask-demo.com/demo-default/reservation/reservation/index">(2021-01-11)</a></p>
// <p class="inbox-item-text">Table No: Table-2H</p>
// <p class="inbox-item-text">Time : 23:10:30</p>
// </div>
// <div class="inbox-item">
// <p class="inbox-item-customer-name"><strong class="inbox-item-author">Name : fakhrul islam</strong></p>
// <p class="inbox-item-text">Phone: 01905793801</p>
// <p class="inbox-item-text">Date : <a href="https://bhojon.bdtask-demo.com/demo-default/reservation/reservation/index">(2021-01-01)</a></p>
// <p class="inbox-item-text">Table No: </p>
// <p class="inbox-item-text">Time : 17:25:00</p>
// </div>
// <div class="inbox-item">
// <p class="inbox-item-customer-name"><strong class="inbox-item-author">Name : sandy</strong></p>
// <p class="inbox-item-text">Phone: 4233434321</p>
// <p class="inbox-item-text">Date : <a href="https://bhojon.bdtask-demo.com/demo-default/reservation/reservation/index">(2020-12-31)</a></p>
// <p class="inbox-item-text">Table No: </p>
// <p class="inbox-item-text">Time : 18:00:00</p>
// </div>
// <div class="inbox-item">
// <p class="inbox-item-customer-name"><strong class="inbox-item-author">Name : andrew</strong></p>
// <p class="inbox-item-text">Phone: 34432222322</p>
// <p class="inbox-item-text">Date : <a href="https://bhojon.bdtask-demo.com/demo-default/reservation/reservation/index">(2020-12-31)</a></p>
// <p class="inbox-item-text">Table No: </p>
// <p class="inbox-item-text">Time : 19:45:30</p>
// </div>
// <div class="inbox-item">
// <p class="inbox-item-customer-name"><strong class="inbox-item-author">Name : Mazhar Raziv</strong></p>
// <p class="inbox-item-text">Phone: 01613666777</p>
// <p class="inbox-item-text">Date : <a href="https://bhojon.bdtask-demo.com/demo-default/reservation/reservation/index">(2020-12-31)</a></p>
// <p class="inbox-item-text">Table No: </p>
// <p class="inbox-item-text">Time : 15:07:00</p>
// </div>
// <div class="inbox-item">
// <p class="inbox-item-customer-name"><strong class="inbox-item-author">Name : jack</strong></p>
// <p class="inbox-item-text">Phone: 0123123435</p>
// <p class="inbox-item-text">Date : <a href="https://bhojon.bdtask-demo.com/demo-default/reservation/reservation/index">(2020-12-30)</a></p>
// <p class="inbox-item-text">Table No: </p>
// <p class="inbox-item-text">Time : 18:45:45</p>
// </div>
// <div class="inbox-item">
// <p class="inbox-item-customer-name"><strong class="inbox-item-author">Name : calci</strong></p>
// <p class="inbox-item-text">Phone: 4322121121</p>
// <p class="inbox-item-text">Date : <a href="https://bhojon.bdtask-demo.com/demo-default/reservation/reservation/index">(2020-12-24)</a></p>
// <p class="inbox-item-text">Table No: </p>
// <p class="inbox-item-text">Time : 16:45:30</p>
// </div>
// <div class="inbox-item">
// <p class="inbox-item-customer-name"><strong class="inbox-item-author">Name : dfv</strong></p>
// <p class="inbox-item-text">Phone: dsfv</p>
// <p class="inbox-item-text">Date : <a href="https://bhojon.bdtask-demo.com/demo-default/reservation/reservation/index">(2020-12-23)</a></p>
// <p class="inbox-item-text">Table No: </p>
// <p class="inbox-item-text">Time : 05:15:15</p>
// </div>
// <div class="inbox-item">
// <p class="inbox-item-customer-name"><strong class="inbox-item-author">Name : John</strong></p>
// <p class="inbox-item-text">Phone: 789654130</p>
// <p class="inbox-item-text">Date : <a href="https://bhojon.bdtask-demo.com/demo-default/reservation/reservation/index">(2020-12-23)</a></p>
// <p class="inbox-item-text">Table No: </p>
// <p class="inbox-item-text">Time : 06:00:00</p>
// </div>
// <div class="inbox-item">
// <p class="inbox-item-customer-name"><strong class="inbox-item-author">Name : Madhu Prasad</strong></p>
// <p class="inbox-item-text">Phone: 09688951918</p>
// <p class="inbox-item-text">Date : <a href="https://bhojon.bdtask-demo.com/demo-default/reservation/reservation/index">(2020-12-23)</a></p>
// <p class="inbox-item-text">Table No: </p>
// <p class="inbox-item-text">Time : 11:10:00</p>
// </div>
// </div>
// </div><div class="slimScrollBar" ></div></div>
// </div>
// </div>
// </div>

//       </Grid>
//       <Grid item xs={5.3}>
//       <div class="col-sm-12 col-md-4">
// <div class="panel panel-bd">
// <div class="panel-heading">
// <div class="panel-title">
// <h4>pending Orders</h4>
// </div>
// </div>
// <div class="panel-body">
// <div class="slimScrollDiv">
//   <div class="message_inner1" >
// <div class="message_widgets">
// <div class="inbox-item">
// <p class="inbox-item-customer-name"><strong class="inbox-item-author">Name : Walkin</strong></p>
// <p class="inbox-item-text">Phone: 8801717426371</p>
// <p class="inbox-item-text">Order No.: <a href="https://bhojon.bdtask-demo.com/demo-default/ordermanage/order/orderdetails/136">(0136)</a></p>
// <p class="inbox-item-text">Table No: </p>
// <p class="inbox-item-text">Time : 10:14:29</p>
// </div>
// <div class="inbox-item">
// <p class="inbox-item-customer-name"><strong class="inbox-item-author">Name : Walkin</strong></p>
// <p class="inbox-item-text">Phone: 8801717426371</p>
// <p class="inbox-item-text">Order No.: <a href="https://bhojon.bdtask-demo.com/demo-default/ordermanage/order/orderdetails/111">(0111)</a></p>
// <p class="inbox-item-text">Table No: </p>
// <p class="inbox-item-text">Time : 17:32:32</p>
// </div>
// <div class="inbox-item">
// <p class="inbox-item-customer-name"><strong class="inbox-item-author">Name : Walkin</strong></p>
// <p class="inbox-item-text">Phone: 8801717426371</p>
// <p class="inbox-item-text">Order No.: <a href="https://bhojon.bdtask-demo.com/demo-default/ordermanage/order/orderdetails/110">(0110)</a></p>
// <p class="inbox-item-text">Table No: </p>
// <p class="inbox-item-text">Time : 14:28:22</p>
// </div>
// <div class="inbox-item">
// <p class="inbox-item-customer-name"><strong class="inbox-item-author">Name : Kamal Hassan</strong></p>
// <p class="inbox-item-text">Phone: 0171742241476</p>
// <p class="inbox-item-text">Order No.: <a href="https://bhojon.bdtask-demo.com/demo-default/ordermanage/order/orderdetails/105">(0105)</a></p>
// <p class="inbox-item-text">Table No: </p>
// <p class="inbox-item-text">Time : 06:35:30</p>
// </div>
// <div class="inbox-item">
// <p class="inbox-item-customer-name"><strong class="inbox-item-author">Name : jkj gyhuji</strong></p>
// <p class="inbox-item-text">Phone: yvvubghoijk</p>
// <p class="inbox-item-text">Order No.: <a href="https://bhojon.bdtask-demo.com/demo-default/ordermanage/order/orderdetails/104">(0104)</a></p>
// <p class="inbox-item-text">Table No: </p>
// <p class="inbox-item-text">Time : 03:25:43</p>
// </div>
// <div class="inbox-item">
// <p class="inbox-item-customer-name"><strong class="inbox-item-author">Name : jkj gyhuji</strong></p>
// <p class="inbox-item-text">Phone: yvvubghoijk</p>
// <p class="inbox-item-text">Order No.: <a href="https://bhojon.bdtask-demo.com/demo-default/ordermanage/order/orderdetails/103">(0103)</a></p>
// <p class="inbox-item-text">Table No: </p>
// <p class="inbox-item-text">Time : 03:24:58</p>
// </div>
// <div class="inbox-item">
// <p class="inbox-item-customer-name"><strong class="inbox-item-author">Name : Walkin</strong></p>
// <p class="inbox-item-text">Phone: 8801717426371</p>
// <p class="inbox-item-text">Order No.: <a href="https://bhojon.bdtask-demo.com/demo-default/ordermanage/order/orderdetails/102">(0102)</a></p>
// <p class="inbox-item-text">Table No: </p>
// <p class="inbox-item-text">Time : 00:28:05</p>
// </div>
// <div class="inbox-item">
// <p class="inbox-item-customer-name"><strong class="inbox-item-author">Name : Walkin</strong></p>
// <p class="inbox-item-text">Phone: 8801717426371</p>
// <p class="inbox-item-text">Order No.: <a href="https://bhojon.bdtask-demo.com/demo-default/ordermanage/order/orderdetails/101">(0101)</a></p>
// <p class="inbox-item-text">Table No: </p>
// <p class="inbox-item-text">Time : 00:25:55</p>
// </div>
// <div class="inbox-item">
// <p class="inbox-item-customer-name"><strong class="inbox-item-author">Name : Kamal Hassan</strong></p>
// <p class="inbox-item-text">Phone: 0171742241476</p>
// <p class="inbox-item-text">Order No.: <a href="https://bhojon.bdtask-demo.com/demo-default/ordermanage/order/orderdetails/100">(0100)</a></p>
// <p class="inbox-item-text">Table No: </p>
// <p class="inbox-item-text">Time : 00:23:27</p>
// </div>
// <div class="inbox-item">
// <p class="inbox-item-customer-name"><strong class="inbox-item-author">Name : Kamal Hassan</strong></p>
// <p class="inbox-item-text">Phone: 0171742241476</p>
// <p class="inbox-item-text">Order No.: <a href="https://bhojon.bdtask-demo.com/demo-default/ordermanage/order/orderdetails/99">(0099)</a></p>
// <p class="inbox-item-text">Table No: </p>
// <p class="inbox-item-text">Time : 00:21:48</p>
// </div>
// </div>
// </div><div class="slimScrollBar" ></div></div>
// </div>
// </div>
// </div>
//       </Grid>
//     </Grid>
//   </Box>
//   </div>
    

//   )
// }
import './Table.css';
import React, { useEffect, useState } from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css'; // Import scrollbar styles

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Table() {
  const [latestOrders, setLatestOrders] = useState([]);
  const [latestReservations, setLatestReservations] = useState([]);
  const [pendingOrders, setPendingOrders] = useState([]);

  // Simulated data (you should replace this with actual data fetching logic)
  useEffect(() => {
    // Simulated data for latest orders
    const latestOrderData = [
      {
        name: 'Walkin',
        phone: '8801717426371',
        orderNo: '0139',
        tableNo: 'Table-2D',
        time: '13:44:52',
      },
      {
        name: 'Walkin',
        phone: '8801717426371',
        orderNo: '0139',
        tableNo: 'Table-2D',
        time: '13:44:52',
      },
      {
        name: 'Walkin',
        phone: '8801717426371',
        orderNo: '0139',
        tableNo: 'Table-2D',
        time: '13:44:52',
      },
      {
        name: 'Walkin',
        phone: '8801717426371',
        orderNo: '0139',
        tableNo: 'Table-2D',
        time: '13:44:52',
      },
      {
        name: 'Walkin',
        phone: '8801717426371',
        orderNo: '0139',
        tableNo: 'Table-2D',
        time: '13:44:52',
      },
      {
        name: 'Walkin',
        phone: '8801717426371',
        orderNo: '0139',
        tableNo: 'Table-2D',
        time: '13:44:52',
      },
      {
        name: 'Walkin',
        phone: '8801717426371',
        orderNo: '0139',
        tableNo: 'Table-2D',
        time: '13:44:52',
      },
      {
        name: 'Walkin',
        phone: '8801717426371',
        orderNo: '0139',
        tableNo: 'Table-2D',
        time: '13:44:52',
      },
      {
        name: 'Walkin',
        phone: '8801717426371',
        orderNo: '0139',
        tableNo: 'Table-2D',
        time: '13:44:52',
      },
      // Add more orders here
    ];

    // Simulated data for latest reservations
    const latestReservationData = [
      {
        name: 'rtyry',
        phone: '1732432986',
        date: '2021-01-11',
        tableNo: 'Table-2H',
        time: '23:10:30',
      },
      {
        name: 'rtyry',
        phone: '1732432986',
        date: '2021-01-11',
        tableNo: 'Table-2H',
        time: '23:10:30',
      },
      {
        name: 'rtyry',
        phone: '1732432986',
        date: '2021-01-11',
        tableNo: 'Table-2H',
        time: '23:10:30',
      },
      {
        name: 'rtyry',
        phone: '1732432986',
        date: '2021-01-11',
        tableNo: 'Table-2H',
        time: '23:10:30',
      },
      {
        name: 'rtyry',
        phone: '1732432986',
        date: '2021-01-11',
        tableNo: 'Table-2H',
        time: '23:10:30',
      },
      {
        name: 'rtyry',
        phone: '1732432986',
        date: '2021-01-11',
        tableNo: 'Table-2H',
        time: '23:10:30',
      },
      {
        name: 'rtyry',
        phone: '1732432986',
        date: '2021-01-11',
        tableNo: 'Table-2H',
        time: '23:10:30',
      },
      {
        name: 'rtyry',
        phone: '1732432986',
        date: '2021-01-11',
        tableNo: 'Table-2H',
        time: '23:10:30',
      },
      // Add more reservations here
    ];

    // Simulated data for pending orders
    const pendingOrderData = [
      {
        name: 'Walkin',
        phone: '8801717426371',
        orderNo: '0136',
        tableNo: '',
        time: '10:14:29',
      },
      {
        name: 'Walkin',
        phone: '8801717426371',
        orderNo: '0136',
        tableNo: '',
        time: '10:14:29',
      },
      {
        name: 'Walkin',
        phone: '8801717426371',
        orderNo: '0136',
        tableNo: '',
        time: '10:14:29',
      },
      {
        name: 'Walkin',
        phone: '8801717426371',
        orderNo: '0136',
        tableNo: '',
        time: '10:14:29',
      },
      {
        name: 'Walkin',
        phone: '8801717426371',
        orderNo: '0136',
        tableNo: '',
        time: '10:14:29',
      },
      {
        name: 'Walkin',
        phone: '8801717426371',
        orderNo: '0136',
        tableNo: '',
        time: '10:14:29',
      },
      {
        name: 'Walkin',
        phone: '8801717426371',
        orderNo: '0136',
        tableNo: '',
        time: '10:14:29',
      },
      {
        name: 'Walkin',
        phone: '8801717426371',
        orderNo: '0136',
        tableNo: '',
        time: '10:14:29',
      },
      {
        name: 'Walkin',
        phone: '8801717426371',
        orderNo: '0136',
        tableNo: '',
        time: '10:14:29',
      },
      {
        name: 'Walkin',
        phone: '8801717426371',
        orderNo: '0136',
        tableNo: '',
        time: '10:14:29',
      },
      {
        name: 'Walkin',
        phone: '8801717426371',
        orderNo: '0136',
        tableNo: '',
        time: '10:14:29',
      },
      {
        name: 'Walkin',
        phone: '8801717426371',
        orderNo: '0136',
        tableNo: '',
        time: '10:14:29',
      },
      {
        name: 'Walkin',
        phone: '8801717426371',
        orderNo: '0136',
        tableNo: '',
        time: '10:14:29',
      },
      // Add more pending orders here
    ];

    setLatestOrders(latestOrderData);
    setLatestReservations(latestReservationData);
    setPendingOrders(pendingOrderData);
  }, []);

  return (
    <div className="row">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} columns={16}>
          <Grid item xs={5.3}>
            <div className="col-sm-12 col-md-4">
              <div className="panel panel-bd">
                <div className="panel-heading">
                  <div className="panel-title">
                    <h4>Latest Order</h4>
                  </div>
                </div>
                <div className="panel-body">
                  <PerfectScrollbar>
                    <div className="message_inner1">
                      <div className="message_widgets">
                        <table className="table">
                          <thead>
                            <tr>
                              <th>Name</th>
                              <th>Phone</th>
                              <th>Order No.</th>
                              <th>Table No.</th>
                              <th>Time</th>
                            </tr>
                          </thead>
                          <tbody>
                            {latestOrders.map((order, index) => (
                              <tr key={index}>
                                <td>{order.name}</td>
                                <td>{order.phone}</td>
                                <td>
                                  <a
                                    href={`https://bhojon.bdtask-demo.com/demo-default/ordermanage/order/orderdetails/${order.orderNo}`}
                                  >
                                    {order.orderNo}
                                  </a>
                                </td>
                                <td>{order.tableNo}</td>
                                <td>{order.time}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </PerfectScrollbar>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={5.3}>
            <div className="col-sm-12 col-md-4">
              <div className="panel panel-bd">
                <div className="panel-heading">
                  <div className="panel-title">
                    <h4>Mobile App Orders</h4>
                  </div>
                </div>
                <div className="panel-body">
                  <PerfectScrollbar>
                    <div className="message_inner1">
                      <div className="message_widgets">
                        <table className="table">
                          <thead>
                            <tr>
                              <th>Name</th>
                              <th>Phone</th>
                              <th>Date</th>
                              <th>Table No.</th>
                              <th>Time</th>
                            </tr>
                          </thead>
                          <tbody>
                            {latestReservations.map((reservation, index) => (
                              <tr key={index}>
                                <td>{reservation.name}</td>
                                <td>{reservation.phone}</td>
                                <td>{reservation.date}</td>
                                <td>{reservation.tableNo}</td>
                                <td>{reservation.time}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </PerfectScrollbar>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={5.3}>
            <div className="col-sm-12 col-md-4">
              <div className="panel panel-bd">
                <div className="panel-heading">
                  <div className="panel-title">
                    <h4>Pending Orders</h4>
                  </div>
                </div>
                <div className="panel-body">
                  <PerfectScrollbar>
                    <div className="message_inner1">
                      <div className="message_widgets">
                        <table className="table">
                          <thead>
                            <tr>
                              <th>Name</th>
                              <th>Phone</th>
                              <th>Order No.</th>
                              <th>Table No.</th>
                              <th>Time</th>
                            </tr>
                          </thead>
                          <tbody>
                            {pendingOrders.map((order, index) => (
                              <tr key={index}>
                                <td>{order.name}</td>
                                <td>{order.phone}</td>
                                <td>
                                  <a
                                    href={`https://bhojon.bdtask-demo.com/demo-default/ordermanage/order/orderdetails/${order.orderNo}`}
                                  >
                                    {order.orderNo}
                                  </a>
                                </td>
                                <td>{order.tableNo}</td>
                                <td>{order.time}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </PerfectScrollbar>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
