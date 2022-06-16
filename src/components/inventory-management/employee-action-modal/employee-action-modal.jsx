import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const EmployeeActionModal = ({ open, handleClose, setOpen, title, fields, addEntity }) => {
    const [scroll, setScroll] = React.useState('paper'); // eslint-disable-line no-unused-vars
    const [modalFields, setModalFields] = React.useState(fields);
    const [disabledAdd, setDisabledAdd] = React.useState(false);

    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);

    React.useEffect(() => {
        setModalFields(fields);
    }, [fields]);

    React.useEffect(() => {
        isAddDisabled();
    }, []);

    React.useEffect(() => {
        isAddDisabled();
    }, [modalFields])

    const inputChanged = (event, field) => {
        const fieldsDuplicate = JSON.parse(JSON.stringify(modalFields));
        fieldsDuplicate.map((fieldProp) => {
            if (fieldProp.name === field.name && fieldProp.type !== 'select') {
                fieldProp.value = event.target.value;
                
            }
            return fieldProp;
        });
        fieldsDuplicate.map(fieldProp => {
            if (fieldProp.name === field.name) {
                if (!event.target.value) {
                    fieldProp.error = true;
                    fieldProp.errorMessage = field.errorMessageRequired;
                } else {
                    fieldProp.error = false;
                    fieldProp.errorMessage = '';
                }
            }
            return fieldProp;
        });
        
        if (field.id === 'addCar-model') {
            if (event.target.value) {
                const isSpecialCharsPresent = specialChars.split('').some(char => event.target.value.includes(char));
                    fieldsDuplicate.map(fieldProp => {
                        if (fieldProp.name === field.name) {
                            if (isSpecialCharsPresent) {
                                fieldProp.error = true;
                                fieldProp.errorMessage = field.errorMessageNoSpecialChars;
                            } else {
                                fieldProp.error = false;
                            }
                        }
                        return fieldProp;
                    });
            }
        } else if (field.id === 'addCar-color') {
            if (event.target.value) {
                const isValid = numbersAndSpecialChars.test(event.target.value);
                if (!isValid) {
                    fieldsDuplicate.map(fieldProp => {
                        if (fieldProp.name === field.name) {
                            fieldProp.error = true;
                            fieldProp.errorMessage = field.errorMessageNoSpecialCharsOrNumbers;
                        }  else {
                            fieldProp.error = false;
                        }
                        return fieldProp;
                    });
                }
            }
        }
        setModalFields(fieldsDuplicate);
    }

    const getSelectOptions = (field) => {
        if (field.id === 'addCar-makeYear') {
            return Array.from(Array(123)).map((option, index) => {
                return <MenuItem key={index + 1900} value={index + 1900}>{index + 1900}</MenuItem>
            });
        }
        return (
            (field.validators && field.validators.options) ? field.validators.options.map((option) => (
                <MenuItem key={option} value={option}>{option}</MenuItem>
            )) : null
        );
    }

    const specialChars = `/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;`;
    const numbersAndSpecialChars = /^[a-zA-Z]+$/;

    const selectFieldChanged = (event, field) => {
        console.log("field: ", field);
        const fieldsDuplicate = JSON.parse(JSON.stringify(modalFields));
        fieldsDuplicate.map(fieldProp => {
            if (fieldProp.name === field.name) {
                fieldProp.value = event.target.value
            }
            return fieldProp;
        });
        setModalFields([...fieldsDuplicate]);
    }

    const validatetTextField = (event, field) => {
        
        const fieldsDuplicate = JSON.parse(JSON.stringify(modalFields));
        fieldsDuplicate.map(fieldProp => {
            if (fieldProp.name === field.name) {
                if (!event.target.value) {
                    fieldProp.error = true;
                    fieldProp.errorMessage = field.errorMessageRequired;
                } else {
                    fieldProp.error = false;
                    fieldProp.errorMessage = '';
                }
            }
            return fieldProp;
        });
        setModalFields([...fieldsDuplicate]);
        
        if (field.id === 'addCar-model') {
            if (event.target.value) {
                const isSpecialCharsPresent = specialChars.split('').some(char => event.target.value.includes(char));
                    const fieldsDuplicate = JSON.parse(JSON.stringify(modalFields));
                    fieldsDuplicate.map(fieldProp => {
                        if (fieldProp.name === field.name) {
                            if (isSpecialCharsPresent) {
                                fieldProp.error = true;
                                fieldProp.errorMessage = field.errorMessageNoSpecialChars;
                            } else {
                                fieldProp.error = false;
                            }
                        }
                        return fieldProp;
                    });
                    setModalFields([...fieldsDuplicate]);
                // }
            }
        } else if (field.id === 'addCar-color') {
            if (event.target.value) {
                const isValid = numbersAndSpecialChars.test(event.target.value);
                if (!isValid) {
                    const fieldsDuplicate = JSON.parse(JSON.stringify(modalFields));
                    fieldsDuplicate.map(fieldProp => {
                        if (fieldProp.name === field.name) {
                            fieldProp.error = true;
                            fieldProp.errorMessage = field.errorMessageNoSpecialCharsOrNumbers;
                        }  else {
                            fieldProp.error = false;
                        }
                        return fieldProp;
                    });
                    setModalFields([...fieldsDuplicate]);
                }
            }
        }
        isAddDisabled();
    }

    const isAddDisabled = () => {
        let isDisabled = modalFields.some(field => field.error || !field.value);
        setDisabledAdd(isDisabled);
        return isDisabled;
    }

    return (
        <div>
            {/* [Code Attribution 2 for MUI Dialog] */}
            {/* [URL: https://mui.com/material-ui/react-dialog/#scrolling-long-content] */}
            <Dialog
                open={open}
                onClose={handleClose}
                scroll={scroll}
                aria-labelledby="add-entities-dialog"
                aria-describedby="add-entities-dialog-description"
            >
                <DialogTitle id="add-entities-dialog-title">{title}</DialogTitle>
                <DialogContent dividers={scroll === 'paper'}>
                    <Box
                        sx={{
                            width: 500,
                            maxWidth: '100%'
                        }}
                        >
                        {modalFields.map((field) => (
                            (field.type === 'select') ?
                                <FormControl sx={{ minWidth: '100%', marginTop: '10px' }} error={field.error}>
                                    <InputLabel id={field.id + 'input-label'}>{field.name}</InputLabel>
                                    {/* [Code Attribution 4 for MUI Select] */}
                                    {/* [URL: https://mui.com/material-ui/react-select/#basic-select] */}
                                    <Select
                                    labelId={field.id}
                                    id={field.id}
                                    value={field.value}
                                    label={field.name}
                                    onChange={(event) => {
                                        selectFieldChanged(event, field);
                                    }}
                                    >
                                        {getSelectOptions(field)}
                                    </Select>
                                </FormControl>
                                :
                                <>
                                {/* [Code Attribution 3 for MUI TextField] */}
                                {/* [URL: https://mui.com/material-ui/react-text-field/#full-width] */}
                                    <TextField 
                                        required
                                        key={field.id}
                                        id={field.id}
                                        label={field.name}
                                        type={field.type}
                                        variant="outlined"
                                        margin="normal"
                                        fullWidth
                                        onChange={(event) => { inputChanged(event, field); }}
                                        onBlur={(event) => { validatetTextField(event, field) }}
                                        error={field.error}
                                        helperText={field.error ? field.errorMessage: null}
                                    />
                                </>
                        ))}
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button
                        disabled={disabledAdd}
                        onClick={() => { addEntity((title === 'Add a car' ? 'car' : 'station'), modalFields); }}>
                            Add
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
export default EmployeeActionModal;