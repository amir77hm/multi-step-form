import React, { useContext } from 'react';
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockOutlined from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import { LanguageContext } from "./context/LanguageContext";
import { FormContext } from "./context/FormContext";

const words = {
    english: {
        signUp: 'Sign Up',
        name: 'Name',
        age: 'Age',
        next: 'Next',
    },
    persian: {
        signUp: 'ورود',
        name: 'نام',
        age: 'سن',
        next: 'بعدی',
    },
}

const styles = theme => ({
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(2)
    },
    submit: {
        marginTop: theme.spacing(3),
        marginLeft: 'auto'
    },
    btns: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        '& button': {
            width: '40%',
        }
    }
})

function Form(props) {
    const { language } = useContext(LanguageContext)
    const { signUp, name, age, next } = words[language]
    const { classes } = props
    const { step, changeStep, nameInput, ageInput, changeInput } = useContext(FormContext)


    if (step === 1) {
        return (
            <>
                <Avatar className={classes.avatar}>
                    <LockOutlined />
                </Avatar>
                <Typography variant='h5'>{signUp}</Typography>
                <form className={classes.form} onSubmit={() => changeStep('up')}>
                    <FormControl margin='normal' required fullWidth>
                        <InputLabel htmlFor='name'>{name}</InputLabel>
                        <Input
                            type='text'
                            id='name'
                            name='name'
                            autoFocus
                            value={nameInput}
                            onChange={(e) => changeInput(e.target.value, 'name')}
                        />
                    </FormControl>
                    <FormControl margin='normal' required fullWidth>
                        <InputLabel htmlFor='age'>{age}</InputLabel>
                        <Input
                            type='number'
                            id='age'
                            name='age'
                            value={ageInput}
                            onChange={(e) => changeInput(e.target.value, 'age')}
                        />
                    </FormControl>
                    <div className={classes.btns}>
                        <Button variant='contained'
                            type='submit'
                            className={classes.submit}
                        >
                            {next}
                        </Button>
                    </div>
                </form>
            </>
        )
    }
    return null
}
export default withStyles(styles)(Form)