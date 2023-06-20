import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Drawer from './drawer';
import DateModal from './dateModal';

const useStyles = makeStyles(() => ({
    root: {
      flexGrow: 1,
    },
    leftBlock: {
        display: "flex",
        alignItems: "center"
    },
    headerMain: {
        padding: "15px",
        display: "flex",
        justifyContent: "space-between"
    },
    menuButton: {
      margin: "0 5px",
    },
}));

const Header = (props) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [drawerState, setDrawerState] = React.useState(false);
    const [dateState , setDateState] = React.useState({
        start : "",
        end : ""
    })

    return (
        <div>
            <header className={classes.headerMain}>
                <div className={classes.leftBlock}>
                    <IconButton onClick={() => props.setLeftDrawerState(true)} edge="start" className={classes.menuButton} color="secondary" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <div className="header-title"
                        style={{
                            width: "350px"
                        }}
                    >
                        <h3
                            style={{
                                margin: 0,
                                marginBottom: "10px",
                                fontWeight: "400",
                                lineHeight: 1
                            }}
                        >Hello, Naveen</h3>
                        <p
                            style={{
                                margin: 0,
                                fontSize: "12px"
                            }}
                        >Welcome back to insurance portal</p>
                    </div>
                </div>
                <div className="header-buttons">
                    <Button variant="contained" color="secondary"
                        style={{
                            borderRadius: "30px",
                            padding: "7px 25px"
                        }}
                    >
                        + Add New
                    </Button>
                    <Button variant="contained"
                        style={{
                            borderRadius: "30px",
                            marginLeft: "15px",
                            background: "white",
                            padding: "7px 25px",
                            color: "#150a7e",
                            fontSize: "14px"
                        }}
                        onClick={() => setOpen(true)}
                    >
                        {(dateState.start == "" || dateState.end == "") ? "Please Select Date" : (dateState.start + '  to  ' + dateState.end)}

                    </Button>
                    <IconButton onClick={() => setDrawerState(!drawerState)} edge="start" className={classes.menuButton} color="secondary" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                </div>
            </header>
            <Drawer drawerState={drawerState} setDrawerState={setDrawerState}/>
            <DateModal open={open} setOpen={() => setOpen()} dateState={dateState} setDateState={setDateState}/>
        </div>
    )
}

export default Header
