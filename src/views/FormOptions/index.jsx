import React , {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Header from "../../components/Header";
import LeftSidebar from "../../components/LeftSidebar";
import AdjustIcon from '@material-ui/icons/Adjust';
import DesktopAccessDisabledIcon from '@material-ui/icons/DesktopAccessDisabled';
import FiberNewIcon from '@material-ui/icons/FiberNew';
import BuildIcon from '@material-ui/icons/Build';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles(() => ({
    root: {
        color: "#538dff",
        margin: "10px 15px",
        padding: "10px",
        textAlign: "center",
        boxShadow: "0 0 10px #adadad"
    },
    linkText: {
        textTransform: "capitalize",
        textDecoration: "none",
        color: "#adadad",
        margin: "10px auto",
    }
}));

const Dashboard = () => {
    const classes = useStyles();
    const [leftDrawerState , setLeftDrawerState] = useState(false);
    return (
        <div className={classes.mainBlock}>
            <Grid container 
                style={{
                    width:"100%",
                    height:"100%",
                    padding: '0 10px'
                }}
            >
                <LeftSidebar leftDrawerState={leftDrawerState} setLeftDrawerState={setLeftDrawerState}/>
                <Grid item xs={12} className={classes.contentBlock} >
                    <Header setLeftDrawerState={setLeftDrawerState}/>
                    <Grid container spacing={1}>
                        <Grid item xs={4}>
                            <Card className={classes.root}>
                                <CardContent>
                                    <BuildIcon />
                                </CardContent>
                                <Link to="/hardware-form" className={classes.linkText} size="small">Hardware</Link>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card className={classes.root}>
                                <CardContent>
                                    <ImportantDevicesIcon />
                                </CardContent>
                                <Link to="/software-form" className={classes.linkText} size="small">Software</Link>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card className={classes.root}>
                                <CardContent>
                                    <DesktopAccessDisabledIcon />
                                </CardContent>
                                <Link to="/access-form" className={classes.linkText} size="small">Access</Link>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card className={classes.root}>
                                <CardContent>
                                    <FiberNewIcon />
                                </CardContent>
                                <Link to="/newhire-form" className={classes.linkText} size="small">New Hire</Link>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card className={classes.root}>
                                <CardContent>
                                    <FiberNewIcon />
                                </CardContent>
                                <Link to="/newterm-form" className={classes.linkText} size="small">New Term</Link>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card className={classes.root}>
                                <CardContent>
                                    <AdjustIcon />
                                </CardContent>
                                <Link to="/misc-form" className={classes.linkText} size="small">Misc.</Link>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Dashboard;