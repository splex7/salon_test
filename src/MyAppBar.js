// in src/MyAppBar.js
import * as React from "react";
import { AppBar } from 'react-admin';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

// import Logo from './Logo';
import MyLogo from './logo.svg';

const useStyles = makeStyles({
    title: {
        flex: 1,
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
    },
    customlogo: {
        transform : 'translateX(-10px)',
        left: '10px',
        width: '25px',
        height: '25px',
        padding: '10px'
    },
    spacer: {
        transform : 'translateX(-10px)',
        flex: 1,
        color: 'inherit',
        fontWeight: '800',
        fontSize: '1.5rem'

    },
});

const MyAppBar = props => {
    const classes = useStyles();
    return (
        <AppBar {...props}>
            <Typography
                variant="h9"
                color="inherit"
                className={classes.title}
                id="react-admin-title"
            />

            <img className={classes.customlogo} src={MyLogo} alt="React Logo" />
            <span className={classes.spacer} > Salon
            </span>
        </AppBar>
    );
};

export default MyAppBar;
