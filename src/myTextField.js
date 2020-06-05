import * as React from "react";
import { makeStyles } from '@material-ui/core/styles';
import LaunchIcon from '@material-ui/icons/Launch';


const useStyles = makeStyles({
    link: {
        textDecoration: 'none',
    },
    span: {
        color: 'red',
    },
    icon: {
        width: '0.5em',
        paddingLeft: 2,
    },
});

const MyTextField = ({ record = {}, source }) => {
    const classes = useStyles();
    return(
        <span className={classes.span}>
            {record[source]}
            <LaunchIcon className={classes.icon} />
        </span>
    )
}


export default MyTextField;
