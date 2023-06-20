import React , {useState , useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Select from "react-select";
import TextField from './textField';

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

const emailOptions =[ 
    { value: 1, label: "Adobe" },
    { value: 2, label: "MS Project" },
    { value: 3, label: "Firefox" },
    { value: 4, label: "Chrome"},
    { value: 5, label: "Elevate" },
    { value: 6, label: "Fax Software" },
    { value: 7, label: "Printer Access" },
    { value: 8, label: "USB Security"},
    { value: 9, label: "Office 365 License"}
]

const subMenu = [
    [ 
        { value: 1, label: "License Request" },
        { value: 2, label: "New install" },
        { value: 3, label: "License Request + New install" }
    ],
    [ 
        { value: 1, label: "License Request" },
        { value: 2, label: "New install" },
        { value: 3, label: "License Request + New install" }
    ],
    [ 
        { value: 1, label: "New install" }
    ],
    [ 
        { value: 1, label: "New install" },
    ],
    [ 
        { value: 1, label: "Account Request" },
        { value: 2, label: "New install" }
    ],
    [ 
        { value: 1, label: "New install" }
    ],
    [ 
        { value: 1, label: "New install" },
    ],
    [ 
        { value: 1, label: "Account Request" },
    ],
    [ 
        { value: 1, label: "License Request" },
        { value: 2, label: "New install" },
        { value: 3, label: "License Request + New install" }
    ]
]

const FieldMap = [
    [{label: "Description of your request"}],
    [{label: "Description of your request"}],
    [{label: "Description of your request"}],
    [{label: "Description of your request"}],
    [{label: "Description of your request"}],
    [{label: "Description of your request"}],
    [{label: "Description of your request"}],
    [{label: "Description of your request"}],
    [{label: "Description of your request"}]
]

const NewAppField = (props) => {
    const classes = useStyles();
    const [endFields , setEndFields] = useState({value: null , label: ""})
    const [payload , setPayload] = useState({
        newAppOpt: {value: null, label: ""},
        newAppSubOpt: {value: null , label: ""},
        fields: []
    })
    const accessOptionChange = (e) => {
        setPayload({...payload , newAppOpt:e})
    }
    const subMenuChange = (e) => {
        setEndFields(e)
        let fieldsClone = []
        setPayload({...payload , newAppSubOpt:e , fields: [...fieldsClone]})
    }
    const fieldChange = (e , label , i) => {
        let tempObj = {value: e.target.value , label: label}
        let fieldsClone = [...payload.fields]
        fieldsClone[i] = tempObj 
        setPayload({...payload , fields: [...fieldsClone]})
    }

    useEffect(() => {
        props.setAccessPayload(payload);
    } , [payload])

    return (
        <>
            <div className={classes.formGroup}>
                <label htmlFor="" className={classes.label}>New Application</label>
                <Select 
                    options={emailOptions} 
                    onChange={(event) => accessOptionChange(event)}
                    placeholder={"Select"}
                    className={classes.selectField}
                />
            </div>
            {payload.newAppOpt.value != null ? 
                <div className={classes.formGroup}>
                    <label htmlFor="" className={classes.label}>New App SubMenu</label>
                    <Select 
                        options={subMenu[payload.newAppOpt.value]} 
                        onChange={(event) => subMenuChange(event)}
                        placeholder={"Select"}
                        className={classes.selectField}
                    />
                </div>
            :null}
            {endFields.value != null && FieldMap[endFields.value - 1].map((item , index) => {
                return (
                    <TextField onChange={(event) => fieldChange(event , item.label , index)} label={item.label}/>
                )
            })}
        </>
    )
}

export default NewAppField;
