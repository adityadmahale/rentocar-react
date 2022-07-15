import * as React from 'react';

import { Box, Button, Select } from "@mui/material";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';


const AdvancedSearchModal = ({ isOpen, handleDialogClose, searchForVehicles }) => {
    const [scroll, setScroll] = React.useState('paper'); // eslint-disable-line no-unused-vars

    const title = "Search for a car";


    const [sameDropOff, setSameDropOff] = React.useState(false);

    const handleChange = (event) => {
        console.log("event: ", event);
        const { name, value } = event.target;
        setSameDropOff(value);
    }

    const [fromLocation, setFromLocation] = React.useState('');
    const [fromLocationError, setFromLocationError] = React.useState({
        value: false,
        message: ''
    });
    const validateAndSetLocation = (event) => {
        const { value } = event.target;
        if (value.length === 0) {
            setFromLocationError({
                value: true,
                message: 'From location is required'
            });
        }
        // validate value with regex to check for special characters
        else if (value.match(/[^a-zA-Z0-9]/g)) {
            setFromLocationError({
                value: true,
                message: 'From location should not contain special characters'
            });
        }
        else {
            setFromLocationError({
                value: false,
                message: ''
            });
        }
        setFromLocation(value);
    };

    const [toLocation, setToLocation] = React.useState('');
    const [toLocationError, setToLocationError] = React.useState({
        value: false,
        message: ''
    });
    const validateAndSetToLocation = (event) => {
        const { value } = event.target;
        if (value.length === 0) {
            setToLocationError({
                value: true,
                message: 'To location is required'
            });
        } else if (value.match(/[^a-zA-Z0-9]/g)) {
            setToLocationError({
                value: true,
                message: 'To location should not contain special characters'
            });
        }
        else {
            setToLocationError({
                value: false,
                message: ''
            });
        }
        setToLocation(value);
    }

    const [startDate, setStartDate] = React.useState(new Date());
    const [endDate, setEndDate] = React.useState(new Date());

    const [startDateError, setStartDateError] = React.useState({
        value: false,
        message: ''
    });

    const [endDateError, setEndDateError] = React.useState({
        value: false,
        message: ''
    });

    const validateAndSetStartDate = (startDate) => {
        if (endDate === null) {
            setStartDateError({
                value: true,
                message: 'Start date is required'
            });
        } else if (!(startDate instanceof Date && !isNaN(startDate))) {
            setStartDateError({
                value: true,
                message: 'Invalid Start date'
            });
        } else if (startDate.length === 0) {
            setStartDateError({
                value: true,
                message: 'Start date is required'
            });
        } else if (startDate > endDate) {
            setStartDateError({
                value: true,
                message: 'Start date should be before end date'
            });
        } else {
            setStartDateError({
                value: false,
                message: ''
            });
            setEndDateError({
                value: false,
                message: ''
            });
        }
        setStartDate(startDate);
    }

    const validateAndSetEndDate = (endDate) => {
        if (endDate === null) {
            setEndDateError({
                value: true,
                message: 'End date is required'
            });
        } else if (!(endDate instanceof Date && !isNaN(endDate))) {
            setEndDateError({
                value: true,
                message: 'Invalid End date'
            });
        } else if (endDate.length === 0) {
            setEndDateError({
                value: true,
                message: 'End date is required'
            });
        } else if (startDate > endDate) {
            setEndDateError({
                value: true,
                message: 'End date should be greater than start date'
            });
        } else {
            setEndDateError({
                value: false,
                message: ''
            });
            setStartDateError({
                value: false,
                message: ''
            });
        }
        setEndDate(endDate);
    }

    const [driverAge, setDriverAge] = React.useState(18);
    const [driverAgeError, setDriverAgeError] = React.useState({
        value: false,
        message: ''
    });

    const validateAndSetDriverAge = (event) => {
        const { value } = event.target;
        if (value.length === 0) {
            setDriverAgeError({
                value: true,
                message: 'Driver age is required'
            });
        }
        else if (value < 18 || value > 100) {
            setDriverAgeError({
                value: true,
                message: 'Driver age should be between 18 and 100'
            });
        }
        else {
            setDriverAgeError({
                value: false,
                message: ''
            });
        }
        setDriverAge(value);
    }
    const [searchButtonDisabled, setSearchButtonDisabled] = React.useState(true);

    React.useEffect(() => {
        if (fromLocation === '' || toLocation === '' || 
            startDate === '' || endDate === '' || 
            driverAge === '' || fromLocationError.value || toLocationError.value ||
            startDateError.value || endDateError.value || driverAgeError.value) {
            setSearchButtonDisabled(true);
        } else {
            setSearchButtonDisabled(false);
        }
    }, [fromLocation, toLocation, startDate, endDate, driverAge, 
        fromLocationError, toLocationError, startDateError, 
        endDateError, driverAgeError]);

    const handleSearch = () => {
        console.log("searching");
        console.log("fromLocation: ", fromLocation);
        console.log("toLocation: ", toLocation);
        console.log("startDate: ", startDate);
        console.log("endDate: ", endDate);
        console.log("driverAge: ", driverAge);
        searchForVehicles({
            fromLocation: fromLocation,
            toLocation: toLocation,
            startDate: startDate,
            endDate: endDate,
            driverAge: driverAge
        });
    }

    return <Dialog
        open={isOpen}
        // onClose={handleClose}
        scroll={scroll}
        aria-labelledby="advanced-search-dialog"
        aria-describedby="advanced-search-dialog">
        <DialogTitle id="advanced-search-dialog-title">{title}</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
            <Box sx={{
                width: 500,
                maxWidth: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Same drop off</InputLabel>
                    <Select
                        labelId="sameDropOff-label-id"
                        id="sameDropOff-select-id"
                        value={sameDropOff}
                        label="Same drop-off"
                        onChange={handleChange}
                    >
                        <MenuItem value={true}>Same Drop off</MenuItem>
                        <MenuItem value={false}>Different Drop off</MenuItem>
                    </Select>
                </FormControl>
                <TextField 
                    required
                    key='fromLocation'
                    id='fromLocation'
                    label='From Location'
                    type='text'
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    onChange={(event) => { validateAndSetLocation(event); }}
                    error={fromLocationError.value}
                    helperText={fromLocationError.value ? fromLocationError.message: null}
                />

                <TextField
                    required
                    key='toLocation'
                    id='toLocation'
                    label='To Location'
                    type='text'
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    onChange={(event) => { validateAndSetToLocation(event); }}
                    error={toLocationError.value}
                    helperText={toLocationError.value ? toLocationError.message: null}
                />

                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    maxWidth: '100%',
                    marginTop: '10px'
                }}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>

                        <DateTimePicker
                        disablePast
                        label="Start Date"
                        renderInput={(params) => <TextField {...params} error={startDateError.value} helperText={startDateError.message}/>}
                        value={startDate}
                        onChange={(newValue) => {
                            validateAndSetStartDate(newValue);
                            // setStartDate(newValue);
                        }}
                        />
                        <DateTimePicker
                        disablePast
                        label="End Date"
                        renderInput={(params) => <TextField {...params} error={endDateError.value} helperText={endDateError.message}/>}
                        value={endDate}
                        onChange={(newValue) => {
                            validateAndSetEndDate(newValue);
                            // setEndDate(newValue);
                        }}
                        />
                    </LocalizationProvider>
                </Box>

                <TextField
                        required
                        key='driversAge'
                        id='driversAge'
                        label='Driver age'
                        type='number'
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        onChange={(event) => { validateAndSetDriverAge (event); }}
                        error={driverAgeError.value}
                        helperText={driverAgeError.value ? driverAgeError.message: null}
                    />
            </Box>
        </DialogContent>
        <DialogActions>
            <Button onClick={handleDialogClose} color="primary">Cancel</Button>
            <Button onClick={() => {handleSearch()}} disabled={searchButtonDisabled} color="primary">Search</Button>
        </DialogActions>
    </Dialog>
};

export default AdvancedSearchModal;