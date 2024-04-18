import React, { Component, Fragment } from 'react'
import Header from './dataForDev/layouts/header/header';
import Footer from './dataForDev/layouts/footer/footer';
import About from './dataForDev/layouts/body/aboutSecond';
import Aboutas from './dataForDev/layouts/body/aboutFirst';
import FellowsDetail from './dataForDev/layouts/body/fellows';




class Fellows extends Component {
    render() {
        return (
            <Fragment>
                <Header name={true} />
                <FellowsDetail/>
                <Footer />
            </Fragment>
        )
    }

}

export default Fellows