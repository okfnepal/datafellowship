import React, { Fragment, Component } from 'react'
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { aboutFellowship } from '../../data'
import { Element } from "react-scroll/modules";


const Styles = (theme) => ({
    container: {
        width: '85%',
        margin: 'auto',

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
        color: '#2963B4'
    },
    body: {
        fontSize: '15px',
        fontWeight: '300'
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
                        <Grid item xs={12} md={7}>
                            <Typography className={classes.sectionTitle} variant="h4" gutterBottom> Open Data
                                Fellowship</Typography>
                            <Typography className={classes.body} variant="body1" gutterBottom>{aboutFellowship}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={5}>
                            <img className={classes.image} src={process.env.PUBLIC_URL + '/lady.png'} alt="" />
                        </Grid>
                    </Grid>
                </Element>
            </Fragment>
        );
    }

}

export default withStyles(Styles)(About)