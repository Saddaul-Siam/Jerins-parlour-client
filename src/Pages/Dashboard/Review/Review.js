import React from 'react';

const Review = () => {
  return (
    <div>
      <h2>Review</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
            <Typography variant="subtitle" sx={{ fontWeight: 'bold' }}>Product Name</Typography>
            <input className={input} value={service.title} {...register("productName")} type="text" required />

            <Typography variant="subtitle" sx={{ fontWeight: 'bold' }}>Price</Typography>
            <input className={input} value={service.price} {...register("price")} type="number" required />

            <Typography variant="subtitle" sx={{ fontWeight: 'bold' }}>Your Name</Typography>
            <input className={input} defaultValue={user?.displayName}   {...register("name")} type="text" required />

            <Typography variant="subtitle" sx={{ fontWeight: 'bold' }}>Email</Typography>
            <input className={input} defaultValue={user?.email}  {...register("email")} type="email" required />

            <Typography variant="subtitle" sx={{ fontWeight: 'bold' }}>Address</Typography>
            <input className={input} placeholder="Your Address"  {...register("address")} type="text" required />

            <Typography variant="subtitle" sx={{ fontWeight: 'bold' }}>City</Typography>
            <input className={input} placeholder="Your City"   {...register("city")} type="text" required />
            {errors.exampleRequired && <span>This field is required</span>}
            <PrimaryButton className={input} type="submit">Order Now</PrimaryButton>
          </form>
    </div>
  );
};

export default Review;