import React , {useState , useEffect} from 'react';
import { useForm , Controller} from "react-hook-form";
import { makeStyles } from '@material-ui/core/styles';
import Select from "react-select";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import EmailField from './emailField';
import SharepointField from './sharepointField';
import NewAppField from './newAppField';
import BusinessAppField from './businessAppField';

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

const modelCopyOptions = [
    { value: 1, label: "Model Account" },
    { value: 2, label: "Copy Access" },
];

const accessOptions = [
    { value: 1, label: "Email" },
    { value: 2, label: "SharePoint" },
    { value: 3, label: "New Application Access" },
    { value: 4, label: "Business Application Access"}
];

const Schema = yup.object({
    requestor: yup.string().required("requestor name required").typeError("valid input is required"),
    newHire: yup.string().required("new hire name is required").typeError("valid input is required"),
    jobTitle: yup.string().required("job title is required").typeError("valid input is required"),
    startDate: yup.date().required("date is required").typeError("valid date is required"),
    workLocation: yup.string().required("work location is required").typeError("valid input is required"),
    homeLocation: yup.string().required("work location is required").typeError("valid input is required"),
    newHireContact: yup.number().required("number is required").typeError("enter valid number only") , 
    reportTo: yup.string().required("reporting manager is required").typeError("valid input is required"),
    rogerEmail: yup.string().email().required("email is required").typeError("valid email is required"), 
    computerRequired: yup.boolean().required("this is required"), 
    appAccess: yup.string().required("app access name is required").typeError("valid input is required"),
    modelCopyAccess: yup.object().required("this is required"),
    equipment: yup.boolean().required("this is required"), 
    comments: yup.string().typeError("valid input is required"),    
    access: yup.object().required("this is required")
});


const NewHireRequestFormField = () => {
    const [accessValue , setAccessValue] = useState({value: null , label: ""});
    const [accessPayload , setAccessPayload] = useState({})
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

    useEffect(() => {
        console.log("accessValue ==> " , accessValue);
    }, [accessValue])
    const classes = useStyles();
    const onSubmit = data => console.log(data);
    return (
        <form onSubmit={handleSubmit(onSubmit)} className={classes.formBlock}>
            <div className={classes.formGroupRow}>
                <div className={classes.formGroup}>
                    <label htmlFor="" className={classes.label}>Requestor</label>
                    <Controller
                        name="requestor"
                        control={control}
                        rules={{ required: true }}
                        render={({ field: { onChange, name, value, ref } }) => (
                            <input
                                disabled={false}
                                ref={ref}
                                name={name}
                                value={value}
                                onChange={onChange}
                                placeholder={"Enter requestor"}
                                className={classes.field}
                            />
                        )}
                    />
                    {errors.requestor && <span className={classes.errors}>This is required.</span>}
                </div>
                <div className={classes.formGroup}>
                    <label htmlFor="" className={classes.label}>New Hire Name</label>
                    <Controller
                        name="newHire"
                        control={control}
                        rules={{ required: true }}
                        render={({ field: { onChange, name, value, ref } }) => (
                            <input
                                disabled={false}
                                ref={ref}
                                name={name}
                                value={value}
                                onChange={onChange}
                                placeholder={"Enter name"}
                                className={classes.field}
                            />
                        )}
                    />
                    {errors.newHire && <span className={classes.errors}>This is required.</span>}
                </div>
                <div className={classes.formGroup}>
                    <label htmlFor="" className={classes.label}>Job Title</label>
                    <Controller
                        name="jobTitle"
                        control={control}
                        rules={{ required: true }}
                        render={({ field: { onChange, name, value, ref } }) => (
                            <input
                                disabled={false}
                                ref={ref}
                                name={name}
                                value={value}
                                onChange={onChange}
                                placeholder={"Enter title"}
                                className={classes.field}
                            />
                        )}
                    />
                    {errors.jobTitle && <span className={classes.errors}>This is required.</span>}
                </div>
                <div className={classes.formGroup}>
                    <label htmlFor="" className={classes.label}>Start Date</label>
                    <Controller
                        name="startDate"
                        control={control}
                        rules={{ required: true }}
                        render={({ field: { onChange, name, value, ref } }) => (
                            <input
                                disabled={false}
                                ref={ref}
                                name={name}
                                value={value}
                                onChange={onChange}
                                placeholder={"Enter date"}
                                className={classes.field}
                            />
                        )}
                    />
                    {errors.startDate && <span className={classes.errors}>This is required.</span>}
                </div>
                <div className={classes.formGroup}>
                    <label htmlFor="" className={classes.label}>Work Location</label>
                    <Controller
                        name="workLocation"
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
                                placeholder={"Enter work location"}
                                className={classes.field}
                            />
                        )}
                    />
                    {errors.workLocation && <span className={classes.errors}>This is required.</span>}
                </div> 
                <div className={classes.formGroup}>
                    <label htmlFor="" className={classes.label}>Home Location New Hire</label>
                    <Controller
                        name="homeLocation"
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
                                placeholder={"Enter home location"}
                                className={classes.field}
                            />
                        )}
                    />
                    {errors.homeLocation && <span className={classes.errors}>This is required.</span>}
                </div> 
                <div className={classes.formGroup}>
                    <label htmlFor="" className={classes.label}>New Hire Contact</label>
                    <Controller
                        name="newHireContact"
                        control={control}
                        rules={{ required: true }}
                        render={({ field: { onChange, name, value, ref } }) => (
                            <input
                                disabled={false}
                                ref={ref}
                                name={name}
                                value={value}
                                onChange={onChange}
                                placeholder={"Enter contact number"}
                                className={classes.field}
                            />
                        )}
                    />
                    {errors.newHireContact && <span className={classes.errors}>This is required.</span>}
                </div>                 
                <div className={classes.formGroup}>
                    <label htmlFor="" className={classes.label}>Report Manager</label>
                    <Controller
                        name="reportTo"
                        control={control}
                        rules={{ required: true }}
                        render={({ field: { onChange, name, value, ref } }) => (
                            <input
                                disabled={false}
                                ref={ref}
                                name={name}
                                value={value}
                                onChange={onChange}
                                placeholder={"Enter reporting manager"}
                                className={classes.field}
                            />
                        )}
                    />
                    {errors.reportTo && <span className={classes.errors}>This is required.</span>}
                </div>
                <div className={classes.formGroup}>
                    <label htmlFor="" className={classes.label}>Rogerson Email</label>
                    <Controller
                        name="rogerEmail"
                        control={control}
                        rules={{ required: true }}
                        render={({ field: { onChange, name, value, ref } }) => (
                            <input
                                disabled={false}
                                ref={ref}
                                name={name}
                                value={value}
                                onChange={onChange}
                                placeholder={"Enter email"}
                                className={classes.field}
                            />
                        )}
                    />
                    {errors.rogerEmail && <span className={classes.errors}>This is required.</span>}
                </div>
                <div className={classes.checkFieldGroup}>
                    <Controller
                        name="computerRequired"
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
                    <label htmlFor="" className={classes.label} style={{marginBottom: '0px'}}>Computer Required</label>
                    {errors.computerRequired && <span className={classes.errors}>This is required.</span>}
                </div>
                <div className={classes.checkFieldGroup}>
                    <Controller
                        name="appAccess"
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
                    <label htmlFor="" className={classes.label} style={{marginBottom: '0px'}}>Application Acces</label>
                    {errors.appAccess && <span className={classes.errors}>This is required.</span>}
                </div>
                <div className={classes.formGroup}>
                    <label htmlFor="" className={classes.label}>Model/Copy Access</label>
                    <Controller
                        name="modelCopyAccess"
                        control={control}
                        rules={{ required: true }}
                        render={({ field: { onChange, name, value, ref } }) => (
                            <Select 
                                options={modelCopyOptions} 
                                ref={ref}
                                name={name}
                                value={value}
                                onChange={onChange}
                                placeholder={"Select access type"}
                                className={classes.selectField}
                            />
                        )}
                    />
                    {errors.modelCopyAccess && <span className={classes.errors}>This is required.</span>}
                </div>
                <div className={classes.checkFieldGroup}>
                    <Controller
                        name="equipment"
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
                    <label htmlFor="" className={classes.label} style={{marginBottom: '0px'}}>Rogerson Equipment Needed?</label>
                    {errors.equipment && <span className={classes.errors}>This is required.</span>}
                </div>
             
                <div className={classes.formGroup}>
                    <label htmlFor="" className={classes.label}>Comments</label>
                    <Controller
                        name="comments"
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
                                placeholder={"Enter comments"}
                                className={classes.field}
                            />
                        )}
                    />
                    {errors.comments && <span className={classes.errors}>This is required.</span>}
                </div>               
                <div className={classes.formGroup}>
                    <label htmlFor="" className={classes.label}>Access Needed</label>
                    <Controller
                        name="access"
                        control={control}
                        rules={{ required: true }}
                        render={({ field: { onChange, name, value, ref } }) => (
                            <Select 
                                options={accessOptions} 
                                ref={ref}
                                name={name}
                                value={accessValue}
                                onChange={(event) => {
                                    setAccessValue(event);
                                }}
                                placeholder={"Access Needed"}
                                className={classes.selectField}
                            />
                        )}
                    />
                    {errors.access && <span className={classes.errors}>This is required.</span>}
                </div>
                {accessValue.value == 1 ? <EmailField setAccessPayload={setAccessPayload}/> :
                 accessValue.value == 2 ? <SharepointField setAccessPayload={setAccessPayload}/> :
                 accessValue.value == 3 ? <NewAppField setAccessPayload={setAccessPayload}/> :
                 accessValue.value == 4 ? <BusinessAppField setAccessPayload={setAccessPayload}/> : 
                 null }
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

export default NewHireRequestFormField;

