import React , {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Header from "../../components/Header";
import LeftSidebar from "../../components/LeftSidebar";
import VendorChart from '../../components/Charts/Bar/vendor.jsx';
import CompanyIncidentCahrt from '../../components/Charts/Donut/companyIncident.jsx';
import PendingClaims from "../../components/Tables/PendingClaims.jsx"

const useStyles = makeStyles(() => ({
    heading: {
      fontWeight: 500,
      fontSize: "20px",
      marginBottom: "5px"
    },
    viewAllBtn: {
        color: "#538dff",
        marginLeft: "15px",
        fontWeight: "400",
        fontSize: "16px"
    },
    mainBlock: {
        background: "#ececec",
    },
    contentBlock: {
        maxWidth: '100%'
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
                        <Grid item xs={6}><VendorChart/></Grid>
                        <Grid item xs={6}><CompanyIncidentCahrt/></Grid>
                    </Grid>
                    <PendingClaims/>
                </Grid>
            </Grid>
        </div>
    )
}

export default Dashboard;