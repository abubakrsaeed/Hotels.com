import React from 'react';
import {Header} from '../components/Header'
import {HeroSection} from '../components/HeroSection'
import {WhySection} from '../components/WhySection'
import {PropertySection} from '../components/PropertySection'
import {SafetySection} from '../components/SafetySection'
import {PlacesSection} from '../components/PlacesSection'
import {Footer} from '../components/Footer'



function HomePage () {
    return(
        <div>
        <Header/>
        <HeroSection/>
        <WhySection/>
        <PropertySection/>
        <SafetySection/>
        <PlacesSection/>
        <Footer/>
        </div>
    )

}

export { HomePage };