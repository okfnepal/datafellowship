import React, { Component, Fragment } from 'react'
import Header from './dataForDev/layouts/header/header';
import Footer from './dataForDev/layouts/footer/footer';
import Hero from './dataForDev/layouts/body/hero';
import About from './dataForDev/layouts/body/aboutSecond';
import Information from './dataForDev/layouts/body/information';
import Timeline from './dataForDev/layouts/body/timelineSection'
import themes from '../theme';
import { ThemeProvider } from "@material-ui/core/styles";




class NEW extends Component {
    render() {
        return (
            <Fragment>
                <Header isLandingPage={false} />
                <Hero />
                <Information />
                <Timeline />
                <Footer />
            </Fragment>
        )
    }

}

export default NEW