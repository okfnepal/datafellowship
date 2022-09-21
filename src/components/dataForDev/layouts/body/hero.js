import React, { Component, Fragment } from 'react'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { heroContent } from '../../data';

const styles = (theme) => ({
    hero: {
        background: `url(${process.env.PUBLIC_URL}/meeting1.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        textAlign: 'left',
        color: theme.palette.text.secondary,
        minHeight: '650px',
        border: '0px',
        position: 'relative',
        margin: 'auto 0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'

    },
    overlay: {
        backgroundImage: 'linear-gradient(to right,#1b3e77, #1EA2CC)',
        opacity: '0.8',
        position: 'absolute',
        top: '0px',
        width: '100%',
        height: '100%',
    },
    contentWapper: {
        color: '#fff',
        position: 'relative',
        margin: 'auto',
        height: '100%',
        width: '85%',
        // border: '2px solid'

    },
    content: {
        width: '100%',
        // border: '2px solid green',
        // margin: 'auto',
        marginTop: '10%'
    },
    h1: {
        fontSize: '42px',
        color: '#fff',
        fontWeight: '900',
        lineHeight: '70px',
        wordSpacing: '4px',
        margin: '0',
        marginBottom: '10px',


    },
    h2: {
        fontSize: '40px',
        fontWeight: '200',
        margin: '20px 0'
    },
    paragraph: {
        fontSize: '1.4rem',
        fontWeight: '400',
        wordSpacing: '4px',
        margin: '0',
        marginBottom: '10px',

    },
    span: {
        color: "#00D2FF",
        fontWeight: '900',
    },
    button: {
        marginTop: '30px',
        fontSize: '18px',
        fontWeight: '700',
        height: '45px',
        width: '135px',
        backgroundColor: '#00D2FF',
        // borderRadius: '23px',
        color: '#fff',
        border: 'none',
        textTransform: 'capitalize',
        boxShadow: ' 0px 3px 6px rgba(0, 0, 0, 0.16)',
        '&:hover': {
            backgroundColor: '#0da4ff',
            border: 'none',
        }
    },
    learnmore_button: {
        marginLeft: "30px",
        marginTop: '30px',
        fontSize: '18px',
        fontWeight: '700',
        height: '45px',
        width: '135px',
        // backgroundColor: '#00D2FF',
        // borderRadius: '23px',
        color: '#fff',
        border: '2px solid',
        textTransform: 'capitalize',
        boxShadow: ' 0px 3px 6px rgba(0, 0, 0, 0.16)',
        '&:hover': {
            backgroundColor: '#0da4ff',
            border: 'none',
        }
    },
    logo: {
        padding: '0 2%',

    },
    heroimg: {
        height: '200px',

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


class Hero extends Component {
    apply() {
        return window.location.href = "https://docs.google.com/forms/d/1ki7U2WRPyWtvQAdnrqYZg9iC1LZsfHaivaVZEvC1tcA";
    }


    render() {
        const { classes } = this.props;
        return (
            <Fragment>
                <div className={classes.hero}>
                    <div className={classes.overlay}></div>
                    <Grid className={classes.contentWapper} container direction="row" justify="left"
                        alignItems="center">
                        <Grid className={classes.content} container direction='row' spacing={4}>
                            <Grid item xs={8}>
                                <h1 className={classes.h1}>
                                    <span className={classes.span}>DATA FOR DEVELOPMENT </span> FELLOWSHIP</h1>
                                {/* <h2 className={classes.h2}> WOMEN EDITON</h2> */}
                                <p className={classes.paragraph} style={{ marginRight: '3%' }}>{heroContent.description}</p>
                                {/* <p className={classes.paragraph} style={{ marginRight: '5%', marginTop: '20px', fontSize: '18px' }}> <span style={{ textDecoration: 'underline', marginRight: '2px', color: '#00D2FF' }}>Learn More,</span> about application, eligibility and benifits.</p> */}
                                <Button variant="outlined" className={classes.button} onClick={this.apply}>
                                    Apply
                                </Button>
                                <Link to='/about' style={{ color: '#fff', textDecoration: 'none' }}>
                                    <Button variant="outlined" className={classes.learnmore_button}>
                                        Learn More
                                    </Button>
                                </Link>
                            </Grid>
                        </Grid>
                        <Grid container direction="row" style={{ marginTop: '1%', marginLeft: '1%', width: '80%' }}>
                            <Grid item xs={6}>
                                <h3>Initiative of:</h3>
                            </Grid>

                            <Grid item xs={6} style={{}}>
                                <h3>Supported By:</h3>
                            </Grid>
                            <Grid item xs={6}>
                                <img className={classes.logo} src={process.env.PUBLIC_URL + '/supporter/oknWhite.png'} style={{ width: '136px' }} alt="" />

                            </Grid>

                            <Grid item xs={6}>
                                <img className={classes.logo} src={process.env.PUBLIC_URL + '/supporter/tsa.png'} alt="" />
                                <img className={classes.logo} src={process.env.PUBLIC_URL + '/supporter/d4d.png'} alt="" />
                                <img className={classes.logo} src={process.env.PUBLIC_URL + '/supporter/UKAID.png'} alt="" />
                            </Grid>
                        </Grid>

                    </Grid>
                </div>
            </Fragment>
        )
    }
}

export default withStyles(styles)(Hero)

