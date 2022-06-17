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

const ViewApplications = () => {
    const navigate = useNavigate();
    const [applications, setApplications] = useState([]);
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
                        <Typography variant="h4" gutterBottom>Posting Applications</Typography>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                        <Typography variant="h5" gutterBottom>Position: Sales Associate</Typography>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                        <TextField
                            name="Search"
                            label="Search Application"
                            type="text"
                            value={search}
                            onChange={handleSearchChange}
                            variant="outlined"
                            fullWidth
                        />
                    </Grid>
                    
                    {/* Reference: https://mui.com/material-ui/react-grid/ */}
                    <Grid item xs={12} sm={3} md={3}>
                        {/* Reference: https://mui.com/material-ui/react-card/ */}
                        <Card sx={{ maxWidth: 345 }}>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>Position: Sales Associate</Typography>
                                <Typography variant="body1" gutterBottom>Name: ABC</Typography>
                                <Typography variant="body1" gutterBottom>Contact: +1-999-999-9999</Typography>
                                <Typography variant="body1" gutterBottom>Email: Email@gmail.com</Typography>
                                <Typography variant="body1" gutterBottom>Documents: Resume, Cover Letter</Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" onClick={() => { }}>Download</Button>
                                <Button size="small" onClick={() => { }}>Contact</Button>
                                <Button size="small" onClick={() => { }}>Reject</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={3} md={3}>
                        {/* Reference: https://mui.com/material-ui/react-card/ */}
                        <Card sx={{ maxWidth: 345 }}>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>Position: Sales Associate</Typography>
                                <Typography variant="body1" gutterBottom>Name: ABC</Typography>
                                <Typography variant="body1" gutterBottom>Contact: +1-999-999-9999</Typography>
                                <Typography variant="body1" gutterBottom>Email: Email@gmail.com</Typography>
                                <Typography variant="body1" gutterBottom>Documents: Resume, Cover Letter</Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" onClick={() => { }}>Download</Button>
                                <Button size="small" onClick={() => { }}>Contact</Button>
                                <Button size="small" onClick={() => { }}>Reject</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={3} md={3}>
                        {/* Reference: https://mui.com/material-ui/react-card/ */}
                        <Card sx={{ maxWidth: 345 }}>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>Position: Sales Associate</Typography>
                                <Typography variant="body1" gutterBottom>Name: ABC</Typography>
                                <Typography variant="body1" gutterBottom>Contact: +1-999-999-9999</Typography>
                                <Typography variant="body1" gutterBottom>Email: Email@gmail.com</Typography>
                                <Typography variant="body1" gutterBottom>Documents: Resume, Cover Letter</Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" onClick={() => { }}>Download</Button>
                                <Button size="small" onClick={() => { }}>Contact</Button>
                                <Button size="small" onClick={() => { }}>Reject</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </React.Fragment>
    )
}

export default ViewApplications;