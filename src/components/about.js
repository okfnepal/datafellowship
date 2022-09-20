import React, { Component, Fragment } from 'react'
import Header from './dataForDev/layouts/header/header';
import Footer from './dataForDev/layouts/footer/footer';
import Hero from './dataForDev/layouts/body/hero';
import About from './dataForDev/layouts/body/about';
import Aboutas from './dataForDev/layouts/body/about_new';




class Fellowship extends Component {
    render() {
        return (
            <Fragment>
                <Header name={true} />
                <Aboutas />
                <About />
                <Footer />
            </Fragment>
        )
    }

}

export default Fellowship