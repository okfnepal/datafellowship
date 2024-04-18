import React, { Fragment, Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import { Element } from "react-scroll/modules";
import { fellows } from '../../data'



const Styles = (theme) => ({
    container: {
        width: '85%',
        margin: '5% auto',
        padding: '24px'

    },
    fellowCard: {
        display: 'flex',
        justifyContent: 'space between',
        border: '2px solid #00d1ff',
        borderRadius: '10px',
        background: "#fcfcfc",
        marginBottom: '24px',
        overflow: 'hidden'
    },
    image: {
        width: '450px',
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
        marginBottom: '20px',
        // marginTop:"50px"
    },
    body: {
        fontSize: '16px',
        fontWeight: '500',
        wordSpacing: '4px'
    },
    [theme.breakpoints.down('sm')]: {
        fellowCard:{
            display:'block'
        }

    },
    [theme.breakpoints.down('xs')]: {
        fellowCard:{
            display:'block',
            textAlign:'center'
        }

    }


});

class FellowsDetail extends Component {
    render() {
        const { classes } = this.props
        return (
            <Fragment>
                <Element name="About" className="element">
                    <div className={classes.container}>
                        <div style={{ padding: '12px' }}>

                            <h1 className={classes.sectionTitle}>Meet LG Data Fellows</h1>
                            {fellows.map((item, index) => (
                                <div id={item.id}
                                    className={classes.fellowCard}>
                                    <img src={item.imgSrc} style={{ width: '200px', filter: 'grayscale(80%)', marginTop: '4px' }} />
                                    <div style={{ marginLeft: '16px', marginRight: '20px', margin: 'auto 20px auto 16px' }}>
                                        <h2 style={{ fontWeight: '700', fontSize: '21px', color: '#453A46', marginBottom: '0px' }}>{item.name}</h2>
                                        <p style={{ marginTop: '0px', fontSize: '15px', marginBottom: '2px' }}>{item.location}</p>
                                        <p style={{ marginTop: '0px', fontSize: '14px', color: 'gray' }}>{item.time}</p>
                                        <p>{item.bio}</p>
                                    </div>
                                </div>
                            ))
                            }
                        </div>
                    </div>
                </Element>
            </Fragment >
        );
    }

}

export default withStyles(Styles)(FellowsDetail)