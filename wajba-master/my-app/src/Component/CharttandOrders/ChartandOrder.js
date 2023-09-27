import './ChartandOrder.css'
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
export default function ChartandOrder() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={16} paddingLeft={2} paddingRight={2} paddingTop={2}>
        <Grid item xs={8}>
        <div className="col-sm-12 col-md-4">
<div className="panel panel-bd">
<div className="panel-heading">
<div className="panel-title">
<h4></h4>
</div>
</div>
<div className="panel-body">

</div>
</div>
</div>
        </Grid>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
      </Grid>
    </Box>
  )
}
