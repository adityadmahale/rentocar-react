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

const CreatePosting = () => {
    const navigate = useNavigate();
    const [expiryDate, setExpiryDate] = useState();

    const handleDateChange = (event) => {
        setExpiryDate(event.target.value)
    }

    return (
        <React.Fragment>
            <NavBar />
        <div style={{ textAlign: "center" }}>
            {/* Reference: https://mui.com/material-ui/react-box */}
            <Box sx={{ flexGrow: 1 }} m={10} mb={5} bgcolor="#e8e8e8" style={{ padding: '15px' }}>
                {/* Reference: https://mui.com/material-ui/react-grid/ */}
                {/* Reference: https://mui.com/material-ui/react-typography */}
                <Typography variant="h4" gutterBottom>Create Job Posting</Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={12}>
                        {/* Reference: https://mui.com/material-ui/react-text-field/ */}
                        <TextField
                            required
                            id="position"
                            name="Position"
                            label="Position"
                            type="text"
                            variant="outlined"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        {/* Reference: https://mui.com/material-ui/react-text-field/ */}
                        <TextField
                            required
                            id="location"
                            name="Location"
                            label="Location"
                            type="text"
                            variant="outlined"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        {/* Reference: https://mui.com/material-ui/react-text-field/ */}
                        <TextField
                            required
                            id="pay"
                            name="Pay"
                            label="Pay"
                            type="text"
                            variant="outlined"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        {/* Reference: https://mui.com/material-ui/react-text-field/ */}
                        <TextField
                            required
                            id="type"
                            name="JobType"
                            label="Job Type"
                            type="text"
                            variant="outlined"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        {/* Reference: https://mui.com/x/react-date-pickers/date-picker/ */}
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                fullWidth
                                id="expity-date"
                                label="Expiry Date *"
                                value={expiryDate}
                                onChange={handleDateChange}
                                renderInput={(params) => <TextField fullWidth {...params}
                                />}
                            />
                        </LocalizationProvider>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        {/* Reference: https://mui.com/material-ui/react-button */}
                        <Button variant="contained" size="large" color="success" onClick={() => {navigate("/viewpostings")}}>Submit</Button>
                    </Grid>
                </Grid>
            </Box>
        </div>
        </React.Fragment>
    )
}

export default CreatePosting;