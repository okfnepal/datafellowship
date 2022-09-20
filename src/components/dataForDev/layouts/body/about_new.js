import React, { Fragment, Component } from 'react'
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { aboutFellowship, aboutDataFellowship } from '../../data'
import { Element } from "react-scroll/modules";


const Styles = (theme) => ({
    container: {
        width: '85%',
        margin: '10% auto',

    },
    image: {
        width: '100%',
        maxWidth: ' calc(100% - 100px)',
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
        fontSize: '30px',
        fontWeight: '800',
        color: '#2963B4',
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
                        <Grid item xs={12} md={6}>
                            <h4 className={classes.sectionTitle} variant="h4" gutterBottom> DataDev
                                Fellowship</h4>
                            <p className={classes.body} variant="body1" gutterBottom>{aboutDataFellowship.p1}</p>
                            <p className={classes.body} variant="body1" gutterBottom>{aboutDataFellowship.p2}</p>
                            <p className={classes.body} variant="body1" gutterBottom>{aboutDataFellowship.p3}</p>
                            <p className={classes.body} variant="body1" gutterBottom>{aboutDataFellowship.p4}</p>
                        </Grid>
                        <Grid item xs={12} md={5} style={{ marginTop: '2%' }}>
                            <img className={classes.image} src={process.env.PUBLIC_URL + '/about.svg'} alt="" />
                        </Grid>
                    </Grid>
                </Element>
            </Fragment>
        );
    }

}

export default withStyles(Styles)(About)