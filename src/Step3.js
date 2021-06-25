import React, { useContext } from 'react'
import { FormContext } from "./context/FormContext";
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import { LanguageContext } from "./context/LanguageContext";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';


const content = {
    english: {
        header: 'You have successfully registered',
        name: 'your name',
        email: 'your email',
        age: 'your age'
    },
    persian: {
        header: 'شما با موفقیت ثبت نام کردید',
        name: 'نام شما',
        email: 'ایمیل شما',
        age: 'سن شما'
    }
}

const styles = theme => ({
    root: {
        width: '100%',
        textAlign: 'center'
    },
    avatar: {
        backgroundColor: theme.palette.secondary.main,
        margin: '1rem auto',
    },
    list: {
        marginTop: theme.spacing(2)
    }
})

function Step3(props) {
    const { language } = useContext(LanguageContext)
    const { header, name, email, age } = content[language]
    const { classes } = props
    const { step, nameInput, ageInput, emailInput } = useContext(FormContext)

    if (step === 3) {
        return (
            <div className={classes.root}>
                <Avatar className={classes.avatar}>
                    <VerifiedUserIcon />
                </Avatar>
                <Typography variant='h5'>{header}</Typography>
                <List component="nav" className={classes.list} aria-label="mailbox folders" >
                    <ListItem button fullWidth>
                        <ListItemText primary={nameInput} secondary={name} />
                    </ListItem>
                    <Divider />
                    <ListItem button divider>
                        <ListItemText primary={emailInput} secondary={email} />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary={ageInput} secondary={age} />
                    </ListItem>

                </List>
            </div>
        )
    }
    return null
}

export default withStyles(styles)(Step3)