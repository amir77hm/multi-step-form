import React, { useContext } from 'react';
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockOutlined from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import { Checkbox } from '@material-ui/core';
import { LanguageContext } from "./context/LanguageContext";
import { FormContext } from "./context/FormContext";

const words = {
    english: {
        signUp: 'Sign Up',
        email: 'Email Address',
        password: "Password",
        remember: 'Remember Me',
        next: 'Next',
        back: 'Back',
    },
    persian: {
        signUp: 'ورود',
        email: 'ایمیل',
        password: "پسورد",
        remember: 'مرا به یاد آور',
        next: 'بعدی',
        back: 'قبلی',
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
        marginTop: theme.spacing(3)
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
    const { signUp, email, password, remember, next, back } = words[language]
    const { classes } = props
    const { step, changeStep, emailInput, passwordInput, changeInput } = useContext(FormContext)

    if (step === 2) {
        return (
            <>
                <Avatar className={classes.avatar}>
                    <LockOutlined />
                </Avatar>
                <Typography variant='h5'>{signUp}</Typography>
                <form className={classes.form} onSubmit={() => changeStep('up')}>
                    <FormControl margin='normal' required fullWidth>
                        <InputLabel htmlFor='email'>{email}</InputLabel>
                        <Input
                            type='email'
                            id='email'
                            name='email'
                            autoFocus
                            value={emailInput}
                            onChange={(e) => changeInput(e.target.value, 'email')}
                        />
                    </FormControl>
                    <FormControl margin='normal' required fullWidth>
                        <InputLabel htmlFor='password'>{password}</InputLabel>
                        <Input
                            type='password'
                            id='password'
                            name='password'
                            value={passwordInput}
                            onChange={(e) => changeInput(e.target.value, 'password')}
                        />
                    </FormControl>
                    <FormControlLabel
                        control={<Checkbox color='primary' checked={true} />}
                        label={remember}
                        value={true}
                    />
                    <div className={classes.btns}>
                        <Button variant='contained'
                            onClick={() => changeStep('down')}
                            className={classes.submit}
                        > {back}
                        </Button>
                        <Button variant='contained'
                            className={classes.submit}
                            type='submit'
                        >{next}
                        </Button>
                    </div>
                </form>
            </>
        )
    }
    return null
}
export default withStyles(styles)(Form)