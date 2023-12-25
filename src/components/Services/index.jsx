// images
import microphone from '../../assets/icons/microphone.png'

// styles
import './m-services.css'
import './d-services.css'

const Services = () => {

	return (
		<section id='services' className='services'>
            <header>
                <h1>Prestations</h1>
                <img src={microphone} alt='microphone'/>
                <span>
                    "Marvin Gaye ou encore Barry White peuvent esquisser un sourire de là où ils sont car c’est en partie de leurs œuvres que Léon puise son énergie et son inspiration. Et au final le chanteur nous offre un récital surprenant, de la véritable soul parsemée de blues. 
                    <br/>
                    Alléluia !"
                    <br/><br/>
                    Lyon People
                </span>
            </header>
            <p></p>
        </section>
	) 
}
 
export default Services