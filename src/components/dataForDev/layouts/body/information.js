import React, { Fragment, Component } from 'react'
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { aboutFellowship, applicationSummary, benifits, keyResponsibilities, projectMunicipality, selectionCriteria } from '../../data'
import { Element } from "react-scroll/modules";


const Styles = (theme) => ({
    container: {
        width: '85%',
        margin: '5% auto 0 auto',
        backgroundImage: 'url(/information/filler.png)',
        backgroundSize: '34%',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'47% 20%',
    },
    containerSec: {
        width: '85%',
        margin: 'auto',
        margin: '0 auto 5% auto',
    },
    image: {
        width: '60px',
        // maxWidth: ' calc(100% - 100px)',
        height: 'auto',
    },
    municipalityCard: {
        margin: 'auto',
        width: '100%',
    },
    sectionTitle: {
        fontSize: '26px',
        fontWeight: '800',
        // blue one below
        color: '#3399CC',
        // color: '#453A46',
        textAlign: 'center',
        margin: '0',
    },
    sectionTitleLeft: {
        fontSize: '30px',
        fontWeight: '800',
        color: '#2963B4',
        textAlign: 'left',
        margin: '0',
    },
    body: {
        fontSize: '15px',
        fontWeight: '300'
    },
    gridItem: {
        marginBottom: '5%',
        // border: '2px solid',
        alignItems: 'center'
    },
    flexContainer: {
        display: 'flex',
        // alignItems: 'center',
        // border: '2px solid red',
        margin: '8% auto',
        alignItems: 'center',
        textAlign: 'left',

    },
    flexContainerMunicipality: {
        display: 'flex',
        alignItems: 'center',
        paddingBottom: '10px',
        textAlign: 'left',
        
    },
    flextext: {
        marginLeft: '10px',
        fontWeight: '800',
        color: '#2F2E41',
        fontSize: '16px',
        marginRight: '4px',
        marginTop: '0',
        marginBottom: '0',

    },
    flextextbody: {
        fontWeight: '400',
        // color: 'gray',
        fontSize: '14px',
        marginTop: '4px',
        // lineHeight: '24px',

    },
    benifitText: {
        textAlign: 'center',
        marginBottom: '30px',
        marginRight: "20px",

    },
    benifitSection: {
        margin: 'auto',
        width: '100%'
    },

    flex: {
        display: 'flex',
        marginLeft: '10px'
    },
    boyImg: {
        width: '90%',
        margin: '0 auto',
        marginTop: '20%'
    },
    checkImg: {
        width: '25%', marginLeft: '25%'
    },
    summaryContainer: {
        width: '95%',
        margin: 'auto'
    },
    [theme.breakpoints.down('md')]: {
        container:{
            backgroundSize: '30%',
        }
    },

    [theme.breakpoints.down('sm')]: {
        container: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignContent: 'center',
            textAlign: 'center',
            backgroundImage:'none'

        },
        containerSec:{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignContent: 'center',
            textAlign: 'center'
        },
        municipalityCard: {
            margin: 'auto',
            border: '0',
            boxShadow: "none",
        },
        sectionTitle: {
            fontSize: '22px',
        },
        checkImg: {
            width: '25%', marginLeft: '30%'
        },
        benifitSection: {
            width: '100%'
        },
        boyImg: {
            display: 'none'
        },
        summaryContainer: {
            width: '80%',
            margin: 'auto'
        },


    },
    [theme.breakpoints.down('xs')]: {
        boyImg: {
            display: 'none'
        },
    }


});

class About extends Component {
    render() {
        const { classes } = this.props
        return (
            <Fragment>
                <Element name="About" className="element">
                    <Grid className={classes.container} spacing={10} container
                        direction="row"
                        justify="space-between"
                        alignItems="start" >
                        <Grid item xs={12} md={4} sm={6} style={{textAlign:'left'}}>
                            <h2 className={classes.sectionTitle} variant="h4" gutterBottom style={{ marginBottom: '5%', marginRight:'80px' }}> Application Summary</h2>
                            <div style={{ margin: 'auto' }}>
                                <div style={{ margin: 'auto', marginTop: '32px', textAlign:'left' }}>
                                    <img className={classes.checkImg} src={process.env.PUBLIC_URL + '/information/checks.png'} alt="" />
                                </div>
                                <div className={classes.summaryContainer} style={{ marginTop: '28px' }}>
                                    {applicationSummary.items.map((item, data) => {
                                        return (
                                            <div className={classes.flexContainer} style={{ marginTop: '0px', marginBottom: '16px',  }}>
                                                <img style={{ width: '80px' }} src={process.env.PUBLIC_URL + `${item.imageUrl}`} alt="" />
                                                <div style={{marginLeft:'12px'}}>
                                                    <h2 className={classes.flextext} style={{ marginTop: '16px' }}>{item.title}</h2>
                                                    <p className={classes.flextextbody} style={{ marginLeft: '10px' }}>{item.summary}</p>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </Grid>
                        <Grid item md={4} sm={0}  style={{ height: '100%' }}>
                            <div className={classes.boyImg}>
                                {/* <img style={{ width: '110%', margin: '0 ', }} src={process.env.PUBLIC_URL + '/information/filler.png'} alt="" /> */}
                            </div>
                        </Grid>
                        <Grid item xs={12} md={4} sm={6} className={classes.gridItem} style={{ width: '100%' }}>
                            <h2 className={classes.sectionTitle} variant="h4" gutterBottom style={{ marginBottom: '5%',marginRight:'5%'  }}> Project Municipalities</h2>
                            <div className={classes.municipalityCard}>
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <div style={{ marginTop: '16px' }}>
                                        {projectMunicipality.map((item, key) => {
                                            return (
                                                <div className={classes.flexContainerMunicipality} style={{ marginBottom: '4px', marginLeft:'24px' }}>
                                                    <img style={{ width: '60px' }} src={process.env.PUBLIC_URL + '/information/gov.png'} alt="" />
                                                    <div>
                                                        <h2 className={classes.flextext} style={{ fontSize: '14px' }}>{item.LocalGovernment}</h2>
                                                        <div className={classes.flex}>
                                                            <p className={classes.flextextbody} style={{ marginBottom: '0px' }}>{item.Location}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>

                                </div>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid className={classes.containerSec} spacing={10} container
                        direction="row"
                        justify="space-between"
                        alignItems="start"
                        >
                        <Grid item xs={12} className={classes.gridItem}>
                            <img style={{ width: '100%', height: '3px' }} src={process.env.PUBLIC_URL + '/information/rect.png'} alt="" />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <h2 className={classes.sectionTitle} variant="h4" gutterBottom >Benefits</h2>
                            <div className={classes.benifitSection}>
                                <Grid container direction='row' style={{ justifyContent: 'center', marginTop: '16px', }}>
                                    {benifits.items.map((data, key) => {
                                        return (
                                            <Grid item xs={6} md={4} style={{ marginBottom: "28px", }}>
                                                <div className={classes.benifitText}>
                                                    <div style={{ display: 'flex', alignItems: 'end', justifyContent: 'center' }}>
                                                        <div>
                                                            <img style={{ height: '160px' }} src={process.env.PUBLIC_URL + `${data.imageUrl}`} alt="" />
                                                        </div>
                                                    </div>
                                                    <div style={{ marginTop: '8px' }}>
                                                        <h2 className={classes.flextext} style={{ marginBottom: '4px' }}>{data.title}</h2>
                                                        <p className={classes.flextextbody} style={{ margin: 'auto' }}>{data.summary}</p>
                                                    </div>
                                                </div>
                                            </Grid>
                                        )
                                    })}
                                </Grid>
                            </div>

                        </Grid>
                    </Grid>
                </Element>
            </Fragment >
        );
    }

}

export default withStyles(Styles)(About)