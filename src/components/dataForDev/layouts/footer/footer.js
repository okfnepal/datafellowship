import React, { Component, Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { footerLink } from '../../data'
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography'


const styles = (theme) => ({
    basic: {
        // backgroundColor: '#195ec7',
        // backgroundImage: 'linear-gradient(-45deg, #00d2ff 0%, #0bc1f6 5.91%, #29a5da 58.62%, #3a7bd5 80% )',
        // backgroundColor: '#4E88D9',
        backgroundColor: '#1b3e77',
        borderRadius: '0px',
        textAlign: 'left',
        padding: '50px',
        color: '#fff',
    },
    link: {
        color: '#fff',
        textDecoration: 'none',
        paddingRight: '10px',
    },
    icon: {
        color: '#fff'
    },
    license: {
        padding: '5px 0',
        // margin: 'auto',
        width: '50%',
        textAlign: 'left',
        color: '#fff',
    },
    [theme.breakpoints.down('sm')]: {
        basic: {
            padding: '30px',

        },
        license: {
            width: '100%',
        },
    },
});


class Footer extends Component {
    state = {
        open: false,
        scroll: window.scrollY
    };

    render() {

        const { classes } = this.props;
        return (
            <Fragment>
                <Grid container direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <Grid item xs={12}>
                        <Paper className={classes.basic} elevation={1}>
                            <div style={{ marginLeft: 'auto', width: '95%' }}>
                                {footerLink.map((item, index) => (
                                    <a key={index} className={classes.link} href={item.url}>
                                        <i className={item.icon + ' ' + classes.icon}> </i>
                                        {item.title}</a>
                                ))}
                                <p className={classes.license} variant="body1">
                                    Content on this site, made by Open Knowledge Nepal, is licensed under a <a
                                        href="https://creativecommons.org/licenses/by/4.0/" style={{ color: '#fff' }}>Creative
                                        Commons Attribution 4.0 International License.</a>
                                </p>
                                <Typography variant="body1">
                                    <img alt="Creative Commons License"
                                        src="https://i.creativecommons.org/l/by/4.0/88x31.png" />
                                </Typography>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>

            </Fragment>
        )
    }
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer)