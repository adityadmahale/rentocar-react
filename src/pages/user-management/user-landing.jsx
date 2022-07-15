import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
// import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import NavBar from "../../components/common/nav-bar";
// import { Link } from "react-router-dom";

import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid, Stack } from "@mui/material";

function UserProfile(props)  {
    const dialogFooter = <div className="flex justify-content-center"><Button label="Go Back" className="p-button-text" autoFocus onClick={() => {navigate(-1)}} /></div>;
    const newId = props.id;
    const navigate = useNavigate();
    const [user,setUser] = useState([]);

    useEffect(() => {loadUserProfile();}, [])
    

    const handleSubmit = (e) => {
        e.preventDefault();
       
      };


    const loadUserProfile = () =>{
    
        }
        return (
            <div>
                <div>
                <NavBar/>
                <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                sx={{ marginTop: "40px" }}
                >

<Grid item xs={3} width={{ xs: "80%", md: "60%", lg: "35%" }}>
        <Box component="form" autoComplete="off" onSubmit={handleSubmit}>
          <Stack spacing={1.5} alignItems="center">
            </Stack>

            <Typography variant="span" component="span" style={{}}>
              <h1>Profile</h1>
               username :
               <br></br>
               email ID :
            </Typography>
            </Box>
            </Grid>
        

        </Grid>
                </div>
              
            {/* <Dialog visible={true} position="top" footer={dialogFooter} showHeader={false} breakpoints={{ '960px': '80vw' }} style={{ width: '30vw' }}>
                <div className="flex align-items-center flex-column pt-6 px-3">
                    <div className="avatar">
                        <img  src={user.picture}  className="card-img-top"  alt=""/>
                    </div>
                    <h5 className="card-title">{(user.title) + ". " +(user.firstName) +" " +(user.lastName)}</h5>
                    <p className="card-text">{ user.email}</p>
                </div>
            </Dialog> */}
            </div>
        )
}
export default UserProfile;