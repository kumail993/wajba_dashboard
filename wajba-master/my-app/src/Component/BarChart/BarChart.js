import './BarChart.css'
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

export default function BarChart() {
  return (
    <div>
     <div class="row">
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={5} columns={16}>
        
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
            <Chart type='bar'
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
          
        
             
              </div>

        </div>
      
        </Grid>
      </Grid>
    </Box>
    </div>

    </div>
  )
}
