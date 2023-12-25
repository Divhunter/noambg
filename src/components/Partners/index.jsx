// images
import contrat from '../../assets/icons/contrat.png'

// styles
import './m-partners.css'
import './d-partners.css'

const Partners = () => {

	return (
		<section id='partners' className='partners'>
            <header>
                <h1>Partenaires</h1>
                <img src={contrat} alt='contrat'/>
                <span>
                    "Une voix qui évoque celle de Cunnie Williams... 
                    <br/>
                    Une qualité de chant et de production peu courante sur la scène soul française. 
                    <br/>
                    Coup de coeur!"
                    <br/><br/>
                    VDPMRER - bibliotheques.paris.fr
                </span>
            </header>
            <p></p>
        </section>
	) 
}

export default Partners