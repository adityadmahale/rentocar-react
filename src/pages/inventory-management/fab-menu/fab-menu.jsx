import * as React from 'react';

import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import Fade from '@mui/material/Fade';
import CircularProgress from '@mui/material/CircularProgress';
import EmojiTransportationIcon from '@mui/icons-material/EmojiTransportation';
import EmployeeActionModal from '../employee-action-modal/employee-action-modal';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import CarRepairIcon from '@mui/icons-material/CarRepair';

const fabActions = [
    { icon: <CarRepairIcon />, name: 'Add car', actionId: 'addCar' },
    { icon: <EmojiTransportationIcon />, name: 'Add station', actionId: 'addStation' },
];

const FabMenu = () => {
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const [title, setTitle] = React.useState("");
    const [actionType, setActionType] = React.useState("");

    const [loading, setLoading] = React.useState(false);
    const [toast, setToast] = React.useState("");
    const [toastMessage, setToastMessage] = React.useState("");

    const [snackbarOpen, setSnackbarOpen] = React.useState(false);
    const handleSnackbarClose = () => setSnackbarOpen(false);

    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    const getFieldsBasedOnAction = () => {
        if (actionType === "addCar") {
            return [
                {
                    name: "Registration No.", type: "number", id: 'addCar-registrationNo',
                    error: false,
                    errorMessageRequired: 'Registration no. is required',
                    errorMessageLength: 'Registration no. should be of length 8',
                    validators: {
                        required: true
                    }
                },
                {
                    name: "Make year", type: "select", id: 'addCar-makeYear',
                    error: false,
                    errorMessageRequired: 'Make year is required',
                    errorMessageMinLength: 'Make year should be greater than or equal to 1900',
                    errorMessageMaxLength: 'Make year should be less than or equal to 2020',
                    validators: {
                        required: true,
                        min: 1900,
                        max: 2022
                    },
                    value: 1900
                },
                {
                    name: "Model", type: "text", id: 'addCar-model',
                    error: false,
                    errorMessageRequired: 'Model is required',
                    errorMessageNoSpecialChars: 'Model should not contain special characters',
                    validators: {
                        required: true
                    },
                    errorMessage: ''
                },
                {
                    name: "Color", type: "text", id: 'addCar-color',
                    error: false,
                    errorMessageRequired: 'Color is required',
                    errorMessageNoSpecialCharsOrNumbers: 'Color should not contain special characters or numbers',
                    validators: {
                        required: true
                    }
                },
                {
                    name: "Condition", type: "select", id: 'addCar-condition',
                    error: false,
                    errorMessageRequired: 'Condition is required',
                    validators: {
                        required: true,
                        options: ["New", "Used"]
                    },
                    value: "New"
                },
                {
                    name: "Mileage", type: "number", id: 'addCar-mileage',
                    error: false,
                    errorMessageRequired: 'Mileage is required',
                    validators: {
                        required: true,
                        min: 0,
                        max: 1000000
                    }
                },
                {
                    name: "Vehicle type", type: "select", id: 'addCar-vehicleType',
                    error: false,
                    errorMessageRequired: 'Vehicle type is required',
                    validators: {
                        required: true,
                        options: ["Car", "Van", "Bus", "Truck"]
                    },
                    value: "Car"
                },
                {
                    name: "Station code", type: "number", id: 'addCar-stationCode',
                    error: false,
                    errorMessageRequired: 'Station code is required',
                    validators: {
                        required: true
                    }
                }
            ];
        } else {
            return [
                {
                    name: "Station code", type: "number", id: 'addStation-stationCode',
                    error: false,
                    errorMessageRequired: 'Station code is required',
                    validators: {
                        required: true
                    }
                },
                {
                    name: "Station name", type: "text", id: 'addStation-stationName',
                    error: false,
                    errorMessageRequired: 'Station name is required',
                    validators: {
                        required: true,
                        minLength: 3,
                        maxLength: 20
                    }
                },
                {
                    name: "Station address", type: "text", id: 'addStation-stationAddress',
                    error: false,
                    errorMessageRequired: 'Station address is required',
                    errorMessageMinLength: 'Station address should be greater than or equal to 3',
                    errorMessageMaxLength: 'Station address should be less than or equal to 20',
                    validators: {
                        required: true,
                        minLength: 3,
                        maxLength: 20
                    }
                },
                {
                    name: "Station capacity", type: "number", id: 'addStation-stationCapacity',
                    error: false,
                    errorMessageRequired: 'Station capacity is required',
                    errorMessageMinLength: 'Station capacity should be greater than or equal to 1',
                    validators: {
                        required: true,
                        min: 1
                    }
                }
            ];
        }
    }

    const addEntity = (entityType, modalFields) => {
        setOpen(false);
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setSnackbarOpen(true);
            if (entityType == "car") {
                const registrationNoField = modalFields.find(field => field.id === 'addCar-registrationNo').value;
                const message = `Car with ${registrationNoField} added successfully`;
                setToastMessage(message);
            } else {
                const stationNameField = modalFields.find(field => field.id === 'addStation-stationName').value;
                const message = `Station with ${stationNameField} added successfully`;
                setToastMessage(message);
            }                
        }, 2000);
    }

    return (
        <>
            <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
                {/* [Code Attribution 1 for SpeedDial] */}
                {/* [URL: https://mui.com/material-ui/react-speed-dial/#persistent-action-tooltips] */}
                <SpeedDial
                    ariaLabel="Employee actions"
                    FabProps={{
                        sx: {
                            bgcolor: '#00d2d3',
                            '&:hover': {
                                bgcolor: '#00d2d3',
                            }
                        }
                    }}
                    sx={{ position: 'absolute', bottom: 16, right: 16 }}
                    icon={<SpeedDialIcon />}
                >
                    {fabActions.map((fabAction) => (
                        <SpeedDialAction
                            key={fabAction.name}
                            icon={fabAction.icon}
                            aria-label={fabAction.name}
                            tooltipTitle={fabAction.name}
                            tooltipOpen
                            onClick={() => {
                                setOpen(true);
                                setTitle(fabAction.name);
                                setActionType(fabAction.actionId);
                            }}
                        />
                    ))}
                </SpeedDial>
                <EmployeeActionModal open={open}
                    handleClose={handleClose}
                    addEntity={addEntity}
                    title={title}
                    fields={getFieldsBasedOnAction()}
                    setToastMessage={setToastMessage}>
                </EmployeeActionModal>
            </Box>

            <Box sx={{ position: 'fixed', top: '49%', right: '49%', height: 40 }}>
                <Fade
                in={loading}
                style={{
                    transitionDelay: loading ? '100ms' : '0ms',
                }}
                unmountOnExit
                >
                <CircularProgress />
                </Fade>
            </Box>

            <Snackbar
                open={snackbarOpen}
                autoHideDuration={6000}
                onClose={handleSnackbarClose}
            >
                <Alert
                onClose={handleSnackbarClose}
                severity="success"
                sx={{ width: '100%' }}
                >
                {toastMessage}
                </Alert>
            </Snackbar>
        </>
    );
}

export default FabMenu;