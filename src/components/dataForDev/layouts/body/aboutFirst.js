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
                            <p className={classes.body} variant="body1" gutterBottom>{aboutDataFellowship.p1}</p>
                            <p className={classes.body} variant="body1" gutterBottom>{aboutDataFellowship.p2}</p>
                            <p className={classes.body} variant="body1" gutterBottom>{aboutDataFellowship.p3}</p>
                            <p className={classes.body} variant="body1" gutterBottom>{aboutDataFellowship.p4}</p>
                            <p className={classes.body} variant="body1" gutterBottom>To apply for the fellowship, please complete the <a
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