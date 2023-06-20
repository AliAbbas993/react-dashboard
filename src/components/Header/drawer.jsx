import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Avatar from '../../assets/imgs/avatar.jpg';
import Bell from '../../assets/imgs/bell.png';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'space-between',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  drawerParent: {
    background: "#150a7e",
    height: "100%",
    color: "#ffffff"
  },
  metaBlock: {
    padding: '5px 10px'
  },
  avatar: {
    borderRadius: "50%",
    width: "30px"
  },
  notifyIconBlock: {
    display: "inline-block",
    position: "relative",
    marginRight: "15px",
    cursor: "pointer"
  },
  notifyCount: {
    background: "#ff0000",
    padding: "2px",
    display: "inline-flex",
    position: "absolute",
    top: "-7px",
    minWidth: "10px",
    minHeight: "10px",
    borderRadius: "10px",
    fontSize: "10px",
    alignItems: "center",
    color: "#ffffff",
    justifyContent: "center",
    right: 0,
  },
  heading: {
    fontSize: "16px",
    fontWeight: 500,
    padding: "0 15px",
    margin: "15px 0"
  },
  item: {
    padding: "3px 20px",
    flexWrap: "wrap",
    fontWeight: 300,
  },
  itemCounter: {
    display: "inline-block",
    width: "calc(100% - 110px)",
    marginLeft: "20px",
    textAlign: "center",
    fontWeight: 300,
    fontSize: "30px",
    lineHeight: 1,
    marginBottom: "5px"
  },
  viewAllBtn: {
    color: "#ffffff",
    marginLeft: "15px",
    fontWeight: "400",
    fontSize: "14px",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center"
  },
  approvalItem: {
    fontSize: "12px !important",
    fontWeight: 400,
    width: "100%",
    margin: "5px 0"
  },
  viewAllIcon: {
    width: "15px",
    height: "15px"
  }
}));

export default function PersistentDrawerLeft(props) {
    const classes = useStyles();
    const theme = useTheme();
    const approvalArr = ['Lorem Ipsum dolor sit amet', 'Lorem Ipsum dolor sit amet', 'Lorem Ipsum dolor sit amet', 'Lorem Ipsum dolor sit amet', 'Lorem Ipsum dolor sit amet']
    return (
        <Drawer
          className={classes.drawer}
          variant="temporary"
          anchor="right"
          open={props.drawerState}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerParent}>
            <div className={classes.drawerHeader}>
              <IconButton onClick={() => props.setDrawerState(false)}>
                <ChevronRightIcon style={{ color: "#ffffff" }}/>
              </IconButton>
              <div className={classes.metaBlock}>
                <span className={classes.notifyIconBlock}>
                  <img src={Bell} alt="notifyIcon" className={classes.avatar}/>
                  <small className={classes.notifyCount}>5</small>
                </span>
                <img src={Avatar} alt="brand" className={classes.avatar}/>
              </div>
            </div>
            <h6 className={classes.heading}>Overview</h6>
            <List>
              {['Pending Expiring', 'Pending Remittances', 'New Loss Incidents', 'New Risk Inpections'].map((text, index) => (
                <>
                  <ListItem button key={text} className={classes.item}>
                    <ListItemIcon style={{minWidth:"40px"}}><InboxIcon style={{ color: "#ffffff" }}/></ListItemIcon>
                    <span style={{width:"calc(100% - 40px)"}} className={classes.approvalItem}>{text}</span>
                    <span className={classes.itemCounter}>24</span>
                  </ListItem>
                  <Divider />
                </>
              ))}
            </List>
            <h6 className={classes.heading}>My Approvals <span className={classes.viewAllBtn}>View all <ChevronRightIcon className={classes.viewAllIcon} style={{ color: "#ffffff" }}/></span></h6>
            <List>
              {approvalArr.map((text, index) => (
                <>
                <ListItem button key={text}>
                  <p className={classes.approvalItem}>{text}</p>
                </ListItem>
                <Divider />
                </>
              ))}
            </List>
          </div>
        </Drawer>
    );
}