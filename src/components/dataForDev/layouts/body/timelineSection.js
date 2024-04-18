import React, { Fragment, Component } from 'react'
import { withStyles } from '@material-ui/core/styles'


import { Element } from "react-scroll/modules";
import { fellows } from '../../data'

const Styles = (theme) => ({
    background: {
        background: '#F4F5F8',
        position: 'relative',

    },
    container: {
        width: '85%',
        display: 'flex',
        justifyContent: 'center',
        margin: '0 auto',
        textAlign: 'left',
        paddingBottom:'80px',
    },
    sectionTitle: {
        fontSize: '26px',
        fontWeight: '800',
        color: '#453A46',
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
    fellowsCard: {
        width:'25%',
        border: '2px solid #3399CC',
        borderRadius:'10px',
        textAlign: 'center',
        background: '#fcfcfc',
        padding:'8px',
        marginLeft:'8px', 
        marginRight:'8px'

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
            display: 'flex',
            width: '90%',
            textAlign: 'left',


        },

    },
    [theme.breakpoints.down('sm')]: {
        body: {
            color: '#2F2E41',
            fontSize: '16px',
            width: '100%',
            margin: '34px auto'
        },
        container: {
            display: 'block',
            width: '90%',
            textAlign: 'center',
        },
        fellowsCard:{
            margin: 'auto',
            width:'50%',
            marginBottom:'16px'
        }

    }

});


class Timeline extends Component {
    render() {
        const { classes } = this.props
        return (
            <Fragment>
                <Element name="Timeline" className="element">
                    <div className={classes.background}>
                        <h4 className={classes.sectionTitle} variant="h4" gutterBottom>Meet Our Fellows</h4>
                        <div
                            className={classes.container}
                        >
                            {fellows.map((item, index) => (
                                <div key={index} className={classes.fellowsCard}>
                                    <div style={{ height: '210px', overflow: 'hidden' }}>
                                        <img src={item.imgSrc} style={{ width: '200px', borderRadius:'10px', filter: 'grayscale(80%)' }} />
                                    </div>
                                    <div>
                                        <h2 style={{ fontSize: '16px' }}>{item.name}</h2>
                                        <p style={{ fontSize: '14px', marginBottom:'4px' }}>{item.location}</p>
                                    </div>
                                    <a style={{fontSize:'14px', fontWeight:'500', textDecoration:'underline', cursor:'pointer', color:'#433141'}} href={`fellows#${item.id}`}>Learn More</a>
                                </div>

                            ))}
                        </div>
                    </div>
                </Element>

            </Fragment >
        )
    }
}

export default withStyles(Styles)(Timeline)