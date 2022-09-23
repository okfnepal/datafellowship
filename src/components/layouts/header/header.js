import React, { Component, Fragment } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import './style.css';
import { navigationMenu } from '../../data'
import { Element, scroller } from 'react-scroll'
import { Link } from 'react-router-dom'


const styles = (theme) => ({
    '@global': {
        body: {
            margin: 0,
            padding: 0,
            fontFamily: "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
        }

    },
    header: {
        background: 'none',
        boxShadow: 'none',
        height: '115px',
        WebkitTransition: 'height ease-in-out 0.4s',
        MozTransition: 'height ease-in-out 0.4s',
    },
    headerSec: {
        backgroundImage: 'linear-gradient(-45deg, #00d2ff 0%, #0bc1f6 5.91%, #29a5da 58.62%, #3a7bd5 80% )',
        boxShadow: 'none',
        opacity: '0.9',
        height: '70px',
        WebkitTransition: 'height ease-in-out 0.4s',
        MozTransition: 'height ease-in-out 0.4s',
    },
    toolbar: {
        width: '85%',
        margin: 'auto',
    },

    logo: {
        height: '75px',
        padding: '15px 0',
        WebkitTransition: 'height ease-in-out 0.4s',
        MozTransition: 'height ease-in-out 0.4s',
    },
    logoSec: {
        height: '55px',
        padding: '15px 0',
        WebkitTransition: 'height ease-in-out 0.4s',
        MozTransition: 'height ease-in-out 0.4s',
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: '16px 8px',
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
        background: '#f7f7f'
    },

    plainNavigation: {
        fontSize: '19px',
        color: "#fff",
        textTransform: 'capitalize',
    },
    navButton: {
        fontSize: '19px',
        textTransform: 'capitalize',
        color: '#fcfcfe',
        fontWeight: '500',
        paddingLeft: '10px',
        '&:hover': {
            background: 'none',
            fontWeight: '800px',
            color: '#00D2FF'
        },
    },
    menuButton: {
        marginLeft: 12,
        marginRight: -20,
        color: '#333'
    },
    [theme.breakpoints.down('sm')]: {
        plainNavigation: {
            display: "none !important",
            background: "blue"
        }
    },
    [theme.breakpoints.up('md')]: {
        navDrawer: {
            display: "none !important",
        },
        menuButton: {
            display: "none !important",
        }
    },
});

class Headers extends Component {
    state = {
        open: false,
        scroll: 0,
        navState: false
    };


    scrollTo(elements) {
        if (elements === 'Apply') {
            return window.location.href = "https://docs.google.com/forms/d/1ki7U2WRPyWtvQAdnrqYZg9iC1LZsfHaivaVZEvC1tcA";

        }
        scroller.scrollTo(elements, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
            offset: -100,
        })
    }

    handleDrawerOpen = () => {
        if (this.state.open === false) {
            this.setState({ open: true });

        } else {
            this.setState({ open: false });
        }
    };

    handleScroll = () => {
        this.setState({
            scroll: window.scrollY
        });
    };

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }


    render() {
        const { classes } = this.props;

        return (
            <Fragment>
                <Element name="Home" className="element">
                    <AppBar position="static" color='secondary' position="fixed"
                        className={this.state.scroll >= 50 ? classes.headerSec : classes.header}>
                        <Toolbar className={classes.toolbar}>
                            <Typography variant="h6" color="inherit" style={{ flexGrow: 1 }}>
                                <Link to='/'>
                                    <img className={this.state.scroll >= 50 ? classes.logoSec : classes.logo}
                                        src={process.env.PUBLIC_URL + '/oknp.svg'} alt="" />
                                </Link>
                            </Typography>
                            <Typography className={`${classes.plainNavigation}`}>
                                {navigationMenu.nav.map((navItem, index) => (
                                    <Button key={index} color="inherit" className={classes.navButton + ' ' + 'nav-button'}
                                        onClick={() => this.scrollTo(navItem)}>
                                        <Link key={index} color="inherit" className={classes.navButton + ' ' + 'nav-button'} style={{ textDecoration: 'none' }}
                                            to={navItem.path}>{navItem.title}</Link>
                                    </Button>
                                ))}
                            </Typography>
                            <IconButton onClick={this.handleDrawerOpen} className={classes.menuButton} color="inherit"
                                aria-label="Menu">
                                <MenuIcon />
                            </IconButton>
                        </Toolbar>

                    </AppBar>
                </Element>
                <Drawer
                    variant="persistent"
                    anchor="right"
                    open={this.state.open}
                    className={classes.navDrawer}
                >
                    <div className={classes.drawerHeader}>
                        <IconButton onClick={this.handleDrawerOpen}>
                            <MenuIcon />
                        </IconButton>
                    </div>
                    <Divider />
                    <List style={{ width: "180px" }}>
                        {navigationMenu.nav.map((navItem, index) => (
                            <ListItem button key={navItem.title}>
                                <ListItemText >
                                    <Link key={index} color="inherit" style={{ textDecoration: 'none', color: "#3F3D56" }}
                                        to={navItem.path}>{navItem.title}</Link>
                                </ListItemText >
                            </ListItem>
                        ))}
                    </List>
                </Drawer>

            </Fragment>
        );
    }
}

export default withStyles(styles)(Headers);

