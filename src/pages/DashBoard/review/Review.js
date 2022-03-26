import React, { useState } from 'react';
import { Box, Grid, TextField, Typography, Button } from '@mui/material';
import { Form } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';


const Review = () => {
    const [review, setReview] = useState({})
   const {user}=useAuth();
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...review };
        if ((field === 'ratings') && (value <= 5 && value >= 0 )){
            newInfo[field] = value;
            console.log('hello this is ratings and all success');
            setReview(newInfo);
        }
        if (field !== 'ratings') {
            console.log('entered else')
            newInfo[field] = value;
            // console.log(newInfo);
            setReview(newInfo);
        }
        
        
}

        const handleReviewSubmit = e => {
                const reviews = {
                    ...review
                }
                fetch('https://sleepy-forest-29303.herokuapp.com/reviews',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(reviews)
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
        <div className='w-100 '>
            <Grid container spacing={2}>
                <Box>
                    <Form onSubmit={handleReviewSubmit}>
                        <Grid className='mx-auto w-100 border p-5' item sx={{ mt: 8, mx: "auto", m: '4%' }} xs={12} md={8} >

                            <Typography variant="body1" gutterBottom>Review</Typography>

                            <TextField
                            className='w-100'
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label={user.displayName}
                                name="name"
                                type="text"
                                onBlur={handleOnBlur}
                                variant="standard" />
                            <TextField
                             className='w-100'
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label={user.email}
                                name="email"
                                type="email"
                                disabled
                                onBlur={handleOnBlur}
                                variant="standard" />
                                <TextField
                                onBlur={handleOnBlur}
                                label="Ratings"
                                name='ratings'
                                className='w-100'
                                type='number'
                                InputProps={{
                                    inputProps: { 
                                        max: 5, min: 0 
                                    }
                                }}
                                />
                            <TextField
                             className='w-100'
                                sx={{ width: '75%', m: 1 }}
                                id="outlined-multiline-static"
                                label="Comments"
                                name="comments"
                                comments
                                onBlur={handleOnBlur}
                            // rows={4}
                            // defaultValue="Default Value"
                            />
                            <Button sx={{ width: "25%", pl: '2px' }} variant="contained" type='submit'>Submit</Button>

                        </Grid>
                    </Form>


                </Box>
            </Grid>
        </div>
    );
};

export default Review;