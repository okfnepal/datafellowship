import React, { Component, Fragment } from 'react'
import Header from './layouts/header/header';
import Footer from './layouts/footer/footer';
import Hero from './layouts/body/new_hero';




class NEW extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <Hero />
                <Footer />
            </Fragment>
        )
    }

}

export default NEW