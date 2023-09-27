import './Charts.css'
import { ResponsiveContainer, XAxis, CartesianGrid, LineChart, Line, YAxis, Tooltip, Legend } from 'recharts';
import ReactApexChart from 'react-apexcharts';
import Chart from 'react-apexcharts';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const data = [
  {
    name: 'Jan',
    SaleAmount: 100,
    OrderNumber: 2400,
  },
  {
    name: 'Feb',
    SaleAmount: 200,
    OrderNumber: 2500,
  },
  {
    name: 'mar',
    SaleAmount: 300,
    OrderNumber: 2200,
  },
  {
    name: 'Apr',
    SaleAmount: 645,
    OrderNumber: 200,
  },
  {
    name: 'may',
    SaleAmount: 450,
    OrderNumber: 400,
  },
  {
    name: 'Jun',
    SaleAmount:6100,
    OrderNumber: 5000,
  },
  {
    name: 'Jul',
    SaleAmount: 500,
    OrderNumber: 2400,
  },
  {
    name: 'Aug',
    SaleAmount: 800,
    OrderNumber: 4400,
  },
  {
    name: 'Sep',
    SaleAount: 900,
    OrderNumber: 4400,
  },
  {
    name: 'Oct',
    SaleAmount: 600,
    OrderNumber: 7400,
  },
  {
    name: 'Nov',
    SaleAmount: 100,
    OrderNumber: 2400,
  },
  {
    name: 'Dec',
    SaleAmount: 100,
    OrderNumber: 2400,
  },
  
  
];




export default function Charts() {



  return (
    <div class="row">
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={5} columns={16}>
        <Grid item xs={8}>
        <div class="col-sm-12 col-md-4">
        <div class="panel panel-bd">
          <div class="panel-heading">
            <div class="panel-title">
              <h4>Top selling Item</h4>
            </div>
          </div>
          <div class="panel-body">
            <div class="slimScrollDiv" >
              <div class="message_inner1" >
                <div class="message_widgets">
                  <table class="table table-bordered table-striped table-hover">
                    <thead>
                      <tr>
                        <th>Food Name</th>
                        <th>Variant Name</th>
                        <th>Quantity </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Bangla Set Menu Rice Boarta</td>
                        <td>1:2</td>
                        <td>45</td>
                      </tr>
                      <tr>
                        <td>Dinner Rice Package</td>
                        <td>Regular</td>
                        <td>26</td>
                      </tr>
                      <tr>
                        <td>Ramen</td>
                        <td>1:1</td>
                        <td>36</td>
                      </tr>
                      <tr>
                        <td>Idli-sumbal</td>
                        <td>1:2</td>
                        <td>22</td>
                      </tr>
                      <tr>
                        <td>Satay chicken</td>
                        <td>1:2</td>
                        <td>35</td>
                      </tr>
                      <tr>
                        <td>Pasta</td>
                        <td>Spicy</td>
                        <td>19</td>
                      </tr>
                      <tr>
                        <td>Chicken Dumpling</td>
                        <td>1:3</td>
                        <td>19</td>
                      </tr>
                      <tr>
                        <td>Baked Sea Bream </td>
                        <td>1:1</td>
                        <td>16</td>
                      </tr>
                      <tr>
                        <td>Betel leaf shrimp</td>
                        <td>1:2</td>
                        <td>19</td>
                      </tr>
                      <tr>
                        <td>Salmon Barbecue</td>
                        <td>1:2</td>
                        <td>31</td>
                      </tr>
                      <tr>
                        <td>Thai Barmundi</td>
                        <td>1:2</td>
                        <td>16</td>
                      </tr>
                      <tr>
                        <td>Chana Aloo Masala</td>
                        <td>1:2</td>
                        <td>16</td>
                      </tr>
                      <tr>
                        <td>Tuna Sushi</td>
                        <td>1:2</td>
                        <td>15</td>
                      </tr>
                      <tr>
                        <td>Nasi Goreng</td>
                        <td>1:1</td>
                        <td>14</td>
                      </tr>
                      <tr>
                        <td>Shwarma</td>
                        <td>1:1</td>
                        <td>9</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div><div class="slimScrollBar" ></div>
              <div class="slimScrollRail" ></div></div>
          </div>
        </div>
      </div>
        </Grid>
        <Grid item xs={8}>
        <div class="col-sm-12 col-md-8">
        <div class="panel panel-bd">
          <div class="panel-heading">
            <div class="panel-title">
              <h4>Monthly Sales Amount and Order</h4>
            </div>
          </div>
          <React.Fragment>
            <div className='container-fluid mt-3 mb-3'>
            <Chart type='line'
            width={585}
            height={320}

            series={[
              {
                name:"Sale Amount",
                data:[234,45,67,87,345,67,89,900,875,74,87,789]
              },
              {
                name:"Order Number",
                data:[321,567,53,56,77,88,60,80,765,89,98,100]
              }
            ]}
            options={
              {
                title:{ text: "Order in 2023"},
                xaxis:{
                  title:{text:"Orsers in months "},
                  categories:['jan ','mar', 'Apr', 'may','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

                }

              }
            }>
              </Chart>


            </div>
          </React.Fragment>
          
          {/* <div className='charts'> */}
               
                  {/* <ResponsiveContainer width='100%' aspect={3}>
                    <LineChart data={data} width={700}>
                      <CartesianGrid stroke="#ccc" />
                      <XAxis dataKey='name' stroke='orange' />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="SaleAmount" stroke="orange" activeDot={{ r: 8 }} />
                      <Line type="monotone" dataKey="OrderNumber" stroke="green" activeDot={{ r: 8 }} />

                    </LineChart>

                  </ResponsiveContainer> */}
                {/* </div> */}
             
              </div>

        </div>
      
        </Grid>
      </Grid>
    </Box>
    </div>


    //   <div className='charts'>
    //  <h3 className="ChartTitle">Monthly Sales Amount and Order</h3>
    //   <div style={{ width: '100%' }}>
    //  <ResponsiveContainer width='100%' aspect={3}>
    //    <LineChart data={data} width={500}> 
    //  <CartesianGrid stroke="#ccc" />
    //    <XAxis  dataKey='name' stroke='orange'/> 
    //    <YAxis/>
    //    <Tooltip/>
    //     <Legend/>
    //      <Line type="monotone" dataKey="Sale Amount" stroke="orange"  activeDot={{r:8} }  />
    //    <Line type="monotone" dataKey="Order Number" stroke="green" activeDot={{r:8} }/>

    //    </LineChart>

    //   </ResponsiveContainer>
    //   </div>
    //  </div>
    // <div class="row">

    //   <div class="col-sm-12 col-md-4">
    //     <div class="panel panel-bd">
    //       <div class="panel-heading">
    //         <div class="panel-title">
    //           <h4>Top selling Item</h4>
    //         </div>
    //       </div>
    //       <div class="panel-body">
    //         <div class="slimScrollDiv" >
    //           <div class="message_inner1" >
    //             <div class="message_widgets">
    //               <table class="table table-bordered table-striped table-hover">
    //                 <thead>
    //                   <tr>
    //                     <th>Food Name</th>
    //                     <th>Variant Name</th>
    //                     <th>Quantity </th>
    //                   </tr>
    //                 </thead>
    //                 <tbody>
    //                   <tr>
    //                     <td>Bangla Set Menu Rice Boarta</td>
    //                     <td>1:2</td>
    //                     <td>45</td>
    //                   </tr>
    //                   <tr>
    //                     <td>Dinner Rice Package</td>
    //                     <td>Regular</td>
    //                     <td>26</td>
    //                   </tr>
    //                   <tr>
    //                     <td>Ramen</td>
    //                     <td>1:1</td>
    //                     <td>36</td>
    //                   </tr>
    //                   <tr>
    //                     <td>Idli-sumbal</td>
    //                     <td>1:2</td>
    //                     <td>22</td>
    //                   </tr>
    //                   <tr>
    //                     <td>Satay chicken</td>
    //                     <td>1:2</td>
    //                     <td>35</td>
    //                   </tr>
    //                   <tr>
    //                     <td>Pasta</td>
    //                     <td>Spicy</td>
    //                     <td>19</td>
    //                   </tr>
    //                   <tr>
    //                     <td>Chicken Dumpling</td>
    //                     <td>1:3</td>
    //                     <td>19</td>
    //                   </tr>
    //                   <tr>
    //                     <td>Baked Sea Bream </td>
    //                     <td>1:1</td>
    //                     <td>16</td>
    //                   </tr>
    //                   <tr>
    //                     <td>Betel leaf shrimp</td>
    //                     <td>1:2</td>
    //                     <td>19</td>
    //                   </tr>
    //                   <tr>
    //                     <td>Salmon Barbecue</td>
    //                     <td>1:2</td>
    //                     <td>31</td>
    //                   </tr>
    //                   <tr>
    //                     <td>Thai Barmundi</td>
    //                     <td>1:2</td>
    //                     <td>16</td>
    //                   </tr>
    //                   <tr>
    //                     <td>Chana Aloo Masala</td>
    //                     <td>1:2</td>
    //                     <td>16</td>
    //                   </tr>
    //                   <tr>
    //                     <td>Tuna Sushi</td>
    //                     <td>1:2</td>
    //                     <td>15</td>
    //                   </tr>
    //                   <tr>
    //                     <td>Nasi Goreng</td>
    //                     <td>1:1</td>
    //                     <td>14</td>
    //                   </tr>
    //                   <tr>
    //                     <td>Shwarma</td>
    //                     <td>1:1</td>
    //                     <td>9</td>
    //                   </tr>
    //                 </tbody>
    //               </table>
    //             </div>
    //           </div><div class="slimScrollBar" ></div>
    //           <div class="slimScrollRail" ></div></div>
    //       </div>
    //     </div>
    //   </div>
    //   <div class="col-sm-12 col-md-8">
    //     <div class="panel panel-bd">
    //       <div class="panel-heading">
    //         <div class="panel-title">
    //           <h4>Monthly Sales Amount and Order</h4>
              
    //         </div>
            
    //       </div>
    //       <div className='charts'>
    //             <div style={{ width: '100%' }}>
    //               <ResponsiveContainer width='100%' aspect={3}>
    //                 <LineChart data={data} width={500}>
    //                   <CartesianGrid stroke="#ccc" />
    //                   <XAxis dataKey='name' stroke='orange' />
    //                   <YAxis />
    //                   <Tooltip />
    //                   <Legend />
    //                   <Line type="monotone" dataKey="SaleAmount" stroke="orange" activeDot={{ r: 8 }} />
    //                   <Line type="monotone" dataKey="OrderNumber" stroke="green" activeDot={{ r: 8 }} />

    //                 </LineChart>

    //               </ResponsiveContainer>
    //             </div>
    //           </div>

    //     </div>
    //   </div>

    //   <div class="col-sm-12 col-md-8">
    //     <div class="panel panel-bd">
    //       <div class="panel-heading">
    //         <div class="panel-title">
    //           <h4>Online Vs Offline Order and sales</h4>
    //         </div>
    //       </div>
    //       <div class="panel-body"><iframe class="chartjs-hidden-iframe" tabindex="-1" ></iframe>
    //         <canvas className="barChart" height="870" width="1184" ></canvas>
    //       </div>
    //     </div>
    //   </div>

    //   <div class="col-sm-6 col-md-4">
    //     <div class="panel panel-bd">
    //       <div class="panel-heading">
    //         <div class="panel-title">
    //           <h4>Pending Order</h4>
    //         </div>
    //       </div>
    //       <div class="panel-body">
    //         <div class="slimScrollDiv" ><div class="message_inner" >
    //           <div class="message_widgets">
    //             <div class="inbox-item">
    //               <p class="inbox-item-customer-name"><strong class="inbox-item-author">Name : Walkin</strong><span class="profile-status away pull-right"></span></p>
    //               <p class="inbox-item-text">Phone: 8801717426371</p>
    //               <p class="inbox-item-text">Order No..: <a href="https://bhojon.bdtask-demo.com/demo-default/ordermanage/order/orderdetails/136">(0136)</a></p>
    //               <p class="inbox-item-text">Table No: </p>
    //               <p class="inbox-item-text">Time : 10:14:29</p>
    //             </div>
    //             <div class="inbox-item">
    //               <p class="inbox-item-customer-name"><strong class="inbox-item-author">Name : Walkin</strong><span class="profile-status away pull-right"></span></p>
    //               <p class="inbox-item-text">Phone: 8801717426371</p>
    //               <p class="inbox-item-text">Order No..: <a href="https://bhojon.bdtask-demo.com/demo-default/ordermanage/order/orderdetails/133">(0133)</a></p>
    //               <p class="inbox-item-text">Table No: </p>
    //               <p class="inbox-item-text">Time : 01:34:11</p>
    //             </div>
    //             <div class="inbox-item">
    //               <p class="inbox-item-customer-name"><strong class="inbox-item-author">Name : Walkin</strong><span class="profile-status away pull-right"></span></p>
    //               <p class="inbox-item-text">Phone: 8801717426371</p>
    //               <p class="inbox-item-text">Order No..: <a href="https://bhojon.bdtask-demo.com/demo-default/ordermanage/order/orderdetails/132">(0132)</a></p>
    //               <p class="inbox-item-text">Table No: Table-3</p>
    //               <p class="inbox-item-text">Time : 23:12:07</p>
    //             </div>
    //             <div class="inbox-item">
    //               <p class="inbox-item-customer-name"><strong class="inbox-item-author">Name : Walkin</strong><span class="profile-status away pull-right"></span></p>
    //               <p class="inbox-item-text">Phone: 8801717426371</p>
    //               <p class="inbox-item-text">Order No..: <a href="https://bhojon.bdtask-demo.com/demo-default/ordermanage/order/orderdetails/131">(0131)</a></p>
    //               <p class="inbox-item-text">Table No: Table-3</p>
    //               <p class="inbox-item-text">Time : 22:55:50</p>
    //             </div>
    //             <div class="inbox-item">
    //               <p class="inbox-item-customer-name"><strong class="inbox-item-author">Name : Walkin</strong><span class="profile-status away pull-right"></span></p>
    //               <p class="inbox-item-text">Phone: 8801717426371</p>
    //               <p class="inbox-item-text">Order No..: <a href="https://bhojon.bdtask-demo.com/demo-default/ordermanage/order/orderdetails/130">(0130)</a></p>
    //               <p class="inbox-item-text">Table No: Table-3</p>
    //               <p class="inbox-item-text">Time : 22:54:37</p>
    //             </div>
    //             <div class="inbox-item">
    //               <p class="inbox-item-customer-name"><strong class="inbox-item-author">Name : Walkin</strong><span class="profile-status away pull-right"></span></p>
    //               <p class="inbox-item-text">Phone: 8801717426371</p>
    //               <p class="inbox-item-text">Order No..: <a href="https://bhojon.bdtask-demo.com/demo-default/ordermanage/order/orderdetails/128">(0128)</a></p>
    //               <p class="inbox-item-text">Table No: Table-2B</p>
    //               <p class="inbox-item-text">Time : 05:38:38</p>
    //             </div>
    //             <div class="inbox-item">
    //               <p class="inbox-item-customer-name"><strong class="inbox-item-author">Name : Walkin</strong><span class="profile-status away pull-right"></span></p>
    //               <p class="inbox-item-text">Phone: 8801717426371</p>
    //               <p class="inbox-item-text">Order No..: <a href="https://bhojon.bdtask-demo.com/demo-default/ordermanage/order/orderdetails/126">(0126)</a></p>
    //               <p class="inbox-item-text">Table No: Table Corner</p>
    //               <p class="inbox-item-text">Time : 21:01:43</p>
    //             </div>
    //             <div class="inbox-item">
    //               <p class="inbox-item-customer-name"><strong class="inbox-item-author">Name : Walkin</strong><span class="profile-status away pull-right"></span></p>
    //               <p class="inbox-item-text">Phone: 8801717426371</p>
    //               <p class="inbox-item-text">Order No..: <a href="https://bhojon.bdtask-demo.com/demo-default/ordermanage/order/orderdetails/125">(0125)</a></p>
    //               <p class="inbox-item-text">Table No: Table-2M</p>
    //               <p class="inbox-item-text">Time : 19:56:05</p>
    //             </div>
    //             <div class="inbox-item">
    //               <p class="inbox-item-customer-name"><strong class="inbox-item-author">Name : Walkin</strong><span class="profile-status away pull-right"></span></p>
    //               <p class="inbox-item-text">Phone: 8801717426371</p>
    //               <p class="inbox-item-text">Order No..: <a href="https://bhojon.bdtask-demo.com/demo-default/ordermanage/order/orderdetails/124">(0124)</a></p>
    //               <p class="inbox-item-text">Table No: Table-2B</p>
    //               <p class="inbox-item-text">Time : 19:53:33</p>
    //             </div>
    //             <div class="inbox-item">
    //               <p class="inbox-item-customer-name"><strong class="inbox-item-author">Name : Walkin</strong><span class="profile-status away pull-right"></span></p>
    //               <p class="inbox-item-text">Phone: 8801717426371</p>
    //               <p class="inbox-item-text">Order No..: <a href="https://bhojon.bdtask-demo.com/demo-default/ordermanage/order/orderdetails/121">(0121)</a></p>
    //               <p class="inbox-item-text">Table No: Table-3</p>
    //               <p class="inbox-item-text">Time : 10:44:34</p>
    //             </div>
    //           </div>
    //         </div><div class="slimScrollBar" ></div></div>
    //       </div>
    //     </div>
    //   </div>
    // </div>







  )
}
