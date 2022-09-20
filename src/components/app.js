import React, { Component, Fragment } from 'react'
import Header from './layouts/header/header';
import Footer from './layouts/footer/footer';
import Hero from './layouts/body/hero';
import About from './layouts/body/about';
import Info from './layouts/body/info';
import Faq from './layouts/body/faq'
import Host from './layouts/body/hostOrg'




class APP extends Component {
    render() {
        return (
            <Fragment>
                <Header isLandingPage={false} />
                <Hero />
                <About />
                <Info />
                <Host />
                <Faq />
                <Footer />
            </Fragment>
        )
    }

}

export default APP