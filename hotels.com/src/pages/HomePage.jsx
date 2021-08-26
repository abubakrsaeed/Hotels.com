import React from 'react';
import {Header} from '../components/Header'
import {HeroSection} from '../components/HeroSection'
import {WhySection} from '../components/WhySection'
import {PropertySection} from '../components/PropertySection'


function HomePage () {
    return(
        <div>
        <Header/>
        <HeroSection/>
        <WhySection/>
        <PropertySection/>
        </div>
    )

}

export { HomePage };