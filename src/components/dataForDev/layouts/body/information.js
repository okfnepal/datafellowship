import React, { Fragment, Component } from 'react'
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { aboutFellowship, applicationSummary, benifits, keyResponsibilities, projectMunicipality, selectionCriteria } from '../../data'
import { Element } from "react-scroll/modules";


const Styles = (theme) => ({
    container: {
        width: '85%',
        margin: 'auto',
        margin: '5% auto',
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
        color: '#3399CC',
        // color: '#1B3E77',
        textAlign: 'center',
        margin: '0',
        // textShadow: '1px'
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
        textAlign: 'left'

    },
    flexContainerMunicipality: {
        display: 'flex',
        // alignItems: 'center',
        // border: '2px solid red',
        margin: '8% auto',
        alignItems: 'center',
        paddingBottom: '10px',
        textAlign: 'left'
    },
    flextext: {
        marginLeft: '10px',
        fontWeight: '600',
        color: '#2F2E41',
        fontSize: '20px',
        // border: '2px solid red',
        marginBottom: '6px',
        marginRight: '4px'

    },
    flextextbody: {
        marginLeft: '10px',
        fontWeight: '400',
        // color: 'gray',
        fontSize: '16px',
        // border: '2px solid red',
        marginBottom: '6px',
        marginTop: '2px',
        lineHeight: '24px',

    },
    benifitText: {
        textAlign: 'center',
        // border: '2px solid red',
        marginBottom: '30px',
        marginRight: "20px"

    },
    benifitSection: {
        margin: 'auto',
        width: '90%'
    },

    flex: {
        display: 'flex',
    },
    boyImg: {
        width: '90%',
        margin: '0 auto',
        marginTop: '20%'
    },
    checkImg: {
        width: '25%', marginLeft: '35%'
    },
    summaryContainer: {
        width: '95%',
        margin: 'auto'
    },

    [theme.breakpoints.down('sm')]: {
        container: {
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
            width: '25%', marginLeft: '0'
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
                        <Grid item xs={12} md={4} className={classes.gridItem} >
                            <h2 className={classes.sectionTitle} variant="h4" gutterBottom style={{ marginBottom: '5%' }}> Application Summary</h2>
                            <div style={{ margin: 'auto' }}>
                                <div style={{ margin: 'auto' }}>
                                    <img className={classes.checkImg} src={process.env.PUBLIC_URL + '/information/checks.png'} alt="" />
                                </div>
                                <div className={classes.summaryContainer} style={{}}>
                                    {applicationSummary.items.map((item, data) => {
                                        return (
                                            <div className={classes.flexContainer}>
                                                <img style={{ width: '80px' }} src={process.env.PUBLIC_URL + `${item.imageUrl}`} alt="" />
                                                <div>
                                                    <h2 className={classes.flextext}>{item.title}</h2>
                                                    <p className={classes.flextextbody}>{item.summary}</p>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </Grid>
                        <Grid item md={4} alignContent='center'>
                            <div className={classes.boyImg}>
                                <img style={{ width: '80%', margin: '0 ', }} src={process.env.PUBLIC_URL + '/information/boy.png'} alt="" />
                            </div>
                        </Grid>
                        <Grid item xs={12} md={4} style={{ width: '100%' }} className={classes.gridItem}>
                            <h2 className={classes.sectionTitle} variant="h4" gutterBottom style={{ marginBottom: '5%' }}> Project Municipalities</h2>
                            <div className={classes.municipalityCard}>
                                <div style={{ margin: 'auto' }}>
                                    <img className={classes.checkImg} src={process.env.PUBLIC_URL + '/information/checks.png'} alt="" />
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <div style={{}}>
                                        {projectMunicipality.map((item, key) => {
                                            return (
                                                <div className={classes.flexContainerMunicipality}>
                                                    <img style={{ width: '90px' }} src={process.env.PUBLIC_URL + '/information/gov.png'} alt="" />
                                                    <div>
                                                        <h2 className={classes.flextext}>{item.LocalGovernment}</h2>
                                                        <div className={classes.flex}>
                                                            <p className={classes.flextextbody}>{item.District}</p>
                                                            <p className={classes.flextextbody}>{item.Province}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>

                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} className={classes.gridItem}>
                            <img style={{ width: '100%', height: '3px' }} src={process.env.PUBLIC_URL + '/information/rect.png'} alt="" />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <h2 className={classes.sectionTitle} variant="h4" gutterBottom >Benifits</h2>
                            <div className={classes.benifitSection}>
                                <Grid container direction='row' style={{ justifyContent: 'center' }}>
                                    {benifits.items.map((data, key) => {
                                        return (
                                            <Grid item xs={6} md={4} >
                                                <div className={classes.benifitText}>
                                                    <div style={{ height: '200px', display: 'flex', alignItems: 'end', justifyContent: 'center' }}>
                                                        <div>
                                                            <img style={{ width: '200px' }} src={process.env.PUBLIC_URL + `${data.imageUrl}`} alt="" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h2 className={classes.flextext}>{data.title}</h2>
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