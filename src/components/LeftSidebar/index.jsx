import React from 'react';
import Logo from '../../assets/imgs/logo.png';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import LinkBlock from './linkBlock';
import CompaniesBlock from './companies';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

const useStyles = makeStyles((theme) => ({
    heading: {
      fontWeight: 500,
      fontSize: "20px",
      marginBottom: "5px"
    },
    backShadow: {
        position: "absolute",
        content: "",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        background: '#00000080',
        zIndex: "9999",
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
    },
    drawerParent: {
        background: "#150a7e",
        height: "100%",
        color: "#ffffff"
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        justifyContent: 'flex-end',
    },
}));

const LeftSidebar = (props) => {
    const classes = useStyles();

    const linkBlockArr = [
        {
            title : "Pages",
            links : [
                {
                    title : "Home",
                    url: "/"
                },
                {
                    title : "Dashboard",
                    url: "/"
                },
                {
                    title : "Admin",
                    url: "/"
                },
                {
                    title : "My Tickets",
                    url: "/"
                },
                {
                    title : "Forms",
                    url: "/forms-options"
                },
                {
                    title : "Manage",
                    url: "/"
                }
            ]
        },
    ]

    // const companies = {
    //     title : "Companies",
    //     list : [
    //         {
    //             title : "Company 1"
    //         },
    //         {
    //             title : "Company 2"
    //         },
    //         {
    //             title : "Company 3"
    //         },
    //         {
    //             title : "Company 4"
    //         }
    //     ]
    // }
    let leftBar = props.leftDrawerState ? "0" : "-220px"

    const toggleFunction = () => {
        props.setLeftDrawerState(false)
    }
    return (
        <>
        {props.leftDrawerState ? 
            <div className={classes.backShadow}></div>
        :null}
        <div style={{
            position: "absolute",
            borderRight: "1px solid #ececec",
            height: "100%",
            overflow: "auto",
            minHeight: "100vh",
            minWidth: "200px",
            background: "#ffffff",
            zIndex: "99999",
            top: 0,
            left: leftBar,
            bottom: 0,
            transition: '0.2s all ease-in-out'
        }}>
            <div className={classes.drawerHeader}>
              <IconButton onClick={toggleFunction}>
                <ChevronLeftIcon style={{ color: "#150a7e" }}/>
              </IconButton>
            </div>
            <Box className="brand-name"
                style={{
                    display: "inline-flex",
                    flexDirection: "column",
                    flexWrap: "wrap",
                    justifyContent:"center",
                    alignItems: "center",
                    width:"100%",
                    padding: "10px 0"
                }} 
            >
                <span className="brand-img" style={{width:"100%" ,display:"flex", justifyContent: "center"}}>
                    <img src={Logo} alt="brand" 
                        style={{
                            maxWidth:"100px",
                            objectFit: "contain",
                            margin: "0 auto"
                        }} 
                    />
                </span>
                <span 
                    style={{
                        display:"inline-flex",
                        justifyContent: "space-around",
                        width:"100%",
                        color:"#adadad",
                        textTranform:"Capitalize",
                    }} 
                >
                    Insurance Portal
                </span>
            </Box>
            {linkBlockArr.map((item , index) => {
                return (
                    <LinkBlock data={item} key={index}/>
                )
            })}
            {/* <CompaniesBlock companies={companies}/> */}
            
        </div>
        </>
    )
}

export default LeftSidebar;
