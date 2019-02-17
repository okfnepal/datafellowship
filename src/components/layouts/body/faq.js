import React, {Fragment, Component} from 'react'
import {withStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import {FAQ} from '../../data'
import {Element} from "react-scroll/modules";

const Styles = (theme) => ({
    background: {
        background: '#3A7BD5',

    },
    container: {
        width: '85%',
        margin: 'auto',
        textAlign: 'left',
        paddingBottom: '30px'

    },
    sectionTitle: {
        fontSize: '30px',
        fontWeight: '800',
        color: '#fff',
        textAlign: 'center',
        padding: '45px 0'
    },
    title: {
        color: '#fff',
        fontWeight: '700',
        paddingBottom: '5px'

    },
    body: {
        color: '#fff',
        fontSize: '16px'

    }

});

class Faq extends Component {
    render() {
        const {classes} = this.props
        return (
            <Fragment>
                <Element name="Faq" className="element">
                    <div className={classes.background}>
                        <Typography variant='h4' className={classes.sectionTitle}>
                            Frequently Asked Question
                        </Typography>
                        <Grid container spacing={32} className={classes.container}>
                            {FAQ.map((obj, index) => (
                                <Grid key={index}  item xs={12} sm={6}>
                                    <Typography variant='headline' className={classes.title}>
                                        {obj.title}
                                    </Typography>
                                    <Typography variant='body1' className={classes.body}>
                                        {obj.body}
                                    </Typography>
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                </Element>

            </Fragment>
        )
    }
}

export default withStyles(Styles)(Faq)