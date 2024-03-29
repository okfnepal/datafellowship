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
        marginBottom: '0',
    },
    image: {
        width: '100%',
        maxWidth: ' calc(100% - 100px)',
        height: 'auto',
    },
    [theme.breakpoints.down('sm')]: {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignContent: 'left',
            textAlign: 'left'

        },
    },
    [theme.breakpoints.down('sm')]: {
        gridItem: {
            width: '100%'
        }
    },
    sectionTitle: {
        fontSize: '30px',
        fontWeight: '800',
        color: '#3399CC',
        // color: '#2F2E41',
        textAlign: 'center',
        margin: '0',
    },
    sectionTitleLeft: {
        fontSize: '30px',
        fontWeight: '800',
        color: '#3399CC',
        textAlign: 'left',
        margin: '0',
    },
    body: {
        fontSize: '16px',
        fontWeight: '400',
    },
    gridItem: {
        marginBottom: '5%'
    },


});

class About extends Component {
    render() {
        const { classes } = this.props
        return (
            <Fragment>
                <Element name="About" className="element">
                    <Grid className={classes.container} spacing={24} container
                        direction="row"
                        justify="space-between"
                        alignItems="flex-start" >
                        <Grid item xs={12} md={4} className={classes.gridItem}>
                            <h4 className={classes.sectionTitleLeft} variant="h4" gutterBottom > Application Summary</h4>
                            <p className={classes.body} variant="body1" gutterBottom>The online fellowship application consists of the following components:
                            </p>
                            <ol>
                                {applicationSummary.items.map((item, key) => {
                                    return (
                                        <li>{item.title}</li>
                                    )
                                })}
                            </ol>
                            { }
                        </Grid>
                        <Grid item xs={12} md={4} className={classes.gridItem}>
                            {/* <img className={classes.image} src={process.env.PUBLIC_URL + '/lady.png'} alt="" /> */}
                            <h4 className={classes.sectionTitleLeft} variant="h4" gutterBottom> Project Municipalities</h4>
                            {/* <p className={classes.body} variant="body1" gutterBottom>{aboutFellowship}
                            </p> */}
                            <table style={{ textAlign: 'left', width: '99%', padding: '0', borderCollapse: 'collapse', marginTop: '20px' }} className={classes.body}>
                                {projectMunicipality.map((item, key) => {
                                    return (
                                        <tr style={{ background: '#F5F5F5', border: '1px solid black' }}>
                                            <th style={{ margin: '0', padding: '8px', borderRight: '1px solid black' }} >{item.Province}</th>
                                            <th style={{ margin: '0', padding: '8px', borderRight: '1px solid black' }}>{item.District}</th>
                                            <th style={{ margin: '0', padding: '8px' }}>{item.LocalGovernment}</th>
                                        </tr>
                                    )
                                })}
                            </table>
                        </Grid>
                        <Grid item xs={12} md={4} className={classes.gridItem}>
                            <h4 className={classes.sectionTitleLeft} variant="h4" gutterBottom >Project Duration</h4>
                            <p className={classes.body} variant="body1" gutterBottom>The fellowship program will run for 5 months.
                            </p>
                        </Grid>
                        <Grid item xs={12} md={4} className={classes.gridItem}>
                            {/* <img className={classes.image} src={process.env.PUBLIC_URL + '/lady.png'} alt="" /> */}
                            <h4 className={classes.sectionTitleLeft} variant="h4" gutterBottom>Fellowship Eligibility</h4>
                            <p className={classes.body} variant="body1" gutterBottom>Fellows must:
                            </p>
                            <ol>
                                {selectionCriteria.items.map((item, key) => {
                                    return (
                                        <li>{item.item}</li>
                                    )
                                })}
                            </ol>
                        </Grid>
                        <Grid item xs={12} md={4} className={classes.gridItem} >
                            {/* <img className={classes.image} src={process.env.PUBLIC_URL + '/lady.png'} alt="" /> */}
                            <h4 className={classes.sectionTitleLeft} variant="h4" gutterBottom>Fellowship Responsibilities</h4>
                            <p className={classes.body} variant="body1" gutterBottom>Fellows will be responsible for:
                            </p>
                            <ol>
                                {keyResponsibilities.items.map((item, key) => {
                                    return (
                                        <li>{item.item}</li>
                                    )
                                })}
                            </ol>
                        </Grid>
                        <Grid item xs={12} md={4} className={classes.gridItem} >
                            {/* <img className={classes.image} src={process.env.PUBLIC_URL + '/lady.png'} alt="" /> */}
                            <h4 className={classes.sectionTitleLeft} variant="h4" gutterBottom>Fellowship Benefits</h4>
                            <p className={classes.body} variant="body1" gutterBottom>List of fellowship benefits:
                            </p>
                            <ol>
                                {benifits.items.map((item, key) => {
                                    return (
                                        <li>{item.body}</li>
                                    )
                                })}
                            </ol>
                        </Grid>
                        <Grid item xs={12} md={4} className={classes.gridItem} >
                            {/* <img className={classes.image} src={process.env.PUBLIC_URL + '/lady.png'} alt="" /> */}
                            <h4 className={classes.sectionTitleLeft} variant="h4" gutterBottom>Application Timeline</h4>
                            <p className={classes.body} variant="body1" gutterBottom>September 25, 2022 – Application opens
                            </p>
                            <p className={classes.body} variant="body1" gutterBottom>October 22, 2022 (12 PM NPT) – Application deadline
                            </p>
                            <p className={classes.body} variant="body1" gutterBottom>November 4, 2022 – Selected fellows will be informed
                            </p>
                        </Grid>
                        <Grid item xs={12} md={8} className={classes.gridItem} >
                            {/* <img className={classes.image} src={process.env.PUBLIC_URL + '/lady.png'} alt="" /> */}
                            <h4 className={classes.sectionTitleLeft} variant="h4" gutterBottom>Contact</h4>
                            <p className={classes.body} variant="body1" gutterBottom>For questions and queries, please contact: <span style={{ textDecoration: 'underline', color: '#6B6DEE' }}>info@oknp.org</span>
                            </p>
                        </Grid>
                        <Grid></Grid>
                    </Grid>
                </Element>
            </Fragment >
        );
    }

}

export default withStyles(Styles)(About)