// Hooks and dependencies
import { useEffect, useRef } from 'react'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

// images
import play from '../../assets/icons/play.png'

// styles
import './m-banner.css'
import './d-banner.css'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

const Banner = () => {

	const redirection = () => { 
        window.location.replace('https://www.youtube.com/watch?v=AbCxmHTW-1w')
    }

	const titleRef = useRef()

	const onLoad = () => {
		gsap.timeline().fromTo('.banner__box__title__letter',
			{
				x: -100,
				opacity: 0,
			},
			{
				x: 0,
				opacity: 1,
				stagger: 0.33,
				delay: 0.7
			}
		)
		.to('.banner__box__title__letter', {
			margin: '0 3vw',
			delay: 0.8,
			duration: 0.5
		})
		.to('.banner__sep__stars', {
			opacity: 1,
			duration: 1
		})
		.to('.banner__box__subTitle', {
			opacity: 1,
			duration: 1
		})
	}

	useEffect(() => {
        onLoad()
    }, [])

	return (
		<article className='banner'>
			<div className='banner__sep'>
				<span className='banner__sep__stars'>
					<FontAwesomeIcon icon={faStar} />
					<FontAwesomeIcon icon={faStar} />
					<FontAwesomeIcon icon={faStar} />
					<FontAwesomeIcon icon={faStar} />
					<FontAwesomeIcon icon={faStar} />
				</span>
			</div>
			<div className='banner__box'>
				<h1 className='banner__box__title' ref={titleRef}>
					<span className='banner__box__title__letter'>N</span>
					<span className='banner__box__title__letter'>O</span>
					<span className='banner__box__title__letter'>A</span>
					<span className='banner__box__title__letter'>M</span>
				</h1>
				<h2 className='banner__box__subTitle'>
					et les étoiles
					<br/>
					<img 
					src={play}
					onClick={redirection}
					className='banner__box__subTitle__play'
					alt='bouton play'
					/>
				</h2>
			</div>
			<div className='banner__pic-box'></div>
		</article>
	) 
}
 
export default Banner