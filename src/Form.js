import React from 'react';
import Paper from "@material-ui/core/Paper";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
    main: {
        width: 'auto',
        display: 'block',
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        }
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing(2)}px
        ${theme.spacing(3)}px
        ${theme.spacing(3)}px
        `
    }
})

function Form(props) {
    const { classes, children } = props
    return (
        <main className={classes.main}>
            <Paper className={classes.paper}>
                {children}
            </Paper>
        </main>
    )
}
export default withStyles(styles)(Form)