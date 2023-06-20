import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Chart } from "react-google-charts";

export const data = [
    ["City", "Policy", "Claim"],
    ["AIG", 8175000, 8008000],
    ["BAJAJ", 3792000, 3694000],
    ["MAHINDRA", 2695000, 2896000],
    ["ALLIANCE", 2099000, 1953000],
    ["TATA", 1526000, 1517000],
];

export const options = {
    'legend':'top',
    chartArea: { width: "70%" },
    colors: ["#00bffc" , "#9b3efa"]
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

const Vendor = () => {
    const classes = useStyles();
    return (
        <div className={classes.chartMainBlock}>
            <h4 className={classes.heading}>Vendor Policy Vs Claim</h4>
            <div className={classes.chartBlock}>
                <Chart
                    chartType="BarChart"
                    width="100%"
                    height="250px"
                    data={data}
                    options={options}
                />
            </div>
        </div>
    )
}

export default Vendor;
