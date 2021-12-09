import { Button, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useForm } from "react-hook-form";
import PrimaryButton from '../../../../CoustomStyle/MuiButton';
import upload from "../../../../Image_Icon/Icon/cloud-upload-outline 1.png"


const AddService = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = data => {
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('price', data.price);
    formData.append('description', data.description);
    formData.append('img', data.img[0]);

    fetch('http://localhost:5000/services', {
      method: 'POST',
      body: formData,
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
      .finally(() => {
        reset()
      })
  };

  return (
    <Box sx={{ flexGrow: 1, }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <Typography variant="body">
              Service Title
            </Typography>
            <TextField sx={{ width: "100%", mb: 3 }}  {...register("title")} />
            <Typography variant="body">
              Service Price
            </Typography>
            <TextField sx={{ width: "100%", mb: 3 }}  {...register("price")} />
            <Typography variant="body">
              Description
            </Typography>
            <textarea style={{ width: "100%", height: "120px" }}{...register("description")} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography sx={{ display: 'block' }} variant="body">
              Image
            </Typography>
            <Button variant="outlined" component="label">
              <img style={{ width: 24, marginRight: "10px", }} src={upload} alt="" />  Upload File
              <input {...register("img")} type="file" hidden />
            </Button>
          </Grid>
        </Grid>
        {errors.exampleRequired && <span>This field is required</span>}
        <PrimaryButton type="submit">Submit</PrimaryButton>
      </form>
    </Box>
  );
};

export default AddService;