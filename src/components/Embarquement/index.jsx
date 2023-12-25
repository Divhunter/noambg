// images
import astroFuz from '../../assets/icons/astro-fuz.png'

// styles
import './m-embarquement.css'
import './d-embarquement.css'

const Embarquement = () => {

	return (
		<section id='embarquement' className='embarquement'>
            <header>
                <h1>Embarquement</h1>
                <img src={astroFuz} alt='astro-fuz'/>
                <span>
                    Maman : "Petit terrien, tu-as encore la tête dans les étoiles ? Penses à ranger ta chambre, tu-veux bien ?"
                </span>
            </header>
            <p></p>
        </section>
	) 
}
 
export default Embarquement