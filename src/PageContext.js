import React, { useContext } from 'react'
import { makeStyles } from "@material-ui/styles";
import { ThemeContext } from './context/ThemeContext'


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100vw',
        height: '100vh',
        backgroundColor: 'black',
    },
}))

export default function PageContext(props) {
    const { isDarkMode } = useContext(ThemeContext)
    const classes = useStyles();
    return (
        <div style={{ backgroundColor: isDarkMode ? 'black' : 'white' }} className={classes.root}>
            {props.children}
        </div>
    )
}
