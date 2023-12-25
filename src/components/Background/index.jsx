// Hooks and dependencies
import { useState, useEffect } from 'react'

// images
import leon0 from '../../assets/pictures/leon0-m.jpg'
import leon1 from '../../assets/pictures/leon1-m.jpg'
import leon2 from '../../assets/pictures/leon2-m.jpg'
import leon3 from '../../assets/pictures/leon3-m.jpg'

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
			"img": `${leon0}`
		},
		{	
			"img": `${leon1}`
		},
		{
			"img": `${leon2}`
		},
		{
			"img": `${leon3}`
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
						alt='slide-leon-pictures' />
					</div>
				))}
			</div>
		</div>
	) 
}
 
export default Background