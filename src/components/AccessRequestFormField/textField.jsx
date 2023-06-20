import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    formGroup: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '10px',
        padding: '0 10px',  
        width: '300px',
        minHeight: '80px'      
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
}));

const TextField = (props) => {
    const classes = useStyles();
    
    return (
        <div className={classes.formGroup}>
            <label htmlFor="" className={classes.label}>{props.label}</label>
            <input
                disabled={false}
                onChange={props.onChange}
                placeholder={"Enter here"}
                className={classes.field}
            />
        </div>
    )
}

export default TextField;
