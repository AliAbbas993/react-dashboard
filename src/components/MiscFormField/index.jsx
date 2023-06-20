import React from 'react';
import { useForm , Controller} from "react-hook-form";
import { makeStyles } from '@material-ui/core/styles';
import Select from "react-select";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const useStyles = makeStyles(() => ({
    formBlock: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',
        flexWrap: 'wrap',
        width: '100%'
    },
    formGroupRow: {
        display: 'flex',
        alignItems: 'start',
        flexWrap: 'wrap',
        width: '100%'
    },
    formGroup: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '10px',
        padding: '0 10px',  
        width: '300px',
        minHeight: '80px'      
    },
    checkFieldGroup: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',
        flexWrap: 'wrap',
        padding: '0 10px 20px',  
        width: '300px', 
        marginTop: '25px'

    },
    label: {
        fontSize: '14px',
        color: '#150a7e',
        lineHeight: 1,
        margin: '0 0 5px 10px'
    },
    field: {
        border: '1px solid #ececec',
        borderRadius: '5px',
        boxShadow: '0 0 5px #ececec',
        color: '#adadad',
        minWidth: '250px',
        padding: '10px',
        resize: 'none',
        marginBottom: '15px'
    },
    selectField: {
        border: '1px solid #ececec',
        borderRadius: '5px',
        boxShadow: '0 0 5px #ececec',
        color: '#adadad',
        minWidth: '250px',
        marginBottom: '15px'
    },
    errors: {
        display: 'inline-block',
        width: '100%',
        position: 'absolute',
        bottom: 0,
        left: '20px',
        fontSize: '12px',
        color: '#ff0000'
    },
    submitBtn: {
        border: 'none',
        borderRadius: "30px",
        marginLeft: "15px",
        padding: "7px 25px",
        color: "white",
        fontSize: "14px",
        background: "#f50057"        
    }
}));

const priorityOptions = [
    { value: 1, label: "High" },
    { value: 2, label: "Medium" },
    { value: 3, label: "Low" }
];

const Schema = yup.object({
    userName: yup.string().email().required("username is required").typeError("valid username is required"), 
    onBehalf: yup.boolean().required("this is required"), 
    deviceName: yup.string().typeError("enter valid device name"), 
    contactNumber: yup.number().required("number is required").typeError("enter valid number only") , 
    currentLocation: yup.string().required("location is required").typeError("enter valid location") , 
    description: yup.string().required("description is required") , 
    priority: yup.object().required("this is required")
});


const MiscFormField = () => {
    const {
        register,
        handleSubmit,
        setValue,
        control,
        reset,
        watch,
        getValues,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(Schema),
        mode: "onChange",
    });

    const classes = useStyles();
    const onSubmit = data => console.log(data);
    return (
        <form onSubmit={handleSubmit(onSubmit)} className={classes.formBlock}>
            <div className={classes.formGroupRow}>
                <div className={classes.formGroup}>
                    <label htmlFor="" className={classes.label}>Username / Email</label>
                    <Controller
                        name="userName"
                        control={control}
                        rules={{ required: true }}
                        render={({ field: { onChange, name, value, ref } }) => (
                            <input
                                disabled={false}
                                ref={ref}
                                name={name}
                                value={value}
                                onChange={onChange}
                                placeholder={"Enter Email"}
                                className={classes.field}
                            />
                        )}
                    />
                    {errors.userName && <span className={classes.errors}>This is required.</span>}
                </div>
                <div className={classes.checkFieldGroup}>
                    <Controller
                        name="onBehalf"
                        control={control}
                        rules={{ required: true }}
                        render={({ field: { onChange, name, value, ref } }) => (
                            <input
                                type='checkbox'
                                disabled={false}
                                ref={ref}
                                name={name}
                                value={value}
                                onChange={onChange}
                            />
                        )}
                    />
                    <label htmlFor="" className={classes.label} style={{marginBottom: '0px'}}>On Behalf</label>
                    {errors.onBehalf && <span className={classes.errors}>This is required.</span>}
                </div>
                <div className={classes.formGroup}>
                    <label htmlFor="" className={classes.label}>Device Name</label>
                    <Controller
                        name="deviceName"
                        control={control}
                        rules={{ required: true }}
                        render={({ field: { onChange, name, value, ref } }) => (
                            <input
                                disabled={false}
                                ref={ref}
                                name={name}
                                value={value}
                                onChange={onChange}
                                placeholder={"Device Name"}
                                className={classes.field}
                            />
                        )}
                    />
                    {errors.deviceName && <span className={classes.errors}>This is required.</span>}
                </div>
                <div className={classes.formGroup}>
                    <label htmlFor="" className={classes.label}>Contact Number</label>
                    <Controller
                        name="contactNumber"
                        control={control}
                        rules={{ required: true }}
                        render={({ field: { onChange, name, value, ref } }) => (
                            <input
                                disabled={false}
                                ref={ref}
                                name={name}
                                value={value}
                                onChange={onChange}
                                placeholder={"Enter Contact Number"}
                                className={classes.field}
                            />
                        )}
                    />
                    {errors.contactNumber && <span className={classes.errors}>This is required.</span>}
                </div>              
                <div className={classes.formGroup}>
                    <label htmlFor="" className={classes.label}>Current Location</label>
                    <Controller
                        name="currentLocation"
                        control={control}
                        rules={{ required: true }}
                        render={({ field: { onChange, name, value, ref } }) => (
                            <textarea
                                row={5}
                                disabled={false}
                                ref={ref}
                                name={name}
                                value={value}
                                onChange={onChange}
                                placeholder={"Enter Current Location"}
                                className={classes.field}
                            />
                        )}
                    />
                    {errors.currentLocation && <span className={classes.errors}>This is required.</span>}
                </div>
                <div className={classes.formGroup}>
                    <label htmlFor="" className={classes.label}>Description</label>
                    <Controller
                        name="description"
                        control={control}
                        rules={{ required: true }}
                        render={({ field: { onChange, name, value, ref } }) => (
                            <textarea
                                row={3}
                                disabled={false}
                                ref={ref}
                                name={name}
                                value={value}
                                onChange={onChange}
                                placeholder={"Enter Description"}
                                className={classes.field}
                            />
                        )}
                    />
                    {errors.description && <span className={classes.errors}>This is required.</span>}
                </div>               
                <div className={classes.formGroup}>
                    <label htmlFor="" className={classes.label}>Priority</label>
                    <Controller
                        name="priority"
                        control={control}
                        rules={{ required: true }}
                        render={({ field: { onChange, name, value, ref } }) => (
                            <Select 
                                options={priorityOptions} 
                                ref={ref}
                                name={name}
                                value={value}
                                onChange={onChange}
                                placeholder={"Select Priority"}
                                className={classes.selectField}
                            />
                        )}
                    />
                    {errors.priority && <span className={classes.errors}>This is required.</span>}
                </div>
            </div>
            <div className={classes.formGroupRow} 
                style={{
                    display: 'inline-block',
                    width: '100%',
                }}
            >
                <button type='submit' className={classes.submitBtn}>Submit</button>
            </div>
        </form>
    )
}

export default MiscFormField;

