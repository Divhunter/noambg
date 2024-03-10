// Hooks and dependencies
import { Link } from 'react-scroll'
import { useState } from 'react'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// images
import logo from '../../assets/icons/logo.png'
import astro4 from '../../assets/pictures/astro4-m.jpg'

// styles
import './m-header.css'

const Header = () => {

	const [isOpen, setIsOpen] = useState(false)

	const isOpenState = () => {
        setIsOpen(!isOpen)
    }

	return (
		<header className='header' id='header'>
			<nav 
				id='header__navbar' 
				className={	
					isOpen ? 
					'header__navbar header__navbar--open' : 
					'header__navbar header__navbar--closed'
				}
			> 
				<img className='header__navbar__logo' src={logo} alt='logo-astro'/>
				<FontAwesomeIcon 
					onClick={isOpenState} 
					className={
						isOpen ?
						'header__navbar__button-bars header__navbar__button--closed':
						'header__navbar__button-bars header__navbar__button--open'
					} 
					icon={faBars} 
				/>
				<FontAwesomeIcon 
					onClick={isOpenState}
					className={
						isOpen ?
						'header__navbar__button-x header__navbar__button--open':
						'header__navbar__button-x header__navbar__button--closed'
					} 
					icon={faXmark} 
				/>
				<p 
					className={
						isOpen?
						'header__navbar__testimonial header__navbar__testimonial--visible':
						'header__navbar__testimonial header__navbar__testimonial--hidden'
					}
				>
					" Mon univers est rempli d'étoiles, de mystères et de jeux incroyables. Prêts pour une aventure interstellaire ? "
					<br/>
					<span className='signature'>
						Noam
					</span>
				</p>
				<menu className={
					isOpen ?
					'header__navbar__menu header__navbar__menu-open':
					'header__navbar__menu header__navbar__menu-closed'
					}
				>
					<div	
						onClick={isOpenState} 
						className='header__navbar__menu__link header__navbar__menu__link-zero'
					>
						Accueil
					</div>
					<Link to='about'>
						<div
							className='header__navbar__menu__link header__navbar__menu__link-one'
						>
							A propos
						</div>
					</Link>
					<Link to='embarquement'>
						<div 
							className='header__navbar__menu__link header__navbar__menu__link-two'
						>
							Embarquement
						</div>
					</Link>
					<Link to='tracks'>
						<div
							className='header__navbar__menu__link header__navbar__menu__link-hree'
						>
							Tracks
						</div>
					</Link>
					<Link to='events'>
						<div
							className='header__navbar__menu__link header__navbar__menu__link-four'
						>
							Events
						</div>
					</Link>
					<Link to='partners'>
						<div
							className='header__navbar__menu__link header__navbar__menu__link-five'
						>
							Partenaires
						</div>
					</Link>
					<Link to='contact'>
						<div
							className='header__navbar__menu__link header__navbar__menu__link-six'
						>
							Contact
						</div>
					</Link>
				</menu>
				<img 
					className=
					{
						isOpen ?
						'header__navbar__pic header__navbar__pic-visible':
						'header__navbar__pic header__navbar__pic-hidden'
					}
					src={astro4} 
					alt='astro-pic'
				/>
			</nav>
		</header>
	) 
}
 
export default Header