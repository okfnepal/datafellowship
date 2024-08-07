import React, { Fragment, Component } from 'react'
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { aboutFellowship, aboutDataFellowship } from '../../data'
import { Element } from "react-scroll/modules";


const Styles = (theme) => ({
    container: {
        width: '85%',
        margin: '5% auto',
        boxSizing: 'border-box'

    },
    image: {
        width: '450px',
        // maxWidth: ' calc(100% - 100px)',
        // height: 'auto',
        float: 'right',
        display: 'inline-block'
    },
    [theme.breakpoints.down('sm')]: {
        container: {
            display: 'flex',
            flexDirection: 'column-reverse',
            justifyContent: 'center',
            alignContent: 'center',
            textAlign: 'left'

        },
    },
    sectionTitle: {
        fontSize: '30px',
        fontWeight: '800',
        color: '#3399CC',
        marginBottom: '20px'
    },
    body: {
        fontSize: '16px',
        fontWeight: '500',
        wordSpacing: '4px'
    }


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
                        alignItems="center">
                        <Grid item xs={12} md={12}>
                            <h4 className={classes.sectionTitle} variant="h4" gutterBottom>
                                About LG Data Fellowship</h4>
                            {/* <img className={classes.image} src={process.env.PUBLIC_URL + '/about.svg'} alt="" /> */}
                            <p className={classes.body} variant="body1" gutterBottom>
                                "Local Government (LG) Data Fellowship" is an initiative of <a href='https://oknp.org/'>Open Knowledge Nepal</a>. The fellowship aims to assist municipal bodies in digitizing their data for improved decision-making. It offers the opportunity to work closely with various personnel in municipalities and other stakeholders. During the fellowship, participants will undergo training to enhance their data skills and will be placed at assigned municipalities to administer and operationalize the <a href='https://idms.oknp.org/'>Integrated Data Management System (IDMS)</a>.
                            </p>
                            <p className={classes.body} variant="body1" gutterBottom>
                                The Local Government Data Fellowship (LG Data Fellowship) is supported by the <a href='https://www.d4dnepal.org/'>Data for Development Programme</a> phase II, as part of the Integrated Data Management System for Local Government project. IDMS centralizes the data generated by the various departments and systems of the municipal office.
                            </p>
                            <p className={classes.body} variant="body1" gutterBottom>
                                LG Data Fellows will bridge the technical gap and transfer skills for using IDMS to the municipalities. They will also have the opportunity to network and participate in skill-enhancement events hosted by Open Knowledge Nepal and its partners. All interested and qualified candidates, especially youths, women, and members of indigenous communities, are encouraged to apply for the fellowship.
                            </p>
                            <p className={classes.body} variant="body1" gutterBottom>To apply, please complete the <a
                                href='https://docs.google.com/forms/d/e/1FAIpQLSfWGEh5M9HtvhmZF-MFmtjtcOqQRy_h6dMjJ-aR30TkFuvdIw/viewform'
                                style={{ color: 'black' }}
                                target='_blank'>online application form.</a></p>

                        </Grid>
                    </Grid>
                </Element>
            </Fragment>
        );
    }

}

export default withStyles(Styles)(About)