import React, { Fragment, Component } from 'react'
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { aboutFellowship, applicationSummary, benifits, keyResponsibilities, projectMunicipality, selectionCriteria } from '../../data'
import { Element } from "react-scroll/modules";


const Styles = (theme) => ({
    container: {
        width: '86%',
        margin: 'auto',
        margin: '5% auto',
    },
    image: {
        width: '60px',
        // maxWidth: ' calc(100% - 100px)',
        height: 'auto',
    },
    [theme.breakpoints.down('sm')]: {
        container: {
            display: 'flex',
            flexDirection: 'column-reverse',
            justifyContent: 'center',
            alignContent: 'center',
            textAlign: 'center'

        },
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
        alignItems: 'center'
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
    municipalityCard: {
        margin: 'auto',
        border: '2px solid #E6E6E6',
        width: '70%',
        borderRadius: "1%",
        boxShadow: "1px 1px #E6E6E6"
    },
    flex: {
        display: 'flex',
    },

    [theme.breakpoints.down('sm')]: {
        municipalityCard: {
            margin: 'auto',
            border: '0px',
            width: '100%',
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
                        alignItems="flex-start" >
                        <Grid item xs={12} md={5} className={classes.gridItem}>
                            <h2 className={classes.sectionTitle} variant="h4" gutterBottom style={{ marginBottom: '5%' }}> Application Summary</h2>
                            <div style={{ margin: 'auto' }}>
                                <div style={{ margin: 'auto' }}>

                                    <img style={{ width: '25%', marginLeft: '35%' }} src={process.env.PUBLIC_URL + '/information/checks.png'} alt="" />
                                </div>
                                <div style={{ display: 'flex', }}>
                                    <div style={{}}>
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
                                    <div style={{ marginTop: '2%', width: '45%', }}>

                                        <img style={{ width: '100%', marginBottom: '0', }} src={process.env.PUBLIC_URL + '/information/boy.png'} alt="" />
                                    </div>
                                </div>
                                <div>
                                    <img style={{ width: '110%' }} src={process.env.PUBLIC_URL + '/information/rect.png'} alt="" />
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={5} className={classes.gridItem}>
                            <div className={classes.municipalityCard} style={{ margin: 'auto', border: '2px solid #E6E6E6', width: '70%' }}>
                                <h2 className={classes.sectionTitle} variant="h4" gutterBottom style={{ marginTop: '10%' }}> Project Municipalities</h2>
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <div style={{}}>
                                        {projectMunicipality.map((item, key) => {
                                            return (
                                                <div className={classes.flexContainer}>
                                                    <img style={{ width: '60px' }} src={process.env.PUBLIC_URL + '/information/gov.png'} alt="" />
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
                        <Grid item xs={12} md={12}>
                            <h2 className={classes.sectionTitle} variant="h4" gutterBottom style={{ marginBottom: '5%' }}>Benifits</h2>
                            <div style={{ margin: 'auto', width: '60%' }}>
                                <Grid container direction='row' style={{ justifyContent: 'center' }}>
                                    {benifits.items.map((data, key) => {
                                        return (
                                            <Grid item xs={12} md={4} >
                                                <div className={classes.benifitText}>
                                                    {/* <div> */}
                                                    <img style={{ width: '80px' }} src={process.env.PUBLIC_URL + `${data.imageUrl}`} alt="" />
                                                    {/* </div> */}
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