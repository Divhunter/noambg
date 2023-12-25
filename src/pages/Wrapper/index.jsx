// Hooks and dependencies
import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

// Components
import Background from '../../components/Background'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import About from '../../components/About'
import Services from '../../components/Services'
import Tracks from '../../components/Tracks'
import Events from '../../components/Events'
import Partners from '../../components/Partners'
import Contact from '../../components/Contact'
import Footer from '../../components/Footer'

// styles
import './m-wrapper.css'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

const Wrapper = () => {

    window.onload = () => {
        window.scrollTo(0,0)
    }

	const slideInTop = (elem, delay, duration) => {
        gsap.fromTo(
            elem,
            {
                opacity: 0,
                y: -200,
            },
            {
                opacity: 1,
                y: 0,
                delay: delay || .5,
                duration: duration || 1,
                scrollTrigger: {
                    trigger: elem,
                    start: "top center",
                    end: "bottom center"
                }
            }
        )
    }

    useEffect(() => {
        slideInTop('#about')
    }, [])

    useEffect(() => {
        slideInTop('#services')
    }, [])

    useEffect(() => {
        slideInTop('#tracks')
    }, [])

	useEffect(() => {
        slideInTop('#events')
    }, [])

	useEffect(() => {
        slideInTop('#partners')
    }, [])

	useEffect(() => {
        slideInTop('#contact')
    }, [])

	return (
		<div className='wrapper'>
			<Background />
			<Header />
            <Banner />
			<About />
			<Services />
			<Tracks />
			<Events />
			<Partners />
			<Contact />
			<Footer />
		</div>
	) 
}
 
export default Wrapper