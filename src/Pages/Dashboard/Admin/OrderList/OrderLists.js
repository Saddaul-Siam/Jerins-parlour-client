import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import OrderList from './OrderList';

const OrderLists = () => {

  const [orders, setOrders] = useState([]);

  console.log(orders);
  useEffect(() => {
    fetch('http://localhost:5000/allBooking')
      .then(res => res.json())
      .then(data => setOrders(data))
  }, [orders])
  return (
    <Box>
      <Typography sx={{ fontWeight: 'bold', color: '#FF1493',display: 'flex', justifyContent: 'center',py:5}} variant="h4">Manage All Orders</Typography>
      <TableContainer TableContainer component={Paper} >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 600, fontSize: 20,color:"#198754" }} width="50px" align="left">User Name</TableCell>
              <TableCell sx={{ fontWeight: 600, fontSize: 20,color:"#198754" }} width="50px" align="left">User Email</TableCell>
              <TableCell sx={{ fontWeight: 600, fontSize: 20,color:"#198754" }} width="50px" align="left">Price</TableCell>
              <TableCell sx={{ fontWeight: 600, fontSize: 20,color:"#198754" }} width="50px" align="left">Product Name</TableCell>
              <TableCell sx={{ fontWeight: 600, fontSize: 20,color:"#198754" }} width="50px" align="left">Address</TableCell>
              <TableCell sx={{ fontWeight: 600, fontSize: 20,color:"#198754" }} width="50px" align="left">City</TableCell>
              <TableCell sx={{ fontWeight: 600, fontSize: 20,color:"#198754" }} width="50px" align="left">Status</TableCell>
              <TableCell sx={{ fontWeight: 600, fontSize: 20,color:"#198754" }} width="50px" align="left">Action</TableCell>
            </TableRow>
          </TableHead>
          {
            orders.map(order => <OrderList key={order._id} order={order}></OrderList>)
          }
        </Table>
      </TableContainer >
    </Box >
  );
};

export default OrderLists;