import React, { useState } from 'react';
import { Form, Field } from 'react-final-form';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
// import { Dialog } from 'primereact/dialog';
import { classNames } from 'primereact/utils';
import { Password } from 'primereact/password';
import { Divider } from 'primereact/divider';
import { Menubar } from 'primereact/menubar';
import { useNavigate } from 'react-router-dom';
// import { Success } from './Success.js';
import './Registration.css';

function Registration() {
    const [showMessage, setShowMessage] = useState(false);
    const [formData, setFormData] = useState({});
    const navigate = useNavigate();
    const passwordText = <h6>Enter a password</h6>;
    const passwordFooter = (
        <React.Fragment>
            <Divider />
            <p className="mt-2">Suggestions</p>
            <ul className="pl-2 ml-2 mt-0" style={{ lineHeight: '1.5' }}>
                <li>Minimum 8 characters</li>
            </ul>
        </React.Fragment>
    );
    const items = [
        {
            label: 'RentoCar',
            icon: 'pi pi-fw pi-car',
        }
    ];

    const validate = (data) => {
        let errors = {};
        console.log("data", data)
        if (!data.firstName) {
            errors.firstName = 'First Name is required.';
        }
        else if (!/^[a-zA-Z\s]+$/i.test(data.firstName)) {
            errors.firstName = 'First Name should only be letters';
        }
        if (!data.lastName) {
            errors.lastName = 'Last Name is required.';
        }
        else if (!/^[a-zA-Z\s]+$/i.test(data.lastName)) {
            errors.lastName = 'Last Name should only be letters';
        }
        if (!data.password) {
            errors.password = 'Password is required.';
        }
        else if (Object.keys(data.password).length < 8) {
            errors.password = 'Minimum password length is 8.';
        }
        if (!data.confirmpassword) {
            errors.confirmpassword = 'Confirm Password is required.';
        }
        else if (data.confirmpassword !== data.password) {
            errors.confirmpassword = 'The password confirmation must match the password.';
        }
        if (!data.email) {
            errors.email = 'Email is required.';
        }
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
            errors.email = 'Invalid email address.';
        }

        return errors;
    };

    // const dialogFooter = <div className="flex justify-content-center"><Button label="OK" className="p-button-text" autoFocus onClick={() => setShowMessage(false)} /></div>;

    const onSubmit = (data, form) => {
        setFormData(data);
        // setShowMessage(true);
        navigate('/success');
        form.restart();
    };


    const isFormFieldValid = (meta) => !!(meta.touched && meta.error);
    const getFormErrorMessage = (meta) => {
        return isFormFieldValid(meta) && <small className="p-error">{meta.error}</small>;
    };
    // const { getValues } = useForm();
    return (

        <div className="form-demo">
            {/* <Dialog visible={showMessage} onHide={() => setShowMessage(false)} position="top" footer={dialogFooter} showHeader={false} breakpoints={{ '960px': '80vw' }} style={{ width: '30vw' }}>
                <div className="flex align-items-center flex-column pt-6 px-3">
                    <i className="pi pi-check-circle" style={{ fontSize: '5rem', color: 'var(--green-500)' }}></i>
                    <h5>Registration Successful!</h5>
                    <p style={{ lineHeight: 1.5, textIndent: '1rem' }}>
                        Your account is registered under name <b>{formData.firstName}</b> ; it'll be valid next 30 days without activation. Please check <b>{formData.email}</b> for activation instructions.
                    </p>
                </div>
            </Dialog> */}
            <Menubar model={items} style={{ 'backgroundColor': '#3F51B5' }} />
            <div className="flex justify-content-center">
                <div className="card">
                    <h5 className="text-center">Register a new User</h5>
                    <Form onSubmit={onSubmit} initialValues={{ firstName: '', lastName: '', email: '', password: '', confirmpassword: '' }} validate={validate} render={({ handleSubmit }) => (
                        <form onSubmit={handleSubmit} className="p-fluid">
                            <Field name="firstName" render={({ input, meta }) => (
                                <div className="field">
                                    <span className="p-float-label">
                                        <InputText id="firstName" {...input} autoFocus className={classNames({ 'p-invalid': isFormFieldValid(meta) })} />
                                        <label htmlFor="firstName" className={classNames({ 'p-error': isFormFieldValid(meta) })}>First Name*</label>
                                    </span>
                                    {getFormErrorMessage(meta)}
                                </div>
                            )} />
                            <Field name="lastName" render={({ input, meta }) => (
                                <div className="field">
                                    <span className="p-float-label">
                                        <InputText id="lastName" {...input} className={classNames({ 'p-invalid': isFormFieldValid(meta) })} />
                                        <label htmlFor="lastName" className={classNames({ 'p-error': isFormFieldValid(meta) })}>Last Name*</label>
                                    </span>
                                    {getFormErrorMessage(meta)}
                                </div>
                            )} />
                            <Field name="email" render={({ input, meta }) => (
                                <div className="field">
                                    <span className="p-float-label p-input-icon-right">
                                        <i className="pi pi-envelope" />
                                        <InputText id="email" {...input} className={classNames({ 'p-invalid': isFormFieldValid(meta) })} />
                                        <label htmlFor="email" className={classNames({ 'p-error': isFormFieldValid(meta) })}>Email*</label>
                                    </span>
                                    {getFormErrorMessage(meta)}
                                </div>
                            )} />
                            <Field name="password" render={({ input, meta }) => (
                                <div className="field">
                                    <span className="p-float-label">
                                        <Password id="password" {...input} toggleMask className={classNames({ 'p-invalid': isFormFieldValid(meta) })} header={passwordText} footer={passwordFooter} />
                                        <label htmlFor="password" className={classNames({ 'p-error': isFormFieldValid(meta) })}>Password*</label>
                                    </span>
                                    {getFormErrorMessage(meta)}
                                </div>
                            )} />
                            <Field name="confirmpassword" render={({ input, meta }) => (
                                <div className="field">
                                    <span className="p-float-label">
                                        <Password id="confirmpassword" {...input} toggleMask className={classNames({ 'p-invalid': isFormFieldValid(meta) })} />
                                        <label htmlFor="confirmpassword" className={classNames({ 'p-error': isFormFieldValid(meta) })}>Confirm Password*</label>
                                    </span>
                                    {getFormErrorMessage(meta)}
                                </div>
                            )} />

                            <Button type="submit" label="Submit" className="mt-2" />
                        </form>
                    )} />
                </div>
            </div>
        </div>
    );
}

export default Registration;