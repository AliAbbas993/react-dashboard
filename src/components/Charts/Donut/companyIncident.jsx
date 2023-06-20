import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Chart } from "react-google-charts";

export const data = [
    ["Task", "Hours per Day"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7], // CSS-style declaration
];

export const options = {
    // title: "My Daily Activities",
    pieHole: 0.4,
    is3D: false,
    backgroundColor:"#ffffff"
};

const useStyles = makeStyles(() => ({
    chartMainBlock: {
        padding: "0 5px"
    },
    heading: {
      fontWeight: 500,
      fontSize: "20px",
      margin: "10px 0 5px"
    },
    chartBlock: {
        width:"100%",
        background: "#ffffff",
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: "0 0 10px #adadad",        
    }
}));

const CompanyIncident = () => {
    const classes = useStyles();
    return (
        <div className={classes.chartMainBlock}>
            <h4 className={classes.heading}>Company Wise Incidents</h4>
            <div className={classes.chartBlock}>
                <Chart
                    background="#ffffff"
                    chartType="PieChart"
                    width="100%"
                    height="250px"
                    data={data}
                    options={options}
                />
            </div>
        </div>
    )
}

export default CompanyIncident;
