import React, { Fragment, Component } from 'react'
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
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
                                        <tr style={{ background: '#F5F5F5', border: '1px solid black', color:'#453A46' }}>
                                            <th style={{ margin: '0', padding: '8px', borderRight: '1px solid black' }} >{item.Province}</th>
                                            <th style={{ margin: '0', padding: '8px', borderRight: '1px solid black' }}>{item.District}</th>
                                            <th style={{ margin: '0', padding: '8px' }}>{item.LocalGovernment}</th>
                                        </tr>
                                    )
                                })}
                            </table>
                        </Grid>
                        <Grid item xs={12} md={4} className={classes.gridItem} >
                            <h4 className={classes.sectionTitleLeft} variant="h4" gutterBottom>Contact</h4>
                            <p className={classes.body} variant="body1" gutterBottom>Interested in collaborating, or obtaining answers to your questions?
                                We're just an email away at
                                : <span style={{ textDecoration: 'underline', color:"#5A1A8B" }}>info@oknp.org</span>
                            </p>
                        </Grid>
                        <Grid item xs={12} md={4} className={classes.gridItem}>
                            <h4 className={classes.sectionTitleLeft} variant="h4" gutterBottom>Fellowship Eligibility</h4>
                            <p className={classes.body} variant="body1" gutterBottom>Fellows must meet the following criteria:
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
                            <p className={classes.body} variant="body1" gutterBottom>Fellows will receive:
                            </p>
                            <ol>
                                {benifits.items.map((item, key) => {
                                    return (
                                        <li>{item.body}</li>
                                    )
                                })}
                            </ol>
                        </Grid>
                    </Grid>
                </Element>
            </Fragment >
        );
    }

}

export default withStyles(Styles)(About)