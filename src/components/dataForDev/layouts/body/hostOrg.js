import React, {Fragment, Component} from 'react'
import {withStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from "@material-ui/core/Grid";
import  {hostLogos} from '../../data'
import {Element} from "react-scroll/modules";
const Styles = (theme) => ({
    container: {
        width: '80%',
        margin: 'auto',
        textAlign: 'left',

    },
    sectionTitle: {
        fontSize: '30px',
        fontWeight: '800',
        color: '#2963B4',
        textAlign: 'center',
        padding: '45px 0'

    },
    logo: {
        textAlign: 'center',
    },
    logoList: {
        listStyle: '',
        display: 'inline',
        margin: '15px',
    },
    img:{
        verticalAlign: 'middle'
    }
});

class hostOrg extends Component {
    logo = Array.prototype.sort.apply(hostLogos);
    render() {
        const {classes} = this.props
        return (
            <Fragment>
                <Element name="Host organization" className="element">

                <Typography variant='h4' className={classes.sectionTitle}>
                    Host Organizations
                </Typography>
                <Grid container spacing={32} className={classes.container}>

                    <ul className={classes.logo}>
                        {this.logo.map((item,index)=>(
                        <li key={index} className={classes.logoList}><img className={classes.img}
                            src={process.env.PUBLIC_URL + item.url}
                            alt=""/>
                        </li>
                        ))}
                    </ul>
                </Grid>
                </Element>
            </Fragment>
        );
    }

}

export default withStyles(Styles)(hostOrg)