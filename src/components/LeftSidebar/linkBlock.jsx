import React from 'react';
import Box from '@material-ui/core/Box';
import icon from '../../assets/imgs/icon.svg';
import { Link } from "react-router-dom";

export const LinkBlock = ({data}) => {
    return (
        <Box className="link-box" name="policy">
            <h6
                style={{
                    textTransform:"uppercase",
                    fontSize: "13px",
                    color: "#4e4e4e",
                    textAlign: "left",
                    padding:"10px 40px",
                    margin: "0"
                }}
            >{data.title}</h6>
            <ul className="items-list"
                style={{
                    listStyle: "none",
                    padding: "0px",
                    margin: "0px"
                }}
            >
                {data.links.map((item , index) => {
                    return(
                        <li key={index}>
                            <Link to={item.url}
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
                                    <img src={icon} alt="icon"
                                        style={{
                                            width: "15px",
                                            height: "15px",
                                            marginRight: "10px"
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

export default LinkBlock;
