
import React , {useState} from 'react';
import SoftwareFormField from '../../components/SoftwareFormField';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Header from "../../components/Header";
import LeftSidebar from "../../components/LeftSidebar";

const useStyles = makeStyles(() => ({
  heading: {
    fontWeight: 500,
    fontSize: "20px",
    marginBottom: "5px"
  }
}));


const SoftwareForm = () => {  
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
          <div>
            <div style={{ margin: "15px 0" }}>
              <h3 className={classes.heading}>
                Software Form
              </h3>
            </div>
            <SoftwareFormField/>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default SoftwareForm;