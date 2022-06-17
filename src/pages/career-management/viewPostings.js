import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import { Card } from "@mui/material";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { TextField } from "@mui/material";
import { CardActions, Button } from "@mui/material";
import NavBar from "../../components/common/nav-bar";

const ViewPostings = () => {
    const navigate = useNavigate();
    const [postings, setPostings] = useState([]);
    const [search, setSearch] = useState();

    const handleSearchChange = (event) => {
        setSearch(event.target.value);
        console.log("Search======>", search)
    }

    return (
        <React.Fragment>
            <NavBar />
            {/* Reference: https://mui.com/material-ui/react-box */}
            <Box sx={{ flexGrow: 1 }} mt={10} bgcolor="white" style={{ padding: '15px' }} >
                {/* Reference: https://mui.com/material-ui/react-grid/ */}
                {/* Reference: https://mui.com/material-ui/react-typography */}
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={4} md={4}>
                        <Typography variant="h4" gutterBottom>Postings</Typography>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                        <TextField
                            name="Search"
                            label="Search Posting"
                            type="text"
                            value={search}
                            onChange={handleSearchChange}
                            variant="outlined"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                        {/* Reference: https://mui.com/material-ui/react-button */}
                        <Button variant="contained" size="large" color="success" onClick={() => { navigate("/createposting") }}>Create Posting</Button>
                    </Grid>
                    {/* Reference: https://mui.com/material-ui/react-grid/ */}
                    <Grid item xs={12} sm={3} md={3}>
                        {/* Reference: https://mui.com/material-ui/react-card/ */}
                        <Card sx={{ maxWidth: 345 }}>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>Position: Sales Associate</Typography>
                                <Typography variant="body1" gutterBottom>Location: Halifax</Typography>
                                <Typography variant="body1" gutterBottom>Pay: 26/hr</Typography>
                                <Typography variant="body1" gutterBottom>Expiry: June 07 11:59 PM</Typography>
                                <Typography variant="body1" gutterBottom>Type: Full-time</Typography>
                                <Typography variant="body1" gutterBottom>Documents: Resume, Cover Letter</Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" onClick={() => { navigate("/viewapplications") }}>View Applications</Button>
                                <Button size="small" onClick={() => { }}>Disable</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={3} md={3}>
                        {/* Reference: https://mui.com/material-ui/react-card/ */}
                        <Card sx={{ maxWidth: 345 }}>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>Position: Sales Associate</Typography>
                                <Typography variant="body1" gutterBottom>Location: Halifax</Typography>
                                <Typography variant="body1" gutterBottom>Pay: 26/hr</Typography>
                                <Typography variant="body1" gutterBottom>Expiry: June 07 11:59 PM</Typography>
                                <Typography variant="body1" gutterBottom>Type: Full-time</Typography>
                                <Typography variant="body1" gutterBottom>Documents: Resume, Cover Letter</Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" onClick={() => { navigate("/viewapplications") }}>View Applications</Button>
                                <Button size="small" onClick={() => { }}>Disable</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={3} md={3}>
                        {/* Reference: https://mui.com/material-ui/react-card/ */}
                        <Card sx={{ maxWidth: 345 }}>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>Position: Sales Associate</Typography>
                                <Typography variant="body1" gutterBottom>Location: Halifax</Typography>
                                <Typography variant="body1" gutterBottom>Pay: 26/hr</Typography>
                                <Typography variant="body1" gutterBottom>Expiry: June 07 11:59 PM</Typography>
                                <Typography variant="body1" gutterBottom>Type: Full-time</Typography>
                                <Typography variant="body1" gutterBottom>Documents: Resume, Cover Letter</Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" onClick={() => { navigate("/viewapplications") }}>View Applications</Button>
                                <Button size="small" onClick={() => { }}>Disable</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </React.Fragment>
    )
}

export default ViewPostings;