import React, { useState } from 'react';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { useForm } from "react-hook-form";
import { makeStyles } from '@mui/styles';
import { Button } from '@mui/material';


const OrderList = ({ order }) => {
  console.log(order.name);
  // const { name, status, email, productName, address, city, price, _id, } = order;
  const Swal = require('sweetalert2');
  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/deleteBooking/${id}`, {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
        })
          .then(res => res.json())
          .then(result => {
            if (result.acknowledged) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
      }
    })
  }
  const [statusId, setStatusId] = useState(null);

  const onSubmit = data => {
    fetch(`http://localhost:5000/booking/${statusId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(result => {
        if (result.acknowledged) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Status update successfully',
            showConfirmButton: false,
            timer: 1500
          })
        }
      })

  };

  const useStyle = makeStyles({
    option: {
      fontSize: "16px",
      paddingRight: "10px",
      paddingLeft: "10px",
      paddingTop: "5px",
      paddingBottom: "5px",

    }
  })
  const { option } = useStyle()
  return (
    <TableBody>
      <TableRow>
        <TableCell width="50px">{order.name}</TableCell>
        <TableCell width="50px">{order.email}</TableCell>
        <TableCell width="50px">{order.price}</TableCell>
        <TableCell width="50px">{order.productName}</TableCell>
        <TableCell width="50px">{order.address}</TableCell>
        <TableCell width="50px">{order.city}</TableCell>
        <TableCell width="50px">
          <form onSubmit={handleSubmit(onSubmit)}>
            <select className={option} {...register("status")}>
              <option value={order.status}>{order.status}</option>
              <option value="pending">Pending</option>
              <option value="rejected">Rejected</option>
              <option value="approved">Approved</option>
              <option value="shipped">Shipped</option>
              <option value="done">Done</option>
            </select>
            {errors.exampleRequired && <span>This field is required</span>}
            <Button onClick={() => setStatusId(order._id)} sx={{ ml: 1, mt: 1 }} type="submit" variant="contained" size="small" color="success">Update</Button>
          </form>
        </TableCell>
        <TableCell width="50px"><Button onClick={() => handleDelete(order._id)}>Delete</Button></TableCell>
      </TableRow>
    </TableBody>
  );
};

export default OrderList;

