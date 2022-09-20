import React, { Component, Fragment } from 'react'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const styles = (theme) => ({
    hero: {
        background: `url(${process.env.PUBLIC_URL}/hero.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        textAlign: 'center',
        color: theme.palette.text.secondary,
        minHeight: '650px',
        border: '0px',
        position: 'relative',
        margin: 'auto 0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    },
    overlay: {
        backgroundImage: 'linear-gradient(-45deg,  #00d2ff 0%, #0bc1f6 5.91%, #29a5da 58.62%, #3a7bd5 80% )',
        opacity: '0.9',
        position: 'absolute',
        top: '0px',
        width: '100%',
        height: '100%'
    },
    contentWapper: {
        color: '#fff',
        position: 'relative',
        margin: 'auto',
        height: '100%',
        width: '100%',
    },
    content: {
        width: '50%',
        border: '2px solid red'
    },
    h1: {
        fontSize: '50px',
        color: '#fff',
        fontWeight: '400',
        lineHeight: '70px',
        margin: 0,


    },
    h2: {
        fontSize: '40px',
        fontWeight: '200',
        margin: '20px 0'
    },
    paragraph: {
        fontSize: '1.5625rem',

    },
    span: {
        color: "#00D2FF",
        fontWeight: '700'
    },
    button: {
        MarginTop: '30px',
        fontSize: '18px',
        height: '45px',
        width: '135px',
        backgroundColor: '#00D2FF',
        borderRadius: '23px',
        color: '#fff',
        border: 'none',
        textTransform: 'capitalize',
        boxShadow: ' 0px 3px 6px rgba(0, 0, 0, 0.16)',
        '&:hover': {
            backgroundColor: '#0da4ff',
            border: 'none',
        }
    },
    logo: {
        padding: '2%',

    },

    [theme.breakpoints.down('sm')]: {
        content: {
            width: '90%'
        },
        h1: {
            fontSize: '35px',
            color: '#fff',
            fontWeight: '400',
            lineHeight: '70px',
            margin: 0,


        },
        h2: {
            fontSize: '30px',
            fontWeight: '200',
            margin: '20px 0'
        },
        paragraph: {
            fontSize: '1.1625rem',

        },

    },


});


class NewHero extends Component {
    apply() {
        return window.location.href = "https://docs.google.com/forms/d/1ki7U2WRPyWtvQAdnrqYZg9iC1LZsfHaivaVZEvC1tcA";
    }


    render() {
        const { classes } = this.props;
        return (
            <Fragment>
                <div className={classes.hero}>
                    <div className={classes.overlay}></div>
                    <Grid className={classes.contentWapper} container direction="row" justify="center"
                        alignItems="center">
                        <Grid className={classes.content} container>
                            <Grid item xs={12}>
                                <h1 className={classes.h1}>
                                    <span className={classes.span}>OPEN DATA</span> FELLOWSHIP</h1>
                                <h2 className={classes.h2}> WOMEN EDITON</h2>
                                <p className={classes.paragraph}>STRENGTHENING AND EMPOWERING THE WOMEN
                                    TOWARDS OPEN DATA MOVEMENT.</p>
                                <Button variant="outlined" className={classes.button} onClick={this.apply}>
                                    Apply
                                </Button>
                            </Grid>
                        </Grid>
                        <Grid container direction="row">
                            <Grid item xs={6}>
                                <img className={classes.logo} src={process.env.PUBLIC_URL + '/supporter/okn.png'} alt="" />
                                <img className={classes.logo} src={process.env.PUBLIC_URL + '/supporter/d4d.png'} alt="" />

                            </Grid>

                            <Grid item xs={6}>
                                <img className={classes.logo} src={process.env.PUBLIC_URL + '/supporter/tsa.png'} alt="" />
                                <img className={classes.logo} src={process.env.PUBLIC_URL + '/supporter/UKAID.png'} alt="" />
                                <img className={classes.logo} src={process.env.PUBLIC_URL + '/supporter/di.png'} alt="" />
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </Fragment>
        )
    }
}

export default withStyles(styles)(NewHero)

