import React, { Fragment, Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@material-ui/core/Typography'
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FAQ } from '../../data'
import { Element } from "react-scroll/modules";
import TimelineItem from '../utils/timeline'
import { timelineData } from '../../data'

const Styles = (theme) => ({
    background: {
        background: '#F4F5F8',
        position: 'relative',

    },
    container: {
        width: '67%',
        margin: '0 auto',
        textAlign: 'left',
        justifyContent: 'center',

    },
    sectionTitle: {
        fontSize: '26px',
        fontWeight: '800',
        color: '#3399CC',
        textAlign: 'center',
        margin: '0',
        padding: '50px 0',
    },
    title: {
        color: '#2F2E41',
        fontWeight: '900',
        fontSize: '23px'

    },
    body: {
        color: '#2F2E41',
        fontSize: '16px',
        width: '50%',
        margin: '40px auto',
        padding: '2% 0',
        textAlign: 'center'

    },
    gridItem: {
        margin: 'auto',

    },
    timeCard: {
        margin: '0 auto',
        boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
        borderRadius: '5px',
        background: '#fff'
    },
    timeCardDetail: {
        fontSize: '16px',
        maxWidth: '300px',
        paddingBottom: '20px',
        lineHeight: '1px',
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#2F2E41'
    },
    tag: {
        color: '#fff',
        fontSize: '12px',
        fontWeight: 'bold',
        top: '5px',
        left: '5px',
        letterSpacing: '1px',
        padding: '5px',
        textTransform: 'uppercase',
        display: 'inline-block',
        margin: '20px 0 10px 0'
    },
    time: {
        color: '#777',
        fontSize: '14px',
        fontWeight: 'bold',
        padding: '10px'
    },
    innerTimeDiv: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    [theme.breakpoints.down('md')]: {
        body: {
            color: '#2F2E41',
            fontSize: '16px',
            width: '100%',
            margin: '34px auto'
        },
        timeCardDetail: {
            fontSize: '16px',
            maxWidth: '300px',
            paddingBottom: '16px',
            lineHeight: '16px',
            textAlign: 'center',
            fontWeight: 'bold',
            color: '#2F2E41'
        },
        container: {
            width: '90%',
            margin: '0 auto',
            textAlign: 'left',
            justifyContent: 'center',

        },

    }

});


class Timeline extends Component {
    render() {
        const { classes } = this.props
        return (
            <Fragment>
                <Element name="Timeline" className="element">
                    <div className={classes.background}>
                        <h4 className={classes.sectionTitle} variant="h4" gutterBottom>Application Timeline</h4>
                        <Grid container className={classes.container} direction='row'>
                            {timelineData.map((data, id) => (
                                <>
                                    {id === 0
                                        ? <></>
                                        :
                                        <Grid item xs={1} className={classes.gridItem}>
                                            <img style={{ width: '100%', height: '3px' }} src={process.env.PUBLIC_URL + '/information/rect.png'} alt="" />
                                        </Grid>
                                    }

                                    <Grid item xs={12} sm={3} className={classes.timeCard}>
                                        <div style={{ margin: '0 auto', width: '100%', }}>
                                            <div class={classes.innerTimeDiv}>
                                                <span className={classes.tag} style={{ backgroundColor: data.category.color }}>
                                                    {data.category.tag}
                                                </span>
                                                <time className={classes.time}>{data.date}</time>
                                            </div>
                                            <p className={classes.timeCardDetail} >{data.text}</p>
                                        </div>
                                    </Grid>

                                </>
                            ))}
                            <Grid item xs={1} >
                            </Grid>
                            <Grid item xs={12} className={classes.gridItem} >
                                <p className={classes.body} variant="body1" gutterBottom>For questions and queries, please contact: <span style={{ textDecoration: 'underline', color: '#6B6DEE' }}>info@oknp.org</span>
                                </p>
                            </Grid>
                        </Grid>
                    </div>
                </Element>

            </Fragment >
        )
    }
}

export default withStyles(Styles)(Timeline)