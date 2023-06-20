import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { DataGrid , GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

const columns = [
  { 
    field: 'id', 
    headerName: 'ID', 
    width: 90 
  },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
  },
  {
    field: 'age',
    headerName: 'Age',
    width: 110,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    width: 160,
  },
  {
      field: 'city',
      headerName: "City",
      width: 150
  }
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', fullName:'Jon Snow' , age: 35 ,city: 'Wales',},
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', fullName:'Cersei Lannister' , age: 42 ,city: 'Wales', },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', fullName:'Jamie Lannister' , age: 45 , city: 'Wales',},
  { id: 4, lastName: 'Stark', firstName: 'Arya', fullName:'Arya Stark' , age: 16 , city: 'Wales',},
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', fullName:'Daenerys Targaryen' , age: null , city: 'Wales',},
];

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
        fontSize: "16px",
        display: "inline-flex",
        alignItems: "center"
    },
    viewAllIcon: {
      width: "15px",
      height: "15px"
    }
}));

const PendingClaims = () => {
    const classes = useStyles();
    const [pageSize, setPageSize] = React.useState(5);
    return (
        <div>
            <h4 className={classes.heading}>Company Wise Incidents <span className={classes.viewAllBtn}>View all <ChevronRightIcon style={{ color: "#ffffff" }} className={classes.viewAllIcon}/></span></h4>
            <div style={{background:"#ffffff", height: 300, width: '100%' }}>
                <DataGrid 
                    rows={rows} 
                    columns={columns}
                    components={{
                      Toolbar: CustomToolbar,
                    }}
                />
            </div>
        </div>
    )
}

export default PendingClaims;
