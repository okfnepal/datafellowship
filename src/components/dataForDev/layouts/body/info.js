import React, {Component, Fragment} from 'react'
import Grid from '@material-ui/core/Grid'
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {whyShouldIJoin} from '../../data'
import {Element} from "react-scroll/modules";

const Styles = (theme) => ({
    container: {
        width: '85%',
        margin: 'auto',
        textAlign: 'center',

    },
    sectionTitle: {
        fontSize: '30px',
        fontWeight: '800',
        color: '#2963B4',
        textAlign: 'center',
        padding: '45px 0'

    },
    blockTitle: {
        textAlign: 'center',
        fontSize: '20px',
        display: ' block',
        lineHeight: '25px',
        borderBottom: '1px solid #337BE0',
        paddingBottom: '20px',
        margin: '0 auto 20px',
        position: 'relative',
        color: '#2A65B7',
        fontWeight: '500',
        '&:before,&:after': {
            content: "''",
            width: '10px',
            height: '10px',
            borderRadius: ' 50%',
            background: '#2A65B7',
            margin: ' 0 -5px 0 0',
            position: 'absolute',
            bottom: '-5px',
            right: '50%',
            transition: 'all 0.4s ease 0s',
        },
        '&:before': {
            borderBottom: '1px solid #337BE0',

            left: '50%',
            margin: '0 0 0 -5px',
        },
        '&:hover': {
            '&:before': {
                left: '100% !important'
            },
            '&:after': {
                right: '100% !important'
            }
        },

    },
    description: {
        fontSize: '16px',
        fontWeight: '300'
    },
    icon: {
        color: '#0da4ff'
    }

});

class Why extends Component {
    render() {
        const {classes} = this.props;
        return (
            <Fragment>
                <Element name="Join Why?" className="element">

                <Typography className={classes.sectionTitle} variant="h4" gutterBottom> Why Should I Join?</Typography>
                <Grid  className={classes.container} spacing={24} container>
                    {whyShouldIJoin.map((obj, index) => (
                        <Grid key={index} item xs={12} sm={12} md={4}>
                            <Typography className={classes.icon} variant="h2"
                                        gutterBottom> <i className={obj.icon}> </i></Typography>
                            <Typography className={classes.blockTitle} variant="h6"
                                        gutterBottom> {obj.title}</Typography>
                            <Typography className={classes.description} variant="body1" gutterBottom>
                                {obj.body}
                            </Typography>
                        </Grid>
                    ))}

                </Grid>
                </Element>
            </Fragment>
        )
            ;
    }
}

export default withStyles(Styles)(Why);
