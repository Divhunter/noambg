// Hooks and dependencies
import { Link } from 'react-scroll'
import { useState } from 'react'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// images
import logo from '../../assets/icons/logo.png'
import leon4 from '../../assets/pictures/leon4-m.jpg'

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
				<img className='header__navbar__logo' src={logo} alt='logo-leon'/>
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
					" Il y a des artistes surgis de nulle part qui ont la capacité de captiver l'auditeur dès la première écoute... "
					<br/>
					<span className='signature'>
						Olivier Cachin
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
					<Link to='services'>
						<div 
							className='header__navbar__menu__link header__navbar__menu__link-two'
						>
							Prestations
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
					src={leon4} 
					alt='leon-pic'
				/>
			</nav>
		</header>
	) 
}
 
export default Header