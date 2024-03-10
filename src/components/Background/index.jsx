// Hooks and dependencies
import { useState, useEffect } from 'react'

// images
import astro0 from '../../assets/pictures/astro0-m.jpg'
import astro1 from '../../assets/pictures/astro1-m.jpg'
import astro2 from '../../assets/pictures/astro2-m.jpg'
import astro3 from '../../assets/pictures/astro3-m.jpg'

//styles
import './m-background.css'

const Background = () => {

	const [currentState, setCurrentState] = useState(0)

	useEffect(()=> {
		const timer = setTimeout(() => {
			if (currentState === 3) {
				setCurrentState(0)
			}
			else {
				setCurrentState(currentState +1)
			}
		}, 5000)
		return () => clearTimeout(timer)
	}, [currentState] )

	const slideArray = [
		{	
			"img": `${astro0}`
		},
		{	
			"img": `${astro1}`
		},
		{
			"img": `${astro2}`
		},
		{
			"img": `${astro3}`
		}
	]

	return (
		<div className='background'>
			<div className='backgroundBlack'></div>
			<div> 
				{slideArray.map((items, index) => (
					<div key={index}>
						<img className={index === currentState ? 'background__pic background__pic--in' : 'background__pic background__pic--out'}
						src={items.img} 
						alt='slide-astro-pictures' />
					</div>
				))}
			</div>
		</div>
	) 
}
 
export default Background