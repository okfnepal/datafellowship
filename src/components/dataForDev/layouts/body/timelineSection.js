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

    },
    container: {
        width: '85%',
        margin: '0 auto',
        textAlign: 'left',
        paddingBottom: '30px',


    },
    sectionTitle: {
        fontSize: '26px',
        fontWeight: '600',
        color: '#3399CC',
        textAlign: 'center',
        padding: '0px 0',
    },
    title: {
        color: '#2F2E41',
        fontWeight: '900',
        fontSize: '23px'

    },
    body: {
        color: '#2F2E41',
        fontSize: '16px',

    },
    gridItem: {
        // textAlign: 'center'
    }

});


class Timeline extends Component {
    render() {
        const { classes } = this.props
        return (
            <Fragment>
                <Element name="Faq" className="element">
                    <div className={classes.background}>
                        <Grid container spacing={32} className={classes.container}>
                            <Grid item xs={12} md={6} className={classes.gridItem} style={{ width: '60%' }}>
                                <h4 className={classes.sectionTitle} variant="h4" gutterBottom> Application Timeline</h4>
                                <div className="timeline-container">
                                    {timelineData.map((data, idx) => (
                                        <TimelineItem data={data} key={idx} />
                                    ))}
                                </div>
                            </Grid>
                            <Grid item xs={12} md={4} className={classes.gridItem} style={{ width: '40%' }}>
                                <img className={classes.image} style={{ width: '200px', marginTop: '8%' }} src={process.env.PUBLIC_URL + '/information/letter.png'} alt="" />
                                <p className={classes.body} variant="body1" gutterBottom>For questions and queries, please contact: <span style={{ textDecoration: 'underline', color: '#6B6DEE' }}>info@oknp.org</span>
                                </p>
                            </Grid>
                        </Grid>
                    </div>
                </Element>

            </Fragment>
        )
    }
}

export default withStyles(Styles)(Timeline)