// images
import light from '../../assets/icons/light.png'

// styles
import './m-events.css'
import './d-events.css'

const Events = () => {

	return (
		<section id='events' className='events'>
            <header>
                <h1>Events</h1>
                <img src={light} alt='light'/>
                <span>
                    "Léon est chanteur moderne aux allures anciennes avec une puissance vocale surprenante...  c'est le genre d’artiste qui séduira sans aucun doute les plus exigeants des puristes.
                    <br/>
                    Amateurs de soul, voici un artiste à ne pas rater!"
                    <br/><br/>
                    Enoch El Fassi - afrik.com
                </span>
            </header>
            <p></p>
        </section>
	) 
}

export default Events