import * as React from 'react';
import {useState,useEffect} from 'react'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextField from '@mui/material/TextField';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './comparision.css'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import tempData from './compareData';
import { toBeEmpty } from '@testing-library/jest-dom/dist/matchers';
import { Grid } from '@mui/material';
import NavBar from '../../components/common/nav-bar';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})

(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


export default function Comparision() 
{
  const [expanded, setExpanded] = React.useState(false);
  const [expanded1, setExpanded1] = React.useState(false);
  const [expanded2, setExpanded2] = React.useState(false);
  const [carData,setCarData] = useState([]);
  const [carCompareOne,setCarCompareOne] = React.useState({
    id: 1,
    name: "",
    image : "https://previews.123rf.com/images/tatianasun/tatianasun1705/tatianasun170500026/77826883-looking-for-car-selling-icon-magnifying-glass-search-car-vector-logo-illustration-.jpg",
    features: []
  });
  const  [ carCompareTwo, setCarCompareTwo ] = React.useState({
    id: 1,
    name: "",
    image : "https://previews.123rf.com/images/tatianasun/tatianasun1705/tatianasun170500026/77826883-looking-for-car-selling-icon-magnifying-glass-search-car-vector-logo-illustration-.jpg",
    features: []
  
  });
  const [carCompareThree,setCarCompareThree] = React.useState({
    id: 1,
    name: "",
    image : "https://previews.123rf.com/images/tatianasun/tatianasun1705/tatianasun170500026/77826883-looking-for-car-selling-icon-magnifying-glass-search-car-vector-logo-illustration-.jpg",
    features: []
  });
  const handleExpandClick = () => { setExpanded(!expanded); };
  const handleExpandClick1 = () => { setExpanded1(!expanded1); };
  const handleExpandClick2 = () => { setExpanded2(!expanded2); };
  const [search1, setSearch1 ] = useState();
  const [search2, setSearch2 ] = useState();
  const [search3, setSearch3] = useState();
  const [searchCar, setSearchCar ] = useState("")

  const handleSearch = () => {
    console.log(search1);
    tempData.map((car) => {
      console.log(car.name)
      if(car.name.toLowerCase().includes(search1.toLowerCase())){
        setCarCompareOne(car);
        console.log(carCompareOne.image)
      }
    })
  }

    const handleSearch2 = () => {
      tempData.map((car) => {
        if(car.name.toLowerCase().includes(search2.toLowerCase())){
          setCarCompareTwo(car);
        }
      })}

      const handleSearch3 = () => {
        tempData.map((car) => {
          if(car.name.toLowerCase().includes(search3.toLowerCase())){
            setCarCompareThree(car);
          }
        })}

  useEffect (() => {
    setCarData(tempData);
  })

  const rows = [
  ];

  return (
    <>
    <NavBar />
    <Grid xs = {12} sm = {6} md = {4}>
    <div className='inside-car-component'>
        {/* <div className = 'search-bars'> */}
        <div className = 'single-Component'>
                <div className='search-bars'>
                  <TextField
                  id="outlined-textarea"
                  label="ENTER ASTON MARTIN TO CHECK"
                  placeholder="Search car name"
                  multiline
                  onChange={ (event) => {setSearch1(event.target.value)}}
                  sx={{margin:1, fontWeight:'bold',width:300,background:'#fff',borderRadius:'7px'}} />
                   <div  className = 'search-button'>
                    <Button variant="contained" size = "small" onClick={handleSearch} sx = {{height:55}}>
                        Search
                    </Button>
                  </div>
                </div>
                <Card sx={{ maxWidth: 400}}>
                    <a><h3 className='car-name'> {carCompareOne.name} </h3></a>
                    <CardMedia
                        component="img"
                        height="194"
                        image= {carCompareOne.image}
                        alt="No Image Found"
                        sx = {{ width:'65%' , border:'linear-gradient(to right bottom, #260B3C, #a053df)', paddingTop:'5%' , paddingLeft:'5%', paddingRight:'5%', borderRadius:'15%'}}/>
                    <CardContent>
                    <Typography color="text.secondary"></Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <ExpandMore
                        expand = {expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more">
                        <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 200 }} aria-label="customized table">
                                <TableHead>
                                <TableRow>
                                    <StyledTableCell sx={{ textAlign:'center',fontWeight:'bold',fontSize:'20px'}}>FEATURES</StyledTableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {carCompareOne.features.map((row) => (
                                    <StyledTableRow key={row.name}>
                                    <StyledTableCell component="th" scope="row">
                                        {row}
                                    </StyledTableCell>
                                    </StyledTableRow>))
                                }
                                </TableBody>
                            </Table>
                            </TableContainer>
                        </CardContent>
                    </Collapse>
                </Card>
            </div>
          <div className = 'single-Component'>
          <div className='search-bars'>
                <TextField
                  id="outlined-textarea"
                  label="ENTER ROLLS ROYCE TO CHECK"
                  placeholder="Search car name"
                  multiline
                  onChange={ (event) => {setSearch2(event.target.value)}}
                  sx={{margin:1, fontWeight:'bold',width:300,background:'#fff',borderRadius:'7px'}} />
                   <div  className = 'search-button'>
                    <Button variant="contained" size = "small" onClick={handleSearch2} sx = {{height:55}}>
                        Search
                    </Button>
                  </div>
          </div>
                <Card sx={{ maxWidth: 400}}>
                    <a><h3 className='car-name'>{carCompareTwo.name} </h3></a><></>
                    <CardMedia
                        component="img"
                        height="194"
                        image={carCompareTwo.image}
                        alt="No Image Found"
                        sx = {{ width:'65%' , border:'linear-gradient(to right bottom, #260B3C, #a053df)', paddingTop:'5%' , paddingLeft:'5%', paddingRight:'5%', borderRadius:'15%'}}/>
                    <CardContent>
                    <Typography color="text.secondary"></Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <ExpandMore
                        expand1 = {expanded1}
                        onClick={handleExpandClick1}
                        aria-expanded={expanded1}
                        aria-label="show more">
                        <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded1} timeout="auto" unmountOnExit>
                        <CardContent>
                            <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 200 }} aria-label="customized table">
                                <TableHead>
                                <TableRow>
                                    <StyledTableCell sx={{ textAlign:'center',fontWeight:'bold',fontSize:'20px'}}>FEATURES</StyledTableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {carCompareTwo.features.map((row) => (
                                    <StyledTableRow key={row.name}>
                                    <StyledTableCell component="th" scope="row">
                                        {row}
                                    </StyledTableCell>
                                    </StyledTableRow>))
                                }
                                </TableBody>
                            </Table>
                            </TableContainer>
                        </CardContent>
                    </Collapse>
                </Card>
          </div>
          <div className = 'single-Component'>
            <div className='search-bars'>
                <TextField
                  id="outlined-textarea"
                  label="ENTER MERCEDES TO CHECK"
                  placeholder="Search car name"
                  multiline
                  onChange={ (event) => {setSearch3(event.target.value)}}
                  sx={{margin:1, fontWeight:'bold',width:300,background:'#fff',borderRadius:'7px'}} />
                   <div  className = 'search-button'>
                      <Button variant="contained" size = "small" onClick={handleSearch3} sx = {{height:55}}>
                          Search
                      </Button>
                  </div>
            </div>
              <Card sx={{ maxWidth: 400}}>
                  <a><h3 className='car-name'>{carCompareThree.name} </h3></a>
                  <CardMedia
                        component="img"
                        height="194"
                        image={carCompareThree.image}
                        alt="No Image Found"
                        sx = {{ width:'65%' ,
                        border:'linear-gradient(to right bottom, #260B3C, #a053df)',
                        paddingTop:'5%' ,
                        paddingLeft:'5%',
                        paddingRight:'5%',
                        borderRadius:'15%'}} />
                    <CardContent>
                    <Typography color="text.secondary"></Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <ExpandMore
                        expand2 = {expanded2}
                        onClick={handleExpandClick2}
                        aria-expanded={expanded2}
                        aria-label="show more">
                        <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded2} timeout="auto" unmountOnExit>
                        <CardContent>
                            <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 200 }} aria-label="customized table">
                                <TableHead>
                                <TableRow>
                                    <StyledTableCell sx={{ textAlign:'center',fontWeight:'bold',fontSize:'20px'}}>FEATURES</StyledTableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {carCompareThree.features.map((row) => (
                                    <StyledTableRow key={row.name}>
                                    <StyledTableCell component="th" scope="row">
                                        {row}
                                    </StyledTableCell>
                                    </StyledTableRow>))
                                }
                                </TableBody>
                            </Table>
                            </TableContainer>
                        </CardContent>
                    </Collapse>
                </Card>
            </div>
          </div>
    </Grid>
          <div>  
             <Button variant="contained" size = "small" onClick={handleSearch3} sx = {{height:55}}>
                SHOW DIFFERENCES
              </Button>
          </div>
    </>
  );
}
