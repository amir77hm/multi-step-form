import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';
import Switch from '@material-ui/core/Switch';
import SearchIcon from '@material-ui/icons/Search';
import { fade } from '@material-ui/core/styles/colorManipulator'
import InputBase from '@material-ui/core/InputBase';
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { ThemeContext } from "./context/ThemeContext";
import { LanguageContext } from "./context/LanguageContext";

const content = {
    english: {
        search: 'search',
        flag: 'EN'
    },
    persian: {
        search: 'جستجو',
        flag: 'IR'
    },
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        flexGrow: 1,
        marginBottom: 0,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        marginLeft: -12,
        width: '3rem'
    },
    title: {
        // flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        }
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(9),
        height: '100%',
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        padding: theme.spacing(1),
        paddingLeft: theme.spacing(10),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 120,
            '&:focus': {
                width: 200
            }
        }
    },
    select: {
        marginLeft: theme.spacing(2),
    },
    darkSearch: {
        backgroundColor: fade(theme.palette.common.black, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.black, 0.25),
        },
    }
}));



export default function Navbar() {
    const { language, changeLanguage } = useContext(LanguageContext)
    const { isDarkMode, toggleTheme } = useContext(ThemeContext)
    const { search, flag } = content[language]
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static" color={isDarkMode ? 'default' : 'primary'}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <span>{flag}</span>
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        App title
                    </Typography>
                    <Switch onChange={toggleTheme} />
                    <Select
                        value={language}
                        onChange={changeLanguage}
                        style={{ color: isDarkMode ? 'black' : 'white', marginLeft: '1rem' }}
                    >
                        <MenuItem value='english'>english</MenuItem>
                        <MenuItem value='persian'>persian</MenuItem>
                    </Select>
                    <div className={classes.grow} />
                    <div className={clsx(classes.search, {
                        [classes.darkSearch]: isDarkMode
                    })} >
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder={`${search}...`}
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput
                            }}
                        />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}
