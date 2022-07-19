/*
* @author: Maan Mandaliya (B00903171 | mn638205@dal.ca)
* @description: This file helps user to apply for a job posting through form.
*/
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import NavBar from "../../components/common/nav-bar";

const ApplyPosting = () => {
    const navigate = useNavigate();

    return (
        <React.Fragment>
            <NavBar />
        <div style={{ textAlign: "center" }}>
            {/* Reference: https://mui.com/material-ui/react-box */}
            <Box sx={{ flexGrow: 1 }} m={10} mb={5} bgcolor="#e8e8e8" style={{ padding: '15px' }}>
                {/* Reference: https://mui.com/material-ui/react-grid/ */}
                {/* Reference: https://mui.com/material-ui/react-typography */}
                <Typography variant="h4" gutterBottom>Apply Job Posting</Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={12}>
                        {/* Reference: https://mui.com/material-ui/react-text-field/ */}
                        <TextField
                            required
                            id="name"
                            name="Name"
                            label="Name"
                            type="text"
                            variant="outlined"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        {/* Reference: https://mui.com/material-ui/react-text-field/ */}
                        <TextField
                            required
                            id="contact"
                            name="Contact"
                            label="Contact"
                            type="text"
                            variant="outlined"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        {/* Reference: https://mui.com/material-ui/react-text-field/ */}
                        <TextField
                            required
                            id="email"
                            name="Email"
                            label="Email"
                            type="text"
                            variant="outlined"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        {/* Reference: https://mui.com/material-ui/react-text-field/ */}
                        <TextField
                            required
                            id="documents"
                            name="Documents"
                            label="Documents"
                            type="file"
                            variant="outlined"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        {/* Reference: https://mui.com/material-ui/react-button */}
                        <Button variant="contained" size="large" color="success" onClick={() => {navigate("/viewuserpostings")}}>Submit</Button>
                    </Grid>
                </Grid>
            </Box>
        </div>
        </React.Fragment>
    )
}

export default ApplyPosting;