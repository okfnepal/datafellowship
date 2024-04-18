import React, { Component, Fragment } from 'react'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { heroContent } from '../../data';
import color from '@material-ui/core/colors/amber';

const styles = (theme) => ({
    hero: {
        background: `url(${process.env.PUBLIC_URL}/fellowsbg.jpg)`,
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
        backgroundImage: 'linear-gradient(to right,#00d1ff, #fcfcfc)',
        opacity: '0.86',
        position: 'absolute',
        top: '0px',
        width: '100%',
        height: '100%',
    },
    contentWapper: {
        color: '#fff',
        position: 'relative',
        margin: 'auto',
        // height: '100%',
        width: '85%',
        // border: '2px solid'

    },
    content: {
        width: '100%',
        // border: '2px solid green',
        // margin: 'auto',
        marginTop: '8%',
        // textAlign: 'center'
    },
    heroText: {
        // margin: 'auto'
    },
    h1: {
        fontSize: '3.052rem',
        color: '#fff',
        fontWeight: '900',
        lineHeight: '70px',
        wordSpacing: '4px',
        marginBottom: '12px',


    },
    h2: {
        fontSize: '1rem',
        fontWeight: '200',
        margin: '20px 0'
    },
    paragraph: {
        fontSize: '1.29rem',
        fontWeight: '400',
        wordSpacing: '4px',
        margin: '0',
        marginBottom: '14px',
        color:"#304e68"

    },
    span: {
        color: "#112A46",
        fontWeight: '900',
    },
    button: {
        marginTop: '20px',
        fontSize: '18px',
        fontWeight: '700',
        height: '45px',
        width: '180px',
        backgroundColor: '#0da4ff',
        color: '#fff',
        border: 'none',
        textTransform: 'capitalize',
        boxShadow: ' 0px 3px 6px rgba(0, 0, 0, 0.16)',
        '&:hover': {
            backgroundColor: '#00D2FF',
            border: 'none',
        }
    },
    learnmore_button: {
        marginLeft: "20px",
        marginTop: '20px',
        fontSize: '18px',
        fontWeight: '700',
        height: '45px',
        width: '180px',
        // backgroundColor: '#00D2FF',
        // borderRadius: '23px',
        color: '#fff',
        border: '2px solid',
        textTransform: 'capitalize',
        boxShadow: ' 0px 3px 6px rgba(0, 0, 0, 0.16)',
        '&:hover': {
            backgroundColor:'#00D2FF',
            border: 'none',
        }
    },
    logo: {
        padding: '0 4%',

    },
    heroimg: {
        height: '200px',

    },
    supportedBy: {
        display: 'flex',
        alignItems: 'baseline',
        width: '80%',
        justifyContent: 'space-between'
    },

    [theme.breakpoints.down('sm')]: {
        content: {
            width: '100%',
            marginTop: '20%'
        },
        h1: {
            fontSize: '30px',
            color: '#fff',
            fontWeight: '900',
            lineHeight: '50px',
            marginTop: '20%',


        },
        h2: {
            fontSize: '30px',
            fontWeight: '200',
            margin: '20px 0'
        },
        paragraph: {
            fontSize: '1.1625rem',

        },
        hero: {
            height: '100%'
        },
        heroText: {
            margin: 'auto'
        },
        logo: {
            padding: '0 4%',
            width: '80%'

        },
        supportedBy: {
            // display: 'flex',
            marginBottom: '4%',
            width:'100%'
        },

    },


    //responsiveness
    [theme.breakpoints.down('xs')]: {
        button: {
            width: '220px',
            // marginLeft: '20%'
        },
        learnmore_button: {
            width: '220px',
            marginLeft: '0'
        },
        logo: {
            padding: '5%',
        },
        supportedBy: {
            // display: 'flex',
            width: '100%',
            marginBottom: '4%',
        },
    }

});


class Hero extends Component {
    apply() {
        // return window.location.href = "https://forms.gle/4iKvbyntL5bURo468";
        window.open('https://forms.gle/4iKvbyntL5bURo468', '_blank')
    }


    render() {
        const { classes } = this.props;
        return (
            <Fragment>
                <div className={classes.hero}>
                    <div className={classes.overlay}></div>
                    <Grid className={classes.contentWapper} container direction="row" justify="left"
                        alignItems="center">
                        <Grid className={classes.content} container direction='row' spacing={4} justifyContent='center'>
                            <Grid item xs={12} lg={10} className={classes.heroText}>
                                <h1 className={classes.h1}>
                                    <span className={classes.span}>LOCAL GOVERNMENT (LG) DATA </span> FELLOWSHIP</h1>
                                <p className={classes.paragraph}>{heroContent.description}</p>
                                <Button variant="outlined" className={classes.button} onClick={this.apply}>
                                    Apply
                                </Button>
                                <Button variant="outlined" className={classes.learnmore_button}>
                                <Link to='/lgdatafellowship' style={{ color: '#fff', textDecoration: 'none', }}>
                                        Learn More
                                    </Link>
                                </Button>
                            </Grid>
                        </Grid>
                        <div style={{ marginTop:'10px'}}>
                                <h4 style={{marginRight:"16px", color:'#453A46'}}>Supported By:</h4>
                            <Grid container direction="row" justifyContent="flex-start" alignItems='baseline' >
                                <div className={classes.supportedBy}>
                                    <div style={{marginRight:'8px'}}>
                                        <img className={classes.logo} src={process.env.PUBLIC_URL + '/supporter/main/taf.png'} alt=""  height="60px" />
                                    </div>
                                    <div style={{marginRight:'16px'}}>
                                        <img className={classes.logo} src={process.env.PUBLIC_URL + '/supporter/main/d4d.png'} alt="" height="60px" />
                                    </div>
                                    <div>
                                        <img className={classes.logo} src={process.env.PUBLIC_URL + '/supporter/main/UKAID.png'} alt="" height="60px" />
                                    </div>

                                </div>
                            </Grid>
                        </div>

                    </Grid>
                </div>
            </Fragment>
        )
    }
}

export default withStyles(styles)(Hero)

