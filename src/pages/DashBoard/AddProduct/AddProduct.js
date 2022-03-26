import { Box, Grid, TextField, Typography, Button, CircularProgress } from '@mui/material';
import { Alert, Form } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import React, { useState } from 'react';

const AddProduct = () => {
    const [addProduct,setAddProduct] = useState({});
      const{user,isLoading}=useAuth();
    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...addProduct};
        newLoginData[field]=value;
        console.log(newLoginData);
        setAddProduct(newLoginData);
    }

    const handleReviewSubmit = e => {
        const products = {
            ...addProduct
        }
        fetch('https://sleepy-forest-29303.herokuapp.com/services',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(products)
    })
    .then(res => res.json())
    .then(data => {
        // console.log(data);
        // if(data.insertedId){
        //     setBookingSuccess(true);
        //     handleBookingClose();

        // }
    })
    e.preventDefault();
}


    return (
        <div className='w-100'>
            <Grid container spacing={2}>
                <Box>
                    <Form onSubmit={handleReviewSubmit}>
                        <Grid className='mx-auto w-100 border p-5' item sx={{ mt: 8, mx: "auto", m: '4%' }} xs={12} md={8} >
                            <Typography variant="body1" gutterBottom>Add A products</Typography>
                            <TextField
                            className='w-100'
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Enter a img URl"
                                name="img"
                                type="text"
                                onBlur={handleOnBlur}
                                variant="standard" />
                            <TextField
                             className='w-100'
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Enter Product Name"
                                name="name"
                                type="text"
                                onBlur={handleOnBlur}
                                variant="standard" /> 
                            <TextField
                             className='w-100'
                                sx={{ width: '75%', m: 1 }}
                                id="outlined-multiline-static"
                                label="Enter Description here"
                                name="title"
                                comments
                                onBlur={handleOnBlur}
                            // rows={4}
                            // defaultValue="Default Value"
                            />
                            <br />
                            <Button sx={{ width: "25%", pl: '2px' }} variant="contained" type='submit'>Submit</Button>
                            {/* {isLoading && <CircularProgress />}
                            {user?.email && <Alert severity="success">Add Product successfully!</Alert>} */}

                        </Grid>
                    </Form>


                </Box>
            </Grid>
        </div>
    );
};

export default AddProduct;