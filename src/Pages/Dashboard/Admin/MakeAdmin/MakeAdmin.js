import { TextField, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';
import { useForm } from "react-hook-form";
import PrimaryButton from '../../../../CoustomStyle/MuiButton';

const MakeAdmin = () => {
  const useStyle = makeStyles({
    input: {
      width: '50%',
      height: "50px",
      marginBottom: 15,
      // border: 0,
      // borderBottom: '1px solid black'
    },

  })

  const { input } = useStyle()
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <Box>
      <Typography variant="h4">
        Make Admin
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input className={input} defaultValue="abc@gmail.com" {...register("email")} />
        {errors.exampleRequired && <span>This field is required</span>}
        <PrimaryButton sx={{ml:1}} type="submit" >Make Admin</PrimaryButton>
      </form>
    </Box>
  );
};

export default MakeAdmin;