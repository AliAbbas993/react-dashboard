import React , {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  
  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`
    };
  }
  
  const useStyles = makeStyles(theme => ({
    paper: {
      position: "absolute",
      width: 400,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(4),
      outline: "none"
    },
    flexRow: {
        width: "350px",
        background: "#ffffff",
        margin: "0 auto",
        padding: "15px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        borderRadius: "10px",
        transform: "translateY(150px)"
    },
    dateBlock: {
        margin: "5px 10px"
    },
    label: {
        color: "#4596d2",
        fontSize: "14px"
    },
    dateField: {
        border: "1px solid #adadad",
        color: "#adadad",
        width: "150px"
    }
  }));
  

const DateModal = (props) => {
    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);

    const handleStart = (e) => {
        console.log(e.target.value);
        props.setDateState({...props.dateState, start: e.target.value})
    }

    const handleEnd = (e) => {
        console.log(e.target.value);
        props.setDateState({...props.dateState, end: e.target.value})
    }

    return (
        <Modal
            open={props.open}
            onClose={() => props.setOpen(false)}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            {/* <div style={modalStyle} className={classes.paper}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </div> */}
            <div className={classes.flexRow}>
                <div className={classes.dateBlock}>
                    <label className={classes.label}>Start Date</label>
                    <input type="date" max={props.dateState.end} className={classes.dateField} defaultValue={props.dateState.start} onChange={(e) => handleStart(e)}/>
                </div>
                <div>
                    <label className={classes.label}>End Date</label>
                    <input type="date" min={props.dateState.start} className={classes.dateField} defaultValue={props.dateState.end} onChange={(e) => handleEnd(e)}/>
                </div>
            </div>
        </Modal>
    )
}

export default DateModal;