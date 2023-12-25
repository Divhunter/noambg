// Hooks and dependencies
import { useEffect, useRef } from 'react'
import { faPlayCircle, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

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
					<span className='banner__box__title__letter'>L</span>
					<span className='banner__box__title__letter'>E</span>
					<span className='banner__box__title__letter'>O</span>
					<span className='banner__box__title__letter'>N</span>
				</h1>
				<h2 className='banner__box__subTitle'>
					un pur régal
					<br/>
					<FontAwesomeIcon 
					onClick={redirection}
					className='banner__box__subTitle__play'
					icon={faPlayCircle} 
					/>
				</h2>
			</div>
			<div className='banner__pic-box'></div>
		</article>
	) 
}
 
export default Banner