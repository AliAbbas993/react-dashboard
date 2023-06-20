import React from 'react';
import Logo from '../../assets/imgs/logo.png';
import Box from '@material-ui/core/Box';
import { Link } from "react-router-dom";

const Companies = ({companies}) => {
    return (
        <Box className="link-box" name="policy">
            <h6
                style={{
                    position: "relative",
                    textTransform:"uppercase",
                    fontSize: "13px",
                    color: "#4e4e4e",
                    textAlign: "left",
                    display: "flex",
                    justifyContent: "space-between",
                    padding:"10px 40px",
                    margin: "0"
                }}
            >{companies.title}
            <span
             style={{
                 color: "#dc004e",
                 border: "2px solid #dc004e",
                 borderRadius : "50%",
                 width : "20px",
                 height: "20px",
                 display: "inline-flex",
                 justifyContent: "center",
                 cursor: "pointer",
                 marginLeft: "20px", 
                 position: "absolute",
                 right: "15px"
             }}
            > + </span>
            </h6>
            <ul className="items-list"
                style={{
                    listStyle: "none",
                    padding: "0px",
                    margin: "0px"
                }}
            >
                {companies.list.map((item , index) => {
                    return(
                        <li key={index}>
                            <Link to="/"
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "flex-start",
                                    padding: "5px 40px",
                                    textDecoration: "none",
                                    lineHeight: 1
                                }}
                            >
                                <span>
                                    <img src={Logo} alt="icon"
                                        style={{
                                            width: "25px",
                                            height: "25px",
                                            marginRight: "10px",
                                            borderRadius: "5px",
                                            boxShadow: "0 0 5px #adadad"
                                        }}
                                    />
                                </span>
                                <span 
                                    style={{
                                        textTransform: "Capitalize",
                                        color: "#adadad",
                                        fontSize: "12px"
                                    }}
                                >
                                    {item.title}
                                </span>
                            </Link>
                        </li>
                    )                                
                })}
            </ul>
        </Box>
    )
}

export default Companies;